<?php

namespace Thanhnt\Amuaglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Amuaglobal\Models\Types\ConfigInterface;

final class Config extends Model implements ConfigInterface
{
	protected $table = self::TABLE_NAME;

	protected $fillable = self::FILLED_FIELDS;
	public $timestamps = false;
}
