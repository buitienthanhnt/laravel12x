<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\{SoftDeletes, Model, Relations\HasMany};
use Illuminate\Support\Str;
use Thanhnt\Akhoglobal\Models\ShareAction\{ActiveAttr, AliasAttr, ImagePath};
use Thanhnt\Akhoglobal\Models\Types\{AttributeInterface, GalleryInterface, PriceInterface, ProductInterface, StockInterface};

final class Product extends Model implements ProductInterface
{
	use AliasAttr;
	use ActiveAttr;
	use ImagePath;
	use SoftDeletes;

	/**
	 * define for table of the Model
	 */
	protected $table = self::TABLE_NAME;

	/**
	 * define for list attribute mass fill
	 */
	protected $fillable = self::FILLED_FILEDS;
	protected $hidden = self::HIDDEN_FIELDS;

	protected $casts = [
		self::_ACTIVE => 'boolean',
	];

	/**
	 * define mutator for sku attribute
	 * if not have value when create or update, auto generate sku with name and random string
	 * @return \Illuminate\Database\Eloquent\Casts\Attribute
	 */
	protected function sku(): Attribute
	{
		return Attribute::make(
			get: fn($value) => $value,
			set: function ($value) {
				if (!$value) {
					$value = Str::slug($this->{self::_NAME} . '-' . Str::random(7));
				}
				return $value;
			}
		);
	}

	/**
	 * define relation to attributes
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
	 */
	public function attributes(): HasMany
	{
		return $this->hasMany(Attribute::class, AttributeInterface::_SOURCE_ID, self::_ID)->where(AttributeInterface::_TYPE, AttributeInterface::TYPE_PRODUCT);
	}

	/**
	 * define relation to galleries image
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
	 */
	public function galleries(): HasMany
	{
		return $this->hasMany(Gallery::class, GalleryInterface::_SOURCE_ID, self::_ID)->where(GalleryInterface::_TYPE, GalleryInterface::TYPE_PRODUCT);
	}

	/**
	 * define relation to categories
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsToMany<TRelatedModel, $this>
	 */
	public function category()
	{
		/**
		 * define relation many to many with table product_category
		 * @var \Illuminate\Database\Eloquent\Relations\BelongsToMany<TRelatedModel, $this>
		 * @see \Illuminate\Database\Eloquent\Relations\BelongsToMany
		 */
		return $this->belongsToMany(Category::class, self::R_PRODUCT_CATEGORY_TABLE, self::R_PRODUCT_CATEGORY_PRODUCT_ID, self::R_PRODUCT_CATEGORY_CATEGORY_ID);
	}

	/**
	 * define relation to price
	 * @return \Illuminate\Database\Eloquent\Relations\HasOne<TRelatedModel, $this>
	 */
	public function price()
	{
		return $this->hasOne(Price::class, PriceInterface::_SOURCE_ID, self::_ID);
	}

	/**
	 * define relation to stock
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
	 */
	public function stocks()
	{
		return $this->hasMany(Stock::class, StockInterface::_SOURCE_ID, self::_ID);
	}
}
