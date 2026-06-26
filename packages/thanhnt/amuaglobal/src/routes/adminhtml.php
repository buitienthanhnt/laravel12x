<?php

use Illuminate\Support\Facades\Route;
use Thanhnt\Amuaglobal\Controllers\AmuaController;

Route::prefix('adminhtml')->group(function () {
	Route::get('clear-cache', [AmuaController::class, 'clearCache']);

	/**
	 * define adminhtml category route
	 */
	Route::prefix('category')->group(function () {
		Route::get('/', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'categoryList'])->name('amua.category.list');

		Route::get('create', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'createCategory']);

		Route::post('store', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'storeCategory']);
	});

	/**
	 * define adminhtml product route
	 */
	Route::prefix('product')->group(function () {

		Route::get('/', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::class, 'manage'])->name('amua.product.list');

		Route::get('create', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::class, 'create'])->name('amua.register');

		Route::post('store', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\ProductAdminController::class, 'store'])->name('amua.store');
	});
});
