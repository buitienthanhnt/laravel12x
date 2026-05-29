<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Types\BlockInterface;
use Thanhnt\Akhoglobal\Models\BlockItem;
use Thanhnt\Akhoglobal\Models\Types\BlockItemInterface;

final class Block extends Model implements BlockInterface
{

	protected $table = self::TABLE_NAME;

	protected $fillable = self::FILLED_FIELDS;

	public $timestamps = false;

	/**
	 * The attributes that should be cast to native types.
	 *
	 * @var array
	 */
	protected $casts = [
		self::_STYLE => 'array',
	];

	/**
	 * Get the items for the block.
	 */
	public function items()
	{
		return $this->hasMany(BlockItem::class, BlockItemInterface::_BLOCK_ID, self::_ID);
	}
}
