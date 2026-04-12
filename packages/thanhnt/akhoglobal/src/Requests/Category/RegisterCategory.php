<?php

namespace Thanhnt\Akhoglobal\Requests\Category;

use Illuminate\Foundation\Http\FormRequest;
use Thanhnt\Akhoglobal\Models\Types\CategoryInterface;

class RegisterCategory extends FormRequest
{

	public function authorize(): bool
	{
		return true;
	}

	public function rules(): array
	{
		return [
			CategoryInterface::_NAME => ['required', 'string', 'max:255'],
			CategoryInterface::_ALIAS => ['max:255'],
			CategoryInterface::_DESCRIPTION => ['string', 'max:512'],
			CategoryInterface::_IMAGE_PATH => ['file', 'max:2048', 'image'],
		];
	}
}
