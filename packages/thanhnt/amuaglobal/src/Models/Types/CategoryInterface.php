<?php

namespace Thanhnt\Amuaglobal\Models\Types;

use Thanhnt\Amuaglobal\Models\Types\FormFieldInterface;

interface CategoryInterface
{
	const TABLE_NAME = 'amua_categories';

	const _ID = 'id';
	const _NAME = 'name';
	const _ALIAS = 'alias';
	const _DESCRIPTION = 'description';
	const _IMAGE_PATH = 'image_path';
	const _ACTIVE = 'active';
	const _PARENT_ID = 'parentid'; // luu y usa lai

	const STATUS_ACTIVE = 1;
	const STATUS_INACTIVE = 0;

	const FILLED_FILEDS = [
		self::_NAME,
		self::_ALIAS,
		self::_DESCRIPTION,
		self::_ACTIVE,
		self::_PARENT_ID,
	];

	const HIDDEN_FIELDS = ['created_at', 'updated_at', 'deleted_at'];

	const USE_TIMESTAMP = true;

	const R_PRODUCTS = 'products';

	// const R_PARENT_TABLE = 'amua_category_parent';
	// const R_PARENT = 'parent';
	// const R_CHILDREN = 'children';

	const FORM_FIELDS = [
		['key' => self::_NAME, 'label' => 'Tên danh mục', 'type' => FormFieldInterface::TYPE_TEXT, 'required' => true],
		['key' => self::_ALIAS, 'label' => 'Bí danh', 'type' => FormFieldInterface::TYPE_TEXT],
		['key' => self::_DESCRIPTION, 'label' => 'Miêu tả', 'type' => FormFieldInterface::TYPE_TEXTAREA],
		['key' => self::_IMAGE_PATH, 'label' => 'Ảnh đại diện', 'type' => FormFieldInterface::TYPE_FILE],
		['key' => self::_ACTIVE, 'label' => 'Kích hoạt', 'type' => FormFieldInterface::TYPE_CHECKBOX],
		['key' => self::_PARENT_ID, 'label' => 'Danh mục cha', 'type' => FormFieldInterface::TYPE_SELECT, 'options_source' => \Thanhnt\Amuaglobal\Models\Category::class, 'placeholder' => 'Select parent category'],
	];
}
