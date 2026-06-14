<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(ProductInterface::TABLE_NAME, function (Blueprint $table) {
            $table->id(ProductInterface::_ID);
            $table->char(ProductInterface::_NAME);
            $table->char(ProductInterface::_SKU)->unique(ProductInterface::_SKU)->default('');
            $table->boolean(ProductInterface::_ACTIVE)->default(true);
            $table->char(ProductInterface::_ALIAS)->unique(ProductInterface::_ALIAS);
            $table->text(ProductInterface::_DESCRIPTION)->nullable();
            $table->char(ProductInterface::_IMAGE_PATH)->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(ProductInterface::TABLE_NAME);
    }
};
