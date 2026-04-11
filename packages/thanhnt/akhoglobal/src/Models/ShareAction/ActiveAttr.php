<?php

namespace Thanhnt\Akhoglobal\Models\ShareAction;

use Illuminate\Database\Eloquent\Casts\Attribute;

trait ActiveAttr
{

    /**
     * Accessor for the active attribute.
     *
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    protected function active(): Attribute
    {
        /**
         * Set the active attribute value.
         *
         * @param  string|null  $value
         * @return bool
         */
        return Attribute::make(
            set: function (?string $value) {
                return !!$value;
            }
        );
    }
}
