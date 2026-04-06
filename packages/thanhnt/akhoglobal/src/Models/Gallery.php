<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Thanhnt\Akhoglobal\Models\Types\GalleryInterface;
use Thanhnt\Akhoglobal\Database\Factories\GalleryFactory;

#[UseFactory(GalleryFactory::class)]
class Gallery  extends Model implements GalleryInterface
{
    use HasFactory;

    protected $table = self::TABLE_NAME;

    /**
     * define for fillable field
     */
    protected $fillable = self::FILLED_FILEDS;

    /**
     * define for hidden field
     */
    protected $hidden = self::HIDDEN_FIELDS;

    /**
     * not use timestamp
     */
    public $timestamps = false;

    /**
     * define path field, format value after save model.
     * @return \Illuminate\Database\Eloquent\Casts\Attribute
     */
    public function path(): Attribute
    {
        return Attribute::make(
            // get: fn($value) => asset($value),
            set: fn($value) => parse_url($value)['path'],
        );
    }
}
