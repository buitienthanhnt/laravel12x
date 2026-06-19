<?php

namespace Thanhnt\Amuaglobal\Action;

use Illuminate\Http\Request;
use Thanhnt\Amuaglobal\Models\Category;
use Thanhnt\Amuaglobal\Models\ShareAction\FormField;

final class CategoryAction
{

	use FormField;

	public function __construct(
		protected Request $request,
		protected Category $category,
	) {
		// throw new \Exception('Not implemented');
	}

	public function excute(array $data) {
		$this->category->create($this->formData($data));
	}
}
