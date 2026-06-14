<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::prefix('agame')->group(function () {
	Route::get('/', function () {

		return Inertia::render('Agameglobal/Home');
	})->name('agame.home');

	Route::get('bam-gio-don', function () {
		return Inertia::render('Agameglobal/BamGioDon');
	})->name('agame.bam.gio.don');

	Route::get('dem-nguoc', function () {
		return Inertia::render('Agameglobal/DemNguoc');
	})->name('agame.dem.nguoc');

	Route::get('bam-gio', function () {
		return Inertia::render('Agameglobal/BamGioChuyenTiep');
	});
});
