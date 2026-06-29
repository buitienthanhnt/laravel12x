<?php

namespace Thanhnt\Amuaglobal\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;
use Thanhnt\Amuaglobal\Models\Category;
use Thanhnt\Amuaglobal\Models\Types\CategoryInterface;

final class HomeController extends Controller
{


	public function __construct()
	{
		// throw new \Exception('Not implemented');
	}

	public function index()
	{
		return Inertia::render('amuaglobal/screens/frontend/HomePage', [
			'mainCategory' => Inertia::defer(fn() => Category::where(CategoryInterface::_PARENT_ID, null)->get(), 'home-page'),
		]);
	}
}
