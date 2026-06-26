<?php

namespace Thanhnt\Amuaglobal\Models\Types;

interface ConfigInterface
{
	const TABLE_NAME = 'amua_configs';
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
