<?php

namespace Thanhnt\Amuaglobal\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;
use Thanhnt\Amuaglobal\Models\Types\ProductInterface;

final class RegisterProduct extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            ProductInterface::_NAME => ['required', 'string', 'max:255'],
            ProductInterface::_ALIAS => ['max:255'],
            ProductInterface::_DESCRIPTION => ['string', 'max:512'],
            ProductInterface::_IMAGE_PATH => ['file', 'max:2048', 'image'],
        ];
    }
}
