<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;
use EdSDK\FlmngrServer\FlmngrServer;

Route::get('/', function () {
	return Inertia::render('welcome', [
		'canRegister' => Features::enabled(Features::registration()),
	]);
})->name('home');

Route::get('dashboard', function () {
	return Inertia::render('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('home', function () {
	return Inertia::render('home');
});


Route::get('akho/manage/{id?}', [\App\Http\Controllers\Akho\Manage::class, 'manage'])->name('akho.manage');

Route::get('akho/register', [\App\Http\Controllers\Akho\Manage::class, 'create'])->name('akho.register');

Route::get('akho/cate/create', [\App\Http\Controllers\Akho\Manage::class, 'createCategory'])->name('akho.category.create');

Route::get('akho/cate/{id}.htm', [\App\Http\Controllers\Akho\Manage::class, 'detailCategory']);

Route::post('akho/cate/store', [\App\Http\Controllers\Akho\Manage::class, 'storeCategory']);

Route::post('akho/store', [\App\Http\Controllers\Akho\Manage::class, 'store'])->name('akho.store');

Route::get('akho/product/{alias}.html', [\App\Http\Controllers\Akho\Manage::class, 'show'])->name('akho.product.show');

Route::prefix('test')->group(function () {

	Route::get('resize-div', function () {
		return Inertia::render('test/StockPosition');
	});

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
