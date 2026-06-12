<?php

use Illuminate\Support\Facades\Route;

Route::prefix('akho')->group(function (): void {

	/**
	 * product detail route
	 */
	Route::get('{id}.htm', [\Thanhnt\Akhoglobal\Controllers\Frontend\CategoryController::class, 'detailCategory']);

	/**
	 * category detail route
	 */
	Route::get('product/{alias}.html', [\Thanhnt\Akhoglobal\Controllers\Frontend\ProductController::class, 'detail'])->name('akho.product.detail');
});
