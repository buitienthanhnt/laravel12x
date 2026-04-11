<?php

namespace Thanhnt\Akhoglobal\Actions\Product;

use Thanhnt\Akhoglobal\Actions\ShareAction\FormData;
use Thanhnt\Akhoglobal\Events\ProductRegisterEvent;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\Types\ProductInterface;
use Thanhnt\Akhoglobal\Requests\Product\RegisterProduct;

class RegisterProductAction
{
    use FormData;

    public function execute(RegisterProduct $request)
    {
        /**
         * create new product
         */
        $product = Product::create($this->formData(ProductInterface::FILLED_FILEDS, $request));

        $photo = $request->file(ProductInterface::_IMAGE_PATH);

        if ($photo) {
            $image_path = $photo->storePublicly('products', ['disk' => 'public']);
            $product->update([
                ProductInterface::_IMAGE_PATH => $image_path,
            ]);
        }

        /**
         * call event product register after create product success
         * @var \Thanhnt\Akhoglobal\Events\ProductRegisterEvent
         */
        ProductRegisterEvent::dispatch($product);

        return $product;
    }
}
