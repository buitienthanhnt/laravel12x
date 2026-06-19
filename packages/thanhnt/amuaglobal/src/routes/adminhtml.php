<?php

use Illuminate\Support\Facades\Route;
use Thanhnt\Amuaglobal\Controllers\AmuaController;

Route::prefix('adminhtml')->group(function () {
	Route::get('clear-cache', [AmuaController::class, 'clearCache']);

	Route::prefix('category')->group(function () {
		Route::get('/', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'categoryList']);

		Route::get('create', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'createCategory']);

		Route::post('store', [\Thanhnt\Amuaglobal\Controllers\Adminhtml\CategoryAdminController::class, 'storeCategory']);
	});
});
