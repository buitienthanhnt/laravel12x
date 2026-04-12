<?php

namespace Thanhnt\Akhoglobal\Api\Product;

use Thanhnt\Akhoglobal\Models\Product;

final class ProductApi
{
	public function getProductDetail(string $type = 'id', string|int $value)
	{
		return Product::where($type, $value)->with('galleries')->firstOrFail();
	}
}
