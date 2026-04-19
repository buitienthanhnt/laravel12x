<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface StockInterface
{
	const TABLE_NAME = 'akho_stocks';

	const _ID = 'id';
	const _IMPORT_QTY = 'import_qty';  // số lượng nhập hàng
	const _CURRENT_QTY = 'current_qty';								// số lượng tồn kho hiện tại
	/**
	 * Giá vốn của sản phẩm.
	 */
	const _COST_PRICE = 'cost_price';
	const _DESCRIPTION = 'description';
	const _IMPORT_DATE = 'import_date';  // ngày nhập hàng
	const _SOURCE_ID = 'source_id';

	const FILLED_FILEDS = [
		self::_CURRENT_QTY,
		self::_COST_PRICE,
		self::_DESCRIPTION,
		self::_IMPORT_QTY,
		self::_IMPORT_DATE,
		self::_SOURCE_ID,
	];

	/**
	 * Sử dụng timestamps để tự động quản lý created_at và updated_at
	 */
	const USE_TIMESTAMPS = true;

	const HIDDEN_FIELDS = ['created_at', 'updated_at', 'deleted_at',];

	const FORM_FIELDS = [
		self::_SOURCE_ID => [
			'label' => 'Source ID',
			'type' => 'number',
			'required' => true,
		],
		self::_CURRENT_QTY => [
			'label' => 'Current Quantity',
			'type' => 'number',
			'required' => true,
		],
		self::_COST_PRICE => [
			'label' => 'Cost Price',
			'type' => 'number',
			'required' => true,
		],
		self::_DESCRIPTION => [
			'label' => 'Description',
			'type' => 'text',
			'required' => false,
		],
		self::_IMPORT_QTY => [
			'label' => 'Import Quantity',
			'type' => 'number',
			'required' => true,
		],
		self::_IMPORT_DATE => [
			'label' => 'Import Date',
			'type' => 'date',
			'required' => true,
		],
	];
}
