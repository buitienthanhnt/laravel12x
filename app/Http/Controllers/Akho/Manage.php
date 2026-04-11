<?php

namespace App\Http\Controllers\Akho;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Thanhnt\Akhoglobal\Actions\Product\RegisterProductAction;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Requests\Product\RegisterProduct;

final class Manage extends Controller
{

    public function __construct(
        public RegisterProductAction $registerProductAction,
    ) {
        // $this->middleware('auth');
    }

    /**
     * Manage Akho
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function manage(Request $request)
    {
        return Inertia::render('akhoglobal/Manage', [
            'products' =>  Product::paginate(12),
        ]);
        return view('akho.manage');
    }

    public function create()
    {
        return Inertia::render('akhoglobal/Create', [
            'product_fields' =>  Product::FORM_FIELDS,
        ]);
    }

    public function edit()
    {
        return view('akho.manage');
    }

    public function store(RegisterProduct $request)
    {
        $this->registerProductAction->execute($request);

        return redirect()->route('akho.manage');
    }

    public function __invoke()
    {
        return view('akho.manage');
    }
}
