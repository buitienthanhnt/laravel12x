<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface BlockGroupInterface
{
	const TABLE_NAME = 'akho_groups';

	const _ID = 'id';
	const _NAME = 'name';
	const _KEY = 'key';
	const _INIT_WIDTH = 'init_width';
	const _INIT_HEIGHT = 'init_height';

	const R_BLOCKS = 'blocks';

	const FILLED_FIELDS = [
		self::_NAME,
		self::_KEY,
		self::_INIT_WIDTH,
		self::_INIT_HEIGHT,
	];

	/**
	 * Get all blocks in this group
	 * one to many relationships
	 */
	public function blocks();
}
