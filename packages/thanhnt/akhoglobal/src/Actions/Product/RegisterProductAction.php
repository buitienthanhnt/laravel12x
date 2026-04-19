<?php

namespace Thanhnt\Akhoglobal\Actions\Product;

use Illuminate\Support\Facades\DB;
use Thanhnt\Akhoglobal\Actions\ShareAction\FormData;
use Thanhnt\Akhoglobal\Events\ProductRegisterEvent;
use Thanhnt\Akhoglobal\Models\Product;
use Thanhnt\Akhoglobal\Models\Types\{CategoryInterface, ProductInterface, GalleryInterface, PriceInterface, StockInterface};
use Thanhnt\Akhoglobal\Requests\Product\RegisterProduct;

class RegisterProductAction
{
	use FormData;

	public function execute(RegisterProduct $request)
	{
		// dd($request->all());
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
		 *
		 * explode galleries string to array with separator is | character
		 * because in request we will send galleries data with string format and separate each gallery path with | character
		 * example: "gallery1.jpg|gallery2.jpg|gallery3.jpg"
		 * after explode we will get array like this: ["gallery1.jpg", "gallery2.jpg", "gallery3.jpg"]
		 *
		 * @see \Illuminate\Http\Request::input() to get galleries data from request
		 * @see \Illuminate\Http\Request::file() to get file data 
		 */
		if ($galleries = $request->input(ProductInterface::R_GALLERIES)) {
			$this->syncGalaries($product, explode('|', $galleries));
		}

		/**
		 * sync categories
		 * @var array $categories
		 *
		 */
		if ($categories = $request->array(CategoryInterface::_PARENT_ID)) {
			$product->category()->sync($categories);
		}

		/**
		 * update price of product
		 * @var float $price
		 * @see \Illuminate\Http\Request::input() to get price data from request
		 */
		if ($price = $request->input(ProductInterface::R_PRICE)) {
			$this->updateProductPrice($product, $price, $request->input(PriceInterface::_DISCOUNT_PRICE));
		}

		/**
		 * update stock of product
		 * @var int $stock
		 * @see \Illuminate\Http\Request::input() to get stock data from request
		 *
		 */
		if ($stock = $request->input(ProductInterface::R_STOCKS)) {
			$this->updateProductStock($product, $stock, $request->input(ProductInterface::R_PRICE));
		}

		/**
		 * call event product register after create product success
		 * @var \Thanhnt\Akhoglobal\Events\ProductRegisterEvent
		 */
		ProductRegisterEvent::dispatch($product);

		return $product;
	}

	/**
	 * update price of product
	 *
	 * @param Product $product
	 * @param float $price
	 * @param float|null $discount_price
	 * @param string $currency
	 * @return void
	 */
	public function updateProductPrice(Product $product, float $price, ?float $discount_price = null, string $currency = 'VND')
	{
		$product->price()->create([
			PriceInterface::_PRICE => $price,
			PriceInterface::_DISCOUNT_PRICE => $discount_price,
			PriceInterface::_SOURCE_ID => $product->id,
		]);
	}

	/**
	 * update stock of product
	 *
	 * @param Product $product
	 * @param int $quantity
	 * @return void
	 */
	public function updateProductStock(Product $product, int $quantity, float $cost_price = 0)
	{
		$product->stocks()->create([
			StockInterface::_CURRENT_QTY => $quantity,
			StockInterface::_IMPORT_QTY => $quantity,
			StockInterface::_COST_PRICE => $cost_price,
		]);
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
