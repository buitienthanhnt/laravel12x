<?php

use Illuminate\Http\Client\Pool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/**
 * checkout page about 2 step order-info and order-payment
 * show cart-info, set order-info
 */
// Route::any('checkout', [\Thanhnt\Ahomeglobal\Controllers\Frontend\CheckoutController::class, 'checkout'])->name('checkout'); // use checkout action in ahomeglobal
// Route::any('checkout', [\Thanhnt\Abookglobal\Controllers\CheckoutController::class, 'checkout'])->name('checkout'); // use checkout action in abookglobal

/**
 * checkout by payment paypal, stripe
 */
// Route::post('checkout-payment', [\Thanhnt\Ahomeglobal\Controllers\Frontend\CheckoutController::class, 'paymentOrder'])->name('checkout.payment');
// Route::post('checkout-payment', [\Thanhnt\Abookglobal\Controllers\CheckoutController::class, 'checkoutAction'])->name('checkout.payment');

/**
 * order success after payment examp: paypal,stripe
 */
// Route::any('checkout-success', [\Thanhnt\Ahomeglobal\Controllers\Frontend\CheckoutController::class, 'checkoutSuccess'])->name('checkout.success');
// Route::any('checkout-success', [\Thanhnt\Abookglobal\Controllers\CheckoutController::class, 'checkoutSuccess'])->name('checkout.success');

/**
 * test
 */
// Route::get('create-checkout-session', [\Thanhnt\Ahomeglobal\Controllers\Frontend\CheckoutController::class, 'paymentOrderStripe']);

Route::get('', [\Thanhnt\Amuaglobal\Controllers\Frontend\HomeController::class, 'index'])->name('amua.home');

/**
 * product detail route
 */
Route::get('{id}.htm', [\Thanhnt\Amuaglobal\Controllers\Frontend\CategoryController::class, 'detailCategory']);

/**
 * category detail route
 */
Route::get('product/{alias}.html', [\Thanhnt\Amuaglobal\Controllers\Frontend\ProductController::class, 'detail'])->name('amua.product.detail');

Route::get('sliver-chart', function (Request $request) {
	// 1. Gọi API từ Server-to-Server (Không lo bị lỗi CORS)
	// $response = Http::get('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData', [
	// 	'type' => 'L',
	// 	'days' => 1
	// ]);

	$responses = Http::pool(fn(Pool $pool) => [
		$pool->as('one_day')->get('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData', [
			'type' => $request->query('type', 'L'),
			'days' => 1
		]),
		$pool->as('seven_days')->get('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData', [
			'type' => $request->query('type', 'L'),
			'days' => 7
		]),
		$pool->as('thirty_days')->get('https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData', [
			'type' => $request->query('type', 'L'),
			'days' => 30
		])
	]);

	// 2. Lấy dữ liệu dạng mảng/json (mặc định trả về mảng nếu API thành công)
	return Inertia::render('atkeglobal/screens/SliverChart', [
		'type' => $request->query('type', 'L'),
		'oneDayData' => $responses['one_day']->successful() ? $responses['one_day']->json() : [],
		'sevenDayData' => $responses['seven_days']->successful() ? $responses['seven_days']->json() : [],
		'thirtyDayData' => $responses['thirty_days']->successful() ? $responses['thirty_days']->json() : [],
	]);
});
