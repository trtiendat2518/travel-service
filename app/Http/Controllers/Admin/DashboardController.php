<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\OrderResource;
use App\Models\Car;
use App\Models\Order;
use App\Models\Post;
use App\Models\Service;
use App\Models\Users;
use Illuminate\Http\Request;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use App\Exports\StatisticExport;
use App\Exports\StatisticByDayExport;
use App\Exports\StatisticByMonthExport;
use App\Exports\StatisticByYearExport;

class DashboardController extends Controller
{
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Dashboard: Thuê xe miền nam";
        $meta_title = "Dashboard";
        $url_canonical = $request->url();
        //---------------

        $posts = Post::all();
        $countPost = $posts->count();
        $services = Service::all();
        $countService = $services->count();
        $users = Users::all();
        $countUser = $users->count();
        $cars = Car::all();
        $countCar = $cars->count();

        return view('admin.pages.dashboard')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'countPost', 'countService', 'countUser', 'countCar',));
    }

    public function statisticDay(Request $request)
    {
        $data = $request->validate(
            [
                'from_date' => 'required',
                'to_date' => 'required'
            ],
            [
                'from_date.required' => 'Vui lòng chọn ngày bắt đầu',
                'to_date.required' => 'Vui lòng chọn ngày kết thúc'
            ]
        );

        $statisticByDay = Order::select(
            DB::raw("SUM(status = '0') AS order_standby"),
            DB::raw("SUM(status = '1') AS order_contacted"),
            DB::raw("SUM(status = '2') AS order_done"),
            DB::raw("SUM(status = '3') AS order_cancel"),
            DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as day')
        )
            ->whereBetween(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), [$data['from_date'], $data['to_date']])
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y")'))
            ->orderBy(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y")'), 'ASC')->get();
        return OrderResource::collection($statisticByDay);
    }

    public function statisticMonth(Request $request)
    {
        $data = $request->validate(
            [
                'from_month' => 'required',
                'to_month' => 'required'
            ],
            [
                'from_month.required' => 'Vui lòng chọn tháng bắt đầu',
                'to_month.required' => 'Vui lòng chọn tháng kết thúc'
            ]
        );

        $statisticByMonth = Order::select(
            DB::raw("SUM(status = '0') AS order_standby"),
            DB::raw("SUM(status = '1') AS order_contacted"),
            DB::raw("SUM(status = '2') AS order_done"),
            DB::raw("SUM(status = '3') AS order_cancel"),
            DB::raw('DATE_FORMAT(created_at, "%m-%Y") as day')
        )
            ->whereBetween(DB::raw('DATE_FORMAT(created_at, "%Y-%m")'), [$data['from_month'], $data['to_month']])
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%m-%Y")'))
            ->orderBy(DB::raw('DATE_FORMAT(created_at, "%m-%Y")'), 'ASC')->get();
        return OrderResource::collection($statisticByMonth);
    }

    public function statisticYear(Request $request)
    {
        $data = $request->validate(
            [
                'from_year' => 'required',
                'to_year' => 'required'
            ],
            [
                'from_year.required' => 'Vui lòng chọn năm bắt đầu',
                'to_year.required' => 'Vui lòng chọn năm kết thúc'
            ]
        );

        $statisticByYear = Order::select(
            DB::raw("SUM(status = '0') AS order_standby"),
            DB::raw("SUM(status = '1') AS order_contacted"),
            DB::raw("SUM(status = '2') AS order_done"),
            DB::raw("SUM(status = '3') AS order_cancel"),
            DB::raw('DATE_FORMAT(created_at, "%Y") as day')
        )
            ->whereBetween(DB::raw('DATE_FORMAT(created_at, "%Y")'), [$data['from_year'], $data['to_year']])
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%Y")'))
            ->orderBy(DB::raw('DATE_FORMAT(created_at, "%Y")'), 'ASC')->get();
        return OrderResource::collection($statisticByYear);
    }

    public function statisticShow(Request $request)
    {
        $sub30days = Carbon::now('Asia/Ho_Chi_Minh')->subdays(30)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();

        $statisticShow = Order::select(
            DB::raw("SUM(status = '0') AS order_standby"),
            DB::raw("SUM(status = '1') AS order_contacted"),
            DB::raw("SUM(status = '2') AS order_done"),
            DB::raw("SUM(status = '3') AS order_cancel"),
            DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y") as day')
        )
            ->whereBetween(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), [$sub30days, $now])
            ->groupBy(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y")'))
            ->orderBy(DB::raw('DATE_FORMAT(created_at, "%d-%m-%Y")'), 'ASC')->get();
        return OrderResource::collection($statisticShow);
    }

    public function exportStatistic()
    {
        $sub30days = Carbon::now('Asia/Ho_Chi_Minh')->subdays(30)->toDateString();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();
        return Excel::download(new StatisticExport($now, $sub30days), 'thong-ke-don-dat-thue-30-ngay.xlsx');
    }

    public function exportByDay($from_date, $to_date)
    {
        return Excel::download(new StatisticByDayExport($from_date, $to_date), 'thong-ke-don-dat-thue-theo-ngay.xlsx');
    }

    public function exportByMonth($from_month, $to_month)
    {
        return Excel::download(new StatisticByMonthExport($from_month, $to_month), 'thong-ke-don-dat-thue-theo-thang.xlsx');
    }

    public function exportByYear($from_year, $to_year)
    {
        return Excel::download(new StatisticByYearExport($from_year, $to_year), 'thong-ke-don-dat-thue-theo-nam.xlsx');
    }
}
