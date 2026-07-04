<?php

use App\Http\Middleware\HandleAppearance;
use App\Http\Middleware\HandleInertiaRequests;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Http\Middleware\AddLinkHeadersForPreloadedAssets;

return Application::configure(basePath: dirname(__DIR__))
	->withRouting(
		web: __DIR__ . '/../routes/web.php',
		commands: __DIR__ . '/../routes/console.php',
		health: '/up',
	)
	->withMiddleware(function (Middleware $middleware): void {
		$middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

		/**
		 * except: ['flmngr', 'flmngr/*'] để bỏ qua xác thực CSRF cho các endpoint Flmngr. 
		 * Thay thế 'flmngr' bằng URL chính xác đến endpoint Flmngr của bạn nếu cần.
		 */
		$middleware->validateCsrfTokens(except: [
			'flmngr', // Thay thế bằng URL chính xác đến endpoint Flmngr của bạn
			'flmngr/*'
		]);

		$middleware->web(append: [
			HandleAppearance::class,
			HandleInertiaRequests::class,
			AddLinkHeadersForPreloadedAssets::class,
		]);
	})
	->withExceptions(function (Exceptions $exceptions): void {
		//
	})->create();
