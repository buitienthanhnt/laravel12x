<?php

use Illuminate\Support\Facades\Route;
use Thanhnt\Akhoglobal\Controllers\Frontend\ProductController;

Route::prefix('akhoglobal')->group(function (): void {

    Route::get('/', [ProductController::class, 'manage']);

    Route::get('create', [ProductController::class, 'create']);
});
