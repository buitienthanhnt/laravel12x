<?php

namespace Thanhnt\Akhoglobal\Controllers\Adminhtml;

use App\Http\Controllers\Controller;
use Illuminate\Support\Str;
use Inertia\Inertia;
use Inertia\Response;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;

final class ProductAdminController extends Controller
{
    public function __construct()
    {
        // throw new \Exception('Not implemented');
    }

    public function createProduct()
    {
        return Inertia::render('Akhoglobal/Product/Create', [
            'form_fields' => ProductInterface::FORM_FIELDS,
        ]);
    }

    public function registerProduct(): Response
    {
        /**
         * @var \Faker\Generator $faker
         */
        $faker = \Faker\Factory::create(locale: 'vi_VN');

        /**
         * Lưu ý các thuộc tính đã được định nghĩa là bắt buộc thì trong hàm khởi tạo bắt buộc phải có định nghĩa khóa thuộc tính đó
         * với giá trị có thể là null.
         */
        $product = Product::create([
            ProductInterface::_NAME => $faker->name(),
            ProductInterface::_DESCRIPTION => 'the description of the product with color: ' . $faker->hexColor(),
            ProductInterface::_ALIAS => null,
            ProductInterface::_IMAGE_PATH => 'https://i1-vnexpress.vnecdn.net/2026/03/22/5563187178137269217a-177418030-1956-4180-1774180508.jpg?w=680&h=0&q=100&dpr=1&fit=crop&s=tZ870MzFX_LDFwZ54j_CnA',
        ]);
        return Inertia::render('Akhoglobal/Product/List', [
            'product' => Inertia::optional(fn() => $product),
        ]);
    }
}
