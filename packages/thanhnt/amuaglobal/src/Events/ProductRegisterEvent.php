<?php

namespace Thanhnt\Amuaglobal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Thanhnt\Amuaglobal\Models\Product;

final class ProductRegisterEvent
{
	use Dispatchable, SerializesModels;

	public function __construct(
		public Product $product
	) {}
}
