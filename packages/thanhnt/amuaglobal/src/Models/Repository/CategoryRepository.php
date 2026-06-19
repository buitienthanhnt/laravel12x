<?php

namespace Thanhnt\Amuaglobal\Models\Repository;

use Thanhnt\Akhoglobal\Models\Category;

final class CategoryRepository
{

	public function __construct(
		protected Category $category,
	) {
		// throw new \Exception('Not implemented');
	}

	/**
	 * get all category
	 * @return \Illuminate\Database\Eloquent\Collection<int, static>
	 */
	public function all()
	{
		return $this->category->all();
	}
}
