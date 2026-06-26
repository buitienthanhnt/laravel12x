<?php

namespace Thanhnt\Amuaglobal\Action;

use Illuminate\Http\Request;
use Thanhnt\Amuaglobal\Models\Category;
use Thanhnt\Amuaglobal\Models\ShareAction\FormData;

final class CategoryAction
{

	use FormData;

	public function __construct(
		protected Request $request,
		protected Category $category,
	) {
		// throw new \Exception('Not implemented');
	}

	public function excute(array $data)
	{

		/** @var \Thanhnt\Amuaglobal\Models\Category $category */
		$category = $this->category->create($this->formData(\Thanhnt\Amuaglobal\Models\Types\CategoryInterface::FILLED_FILEDS, $data));

		/**
		 * handle file upload and update category after create success
		 */
		if ($photo = $this->request->file(\Thanhnt\Amuaglobal\Models\Types\CategoryInterface::_IMAGE_PATH)) {
			$category->updateImagePath($photo, 'category');
		}

		/**
		 * sync parent categories with pivot table category_parent
		 */
		// if ($parentCategories = $request->array(CategoryInterface::R_PARENT)) {
		// 	$category->parents()->sync($parentCategories);
		// }

		/**
		 * call event category register after create category success
		 * @var \Thanhnt\Amuaglobal\Events\CategoryRegisterEvent
		 */
		event(new \Thanhnt\Amuaglobal\Events\CategoryRegisterEvent($category));
	}
}
