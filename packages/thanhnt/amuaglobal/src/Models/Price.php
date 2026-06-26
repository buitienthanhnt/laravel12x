<?php

namespace Thanhnt\Amuaglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Amuaglobal\Models\ShareAction\FormField;

class Price extends Model implements Types\PriceInterface
{
	use SoftDeletes;
	use FormField;
	
	/**
	 * define table name and primary key for model
	 */
	protected $table = self::TABLE_NAME;
	protected $primaryKey = self::_ID;


	protected $fillable = self::FILLED_FILEDS;
	protected $hidden = self::HIDDEN_FIELDS;
}
