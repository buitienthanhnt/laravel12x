<?php

namespace Thanhnt\Akhoglobal;

use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;

final class AkhoServiceProvider extends ServiceProvider
{

    function register()
    {
        /**
         * load the package config
         */
        $this->mergeConfigFrom(__DIR__ . '/config/Config.php', 'akhoglobal');
    }

    public function boot()
    {
        /**
         * load package route define
         */
        Route::middleware([
            ...(Route::getMiddlewareGroups()['web'] ?? []),
            \Thanhnt\Akhoglobal\Middleware\MergeInertiaConfig::class,
        ])->group(function () {
            // Load views, routes, migrations, publish assets, etc.
            $this->loadRoutesFrom(__DIR__ . '/routes/front.php');
            $this->loadRoutesFrom(__DIR__ . '/routes/adminhtml.php');
        });

        /**
         * load migration database
         * php artisan make:migration create_products_table --path=packages/thanhnt/akhoglobal/src/Database/Migrations
         * php artisan make:migration create_galleries_table --path=packages/thanhnt/akhoglobal/src/Database/Migrations
         * php artisan make:migration create_attributes_table --path=packages/thanhnt/akhoglobal/src/Database/Migrations
         */
        $this->loadMigrationsFrom(__DIR__ . '/Database/Migrations');

        /**
         * load factories database
         */
        $this->loadFactoriesFrom(__DIR__ . '/Database/Factories');

        /**
         * load view source
         */
        $this->loadViewsFrom(__DIR__ . '/resources/views', 'akhoglobal');

        /**
         * publish js source for build
         *  php artisan vendor:publish --tag=akhoglobal-js
         */
        $this->publishes([
            __DIR__ . 'resources/js' => resource_path('js/pages'),
        ], 'akhoglobal-js');

        /**
         * pushlish config file into global
         * php artisan vendor:publish --provider="Thanhnt\Akhoglobal\AkhoglobalProvider"
         */
        $this->publishes([
            __DIR__ . '/config/config.php' => config_path('akhoglobal.php'),
        ], 'akhoglobal-config');

        /**
         * publish assets to public folder
         * php artisan vendor:publish --tag=akhoglobal-assets
         */
        $this->publishes([
            __DIR__ . '/resources/public' => public_path('akho'),
        ], 'akhoglobal-assets');
    }
}
