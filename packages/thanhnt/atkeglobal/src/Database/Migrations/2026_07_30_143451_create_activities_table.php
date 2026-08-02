<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Atkeglobal\Models\Types\ActivityInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(ActivityInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->char(ActivityInterface::_LABEL)->nullable();
			$table->integer(ActivityInterface::_ACTION);
			$table->char(ActivityInterface::_TYPE);
			$table->float(ActivityInterface::_PRICE);
			$table->integer(ActivityInterface::_QTY);
			$table->char(ActivityInterface::_UNIT);
			$table->dateTime(ActivityInterface::_TIME)->nullable();
			$table->integer(ActivityInterface::_TARGET_ID)->nullable();
			$table->integer(ActivityInterface::_TRAN_ID)->nullable();
			$table->timestamps();
			$table->softDeletes();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(ActivityInterface::TABLE_NAME);
	}
};
