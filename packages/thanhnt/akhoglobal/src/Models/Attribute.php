<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Types\AttributeInterface;

class Attribute extends Model implements AttributeInterface
{
    // define table name)
    protected $table = self::TABLE_NAME;

    protected $fillable = self::FILLED_FIELDS;

    /**
     * not use timestamp created_at, updated_at, deleted_at
     */
    public $timestamps = false;
}
