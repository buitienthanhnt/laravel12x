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
		Schema::create(ProductInterface::R_PRODUCT_CATEGORY_TABLE, function (Blueprint $table) {
			$table->foreignId(ProductInterface::R_PRODUCT_CATEGORY_PRODUCT_ID)->constrained(ProductInterface::TABLE_NAME)->onDelete('cascade');
			$table->foreignId(ProductInterface::R_PRODUCT_CATEGORY_CATEGORY_ID)->constrained(\Thanhnt\Akhoglobal\Models\Types\CategoryInterface::TABLE_NAME)->onDelete('cascade');
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(ProductInterface::R_PRODUCT_CATEGORY_TABLE);
	}
};
