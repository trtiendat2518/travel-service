<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Users;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    public function registerIndex(Request $request)
    {
        //SEO
        $meta_desc = "Đăng ký tài khoản";
        $meta_title = "Đăng ký tài khoản";
        $url_canonical = $request->url();
        //---------------

        return view('auth.register')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function loginIndex(Request $request)
    {
        //SEO
        $meta_desc = "Đăng nhập";
        $meta_title = "Đăng nhập";
        $url_canonical = $request->url();
        //---------------

        return view('auth.login')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function verifyIndex(Request $request)
    {
        //SEO
        $meta_desc = "Xác thực tài khoản";
        $meta_title = "Xác thực tài khoản";
        $url_canonical = $request->url();
        //---------------

        return \view('auth.verify')->with(\compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    public function registerAccount(Request $request)
    {
        $data = $request->validate([
            'full_name' => 'bail|required|alpha_spaces|min:8|max:30',
            'phone_number' => 'bail|required|unique:users|numeric|digits_between:10,11',
            'email' => 'bail|required|unique:users|email|max:50',
            'address' => 'bail|required|min:10|max:128',
            'password' => 'bail|required|min:8|max:32',
        ], [
            'full_name.required' => 'Họ tên không được để trống',
            'full_name.alpha_spaces' => 'Họ tên không được chứa ký tự số hoặc ký tự đặc biệt',
            'full_name.min' => 'Họ tên nhập tối thiểu 8 ký tự',
            'full_name.max' => 'Họ tên không nhập quá 30 ký tự chữ',

            'phone_number.required' => 'Số điện thoại không được để trống',
            'phone_number.unique' => 'Số điện thoại này đã tồn tại',
            'phone_number.numeric' => 'Số điện thoại chỉ nhập ký tự số',
            'phone_number.digits_between' => 'Số điện thoại nhập 10 hoặc 11 số',

            'email.required' => 'Email không được để trống',
            'email.unique' => 'Email này đã tồn tại',
            'email.email' => 'Emai không đúng định dạng',
            'email.max' => 'Email tối đa 50 ký tự chữ',

            'address.required' => 'Địa chỉ không được để trống',
            'address.min' => 'Địa chỉ không nhập quá 10 ký tự',
            'address.max' => 'Địa chỉ không nhập quá 128 ký tự',

            'password.required' => 'Mật khẩu không được để trống',
            'password.min' => 'Mật khẩu ít nhất có 8 ký tự',
            'password.max' => 'Mật khẩu không quá 32 ký tự',
        ]);

        $newUser = new Users();

        $newUser->full_name = $data['full_name'];
        $newUser->phone_number = $data['phone_number'];
        $newUser->email = $data['email'];
        $newUser->address = $data['address'];
        $newUser->password = $data['password'];
        $newUser->register_date = now();
        $repeatPassword = $request->repeat_password;

        if ($newUser->password != $repeatPassword) {
            return redirect()->intended('/dang-ky')->with('fail', 'Mật khẩu không trùng khớp');
        } else {
            $newUser->password = md5($newUser->password);
            $newUser->save();

            $codeOtp = \rand(1000, 9999);

            $to_email = $newUser->email;
            $data = array("otp" => $codeOtp);
            Mail::send('auth.mail', $data, function ($message) use ($to_email) {
                $message->to($to_email)->subject('Xác thực tài khoản!');
                $message->from($to_email);
            });

            $request->session()->put('email', $newUser->email);
            $request->session()->put('verify', 'Vui lòng nhập mã xác thực, mã đã được gửi vào email của bạn');
            $request->session()->put('otp', $codeOtp);

            return redirect()->intended('xac-thuc');
        }
    }

    public function loginAccount(Request $request)
    {
        $data = $request->validate(
            [
                'email_phone' => 'bail|required',
                'password' => 'bail|required|min:8|max:32'
            ],
            [
                'email_phone.required' => 'Không được để trống',

                'password.required' => 'Mật khẩu không được để trống',
                'password.min' => 'Mật khẩu ít nhất có 8 ký tự',
                'password.max' => 'Mật khẩu không quá 32 ký tự'
            ]
        );

        $emailOrPhone = $data['email_phone'];
        $password = md5($data['password']);

        $check = Users::where('phone_number', $emailOrPhone)->where('password', $password)
            ->orWhere('email', $emailOrPhone)->where('password', $password)->first();

        if ($check) {
            if ($check->status == 1) {
                return back()->with('fail', 'Tài khoản chưa được kích hoạt');
            } else {
                $request->session()->put('id', $check->id);
                $request->session()->put('role', $check->role);
                if ($check->role == 0) {
                    return redirect()->intended('admin');
                } else if ($check->role == 1) {
                    return redirect()->intended('/');
                }
            }
        } else {
            return back()->with('fail', 'Tên đăng nhập hoặc mật khẩu không đúng');
        }
    }

    public function logoutAccount(Request $request)
    {
        $request->session()->flush();
        $request->session()->put('id', null);
        $request->session()->put('role', null);
        return redirect()->intended('/');
    }

    public function verifyAccount(Request $request)
    {
        $data = $request->validate([
            'verify' => 'bail|required',
        ], [
            'verify.required' => 'Mã xác thực được để trống',
        ]);

        $email = Session::get('email');
        $codeOtp = Session::get('otp');
        if ($data['verify'] == $codeOtp) {
            $user = Users::where('email', $email)->first();
            $user->status = 0;
            $user->save();

            $request->session()->put('id', $user->id);
            $request->session()->put('role', $user->role);
            $request->session()->forget('verify');
            $request->session()->forget('otp');

            if ($user->role == 0) {
                return redirect()->intended('admin');
            } else if ($user->role == 1) {
                return redirect()->intended('/');
            }
        } else {
            return back()->with('fail', 'Mã xác thực không đúng');
        }
    }
}
