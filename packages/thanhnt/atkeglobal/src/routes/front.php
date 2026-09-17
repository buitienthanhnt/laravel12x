<?php

use Illuminate\Support\Facades\Route;

Route::get('sliver-chart', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'sliverChart']);

Route::get('lo-de', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'loDe']);

Route::prefix('transaction')->group(function (): void {
	Route::get('', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activityTrans'])->name('activity.trans');

	Route::get('detail/{id}', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'transactionDetail']);

	Route::post('add', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'addTransaction']);

	Route::get('activity', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activities'])->name('activity.dashboard');

	Route::post('add-activity', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'addActivity']);

	Route::get('activity/detail/{id}', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'activityDetail'])->name('activity.detail');
});
