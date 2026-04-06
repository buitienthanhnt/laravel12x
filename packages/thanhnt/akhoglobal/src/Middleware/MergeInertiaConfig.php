<?php

namespace Thanhnt\Akhoglobal\Middleware;

use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

final class MergeInertiaConfig
{
    public function __construct()
    {
        // throw new \Exception('Not implemented');
    }

    /**
     * @param \Illuminate\Http\Request $request
     * @param Closure $next
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        /**
         * share date time mode config to inertia
         * date_range or list_date
         */
        Inertia::share('akho_mode', config('akhoglobal.mode'));
        /**
         * share has cart active to inertia
         */
        return $next($request);
    }
}
