<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\CategoryInterface;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create(CategoryInterface::TABLE_NAME, function (Blueprint $table) {
            $table->id();
						$table->string(CategoryInterface::_NAME);
						$table->string(CategoryInterface::_ALIAS)->unique();
						$table->text(CategoryInterface::_DESCRIPTION)->nullable();
						$table->string(CategoryInterface::_IMAGE_PATH)->nullable();
						$table->boolean(CategoryInterface::_ACTIVE)->default(true);
						$table->json(CategoryInterface::_PARENT)->nullable();
						$table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists(CategoryInterface::TABLE_NAME);
    }
};
