<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Block;
use Thanhnt\Akhoglobal\Models\Types\{BlockGroupInterface, BlockInterface};

final class BlockGroup extends Model implements BlockGroupInterface
{

	protected $table = self::TABLE_NAME;
	protected $fillable = self::FILLED_FIELDS;

	/**
	 * Get all blocks in this group
	 * one to many relationships
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 */
	public function blocks()
	{
		return $this->hasMany(Block::class, BlockInterface::_GROUP_ID, self::_ID);
	}

	public static function BlockGroupOptions(): array
	{
		return [
			[
				'name' => 'Tầng 1',
				'id' => 1,
				'key' => 'tang_1',
				'init_width' => 100,
				'init_height' => 100,
			],
			[
				'name' => 'Tầng 2',
				'id' => 1,
				'key' => 'tang_2',
				'init_width' => 100,
				'init_height' => 100,
			],
		];
	}
}
