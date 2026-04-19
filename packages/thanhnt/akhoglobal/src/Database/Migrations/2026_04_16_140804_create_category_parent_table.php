<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Thanhnt\Akhoglobal\Models\Types\CategoryInterface;

return new class extends Migration
{
	/**
	 * Run the migrations.
	 * Tạm thời bỏ qua bảng trung gian để lưu quan hệ cha con giữa các danh mục, vì có thể
	 * sử dụng cột parent_id trực tiếp trong bảng categories để lưu quan hệ này, giúp đơn giản hóa cấu trúc cơ sở dữ liệu và giảm thiểu số lượng bảng cần quản lý.
	 * Nếu sau này cần mở rộng thêm các tính năng liên quan đến quan hệ cha con
	 * như lưu trữ thêm thông tin về quan hệ này (ví dụ: ngày tạo, người tạo, v.v.) 
	 * hoặc hỗ trợ nhiều cấp độ cha con phức tạp hơn, thì có thể xem xét lại việc sử dụng bảng trung gian để quản lý quan hệ này một cách hiệu quả hơn.
	 */
	public function up(): void
	{
		return;
		// Schema::create(CategoryInterface::R_PARENT_TABLE, function (Blueprint $table) {
		// 	$table->id();
		// 	$table->unsignedBigInteger('category_id'); // ID của danh mục con
		// 	$table->unsignedBigInteger('parent_id');   // ID của danh mục cha
		// 	$table->foreign('category_id')->references(CategoryInterface::_ID)->on(CategoryInterface::TABLE_NAME)->onDelete('cascade');
		// 	$table->foreign('parent_id')->references(CategoryInterface::_ID)->on(CategoryInterface::TABLE_NAME)->onDelete('cascade');
		// });
	}

	/**
	 * Reverse the migrations.
	 */
	public function down(): void
	{
		return;
		// Schema::dropIfExists(CategoryInterface::R_PARENT_TABLE);
	}
};
