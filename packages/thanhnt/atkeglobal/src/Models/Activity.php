<?php

namespace Thanhnt\Atkeglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Atkeglobal\Models\Types\ActivityInterface;

final class Activity extends Model implements ActivityInterface
{
	use SoftDeletes;

	protected $table = self::TABLE_NAME;
	protected $fillable = self::FILLED_FILEDS;
}
