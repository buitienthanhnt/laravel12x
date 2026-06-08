<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface BlockItemInterface
{
	const TABLE_NAME = 'akho_block_items';

	const _ID = 'id';
	const _BLOCK_ID = 'block_id';
	const _ITEM_MODEL = 'item_model';
	const _ITEM_TYPE = 'item_type';
	const _DESCRIPTION = 'item_desc';

	const FILLED_FIELDS = [
		self::_BLOCK_ID,
		self::_ITEM_MODEL,
		self::_ITEM_TYPE,
		self::_DESCRIPTION,
	];
}
