<?php

namespace Thanhnt\Abaseglobal;

use Illuminate\Support\ServiceProvider;

final class AbaseglobalProvider extends ServiceProvider
{

	/**
	 * Register components dependencies for provider.
	 * 
	 * @return void
	 */
	public function register(): void {}

	/**
	 * Boot components for provider.
	 * register action and events, function for component providers
	 * 
	 * @return void
	 */
	public function boot(): void
	{
		$this->loadRoutesFrom(__DIR__ . '/Route/front.php');
	}
}
