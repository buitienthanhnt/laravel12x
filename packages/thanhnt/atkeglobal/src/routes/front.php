<?php

use Illuminate\Support\Facades\Route;

Route::get('sliver-chart', [\Thanhnt\Atkeglobal\Controllers\DashboardController::class, 'sliverChart']);
