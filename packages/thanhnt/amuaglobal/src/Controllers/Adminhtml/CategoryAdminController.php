<?php

namespace Thanhnt\Amuaglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Amuaglobal\Action\CategoryAction;
use Thanhnt\Amuaglobal\Models\ShareAction\FormField;
use Thanhnt\Amuaglobal\Models\Repository\CategoryRepository;
use Thanhnt\Amuaglobal\Requests\Category\RegisterCategory;

final class CategoryAdminController extends Controller
{
	use FormField;

	public function __construct(
		protected CategoryRepository $categoryRepository,
		protected CategoryAction $categoryAction,
	) {
		// throw new \Exception('Not implemented');
	}

	public function categoryList()
	{
		return Inertia::render('amuaglobal/screens/category/List', [
			'categories' => $this->categoryRepository->all(),
		]);
	}

	public function createCategory()
	{
		return Inertia::render('amuaglobal/screens/category/Create', [
			'form_fields' =>  $this->formatFormFields(\Thanhnt\Amuaglobal\Models\Category::FORM_FIELDS),
		]);
	}

	public function storeCategory(RegisterCategory $request)
	{
		$this->categoryAction->excute($request->all());
		return redirect()->route('amua.category.list');
	}
}
