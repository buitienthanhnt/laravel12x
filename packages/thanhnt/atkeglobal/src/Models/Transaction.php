<?php

namespace Thanhnt\Atkeglobal\Models;

use Carbon\Traits\Timestamp;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Thanhnt\Atkeglobal\Models\Types\TransactionInterface;

class Transaction extends Model implements TransactionInterface
{
	use Timestamp;
	use SoftDeletes;

	protected $table = self::TABLE_NAME;
	protected $fillable = self::FILLED_FILEDS;
}
