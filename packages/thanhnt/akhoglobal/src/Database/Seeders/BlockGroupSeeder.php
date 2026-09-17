<?php

namespace Thanhnt\Akhoglobal\Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Thanhnt\Akhoglobal\Models\BlockGroup;

class BlockGroupSeeder extends Seeder
{
	/**
	 * Seed the application's database.
	 */
	public function run(): void
	{
		/**
		 * create many model item by insert function
		 */
		BlockGroup::insert([
			[
				'name' => 'Tầng 1',
				'key' => 'tang_1',
				'init_width' => 100,
				'init_height' => 100,
			],
			[
				'name' => 'Tầng 2',
				'key' => 'tang_2',
				'init_width' => 100,
				'init_height' => 100,
			]
		]);
	}
}
