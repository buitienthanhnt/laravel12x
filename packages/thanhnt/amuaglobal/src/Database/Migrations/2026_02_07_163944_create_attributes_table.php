<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Amuaglobal\Models\Types\AttributeInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 */
	public function up(): void
	{
		Schema::create(AttributeInterface::TABLE_NAME, function (Blueprint $table) {
			$table->char(AttributeInterface::_TYPE);
			$table->integer(AttributeInterface::_SOURCE_ID);
			$table->char(AttributeInterface::_KEY);
			$table->text(AttributeInterface::_VALUE);
		});
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		Schema::dropIfExists(AttributeInterface::TABLE_NAME);
	}
};
