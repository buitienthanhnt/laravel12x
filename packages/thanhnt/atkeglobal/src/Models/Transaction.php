<?php

namespace Thanhnt\Atkeglobal\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Attributes\UseFactory;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Atkeglobal\Database\Factories\TransactionFactory;
use Thanhnt\Atkeglobal\Models\Types\ActivityInterface;
use Thanhnt\Atkeglobal\Models\Types\TransactionInterface;

/**
 * Class Transaction
 * @package Thanhnt\Atkeglobal\Models
 * @method static create(array $array)
 * @method static find(int $id)
 * @method static findOrFail(int $id)
 * @method static where(string $string, int $id)
 * @method static orderBy(string $string, string $string1)
 * @method static paginate(int $int)
 */
#[UseFactory(TransactionFactory::class)]
class Transaction extends Model implements TransactionInterface
{
	use Timestamp;
	use SoftDeletes;
	use HasFactory;

	protected $table = self::TABLE_NAME;
	protected $fillable = self::FILLED_FILEDS;


	protected $attributes = [
		// Tự động lấy thời gian hiện tại nếu bạn không truyền vào
		'time' => null,
	];

	/**
	 * Get all of the activities for the Transaction
	 * @return \Illuminate\Database\Eloquent\Relations\HasMany
	 * @throws \Illuminate\Contracts\Container\BindingResolutionException
	 */
	public function activities()
	{
		return $this->hasMany(Activity::class, ActivityInterface::_TRAN_ID, self::_ID);
	}

	/**
	 * define auto convert for time
	 * @return Attribute
	 */
	protected function time(): Attribute
	{
		return Attribute::make(
			set: fn($value) => $value ?: now(),
		);
	}
}
