<?php

namespace Thanhnt\Akhoglobal\Listeners;

class ProductRegisterListen
{
	public function handle(\Thanhnt\Akhoglobal\Events\ProductRegisterEvent $event)
	{
		$product = $event->product;
	}
}
