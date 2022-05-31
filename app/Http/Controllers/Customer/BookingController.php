<?php

namespace App\Http\Controllers\Customer;

use App\Http\Controllers\Controller;
use App\Models\Order;
use App\Models\OrderDetail;
use App\Models\Users;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;

class BookingController extends Controller
{
    public function bookNotLoged(Request $request)
    {
        $data = $request->validate([
            'full_name' => ['required', 'alpha_spaces', 'max:30', 'min:8'],
            'email' => ['required', 'email', 'max:50'],
            'phone_number' => ['required', 'numeric', 'digits_between:10,11'],
            'service_id' => ['required'],
            'car_id' => ['required'],
            'place_from' => ['required'],
            'place_to' => ['required'],
            'start' => ['required', 'required:today'],
            'end' => ['required', 'after_or_equal:start']
        ], [
            'full_name.required' => 'Họ tên không được để trống',
            'full_name.alpha_spaces' => 'Họ tên không được chứa ký tự số hoặc ký tự đặc biệt',
            'full_name.min' => 'Họ tên nhập tối thiểu 8 ký tự',
            'full_name.max' => 'Họ tên không nhập quá 30 ký tự chữ',

            'phone_number.required' => 'Số điện thoại không được để trống',
            'phone_number.numeric' => 'Số điện thoại chỉ nhập ký tự số',
            'phone_number.digits_between' => 'Số điện thoại nhập 10 hoặc 11 số',

            'email.required' => 'Email không được để trống',
            'email.email' => 'Emai không đúng định dạng',
            'email.max' => 'Email tối đa 50 ký tự chữ',

            'service_id.required' => 'Vui lòng chọn dịch vụ!',
            'car_id.required' => 'Vui lòng chọn loại xe!',
            'place_from.required' => 'Vui lòng điểm đón!',
            'place_to.required' => 'Vui lòng điểm đến!',

            'start.required' => 'Vui lòng chọn ngày bắt đầu!',
            'start.after_or_equal' => 'Chỉ được chọn ngày hôm nay trở đi!',

            'end.required' => 'Vui lòng chọn ngày kết thúc!',
            'end.after_or_equal' => 'Ngày kết thúc phải lớn hơn bằng ngày dầu!',
        ]);

        if (preg_match("/(0)[0-9]{9}|(0)[0-9]{10}/", $data['phone_number'])) {
            $codeOtp = \rand(1000, 9999);

            $to_email = $data['email'];
            $data = array("otp" => $codeOtp);
            Mail::send('auth.mail', $data, function ($message) use ($to_email) {
                $message->to($to_email)->subject('Xác thực tài khoản!');
                $message->from($to_email);
            });
            return response()->json($codeOtp);
        } else {
            return response()->json('errorPhone');
        }
    }

    public function validateOtp(Request $request)
    {
        $data = $request->all();
        $ip_address = $request->ip();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();

        $count = Order::where(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), $now)->where('ip_address', $ip_address)->count();

        if ($count >= 5) {
            return response()->json('errorIp');
        } else {
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $newOrder = new Order();
            $newOrder->code = 'MVD' . now()->format('dmY') . strtoupper(substr(uniqid(sha1(time())), 0, 4));
            $newOrder->user_id = 0;
            $newOrder->note = 'Họ tên: ' . $data['full_name'] . ', Số điện thoại: ' .  $data['phone_number'] . ', Email: ' .  $data['email'] . ', Ghi chú: ' .  $data['note'];
            $newOrder->created_at = now();
            $newOrder->ip_address = $ip_address;
            $saveOrder = $newOrder->save();

            if ($saveOrder == true) {
                $newOrderDetail = new OrderDetail();
                $newOrderDetail->order_id = $newOrder->id;
                $newOrderDetail->service_id = $data['service_id'];
                $newOrderDetail->car_id = $data['car_id'];
                $newOrderDetail->place_from = $data['place_from'];
                $newOrderDetail->place_to = $data['place_to'];
                $newOrderDetail->start = $data['start'];
                $newOrderDetail->end = $data['end'];
                $newOrderDetail->save();
            }
        }
    }

    public function book(Request $request)
    {
        $data = $request->validate([
            'service_id' => ['required'],
            'car_id' => ['required'],
            'place_from' => ['required'],
            'place_to' => ['required'],
            'start' => ['required', 'required:today'],
            'end' => ['required', 'after_or_equal:start'],
            'note' => ['max: 300']
        ], [
            'service_id.required' => 'Vui lòng chọn dịch vụ!',
            'car_id.required' => 'Vui lòng chọn loại xe!',
            'place_from.required' => 'Vui lòng điểm đón!',
            'place_to.required' => 'Vui lòng điểm đến!',

            'start.required' => 'Vui lòng chọn ngày bắt đầu!',
            'start.after_or_equal' => 'Chỉ được chọn ngày hôm nay trở đi!',

            'end.required' => 'Vui lòng chọn ngày kết thúc!',
            'end.after_or_equal' => 'Ngày kết thúc phải lớn hơn bằng ngày dầu!',

            'note.max' => 'Nội dung ghi chú không quá 300 ký tự'
        ]);

        $ip_address = $request->ip();
        $now = Carbon::now('Asia/Ho_Chi_Minh')->toDateString();

        $count = Order::where(DB::raw('DATE_FORMAT(created_at, "%Y-%m-%d")'), $now)->where('ip_address', $ip_address)->count();

        if ($count >= 5) {
            return response()->json('errorIp');
        } else {
            date_default_timezone_set('Asia/Ho_Chi_Minh');
            $newOrder = new Order();
            $newOrder->code = 'MVD' . now()->format('dmY') . strtoupper(substr(uniqid(sha1(time())), 0, 4));
            $newOrder->user_id = $request->user_id;
            $newOrder->note = $data['note'];
            $newOrder->created_at = now();
            $newOrder->ip_address = $ip_address;
            $saveOrder = $newOrder->save();

            if ($saveOrder == true) {
                $newOrderDetail = new OrderDetail();
                $newOrderDetail->order_id = $newOrder->id;
                $newOrderDetail->service_id = $data['service_id'];
                $newOrderDetail->car_id = $data['car_id'];
                $newOrderDetail->place_from = $data['place_from'];
                $newOrderDetail->place_to = $data['place_to'];
                $newOrderDetail->start = $data['start'];
                $newOrderDetail->end = $data['end'];
                $newOrderDetail->save();
            }
        }
    }

    public function sendMail(Request $request)
    {
        $subject_mail = 'Bạn đã đặt dịch vụ thành công';
        $data = array();
        $to_email = $request->email;
        if ($to_email == null) {
            $user = Users::find($request->id);
            $to_email = $user->email;
        }

        Mail::send(
            'admin.pages.mail.email',
            $data,
            function ($message) use ($to_email, $subject_mail) {
                $message->to($to_email)->subject($subject_mail);
            }
        );
    }
}
