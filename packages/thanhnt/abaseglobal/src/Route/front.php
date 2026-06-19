<?php

use Illuminate\Support\Facades\Route;

Route::prefix('abase')->group(function () {

	Route::get('', function () {
		return 123;
	});
});
