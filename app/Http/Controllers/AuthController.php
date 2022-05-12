<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Service;
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

        $service = Service::where('status', '=', 0)->get();

        return view('auth.register')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function loginIndex(Request $request)
    {
        //SEO
        $meta_desc = "Đăng nhập";
        $meta_title = "Đăng nhập";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return view('auth.login')->with(compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function verifyIndex(Request $request)
    {
        //SEO
        $meta_desc = "Xác thực tài khoản";
        $meta_title = "Xác thực tài khoản";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return \view('auth.verify')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function verifyAdminIndex(Request $request)
    {
        //SEO
        $meta_desc = "Xác thực tài khoản";
        $meta_title = "Xác thực tài khoản";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return \view('admin.pages.info.verify')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function forgotIndex(Request $request)
    {
        //SEO
        $meta_desc = "Quên mật khẩu";
        $meta_title = "Quên mật khẩu";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return \view('auth.forgot_password')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
    }

    public function newPasswordIndex(Request $request)
    {
        //SEO
        $meta_desc = "Tạo mới mật khẩu";
        $meta_title = "Tạo mới mật khẩu";
        $url_canonical = $request->url();
        //---------------

        $service = Service::where('status', '=', 0)->get();

        return \view('auth.new_password')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'service'));
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
                $request->session()->put('name', $check->full_name);
                $request->session()->put('email', $check->email);
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
            if (Session::get('forgot')) {
                $request->session()->forget('verify');
                $request->session()->forget('otp');
                return redirect()->intended('tao-mat-khau-moi');
            } else if (Session::get('info')) {
                $id = Session::get('id');
                $user = Users::find($id);
                if (Session::get('editEmail') != null) {
                    $newEmail = Session::get('editEmail');
                    $user->email = $newEmail;
                    $user->save();
                    $request->session()->forget('editEmail');
                }
                if (Session::get('editPhone') != null) {
                    $newPhone = Session::get('editPhone');
                    $user->phone_number = $newPhone;
                    $user->save();
                    $request->session()->forget('editPhone');
                }
                $request->session()->forget('verify');
                $request->session()->forget('otp');
                $request->session()->forget('info');
                if ($user->role == 0) {
                    return redirect()->intended('/admin/thong-tin-ca-nhan')->with('success', 'Chỉnh sửa thông tin thành công');
                } else {
                    return redirect()->intended('/thong-tin-ca-nhan')->with('success', 'Chỉnh sửa thông tin thành công');
                }
            } else {
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
            }
        } else {
            return back()->with('fail', 'Mã xác thực không đúng');
        }
    }

    public function forgotAccount(Request $request)
    {
        $data = $request->validate(
            [
                'email_phone' => 'bail|required'
            ],
            [
                'email_phone.required' => 'Không được để trống'
            ]
        );

        $emailOrPhone = $data['email_phone'];
        $checkUser = Users::where('phone_number', $emailOrPhone)->orWhere('email', $emailOrPhone)->first();

        if ($checkUser) {
            $codeOtp = \rand(1000, 9999);
            $tokenForgot = \md5(\rand() . \time());

            $to_email = $checkUser->email;
            $data = array("otp" => $codeOtp);
            Mail::send('auth.mail', $data, function ($message) use ($to_email) {
                $message->to($to_email)->subject('Xác thực tài khoản!');
                $message->from($to_email);
            });

            $request->session()->put('email', $checkUser->email);
            $request->session()->put('verify', 'Vui lòng nhập mã xác thực, mã đã được gửi vào email của bạn');
            $request->session()->put('forgot', $tokenForgot);
            $request->session()->put('otp', $codeOtp);

            return redirect()->intended('xac-thuc');
        } else {
            return back()->with('fail', 'Email hoặc Số điện thoại không đúng');
        }
    }

    public function newPasswordAccount(Request $request)
    {
        $data = $request->validate(
            [
                'password' => 'bail|required|min:8|max:32'
            ],
            [
                'password.required' => 'Mật khẩu không được để trống',
                'password.min' => 'Mật khẩu ít nhất có 8 ký tự',
                'password.max' => 'Mật khẩu không quá 32 ký tự'
            ]
        );

        $password = $data['password'];
        $repeatPassword = $request->repeat_password;
        $email = Session::get('email');

        $user = Users::where('email', $email)->first();

        if ($password == $repeatPassword) {
            $request->session()->forget('forgot');
            $user->password = \md5($password);
            $user->save();
            return redirect()->intended('/dang-nhap')->with('success', 'Đổi mật khẩu thành công');
        } else {
            return back()->with('fail', 'Mật khẩu không trùng khớp');
        }
    }

    public function infoIndex(Request $request)
    {
        //SEO
        $meta_desc = "Hồ sơ cá nhân - Thông tin tài khoản";
        $meta_title = "Hồ sơ cá nhân";
        $url_canonical = $request->url();
        //---------------

        $user = Users::find(Session::get('id'));
        $service = Service::where('status', '=', 0)->get();

        return \view('customer.pages.info.edit_info')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'user', 'service'));
    }

    public function infoAdminIndex(Request $request)
    {
        //SEO
        $meta_desc = "Hồ sơ cá nhân - Thông tin tài khoản";
        $meta_title = "Hồ sơ cá nhân";
        $url_canonical = $request->url();
        //---------------

        $user = Users::find(Session::get('id'));

        return \view('admin.pages.info.edit_info')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'user'));
    }

    public function infoEdit(Request $request)
    {
        $id = Session::get('id');
        $user = Users::find($id);

        $data = $request->validate(
            [
                'full_name' => 'bail|alpha_spaces|min:8|max:30',
                'phone_number' => "bail|unique:users,phone_number,$id,id|numeric|digits_between:10,11",
                'email' => "bail|unique:users,email,$id,id|email|max:50",
                'address' => 'bail|min:10|max:128',
            ],
            [
                'full_name.alpha_spaces' => 'Họ tên không được chứa ký tự số hoặc ký tự đặc biệt',
                'full_name.min' => 'Họ tên nhập tối thiểu 8 ký tự',
                'full_name.max' => 'Họ tên không nhập quá 30 ký tự chữ',

                'phone_number.unique' => 'Số điện thoại này đã tồn tại',
                'phone_number.numeric' => 'Số điện thoại chỉ nhập ký tự số',
                'phone_number.digits_between' => 'Số điện thoại nhập 10 hoặc 11 số',

                'email.unique' => 'Email này đã tồn tại',
                'email.email' => 'Emai không đúng định dạng',
                'email.max' => 'Email tối đa 50 ký tự chữ',

                'address.min' => 'Địa chỉ không nhập quá 10 ký tự',
                'address.max' => 'Địa chỉ không nhập quá 128 ký tự',
            ]
        );

        $fullName = $data['full_name'];
        $phoneNumber = $data['phone_number'];
        $email = $data['email'];
        $address = $data['address'];
        $token = \md5(\rand() . \time());

        if ($phoneNumber != $user->phone_number && $email == $user->email) {
            $request->session()->put('info', $token);
            $request->session()->put('editPhone', $phoneNumber);
            $this->sendEmail($user);
            if ($user->role == 0) {
                return redirect()->intended('admin/xac-thuc');
            } else {
                return redirect()->intended('xac-thuc');
            }
        } else if ($phoneNumber == $user->phone_number && $email != $user->email) {
            $request->session()->put('info', $token);
            $request->session()->put('editEmail', $email);
            $this->sendEmail($user);
            if ($user->role == 0) {
                return redirect()->intended('admin/xac-thuc');
            } else {
                return redirect()->intended('xac-thuc');
            }
        } else if ($phoneNumber != $user->phone_number && $email != $user->email) {
            $request->session()->put('info', $token);
            $request->session()->put('editPhone', $phoneNumber);
            $request->session()->put('editEmail', $email);
            $this->sendEmail($user);
            if ($user->role == 0) {
                return redirect()->intended('admin/xac-thuc');
            } else {
                return redirect()->intended('xac-thuc');
            }
        } else {
            $user->full_name = $fullName;
            $user->address = $address;
            $user->save();
            return back()->with('success', 'Chỉnh sửa thông tin thành công');
        }
    }

    public function sendEmail($user)
    {
        $codeOtp = \rand(1000, 9999);

        $to_email = $user->email;
        $data = array("otp" => $codeOtp);
        Mail::send('auth.mail', $data, function ($message) use ($to_email) {
            $message->to($to_email)->subject('Xác thực tài khoản!');
            $message->from($to_email);
        });

        Session::put('verify', 'Vui lòng nhập mã xác thực, mã đã được gửi vào email của bạn');
        Session::put('otp', $codeOtp);
    }

    public function changePasswordIndex(Request $request)
    {
        //SEO
        $meta_desc = "Thay đổi mật khẩu";
        $meta_title = "Thay đổi mật khẩu";
        $url_canonical = $request->url();
        //---------------

        $user = Users::find(Session::get('id'));
        $service = Service::where('status', '=', 0)->get();

        return \view('customer.pages.info.change_password')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'user', 'service'));
    }

    public function changePasswordAdminIndex(Request $request)
    {
        //SEO
        $meta_desc = "Thay đổi mật khẩu";
        $meta_title = "Thay đổi mật khẩu";
        $url_canonical = $request->url();
        //---------------

        $user = Users::find(Session::get('id'));

        return \view('admin.pages.info.change_password')->with(\compact('meta_desc', 'meta_title', 'url_canonical', 'user'));
    }

    public function changePasswordUpdate(Request $request)
    {
        $id = Session::get('id');
        $user = Users::find($id);

        $data = $request->validate(
            [
                'current_password' => 'bail|required|min:8|max:32',
                'new_password' => 'bail|required|min:8|max:32',
            ],
            [
                'current_password.required' => 'Mật khẩu không được để trống',
                'current_password.min' => 'Mật khẩu ít nhất có 8 ký tự',
                'current_password.max' => 'Mật khẩu không quá 32 ký tự',

                'new_password.required' => 'Mật khẩu không được để trống',
                'new_password.min' => 'Mật khẩu ít nhất có 8 ký tự',
                'new_password.max' => 'Mật khẩu không quá 32 ký tự',
            ]
        );

        $currentPassword = \md5($data['current_password']);
        $newPassword = $data['new_password'];
        $repeatNewPassword = $request->repeat_password;

        if ($currentPassword == $user->password) {
            if ($newPassword == $repeatNewPassword) {
                $user->password = \md5($newPassword);
                $user->save();
                return back()->with('success', 'Thay đổi mật khẩu thành công');
            } else {
                return back()->with('fail', 'Mật khẩu không trùng khớp');
            }
        } else {
            return back()->with('fail', 'Mật khẩu hiện tại không đúng');
        }
    }
}
