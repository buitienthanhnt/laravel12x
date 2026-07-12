<?php

use Illuminate\Support\Facades\Route;

Route::prefix('adminhtml')->group(function (): void {

	/**
	 * define block route
	 */
	Route::prefix('block')->group(function (): void {
		Route::get('/', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'blockList'])->name('akho.block');

		Route::post('create', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'addBlock']);

		Route::delete('delete/{id}', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'deleteBlock']);

		Route::put('update', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'updateBlock']);

		Route::post('add-item', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'addBlockItem']);

		Route::delete('delete-item/{id}', [\Thanhnt\Akhoglobal\Controllers\Adminhtml\BlockAdminController::class, 'deleteBlockItem']);
	});
});
