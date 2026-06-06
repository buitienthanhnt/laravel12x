<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Amuaglobal\Models\Types\ConfigInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(ConfigInterface::_TABLE_NAME, function (Blueprint $table) {
			$table->string(ConfigInterface::_PATH)->unique();
			$table->text(ConfigInterface::_VALUE);
			$table->string(ConfigInterface::_TYPE)->default('string');
			$table->text(ConfigInterface::_DESCRIPTION)->nullable();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(ConfigInterface::_TABLE_NAME);
	}
};
