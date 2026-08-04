<?php

namespace Thanhnt\Atkeglobal\Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Override;
use Thanhnt\Atkeglobal\Models\Transaction;
use Thanhnt\Atkeglobal\Models\Types\TransactionInterface;

final class TransactionFactory extends Factory
{

	/**
	 * The name of the factory's corresponding model.
	 *
	 * @var class-string<\Illuminate\Database\Eloquent\Model>
	 */
	protected $model = Transaction::class;

	#[Override]
	function definition()
	{
		return [
			TransactionInterface::_LABEL => null,
			TransactionInterface::_TIME => now()->toDateTimeString(),
		];
	}
}
