<?php

namespace Thanhnt\Akhoglobal\Listeners;

class CategoryRegisterListen
{
	/**
	 * Handle the event.
	 *
	 * @param  \Thanhnt\Akhoglobal\Events\CategoryRegisterEvent  $event
	 * @return void
	 */
	public function handle(\Thanhnt\Akhoglobal\Events\CategoryRegisterEvent $event)
	{
		$category = $event->category;
	}
}
