<?php

namespace Thanhnt\Akhoglobal\Actions\Category;

use Thanhnt\Akhoglobal\Actions\ShareAction\FormData;
use Thanhnt\Akhoglobal\Models\Category;

final class RegisterCategoryAction
{
	use FormData;

	public function execute(\Thanhnt\Akhoglobal\Requests\Category\RegisterCategory $request)
	{
		/** @var \Thanhnt\Akhoglobal\Models\Category $category */
		$category = Category::create($this->formData(\Thanhnt\Akhoglobal\Models\Types\CategoryInterface::FILLED_FILEDS, $request));

		/**
		 * handle file upload and update category after create success
		 */
		if ($photo = $request->file(\Thanhnt\Akhoglobal\Models\Types\CategoryInterface::_IMAGE_PATH)) {
			$category->updateImagePath($photo, 'categories');
		}

		/**
		 * call event category register after create category success
		 * @var \Thanhnt\Akhoglobal\Events\CategoryRegisterEvent
		 */
		event(new \Thanhnt\Akhoglobal\Events\CategoryRegisterEvent($category));
	}
}
