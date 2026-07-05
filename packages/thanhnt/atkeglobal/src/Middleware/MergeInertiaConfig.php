<?php

namespace Thanhnt\Atkeglobal\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

final class MergeInertiaConfig
{

	public function handle(Request $request, Closure $next): Response
	{
		return $next($request);
	}
}
