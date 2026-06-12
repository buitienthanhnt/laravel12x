<?php

namespace Thanhnt\Akhoglobal\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Api\Product\ProductApi;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;

final class ProductController extends Controller
{
	use FormField;

	public function __construct(
		protected ProductApi $productApi,
	) {
		// throw new \Exception('Not implemented');
	}

	public function detail(string $alias)
	{
		return Inertia::render('akhoglobal/screen/product/Show', [
			'product' => $this->productApi->getProductDetail(ProductInterface::_ALIAS, $alias),
		]);
	}
}
