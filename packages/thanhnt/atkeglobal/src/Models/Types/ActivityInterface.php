<?php

namespace Thanhnt\Atkeglobal\Models\Types;

interface ActivityInterface
{
	const TABLE_NAME = 'atke_activities';

	const _LABEL = 'label';
	/**
	 * action: 1: buy, 2: sell
	 */
	const _ACTION = 'action';
	/**
	 * type: 1: gold, 2: silver
	 */
	const _TYPE = 'type';
	const _PRICE = 'price';
	const _QTY = 'qty';
	/**
	 * unit: 1: gram, 2: ounce, 3: kg, 4: c, 5: l
	 */
	const _UNIT = 'unit';
	const _TIME =  'time';
	const _USER_ID = 'user_id';
	const _TARGET_ID = 'target_id';
	const _TRAN_ID = 'tran_id';

	const FILLED_FILEDS = [self::_LABEL, self::_ACTION, self::_TYPE, self::_PRICE, self::_QTY, self::_UNIT, self::_TIME, self::_USER_ID, self::_TARGET_ID , self::_TRAN_ID];
	const HIDDEN_FIELDS = [];
}
