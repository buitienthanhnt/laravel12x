<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface BlockInterface
{

	const TABLE_NAME = 'akho_blocks';

	/**
	 * x: 210, 
	 * y: 320, 
	 * width: 320, 
	 * height: 100, 
	 * name: 'block2', 
	 * blockKey: 'block2', 
	 * items: ['1', '51', '762']
	 */

	const _ID = 'id';
	const _NAME = 'name';
	const _KEY = 'key';
	const _PX = 'x';
	const _PY = 'y';
	const _WIDTH = 'width';
	const _HEIGHT = 'height';
	const _STYLE = 'style';

	const FILLED_FIELDS = [
		self::_NAME,
		self::_KEY,
		self::_PX,
		self::_PY,
		self::_WIDTH,
		self::_HEIGHT,
		self::_STYLE,
	];
}
