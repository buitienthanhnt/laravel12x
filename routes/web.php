<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

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

/**
 * phai co name thi moi generate sang js source gom router
 */
Route::get('demo-inertia', function () {
	return Inertia::render('demo-inertia');
})->name('demo-inertia');

require __DIR__ . '/settings.php';
