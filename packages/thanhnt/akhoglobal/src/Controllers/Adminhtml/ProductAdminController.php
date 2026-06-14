<?php

namespace Thanhnt\Akhoglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Inertia\Response;
use Thanhnt\Akhoglobal\Actions\Category\RegisterCategoryAction;
use Thanhnt\Akhoglobal\Actions\Product\RegisterProductAction;
use Thanhnt\Akhoglobal\Api\Product\ProductApi;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;
use Thanhnt\Akhoglobal\Models\Types\PriceInterface;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;
use Thanhnt\Akhoglobal\Requests\Product\RegisterProduct;

final class ProductAdminController extends Controller
{
	use FormField;

	public function __construct(
		protected RegisterProductAction $registerProductAction,
		protected RegisterCategoryAction $registerCategoryAction,
		protected ProductApi $productApi,
	) {
		// throw new \Exception('Not implemented');
	}

	/**
	 * Manage Akho
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function manage(\Illuminate\Http\Request $request)
	{

		return Inertia::render('akhoglobal/Manage', [
			'products' =>  Product::latest()->paginate(6),
			'categories' => \Thanhnt\Akhoglobal\Models\Category::latest()->paginate(6),
		]);
	}

	/**
	 * product page form for register new product
	 */
	public function create()
	{
		return Inertia::render('akhoglobal/screen/product/CreateProduct', [
			'form_fields' =>  $this->formatFormFields(ProductInterface::FORM_FIELDS),
			'custom_fields' => [
				'price_fields' => PriceInterface::FORM_FIELDS,
			],
		]);
	}

	/**
	 * store new product
	 * @param \Thanhnt\Akhoglobal\Requests\Product\RegisterProduct $request
	 * @return \Illuminate\Http\RedirectResponse
	 */
	public function store(RegisterProduct $request)
	{
		$this->registerProductAction->execute($request);
		return redirect()->route('akho.product.list');
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
		return Inertia::render('Akhoglobal/Product/List', [
			'product' => Inertia::optional(fn() => $product),
		]);
	}
}
