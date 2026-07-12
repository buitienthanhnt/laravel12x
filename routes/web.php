<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use EdSDK\FlmngrServer\FlmngrServer;
use Laravel\Fortify\Features;

Route::get('/', function () {
	return Inertia::render('home', [
		'canRegister' => Features::enabled(Features::registration()),
	]);
})->name('home');

Route::get('dashboard', function () {
	return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

/**
 * phai co name thi moi generate sang js source gom router
 */
require __DIR__ . '/settings.php';

// Đảm bảo thư mục public/uploads đã tồn tại trên host của bạn
Route::post('/flmngr', function () {
	FlmngrServer::flmngrRequest([
		'dirFiles' => public_path('storage/uploads') // Nơi lưu trữ file thực tế
	]);
})->name('flmngr.api');
