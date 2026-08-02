<?php

namespace Thanhnt\Atkeglobal\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Client\Pool;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Inertia\Inertia;

final class DashboardController extends Controller
{

	public function __construct(
		protected \Thanhnt\Atkeglobal\Api\ActivityApi $activityApi,
	) {
		// throw new \Exception('Not implemented');
	}

	public function sliverChart(Request $request): \Inertia\Response
	{
		$sliverApiUrl = 'https://giabac.vn/SilverInfo/GetGoldPriceChartFromSQLData';
		/**
		 * get data from server
		 * 1. Gọi API từ Server-to-Server (Không lo bị lỗi CORS)
		 * 2. Lấy dữ liệu dạng mảng/json (mặc định trả về mảng nếu API tính công)
		 * 3. Trả về dữ liệu dạng mảng/json cho view
		 * 4. Chuyên dữ liệu dạng mảng/json sang dữ liệu dạng bảng (Inertia)
		 * 5. Gọi đồng thời nhiều api trong 1 request sử dụng Pool trên Http kết quả căn cứ api thành công sau cùng.
		 */
		$responses = Http::pool(fn(Pool $pool) => [
			$pool->as('one_day')->get($sliverApiUrl, [
				'type' => $request->query('type', 'L'),
				'days' => 1
			]),
			$pool->as('seven_days')->get($sliverApiUrl, [
				'type' => $request->query('type', 'L'),
				'days' => 7
			]),
			$pool->as('thirty_days')->get($sliverApiUrl, [
				'type' => $request->query('type', 'L'),
				'days' => 30
			])
		]);

		// 2. Lấy dữ liệu dạng mảng/json (mặc định trả về mảng nếu API thành công)
		return Inertia::render('atkeglobal/screens/SliverChart', [
			'type' => $request->query('type', 'L'),
			'oneDayData' => $responses['one_day']->successful() ? $responses['one_day']->json() : [],
			'sevenDayData' => $responses['seven_days']->successful() ? $responses['seven_days']->json() : [],
			'thirtyDayData' => $responses['thirty_days']->successful() ? $responses['thirty_days']->json() : [],
		]);
	}

	public function activityTrans(Request $request): \Inertia\Response
	{
		$activityTrans = $this->activityApi->getActivityTrans();
		return Inertia::render('atkeglobal/screens/Transactions', [
			'transactions' => $activityTrans,
		]);
	}

	public function addTransaction(Request $request)
	{

		$params = $request->all();
		$this->activityApi->createTransaction($params);
		return redirect()->route('activity.trans');
	}


	/**
	 * @return \inertia\Response
	 */
	public function activities()
	{
		$activityPaginate = $this->activityApi->getActivitiesPaginate();
		return Inertia::render('atkeglobal/screens/Activities', [
			'activity_paginate' => $activityPaginate,
		]);
	}

	public function activityDetail($id)
	{

		$activity = $this->activityApi->getActivityDetail($id);
		return Inertia::render('atkeglobal/screens/ActivityDetail', [
			'activity' => $activity,
		]);
	}

	public function addActivity(Request $request)
	{
		$params = $request->all();
		$this->activityApi->createActivity($params);
		return redirect()->route('activity.dashboard');
	}
}
