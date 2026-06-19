<?php

namespace Thanhnt\Amuaglobal\Models\ShareAction;

use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Support\Str;

trait AliasAttr
{

    /**
     * define auto convert for alias attribute value
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function alias(): Attribute
    {
        /**
         * Kiểm tra 1 Class có hằng số Const hay không:
         * defined('SomeNamespace\SomeClass::CHECKED_CONSTANT');
         */
        return Attribute::make(
            set: fn($value, $attributes) => $value ? Str::slug($value) : Str::slug($attributes[defined(self::class . "::_NAME") ? self::_NAME : self::_TITLE] ?? Str::random(10)),
        );
    }
}
