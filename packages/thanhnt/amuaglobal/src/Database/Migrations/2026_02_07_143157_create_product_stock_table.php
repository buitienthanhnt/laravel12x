<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Amuaglobal\Models\Types\StockInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(StockInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->integer(StockInterface::_IMPORT_QTY)->default(0);
			$table->integer(StockInterface::_CURRENT_QTY)->default(0);
			$table->float(StockInterface::_COST_PRICE, 2)->default(0);
			$table->date(StockInterface::_IMPORT_DATE)->nullable();
			$table->char(StockInterface::_DESCRIPTION, 255)->nullable();
			$table->integer(StockInterface::_SOURCE_ID);
			$table->timestamps();
			$table->softDeletes();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(StockInterface::TABLE_NAME);
	}
};
