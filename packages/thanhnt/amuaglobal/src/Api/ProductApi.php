<?php

namespace Thanhnt\Amuaglobal\Api;

use Thanhnt\Amuaglobal\Models\Product;
use Thanhnt\Amuaglobal\Models\Types\ProductInterface;

final class ProductApi
{

	public function getProductDetail(string|int $value, string $type = 'id', bool $with = true)
	{
		return Product::where($type, $value)->with([
			ProductInterface::R_CATEGORY,
			ProductInterface::R_GALLERIES,
			ProductInterface::R_PRICE,
			ProductInterface::R_STOCKS
		])->firstOrFail();
	}
}
