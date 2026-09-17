<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\BlockInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		if (Schema::hasTable(BlockInterface::TABLE_NAME)) {
			Schema::table(BlockInterface::TABLE_NAME, function (Blueprint $table) {
				$table->integer(BlockInterface::_GROUP_ID)->nullable();
			});
		}
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		if (Schema::hasTable(BlockInterface::TABLE_NAME)) {
			Schema::table(BlockInterface::TABLE_NAME, function (Blueprint $table) {
				$table->dropColumn(BlockInterface::_GROUP_ID);
			});
		}
	}
};
