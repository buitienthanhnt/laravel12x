<?php

namespace Thanhnt\Amuaglobal\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Amuaglobal\Models\Category;

final class CategoryController extends Controller
{

	function __construct()
	{
		// throw new \Exception('Not implemented');
	}

	/**
	 * get category detail
	 * @param int $id
	 * @return \Inertia\Response
	 */
	public function detailCategory(int $id)
	{
		$cate = Category::with('parent')->with('childrens')->findOrFail($id);

		dd($cate);

		return Inertia::render('Amuaglobal/screen/category/DetailCategory', [
			'category' => $cate,
		]);
	}
}
