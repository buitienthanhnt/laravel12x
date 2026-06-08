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
		if (!Schema::hasColumn(BlockItemInterface::TABLE_NAME, BlockItemInterface::_DESCRIPTION)) {
			Schema::table(BlockItemInterface::TABLE_NAME, function (Blueprint $table) {
				$table->text(BlockItemInterface::_DESCRIPTION)->nullable();
			});
		}
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		if (Schema::hasColumn(BlockItemInterface::TABLE_NAME, BlockItemInterface::_DESCRIPTION)) {
			Schema::table(BlockItemInterface::TABLE_NAME, function (Blueprint $table) {
				$table->dropColumn(BlockItemInterface::_DESCRIPTION);
			});
		}
	}
};
