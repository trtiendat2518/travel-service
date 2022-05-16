<?php

namespace App\Http\Controllers;

use App\Http\Resources\ReviewResource;
use App\Models\Car;
use App\Models\Contact;
use App\Models\Review;
use Illuminate\Http\Request;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    public function error(Request $request)
    {
        //SEO
        $meta_desc = "Không tìm thấy trang";
        $meta_title = "Không tìm thấy trang";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();
        $car = Car::where('status', '=', 0)->get();

        return view('error.404')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service', 'car'));
    }

    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Trang chủ: Thuê xe miền nam";
        $meta_title = "Trang chủ";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();
        $car = Car::where('status', '=', 0)->get();

        return view('customer.pages.home')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service', 'car'));
    }

    public function aboutUs(Request $request)
    {
        //SEO
        $meta_desc = "Về chúng tôi - Thuê Xe Miền Nam";
        $meta_title = "Về chúng tôi";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();
        $car = Car::where('status', '=', 0)->get();

        return view('customer.pages.about.index')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service', 'car'));
    }

    public function contact(Request $request)
    {
        $data = $request->validate(
            [
                'full_name' => 'bail|required|alpha_spaces|min:8|max:30',
                'phone_number' => 'bail|required|numeric|digits_between:10,11',
                'note' => 'bail|required|min:10|max:200'
            ],
            [
                'full_name.required' => 'Họ tên không được để trống',
                'full_name.alpha_spaces' => 'Họ tên không được chứa ký tự số hoặc ký tự đặc biệt',
                'full_name.min' => 'Họ tên nhập tối thiểu 8 ký tự',
                'full_name.max' => 'Họ tên không nhập quá 30 ký tự chữ',

                'phone_number.required' => 'Số điện thoại không được để trống',
                'phone_number.numeric' => 'Số điện thoại chỉ nhập ký tự số',
                'phone_number.digits_between' => 'Số điện thoại nhập 10 hoặc 11 số',

                'note.required' => 'Ghi chú không được để trống',
                'note.min' => 'Ghi chú không nhập quá 10 ký tự',
                'note.max' => 'Ghi chú không nhập quá 200 ký tự',
            ]
        );
        $ip_address = $request->ip();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();

        $count = Contact::where(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), $now)->where('ip_address', $ip_address)->count();

        if ($count >= 5) {
            return response()->json('errorIp');
        } else {
            if (preg_match("/(0)[0-9]{9}|(0)[0-9]{10}/", $data['phone_number'])) {
                $newContact = new Contact();
                $newContact->full_name = $data['full_name'];
                $newContact->phone_number = $data['phone_number'];
                $newContact->note = $data['note'];
                $newContact->created_at = now();
                $newContact->ip_address = $ip_address;
                $newContact->save();
            } else {
                return response()->json('errorPhone');
            }
        }
    }

    public function reviewHome()
    {
        $review = Review::join('orders', 'orders.id', '=', 'reviews.order_id')
            ->join('users', 'users.id', '=', 'orders.user_id')
            ->select('reviews.*', 'users.full_name')
            ->orderBy('star', 'DESC')->limit(6)->get();
        return ReviewResource::collection($review);
    }
}
