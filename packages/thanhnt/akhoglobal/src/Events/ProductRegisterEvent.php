<?php

namespace Thanhnt\Akhoglobal\Events;

use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Thanhnt\Akhoglobal\Models\Product;

final class ProductRegisterEvent
{
    use Dispatchable, SerializesModels;

    public function __construct(
        public Product $product
    ) {}
}
