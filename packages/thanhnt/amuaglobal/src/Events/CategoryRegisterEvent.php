<?php

namespace Thanhnt\Amuaglobal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Thanhnt\Amuaglobal\Models\Category;

final class CategoryRegisterEvent
{
	use Dispatchable, SerializesModels;

	public function __construct(
		public Category $category
	) {}
}
