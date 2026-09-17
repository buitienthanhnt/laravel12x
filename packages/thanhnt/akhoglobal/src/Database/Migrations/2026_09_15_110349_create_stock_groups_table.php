<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\BlockGroupInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(BlockGroupInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->string(BlockGroupInterface::_NAME);
			$table->string(BlockGroupInterface::_KEY)->unique();
			$table->float(BlockGroupInterface::_INIT_WIDTH)->nullable();
			$table->float(BlockGroupInterface::_INIT_HEIGHT)->nullable();
			$table->softDeletes();
			$table->timestamps();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(BlockGroupInterface::TABLE_NAME);
	}
};
