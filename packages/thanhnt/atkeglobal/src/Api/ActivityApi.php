<?php

namespace Thanhnt\Atkeglobal\Api;

use Thanhnt\Atkeglobal\Models\Activity;
use Thanhnt\Atkeglobal\Models\Transaction;

final class ActivityApi
{
	public function __construct() {}

	public function getActivitiesPaginate($perPage = 10)
	{
		return Activity::orderBy('created_at', 'desc')->paginate($perPage);
	}

	public function getActivityDetail($id)
	{
		return Activity::find($id);
	}

	public function createActivity(array $params)
	{
		$newModel = Activity::create($params);
		return $newModel;
	}

	public function getActivityTrans()
	{
		return Transaction::orderBy('created_at', 'desc')->paginate(12);
	}

	public function createTransaction(array $params)
	{
		// dd($params);
		return Transaction::factory()->create($params);
	}
}
