<?php

namespace Thanhnt\Akhoglobal\Providers;

use Illuminate\Foundation\Support\Providers\EventServiceProvider;
use Thanhnt\Akhoglobal\Events\ProductRegisterEvent;

final class AkhoEventServiceProvider extends EventServiceProvider
{
    /**
     * Define the event and listener mappings for the package.
     *
     * @var array
     */
    protected $listen = [
        ProductRegisterEvent::class => [
            \Thanhnt\Akhoglobal\Listeners\ProductRegisterListen::class,
        ],
    ];

    /**
     * Register any package authentication / authorization services.
     *
     * @return void
     */
    public function boot()
    {
        parent::boot();
    }
}
