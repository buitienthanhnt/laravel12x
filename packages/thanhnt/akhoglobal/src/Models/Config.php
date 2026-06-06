<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Types\ConfigInterface;

final class Config extends Model implements ConfigInterface
{
	protected $table = self::_TABLE_NAME;

	protected $fillable = self::FILLED_FIELDS;
	public $timestamps = false;
}
