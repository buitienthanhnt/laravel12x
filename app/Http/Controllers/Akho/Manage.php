<?php

namespace App\Http\Controllers\Akho;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

final class Manage extends Controller
{

	public function __construct()
	{
		// $this->middleware('auth');
	}

	public function manage(Request $request)
	{
		return Inertia::render('akhoglobal/Manage', [
			'id' => $request->id,
		]);
		return view('akho.manage');
	}

	public function create()
	{
		return view('akho.manage');
	}

	public function edit()
	{
		return view('akho.manage');
	}

	public function register()
	{
		return view('akho.manage');
	}

	public function __invoke()
	{
		return view('akho.manage');
	}
}
