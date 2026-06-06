<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface ConfigInterface
{
	const _TABLE_NAME = 'akho_configs';
	const _PATH = 'path';
	const _VALUE = 'value';
	const _TYPE = 'type';
	const _DESCRIPTION = 'description';

	const FILLED_FIELDS = [
		self::_PATH,
		self::_VALUE,
		self::_TYPE,
		self::_DESCRIPTION,
	];

	const FORM_FIELDS = [
		self::_PATH,
		self::_VALUE,
		self::_TYPE,
		self::_DESCRIPTION,
	];
}
