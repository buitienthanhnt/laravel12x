<?php

use Illuminate\Support\Facades\Route;

Route::get('sliver-chart', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'sliverChart']);

Route::prefix('activity')->group(function (): void {
	Route::get('transactions', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activityTrans'])->name('activity.trans');

	Route::get('tran-detail/{id}', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'transactionDetail']);

	Route::post('add-transaction', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'addTransaction']);

	Route::get('/', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activities'])->name('activity.dashboard');

	Route::post('add-activity', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'addActivity']);

	Route::get('detail/{id}', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activityDetail'])->name('activity.detail');
});
