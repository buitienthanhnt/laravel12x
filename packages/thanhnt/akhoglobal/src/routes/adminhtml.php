<?php

use Illuminate\Support\Facades\Route;
use Thanhnt\Akhoglobal\Controllers\Adminhtml\ProductAdminController;

Route::prefix('adminhtml')->group(function (): void {
    /**
     *deifne route for product
     */
    Route::prefix('product')->group(function (): void {
        Route::get('register', [ProductAdminController::class, 'registerProduct']);

        Route::get('create', [ProductAdminController::class, 'createProduct']);
    });
});
