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
		Schema::create(BlockInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->char(BlockInterface::_NAME, 255)->nullable()->default('');
			$table->char(BlockInterface::_KEY, 255)->unique();
			$table->float(BlockInterface::_PX, 2);
			$table->float(BlockInterface::_PY, 2);
			$table->float(BlockInterface::_WIDTH, 2);
			$table->float(BlockInterface::_HEIGHT, 2);
			$table->json(BlockInterface::_STYLE)->nullable();
			$table->char(BlockInterface::_TYPE, 255)->nullable()->default('block');
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(BlockInterface::TABLE_NAME);
	}
};
