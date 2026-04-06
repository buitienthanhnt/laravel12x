<?php

namespace Thanhnt\Akhoglobal\Models\Types;

interface GalleryInterface
{
    /**
     * table name
     */
    const TABLE_NAME = 'akho_galleries';

    /**
     * field name of the model attributes start with _
     */
    const _SOURCE_ID = 'source_id';
    const _TYPE = 'type';
    const _PATH = 'path';

    /**
     * type value in list
     */
    const TYPE_HOME = 'home';
    const TYPE_ROOM = 'room';
    const TYPE_BOOK = 'book';
    const TYPE_PRODUCT = 'product';

    /**
     * not use timestamp
     */
    const USE_TIMESTAMP = false;

    /**
     * define for mass assignment
     */
    const FILLED_FILEDS = [
        self::_SOURCE_ID,
        self::_TYPE,
        self::_PATH,
    ];

    /**
     * define hidden fields(not return in json)
     */
    const HIDDEN_FIELDS = [self::_TYPE, self::_SOURCE_ID];
}
