<?php

namespace Thanhnt\Atkeglobal\Controllers;

use App\Http\Controllers\Controller;
use DOMDocument;
use DOMXPath;
use Illuminate\Http\Client\Pool;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
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
         * Trên xampp của Window sẽ bị lỗi chứng chỉ khi gọi tới server bên thứ 3: cURL error 60: SSL certificate problem: unable to get local issuer certificate
         */
        $responses = Http::withHeaders([
            'User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        ])->withOptions([
            'verify' => false, // Bỏ qua lỗi SSL cURL error 60 khi chạy ở localhost với windows
        ])->pool(fn(Pool $pool) => [
            $pool->as('one_day')
                ->withHeaders(['User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'])
                ->withOptions(['verify' => false]) // Đưa vào từng request trong pool, bỏ qua lỗi SSL cURL error 60 khi chạy ở localhost
                ->get($sliverApiUrl, [
                    'type' => $request->query('type', 'L'),
                    'days' => 1
                ]),
            $pool->as('seven_days')
                ->withHeaders(['User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'])
                ->withOptions(['verify' => false]) // Đưa vào từng request trong pool, bỏ qua lỗi SSL cURL error 60 khi chạy ở localhost
                ->get($sliverApiUrl, [
                    'type' => $request->query('type', 'L'),
                    'days' => 7
                ]),
            $pool->as('thirty_days')
                ->withHeaders(['User-Agent' => 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'])
                ->withOptions(['verify' => false]) // Đưa vào từng request trong pool, bỏ qua lỗi SSL cURL error 60 khi chạy ở localhost
                ->get($sliverApiUrl, [
                    'type' => $request->query('type', 'L'),
                    'days' => 30
                ])
        ]);

        // 2. Lấy dữ liệu dạng mảng/json (mặc định trả về mảng nếu API thành công)
        try {
            return Inertia::render('atkeglobal/screens/SliverChart', [
                'type' => $request->query('type', 'L'),
                'oneDayData' => $responses['one_day']->successful() ? $responses['one_day']->json() : [],
                'sevenDayData' => $responses['seven_days']->successful() ? $responses['seven_days']->json() : [],
                'thirtyDayData' => $responses['thirty_days']->successful() ? $responses['thirty_days']->json() : [],
            ]);
        } catch (\Throwable $th) {
            return Inertia::render('atkeglobal/screens/SliverChart', [
                'type' => $request->query('type', 'L'),
                'oneDayData' => [],
                'sevenDayData' => [],
                'thirtyDayData' => [],
            ]);
        }
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

    public function transactionDetail(int $id): \Inertia\Response
    {
        $transactionDetail = \Thanhnt\Atkeglobal\Models\Transaction::with('activities')->find($id);
        return Inertia::render('atkeglobal/screens/TransactionDetail', [
            'transaction' => $transactionDetail,
        ]);
    }

    public function addTransaction(Request $request)
    {
        $params = $request->all();
        $newTransaction = $this->activityApi->createTransaction($params);
        return redirect("transaction/detail/$newTransaction->id");
    }

    /**
     * @return \inertia\Response
     */
    public function activities()
    {
        $activityPaginate = $this->activityApi->getActivitiesPaginate(99);
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
        return redirect()->back();
        // return redirect()->route('activity.dashboard');
    }

    public function loDe()
    {
        /**
         * Tải xuống nội dung html dữ liệu đề đặc biệt 365 ngày từ xosodaiphat.com
         */
        $content = Http::get('https://xosodaiphat.com/XSDPThongKeAjax/AjaxTKGiaiDB', [
            "rollingNo" => 365,
            "lotteryId" => 0,
        ]);
        // 2. Khởi tạo DOMDocument
        $dom = new DOMDocument();

        // Tắt cảnh báo lỗi nếu HTML không chuẩn format xml
        libxml_use_internal_errors(true);

        // Load nội dung HTML với encoding UTF-8 để không bị lỗi font Tiếng Việt
        $dom->loadHTML(mb_convert_encoding($content, 'HTML-ENTITIES', 'UTF-8'));

        // 3. Sử dụng XPath để tìm kiếm class "div-statistic"
        $xpath = new DOMXPath($dom);
        // Truy vấn tất cả phần tử có class là "div-statistic"
        $elements = $xpath->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' div-statistic ')]");

        // 4. Lấy nội dung
        $results = [];
        foreach ($elements as $element) {
            /**
             * Lấy cả thẻ HTML(lấy cả nút, không lấy mỗi nội dung)
             */
            $results[] = $dom->saveHTML($element);
        }
        /**
         * 5.Nội dung cần lấy là phần tử số 1, phần tử số 2 là nội dung khác
         */
        $lode365 = $results[0];
        /**
         * 6.Tải lại nội dung html của nút số 1 vừa lấy bên trên sử dụng DOMDocument
         * sau đó sẽ tách tiếp nội dung để lấy mỗi kết quả đặc biệt
         */
        $dom->loadHTML(mb_convert_encoding($lode365, 'HTML-ENTITIES', 'UTF-8'));
        /**
         *
         */
        libxml_clear_errors();
        /**
         * 7.Lấy các thẻ có class = color-reb
         * đây là các thẻ chứa 2 số cuối giải đặc biệt
         */
        $xpath365 = new DOMXPath($dom);
        $elements365 = $xpath365->query("//*[contains(concat(' ', normalize-space(@class), ' '), ' color-reb ')]");
        $results365 = [];
        /**
         * 8.Lấy nội dung các thẻ vừa tìm được
         */
        foreach ($elements365 as $element365) {
            if (is_numeric($element365->nodeValue)) {
                $results365[] = (int) $element365->nodeValue; // Chỉ lấy nội dung của thẻ, không lấy nút
            }
        }
        /**
         * 9.Phân loại và nhóm các phần tử xuất hiện trong mảng theo số lần xuất hiện(số đặc biệt(00-99) => số lần xuất hiện).
         * vd:
         * [16 => 7, 22 => 8, 89 => 5, ...]
         */
        $group365 = array_count_values($results365);
        /**
         * 10. Xác định các phần tử chưa xuất hiện để thêm vào mảng cho đủ mảng 00 -> 99
         * Tạo một mảng phẳng chứa tất cả các số từ 1 đến 99
         */
        $allNumbers = range(1, 99);

        // 10.1. Tìm các số có trong $allNumbers nhưng KHÔNG CÓ trong $myArray
        $missingNumbers = array_diff($allNumbers, array_keys($group365));

        // 10.2. (Tùy chọn) Đánh lại số thứ tự index của mảng kết quả từ 0, 1, 2...
        $missingNumbers = array_values($missingNumbers);
        /**
         * 10.3 Nạp vào mảng chính với giá trị bằng: 0 để đủ từ 00 -> 99
         */
        foreach ($missingNumbers as $value) {
            $group365[$value] = 0;
        }
        /**
         * 11. Sắp xếp mảng chính theo số lần xuất hiện, từ ít tới nhiều(Sắp xếp mảng theo thứ tự tăng dần và duy trì liên kết chỉ mục)
         * [88 => 0, 12 => 1, 56 => 2, ...]
         */
        asort($group365);
		// dd($group365);

        /**
         * 12. Chia nhóm theo tần suất xuất hiện với 3 mức:
         * ít về , trung bình về, nhiều về
         */
        $min365 = array_slice($group365, 0, 30, true); // Lấy 30 số ít xuất hiện nhất(về nhất) [22 => 0, 09 => 1, ...]
        $populate365 = array_slice($group365, 30, 40, true); // Lấy 40 số nhiều xuất hiện trung bình(về trung bình) [54 => 5, 83 => 4, ...]
        $max365 = array_slice($group365, 70, 30, true); // Lấy 30 số xuất hiện nhiều nhất(về nhiều nhất) [11 => 8, 56 => 9, ...]
		// dd(count($group365), $min365, $populate365, $max365);
		// $this->formatLodeChart($group365);

        /**
         * 13.
         * Lấy 20 số ngẫu nhiên trong nhóm ít xuất hiện nhất,
         * Lấy 30 số ngẫu nhiên trong nhóm nhiều xuất hiện trung bình,
         * Lấy 20 số ngẫu nhiên trong nhóm nhiều xuất hiện nhất
         * (Nhóm khóa(là các số từ 00 -> 99) trước, lấy ngẫu nhiên sau)
         */
        $min365_random = Arr::random(array_keys($min365), 20);
        $populate365_random = Arr::random(array_keys($populate365), 30);
        $max365_random = Arr::random(array_keys($max365), 20);
        $this->groupByHead(array_values(
            Arr::sort([
                ...$min365_random,
                ...$populate365_random,
                ...$max365_random,
            ])
        ));
        return Inertia::render('atkeglobal/screens/Lode', [
            "min365_random" => $min365_random,
            "populate365_random" => $populate365_random,
            "max365_random" => $max365_random,
            "all365_random" => $this->groupByHead(array_values(
                Arr::sort([
                    ...$min365_random,
                    ...$populate365_random,
                    ...$max365_random,
                ])
            )),
            'chart_data' => $this->formatLodeChart($group365),
        ]);
        dd(Arr::random(array_keys($min365), 20), Arr::random(array_keys($populate365), 30), Arr::random(array_keys($max365), 20),);

        /**
         * 14. Danh sách bản đò apexcharts
         */
        // https://apexcharts.com/javascript-chart-demos/heatmap-charts/basic/
        // https://apexcharts.com/javascript-chart-demos/heatmap-charts/rounded/
        // https://apexcharts.com/javascript-chart-demos/heatmap-charts/gradient-legend/
        //
    }

    protected function formatLodeChart($group365)
    {
        ksort($group365); // Sắp xếp mảng theo key từ nhỏ tới lớn
        $headGroup = array_chunk($group365, 10, true);
        $seria = [];
        for ($i = 0; $i < count($headGroup); $i++) {
            $seria[] = [
                "name" => $i,
                "data" => array_map(function ($value, $key) {
                    return [
                        "x" => ((string) $key)[-1],
                        "y" => $value
                    ];
                }, $headGroup[$i], array_keys($headGroup[$i])),
                "group" => "apexcharts-axis-0"
            ];
        }
        return $seria;
    }

    protected function groupByHead($group365)
    {
        $newGroup = [];
        foreach ($group365 as $value) {
            $newGroup[$value / 10][] = $value;
        }
        ksort($newGroup);
        return $newGroup;
    }
}
