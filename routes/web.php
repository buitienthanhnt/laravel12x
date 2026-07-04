<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use EdSDK\FlmngrServer\FlmngrServer;

// Route::get('/', function () {
// 	return Inertia::render('home', [
// 		'canRegister' => Features::enabled(Features::registration()),
// 	]);
// })->name('home');

Route::get('dashboard', function () {
	return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::prefix('test')->group(function () {

	Route::post('upload', function (\Illuminate\Http\Request $request) {
		$request->validate([
			'file' => 'required|file|max:10240', // Giới hạn kích thước file (10MB)
		]);

		if ($request->file('file')->isValid()) {
			$path = $request->file('file')->store('uploads', 'public'); // Lưu file vào thư mục public/uploads
			return response()->json(['message' => 'File uploaded successfully', 'path' => $path]);
		}

		return response()->json(['message' => 'File upload failed'], 400);
	});
});

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
