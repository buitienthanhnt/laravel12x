<?php

namespace Thanhnt\Amuaglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Akhoglobal\Models\ShareAction\{AliasAttr, ImagePath};
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;

class Category extends Model implements Types\CategoryInterface
{
	use AliasAttr;
	use ImagePath;
	use SoftDeletes;

	protected $table = self::TABLE_NAME;
	protected $primaryKey = self::_ID;

	protected $fillable = self::FILLED_FILEDS;
	protected $hidden = self::HIDDEN_FIELDS;

	protected $casts = [
		self::_ACTIVE => 'boolean',
	];

	public static function parentidOptions()
	{
		return Category::all()->map(function ($item) {
			return [
				'value' => $item->{self::_ID},
				'label' => $item->{self::_NAME},
			];
		});
	}

	/**
	 * Lấy danh mục cha của danh mục này
	 * @return \Illuminate\Database\Eloquent\Relations\BelongsTo
	 */
	public function parent()
	{
		/**
		 * sử dụng belongsTo để lấy danh mục cha của danh mục này
		 * tham số đầu tiên là model Category, 
		 * tham số thứ hai là tên trường khóa ngoại trong bảng categories (self::_PARENT), 
		 * tham số thứ ba là tên trường khóa chính trong bảng categories (self::_ID)
		 */
		return $this->belongsTo(Category::class, self::_PARENT_ID, self::_ID);
	}

	/**
	 * Lấy các danh mục con của danh mục này
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function childrens()
	{
		/**
		 * sử dụng hasMany để lấy các danh mục con của danh mục này
		 * tham số đầu tiên là model Category,
		 * tham số thứ hai là tên trường khóa ngoại trong bảng categories (self::_PARENT),
		 * tham số thứ ba là tên trường khóa chính trong bảng categories (self::_ID)
		 */
		return $this->hasMany(Category::class, self::_PARENT_ID, self::_ID);
	}

	public function products()
	{
		return $this->belongsToMany(Product::class, ProductInterface::R_PRODUCT_CATEGORY_TABLE, ProductInterface::R_PRODUCT_CATEGORY_CATEGORY_ID, ProductInterface::R_PRODUCT_CATEGORY_PRODUCT_ID);
	}
}
