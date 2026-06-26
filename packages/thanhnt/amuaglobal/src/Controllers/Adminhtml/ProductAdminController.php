<?php

namespace Thanhnt\Amuaglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Thanhnt\Amuaglobal\Action\{CategoryAction, ProductAction};
use Thanhnt\Amuaglobal\Api\ProductApi;
use Thanhnt\Amuaglobal\Models\Product;
use Thanhnt\Amuaglobal\Models\ShareAction\FormField;
use Thanhnt\Amuaglobal\Models\Types\PriceInterface;
use Thanhnt\Amuaglobal\Models\Types\ProductInterface;
use Thanhnt\Amuaglobal\Requests\Product\RegisterProduct;

final class ProductAdminController extends Controller
{
	use FormField;

	public function __construct(
		protected ProductAction $registerProductAction,
		protected CategoryAction $registerCategoryAction,
		protected ProductApi $productApi,
	) {
		// throw new \Exception('Not implemented');
	}

	/**
	 * Manage amua
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function manage(\Illuminate\Http\Request $request)
	{

		return Inertia::render('amuaglobal/screens/product/List', [
			'products' =>  Product::latest()->paginate(6),
			'categories' => \Thanhnt\Amuaglobal\Models\Category::latest()->paginate(6),
		]);
	}

	/**
	 * product page form for register new product
	 */
	public function create()
	{
		return Inertia::render('amuaglobal/screens/product/CreateProduct', [
			'form_fields' =>  $this->formatFormFields(ProductInterface::FORM_FIELDS),
			'custom_fields' => [
				'price_fields' => PriceInterface::FORM_FIELDS,
			],
		]);
	}

	/**
	 * store new product
	 * @param \Thanhnt\Amuaglobal\Requests\Product\RegisterProduct $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(RegisterProduct $request)
	{
		$this->registerProductAction->execute($request);
		return redirect()->route('amua.product.list');
	}

	/**
	 * demo for register new product
	 */
	public function registerProduct(): Response
	{
		/**
		 * @var \Faker\Generator $faker
		 */
		$faker = \Faker\Factory::create(locale: 'vi_VN');

		/**
		 * Lưu ý các thuộc tính đã được định nghĩa là bắt buộc thì trong hàm khởi tạo bắt buộc phải có định nghĩa khóa thuộc tính đó
		 * với giá trị có thể là null.
		 */
		$product = Product::create([
			ProductInterface::_NAME => $faker->name(),
			ProductInterface::_DESCRIPTION => 'the description of the product with color: ' . $faker->hexColor(),
			ProductInterface::_ALIAS => null,
			ProductInterface::_IMAGE_PATH => 'https://i1-vnexpress.vnecdn.net/2026/03/22/5563187178137269217a-177418030-1956-4180-1774180508.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=tZ870MzFX_LDFwZ54j_CnA',
		]);
		
		return Inertia::render('Amuaglobal/Product/List', [
			'product' => Inertia::optional(fn() => $product),
		]);
	}
}
