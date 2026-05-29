<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Types\BlockItemInterface;

final class BlockItem extends Model implements BlockItemInterface
{
	protected $table = self::TABLE_NAME;

	protected $fillable = self::FILLED_FIELDS;

	public $timestamps = false;
}
