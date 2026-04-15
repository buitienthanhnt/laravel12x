<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Akhoglobal\Models\ShareAction\{AliasAttr, ImagePath};

use function PHPSTORM_META\map;

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
		self::_PARENT => 'array'
	];

	public static function parentOptions()
	{
		return Category::all()->map(function ($item){
			return [
				'value' => $item->{self::_ID},
				'label' => $item->{self::_NAME},
			];
		});
	}

	public function children()
	{
		return $this->hasMany(Category::class, self::_PARENT, self::_ID);
	}
}
