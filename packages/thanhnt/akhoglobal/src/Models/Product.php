<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\{SoftDeletes, Model, Relations\HasMany};
use Thanhnt\Akhoglobal\Models\ShareAction\{ActiveAttr, AliasAttr, ImagePath};
use Thanhnt\Akhoglobal\Models\Types\{AttributeInterface, GalleryInterface, ProductInterface};

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

	protected $casts = [
		self::_ACTIVE => 'boolean',
	];

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
}
