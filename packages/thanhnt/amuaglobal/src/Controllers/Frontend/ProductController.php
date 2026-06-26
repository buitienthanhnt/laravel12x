<?php

namespace Thanhnt\Amuaglobal\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Amuaglobal\Api\ProductApi;
use Thanhnt\Amuaglobal\Models\ShareAction\FormField;
use Thanhnt\Amuaglobal\Models\Types\ProductInterface;

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

		return Inertia::render('amuaglobal/screens/frontend/ProductDetail', [
			'product' => $this->productApi->getProductDetail(value: $alias, type: ProductInterface::_ALIAS,),
		]);
	}
}
