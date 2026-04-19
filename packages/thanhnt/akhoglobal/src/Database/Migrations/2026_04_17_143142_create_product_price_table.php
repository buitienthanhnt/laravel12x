<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\PriceInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(PriceInterface::TABLE_NAME, function (Blueprint $table) {
			$table->id();
			$table->float(PriceInterface::_PRICE, 10, 2);
			$table->integer(PriceInterface::_DISCOUNT_PRICE)->nullable();
			$table->char(PriceInterface::_CURRENCY, 3)->default('VND');
			$table->integer(PriceInterface::_SOURCE_ID);
			$table->timestamps();
			$table->softDeletes();
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(PriceInterface::TABLE_NAME);
	}
};
