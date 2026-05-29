<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\BlockItemInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(BlockItemInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->unsignedBigInteger(BlockItemInterface::_BLOCK_ID);
			$table->char(BlockItemInterface::_ITEM_MODEL, 255);
			$table->char(BlockItemInterface::_ITEM_TYPE, 255);
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(BlockItemInterface::TABLE_NAME);
	}
};
