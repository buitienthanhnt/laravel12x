<?php

namespace Thanhnt\Atkeglobal;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

class AtkeglobalProvider extends ServiceProvider
{
	public function register()
	{
		// Register bindings, singletons, etc.
		$this->mergeConfigFrom(__DIR__ . '/Config/config.php', 'atkeglobal');
	}

	public function boot()
	{
		/**
		 * load router file register
		 * need define web middleware for router unless the request missing session data. 
		 */
		Route::middleware([
			...Route::getMiddlewareGroups()['web'] ?? [],
			\Thanhnt\Atkeglobal\Middleware\MergeInertiaConfig::class,
		])->group(function () {
			// Load views, routes, migrations, publish assets, etc.
			$this->loadRoutesFrom(__DIR__ . '/routes/front.php');
			$this->loadRoutesFrom(__DIR__ . '/routes/adminhtml.php');
		});

		// Load views, routes, migrations, publish assets, etc.
		$this->loadViewsFrom(__DIR__ . '/resources/views', 'atkeglobal');

		/**
		 * load migration define 
		 * make migration: php artisan make:migration create_products_table --path=packages/thanhnt/atkeglobal/src/Database/Migrations
		 * rollback: php artisan migrate:rollback --step=1
		 */
		$this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');
		/**
		 * load factory for package
		 */
		$this->loadFactoriesFrom(__DIR__ . '/Database/Factories');

		/**
		 * khai báo các command
		 * dùng hàm: is_subclass_of; để kiểm tra các class định nghĩa trong đây: https://www.php.net/manual/en/function.is-subclass-of.php
		 */
		// $this->commands([
		// 	\Thanhnt\Atkeglobal\Commands\DemoCommand::class,
		// 	\Thanhnt\Atkeglobal\Commands\MakePackageModelCommand::class,
		// ]);

		/**
		 * publish inertiaJs component to js/Pages views and active running with controllers Inertial::render()
		 * php artisan vendor:publish --tag=atkeglobal-inertiajs
		 */
		$this->publishes([
			__DIR__ . '/resources/js' => resource_path('js/Pages'),
		], 'atkeglobal-inertiajs');

		/**
		 * coppy config file from the package to global config
		 * php artisan vendor:publish --provider="Thanhnt\Atkeglobal\AtkeglobalProvider"
		 */
		$this->publishes([
			__DIR__ . '/config/config.php' => config_path('atkeglobal.php'),
		], 'atkeglobal-config');

		/**
		 * publish assets to public folder
		 * php artisan vendor:publish --tag=atkeglobal-assets
		 */
		$this->publishes([
			__DIR__ . '/resources/public' => public_path('atkeglobal'),
		], 'atkeglobal-assets');
	}
}
