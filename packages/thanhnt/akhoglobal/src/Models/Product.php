<?php

namespace Thanhnt\Akhoglobal\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Thanhnt\Akhoglobal\Models\ShareAction\AliasAttr;
use Thanhnt\Akhoglobal\Models\Types\AttributeInterface;
use Thanhnt\Akhoglobal\Models\Types\GalleryInterface;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;

final class Product extends Model implements ProductInterface
{
    use AliasAttr;

    /**
     * define for table of the Model
     */
    protected $table = self::TABLE_NAME;

    /**
     * define for list attribute mass fill
     */
    protected $fillable = self::FILLED_FILEDS;

    /**
     * define relation to attributes
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
     */
    public function attributes(): HasMany
    {
        return $this->hasMany(Attribute::class, AttributeInterface::_SOURCE_ID, self::_ID);
    }

    /**
     * define relation to galleries image
     * @return \Illuminate\Database\Eloquent\Relations\HasMany<TRelatedModel, $this>
     */
    public function galleries(): HasMany
    {
        return $this->hasMany(Gallery::class, GalleryInterface::_SOURCE_ID, self::_ID);
    }
}
