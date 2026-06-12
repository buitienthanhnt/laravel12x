<?php

namespace Thanhnt\Akhoglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Actions\Category\RegisterCategoryAction;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;

final class CategoryAdminController extends Controller
{

	use FormField;

	function __construct(
		protected RegisterCategoryAction $registerCategoryAction,
	) {
		// throw new \Exception('Not implemented');
	}

	public function createCategory()
	{
		return Inertia::render('akhoglobal/screen/category/CreateCategory', [
			'form_fields' =>  $this->formatFormFields(\Thanhnt\Akhoglobal\Models\Category::FORM_FIELDS),
		]);
	}

	public function storeCategory(\Thanhnt\Akhoglobal\Requests\Category\RegisterCategory $request)
	{
		$this->registerCategoryAction->execute($request);

		return redirect()->route('akho.manage');
	}
}
