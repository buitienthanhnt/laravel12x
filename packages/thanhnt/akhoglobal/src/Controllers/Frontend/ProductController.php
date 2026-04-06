<?php

namespace Thanhnt\Akhoglobal\Controllers\Frontend;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

final class ProductController extends Controller
{
    public function __construct()
    {
        // throw new \Exception('Not implemented');
    }

    public function manage() {
        return view('akho.manage');
        return Inertia::render('Akhoglobal/Manage');
    }

    public function create() {
        return Inertia::render('akhoglobal/Create');
    }
}
