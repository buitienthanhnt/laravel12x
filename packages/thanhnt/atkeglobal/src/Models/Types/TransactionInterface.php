<?php

namespace Thanhnt\Atkeglobal\Models\Types;

interface TransactionInterface
{
	const TABLE_NAME = 'atke_transactions';

	const _LABEL = 'label';
	const _TIME = 'time';
	const _USER_ID = 'user_id';

	const FILLED_FILEDS = [
		self::_LABEL,
		self::_TIME,
		self::_USER_ID,
	];
}
