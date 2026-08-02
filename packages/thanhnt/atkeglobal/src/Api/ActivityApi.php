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
		return Activity::select('id', 'name', 'type', 'created_at')->orderBy('created_at', 'desc')->get();
	}

	public function createTransaction(array $params)
	{
		return Transaction::create($params);
	}
}
