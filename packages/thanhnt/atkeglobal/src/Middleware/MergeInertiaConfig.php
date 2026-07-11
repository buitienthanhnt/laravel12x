<?php

namespace Thanhnt\Atkeglobal\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

final class MergeInertiaConfig
{

	/**
	 * Handle an incoming request
	 * @param \Illuminate\Http\Request $request
	 * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
	 */
	public function handle(Request $request, Closure $next): Response
	{
		return $next($request);
	}
}
