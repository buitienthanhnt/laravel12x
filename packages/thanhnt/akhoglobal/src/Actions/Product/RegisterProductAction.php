<?php

namespace Thanhnt\Akhoglobal\Actions\Product;

use Illuminate\Support\Facades\DB;
use Thanhnt\Akhoglobal\Actions\ShareAction\FormData;
use Thanhnt\Akhoglobal\Events\ProductRegisterEvent;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\Types\GalleryInterface;
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

		/**
		 * handle file upload and update product after create success
		 */
		if ($photo = $request->file(ProductInterface::_IMAGE_PATH)) {
			$image_path = $photo->storePublicly('products', ['disk' => 'public']);
			$product->update([
				ProductInterface::_IMAGE_PATH => $image_path,
			]);
		}

		/**
		 * sync galleries
		 */
		if ($galleries = $request->input(ProductInterface::R_GALLERIES)) {
			$this->syncGalaries($product, explode('|', $galleries));
		}

		/**
		 * call event product register after create product success
		 * @var \Thanhnt\Akhoglobal\Events\ProductRegisterEvent
		 */
		ProductRegisterEvent::dispatch($product);

		return $product;
	}

	/**
	 * sync galleries of product
	 *
	 * @param Product $product
	 * @param array $galleries
	 * @return void
	 */
	public function syncGalaries(Product $product, array $galleries)
	{
		DB::transaction(function () use ($product, $galleries) {
			/**
			 * delete all galleries of product before sync new galleries
			 */
			$product->galleries()->delete();

			// 1. Chuẩn bị dữ liệu và thực hiện gán foreign key (product_id)
			$dataToUpsert = collect($galleries)->map(function ($item) use ($product) {
				return [
					GalleryInterface::_PATH => $item,
					GalleryInterface::_SOURCE_ID => $product->id,
					GalleryInterface::_TYPE => GalleryInterface::TYPE_PRODUCT
				];
			})->toArray();

			// 2. Thực hiện create many để thêm mới các bản ghi vào bảng galleries
			$product->galleries()->createMany($dataToUpsert);
		});
	}
}
