<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface CategoryInterface
{
	const TABLE_NAME = 'akho_categories';

	const _ID = 'id';
	const _NAME = 'name';
	const _ALIAS = 'alias';
	const _DESCRIPTION = 'description';
	const _IMAGE_PATH = 'image_path';
	const _ACTIVE = 'active';
	const _PARENT = 'parent';

	const STATUS_ACTIVE = 1;
	const STATUS_INACTIVE = 0;

	const FILLED_FILEDS = [
		self::_NAME,
		self::_ALIAS,
		self::_DESCRIPTION,
		self::_ACTIVE,
		self::_PARENT,
	];

	const HIDDEN_FIELDS = ['created_at', 'updated_at'];

	const USE_TIMESTAMP = true;

	const R_PRODUCTS = 'products';
	const R_PARENT = 'parent';
	const R_CHILDREN = 'children';

	const FORM_FIELDS = [
		['key' => self::_NAME, 'label' => 'Name', 'type' => FormFieldInterface::TYPE_TEXT, 'required' => true],
		['key' => self::_ALIAS, 'label' => 'Alias', 'type' => FormFieldInterface::TYPE_TEXT],
		['key' => self::_DESCRIPTION, 'label' => 'mieeu tar', 'type' => FormFieldInterface::TYPE_TEXTAREA],
		['key' => self::_IMAGE_PATH, 'label' => 'Image', 'type' => FormFieldInterface::TYPE_FILE],
		['key' => self::_ACTIVE, 'label' => 'Active', 'type' => FormFieldInterface::TYPE_CHECKBOX],
		['key' => self::_PARENT, 'label' => 'Parent Category', 'type' => FormFieldInterface::TYPE_SELECT_CHECKBOX, 'options_source' => \Thanhnt\Akhoglobal\Models\Category::class, 'placeholder' => 'Select parent category'],
	];
}
