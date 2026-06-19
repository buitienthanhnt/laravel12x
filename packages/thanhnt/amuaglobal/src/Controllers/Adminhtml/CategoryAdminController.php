<?php

namespace Thanhnt\Amuaglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;
use Thanhnt\Amuaglobal\Models\Repository\CategoryRepository;

final class CategoryAdminController extends Controller
{
	use FormField;

	public function __construct(
		protected CategoryRepository $categoryRepository,
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
			'form_fields' =>  $this->formatFormFields(\Thanhnt\Akhoglobal\Models\Category::FORM_FIELDS),
		]);
	}

	public function storeCategory() {
		
	}
}
