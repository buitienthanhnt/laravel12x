<?php

namespace Thanhnt\Amuaglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

final class DashboardController extends Controller
{

	public function __construct()
	{
		// throw new \Exception('Not implemented');
	}

	public function index()
	{
		return Inertia::render('amuaglobal/screens/adminhtml/Dashboard');
	}
}
