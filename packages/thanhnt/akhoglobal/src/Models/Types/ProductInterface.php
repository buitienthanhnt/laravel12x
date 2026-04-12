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
    const _ACTIVE = 'active';
    const _ALIAS = 'alias';
    const _DESCRIPTION = 'description';
    const _IMAGE_PATH = 'image_path';

    const R_GALLERIES = 'galleries';
    const R_ATTRIBUTES = 'attributes';

    /**
     * default not have to define
     * if fase need define: public $timestamps = false; in Model
     */
    const USE_TIMESTAMP = true;

    const FILLED_FILEDS = [self::_NAME, self::_DESCRIPTION, self::_IMAGE_PATH, self::_ALIAS, self::_ACTIVE];
    const HIDDEN_FIELDS = [];
    const FORM_FIELDS = [
        ['key' => self::_NAME, 'type' => FormFieldInterface::TYPE_TEXT, 'required' => true, 'label' => 'Tên'],
        ['key' => self::_ALIAS, 'type' => FormFieldInterface::TYPE_TEXT, 'label' => 'Bí danh'],
        ['key' => self::_ACTIVE, 'type' => FormFieldInterface::TYPE_CHECKBOX, 'label' => 'Kích hoạt'],
        ['key' => self::_DESCRIPTION, 'type' => FormFieldInterface::TYPE_TEXTAREA, 'label' => 'Miêu tả...'],
        ['key' => self::_IMAGE_PATH, 'type' => FormFieldInterface::TYPE_FILE, 'label' => 'Ảnh đại diện'],
        ['key' => self::R_GALLERIES, 'type' => FormFieldInterface::PICK_FILE, 'label' => 'Ảnh chi tiết'],
    ];
}
