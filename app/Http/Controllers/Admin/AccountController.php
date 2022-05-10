<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Resources\UserResource;
use App\Models\Users;
use App\Repositories\User\UserInterface;
use Illuminate\Http\Request;

class AccountController extends Controller
{
    /**
     * @var UserInterface|\App\Repositories\Repository
     */
    protected $userRepository;

    public function __construct(UserInterface $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        //SEO
        $meta_desc = "Quản lý tài khoản";
        $meta_title = "Quản lý tài khoản";
        $url_canonical = $request->url();
        //---------------

        return view('admin.pages.account.list')->with(compact('meta_desc', 'meta_title', 'url_canonical'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'full_name' => ['required', 'alpha_spaces', 'max:30', 'min:8'],
            'email' => ['required', 'unique:users', 'email', 'max:50'],
            'phone_number' => ['required', 'unique:users', 'numeric', 'digits_between:10,11'],
            'password' => ['required', 'max:32', 'min:8'],
            'role' => ['required'],
            'address' => ['required', 'max:128', 'min:10'],
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

            'role.required' => 'Loại tài khoản không được để trống',
        ]);

        date_default_timezone_set('Asia/Ho_Chi_Minh');
        $newUser = new Users();
        $newUser->full_name = $data['full_name'];
        $newUser->email = $data['email'];
        $newUser->phone_number = $data['phone_number'];
        $newUser->password = \md5($data['password']);
        $newUser->role = $data['role'];
        $newUser->address = $data['address'];
        $newUser->status = 0;
        $newUser->register_date = now();
        $newUser->save();
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($currentEntries)
    {
        $listUsers = $this->userRepository->list($currentEntries);
        return UserResource::collection($listUsers);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $userId)
    {
        $data = $request->validate([
            'role' => ['required'],
            'address' => ['required', 'max:128', 'min:10'],
        ], [
            'address.required' => 'Địa chỉ không được để trống',
            'address.min' => 'Địa chỉ không nhập quá 10 ký tự',
            'address.max' => 'Địa chỉ không nhập quá 128 ký tự',

            'role.required' => 'Loại tài khoản không được để trống',
        ]);

        $newUser = Users::find($userId);
        $newUser->role = $data['role'];
        $newUser->address = $data['address'];
        $newUser->save();
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($userId)
    {
        $user = Users::find($userId);
        $user->delete();
    }

    public function change($userId)
    {
        $user = Users::find($userId);
        if ($user->status == 0) {
            $user->status = 1;
            $user->save();
        } else {
            $user->status = 0;
            $user->save();
        }
    }

    public function search($query, $currentEntries)
    {
        $searchUser = $this->userRepository->search($query, $currentEntries);
        return UserResource::collection($searchUser);
    }

    public function filter($value, $currentEntries)
    {
        $filterUser = $this->userRepository->filter($value, $currentEntries);
        return UserResource::collection($filterUser);
    }
}
