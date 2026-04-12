<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\ShareAction\{AliasAttr, ImagePath};

class Category extends Model implements Types\CategoryInterface
{
	use AliasAttr;
	use ImagePath;

	protected $table = self::TABLE_NAME;

	protected $fillable = self::FILLED_FILEDS;

	protected $hidden = self::HIDDEN_FIELDS;
}
