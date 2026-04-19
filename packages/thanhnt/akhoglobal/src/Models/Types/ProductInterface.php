<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface ProductInterface
{
	/**
	 * define table name
	 */
	const TABLE_NAME = 'akho_products';

	/**
	 * define model attributes start with _ character
	 */
	const _ID = 'id';
	const _NAME = 'name';
	const _SKU = 'sku';
	const _ACTIVE = 'active';
	const _ALIAS = 'alias';
	const _DESCRIPTION = 'description';
	const _IMAGE_PATH = 'image_path';

	const R_GALLERIES = 'galleries';
	const R_ATTRIBUTES = 'attributes';
	const R_CATEGORY = 'category';
	const R_PRICE = 'price';
	const R_STOCKS = 'stocks';

	const R_PRODUCT_CATEGORY_TABLE = 'akho_product_category';
	const R_PRODUCT_CATEGORY_PRODUCT_ID = 'product_id';
	const R_PRODUCT_CATEGORY_CATEGORY_ID = 'category_id';

	/**
	 * default not have to define
	 * if fase need define: public $timestamps = false; in Model
	 */
	const USE_TIMESTAMP = true;

	const FILLED_FILEDS = [self::_NAME, self::_SKU, self::_DESCRIPTION, self::_IMAGE_PATH, self::_ALIAS, self::_ACTIVE];
	const HIDDEN_FIELDS = ['created_at', 'updated_at', 'deleted_at'];

	const FORM_FIELDS = [
		['key' => self::_NAME, 'type' => FormFieldInterface::TYPE_TEXT, 'required' => true, 'label' => 'Tên sản phẩm'],
		['key' => self::_SKU, 'type' => FormFieldInterface::TYPE_TEXT, 'label' => 'Mã sản phẩm'],
		['key' => self::_ALIAS, 'type' => FormFieldInterface::TYPE_TEXT, 'label' => 'Bí danh'],
		['key' => self::_ACTIVE, 'type' => FormFieldInterface::TYPE_CHECKBOX, 'label' => 'Kích hoạt'],
		['key' => self::_DESCRIPTION, 'type' => FormFieldInterface::TYPE_TEXTAREA, 'label' => 'Miêu tả...'],
		['key' => self::_IMAGE_PATH, 'type' => FormFieldInterface::TYPE_FILE, 'label' => 'Ảnh đại diện'],
		['key' => self::R_GALLERIES, 'type' => FormFieldInterface::PICK_FILE, 'label' => 'Ảnh chi tiết'],
		['key' => CategoryInterface::_PARENT_ID, 'type' => FormFieldInterface::TYPE_SELECT_CHECKBOX, 'options_source' => \Thanhnt\Akhoglobal\Models\Category::class, 'placeholder' => 'Danh mục', 'label' => 'Danh mục'],
		['key' => self::R_STOCKS, 'type' => FormFieldInterface::TYPE_NUMBER, 'label' => 'Số lượng trong kho ban đầu', 'field_rules' => ['min' => 0]],
		['key' => self::R_PRICE, 'type' => FormFieldInterface::TYPE_NUMBER, 'label' => 'Giá bán', 'field_rules' => ['min' => 0]],
		['key' => PriceInterface::_DISCOUNT_PRICE, 'type' => FormFieldInterface::TYPE_NUMBER, 'label' => 'Giá khuyến mãi', 'field_rules' => ['min' => 0]],

	];
}
