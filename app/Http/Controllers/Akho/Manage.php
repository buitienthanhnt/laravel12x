<?php

namespace App\Http\Controllers\Akho;

use App\Http\Controllers\Controller;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Actions\Product\RegisterProductAction;
use Thanhnt\Akhoglobal\Actions\Category\RegisterCategoryAction;
use Thanhnt\Akhoglobal\Api\Product\ProductApi;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;
use Thanhnt\Akhoglobal\Requests\Product\RegisterProduct;

final class Manage extends Controller
{
	use FormField;

	public function __construct(
		protected RegisterProductAction $registerProductAction,
		protected RegisterCategoryAction $registerCategoryAction,
		protected ProductApi $productApi,
	) {
		// $this->middleware('auth');
	}

	/**
	 * Manage Akho
	 *
	 * @param \Illuminate\Http\Request $request
	 * @return \Illuminate\Http\Response
	 */
	public function manage(Request $request)
	{
		return Inertia::render('akhoglobal/Manage', [
			'products' =>  Product::paginate(12),
		]);
		return view('akho.manage');
	}

	public function create()
	{
		return Inertia::render('akhoglobal/Create', [
			'form_fields' =>  Product::FORM_FIELDS,
		]);
	}

	public function createCategory()
	{
		return Inertia::render('akhoglobal/category/CreateCategory', [
			'form_fields' =>  $this->formatFormFields(\Thanhnt\Akhoglobal\Models\Category::FORM_FIELDS),
		]);
	}

	public function storeCategory(\Thanhnt\Akhoglobal\Requests\Category\RegisterCategory $request)
	{
		$this->registerCategoryAction->execute($request);

		return redirect()->route('akho.manage');
	}

	/**
	 * Show product detail by alias
	 *
	 * @param string $alias
	 * @return \Illuminate\Http\Response
	 */
	public function show(string $alias)
	{
		return Inertia::render('akhoglobal/product/Show', [
			'product' => $this->productApi->getProductDetail(ProductInterface::_ALIAS, $alias),
		]);
	}

	public function edit()
	{
		return view('akho.manage');
	}

	public function store(RegisterProduct $request)
	{
		// dd($request->all());
		$this->registerProductAction->execute($request);

		return redirect()->route('akho.manage');
	}

	public function __invoke()
	{
		return view('akho.manage');
	}
}
