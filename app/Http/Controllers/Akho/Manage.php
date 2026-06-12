<?php

namespace App\Http\Controllers\Akho;

use App\Http\Controllers\Controller;
use Thanhnt\Akhoglobal\Models\ShareAction\FormField;

final class Manage extends Controller
{
	use FormField;

	public function __construct()
	{
		// $this->middleware('auth');
	}

	public function edit()
	{
		return view('akho.manage');
	}

	public function __invoke()
	{
		return view('akho.manage');
	}
}
