<?php

namespace Thanhnt\Amuaglobal\Models\Types;

interface PriceInterface
{
	const TABLE_NAME = 'amua_prices';

	const _ID = 'id';
	const _PRICE = 'price';
	const _DISCOUNT_PRICE = 'discount_price';
	const _CURRENCY = 'currency';
	const _SOURCE_ID = 'source_id';

	/**
	 * Sử dụng timestamps để tự động quản lý created_at và updated_at
	 */
	const USE_TIMESTAMPS = true;

	const FILLED_FILEDS = [
		self::_PRICE,
		self::_DISCOUNT_PRICE,
		self::_CURRENCY,
		self::_SOURCE_ID,
	];

	const HIDDEN_FIELDS = ['created_at', 'updated_at', 'deleted_at'];

	const FORM_FIELDS = [
		[
			'key' => self::_PRICE,
			'label' => 'Price',
			'type' => 'number',
			'required' => true,
		],
		[
			'key' => self::_DISCOUNT_PRICE,
			'label' => 'Discount Price',
			'type' => 'number',
			'required' => false,
		],
		[
			'key' => self::_CURRENCY,
			'label' => 'Currency',
			'type' => 'text',
			'required' => true,
		],
	];
}
