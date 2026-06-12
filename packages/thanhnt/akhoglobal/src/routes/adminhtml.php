<?php

use Illuminate\Support\Facades\Route;

Route::prefix('adminhtml')->group(function (): void {

	/**
	 * define route for category
	 */
	Route::prefix('block')->group(function (): void {
		Route::get('/', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'blockList'])->name('akho.block');

		Route::post('create', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'addBlock']);

		Route::delete('delete/{id}', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'deleteBlock']);

		Route::put('update', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'updateBlock']);

		Route::post('add-item', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'addBlockItem']);

		Route::delete('delete-item/{id}', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'deleteBlockItem']);
	});

	Route::prefix('product')->group(function () {

		Route::get('/', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::class, 'manage'])->name('akho.product.list');

		Route::get('create', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::class, 'create'])->name('akho.register');

		Route::post('store', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController::class, 'store'])->name('akho.store');
	});

	Route::prefix('category')->group(function () {
		Route::get('create', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::class, 'createCategory'])->name('akho.category.create');

		Route::post('store', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\CategoryAdminController::class, 'storeCategory']);
	});
});
