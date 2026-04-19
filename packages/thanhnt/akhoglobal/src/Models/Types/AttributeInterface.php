<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface AttributeInterface
{
	// table name
	const TABLE_NAME = 'akho_attributes';

	/**
	 * main attribute
	 */
	const _SOURCE_ID = 'source_id';
	const _TYPE = 'type';
	const _KEY = 'key';
	const _VALUE = 'value';

	const TYPE_PRODUCT = 'product';
	const TYPE_CATEGORY = 'category';
	const TYPE_HOME_PAGE = 'home';
	const TYPE_POST = 'post';
	const TYPE_ROOM = 'room';

	const USE_TIMESTAMP = false;

	/**
	 * fillable fields for model(mass assignment)
	 */
	const FILLED_FIELDS = [self::_SOURCE_ID, self::_TYPE, self::_KEY, self::_VALUE];

	/**
	 * define list hidden fields
	 */
	const HIDDEN_FIELDS = [];
}
