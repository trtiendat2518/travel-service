<?php

use Illuminate\Support\Facades\Route;
use App\Http\Middleware\CheckLoged;

Route::prefix('')->group(function () {
    //HomeController
    Route::get('/', 'HomeController@index');
    Route::get('gioi-thieu', 'HomeController@aboutUs');

    //AuthController
    Route::get('/dang-nhap', 'AuthController@loginIndex')->middleware('session');
    Route::get('/dang-ky', 'AuthController@registerIndex')->middleware('session');
    Route::get('/dang-xuat', 'AuthController@logoutAccount');
    Route::get('/xac-thuc', 'AuthController@verifyIndex')->middleware('otp');
    Route::get('/quen-mat-khau', 'AuthController@forgotIndex')->middleware('session');
    Route::get('/tao-mat-khau-moi', 'AuthController@newPasswordIndex')->middleware('forgot');
    Route::post('/dang-nhap-tai-khoan', 'AuthController@loginAccount');
    Route::post('/dang-ky-tai-khoan', 'AuthController@registerAccount');
    Route::post('/xac-thuc-tai-khoan', 'AuthController@verifyAccount');
    Route::post('/quen-mat-khau-tai-khoan', 'AuthController@forgotAccount');
    Route::post('/tao-moi-mat-khau-tai-khoan', 'AuthController@newPasswordAccount');
    Route::get('/thong-tin-ca-nhan', 'AuthController@infoIndex')->middleware('logedCus');
    Route::post('/chinh-sua-thong-tin', 'AuthController@infoEdit');
    Route::get('/doi-mat-khau', 'AuthController@changePasswordIndex')->middleware('logedCus');
    Route::post('/doi-mat-khau-tai-khoan', 'AuthController@changePasswordUpdate');

    //ServiceController
    Route::get('/dich-vu-thue-xe/{serviceSlug}', 'Customer\ServiceController@index');

    //CarController
    Route::get('/loai-xe/{carSlug}', 'Customer\CarController@index');

    //PostController
    Route::get('/bai-viet', 'Customer\PostController@index');
    Route::get('/bai-viet/{postSlug}', 'Customer\PostController@indexDetail');

    //OrderHistoryController
    Route::get('/lich-su-don-thue-xe', 'Customer\OrderHistoryController@index')->middleware('logedCus');
});

Route::prefix('admin')->group(function () {
    Route::middleware([CheckLoged::class])->group(function () {
        //DashboardController
        Route::get('/', 'Admin\DashboardController@index');

        //AuthController
        Route::get('/xac-thuc', 'AuthController@verifyAdminIndex')->middleware('otp');
        Route::get('/thong-tin-ca-nhan', 'AuthController@infoAdminIndex');
        Route::get('/doi-mat-khau', 'AuthController@changePasswordAdminIndex');

        //Admin/OrderController
        Route::resource('/don-dat-thue-xe', 'Admin\OrderController')->only('index');

        //Admin/CarController
        Route::resource('/quan-ly-loai-xe', 'Admin\CarController')->only('index');
        Route::get('/tao-moi-loai-xe', 'Admin\CarController@create');
        Route::get('/quan-ly-loai-xe/cap-nhat/{carSlug}', 'Admin\CarController@showUpgrade');

        //Admin/ServiceController
        Route::resource('/quan-ly-dich-vu', 'Admin\ServiceController')->only('index');
        Route::get('/tao-moi-dich-vu', 'Admin\ServiceController@create');
        Route::get('/quan-ly-dich-vu/cap-nhat/{serviceSlug}', 'Admin\ServiceController@showUpgrade');

        //Admin/PostController
        Route::resource('/quan-ly-bai-viet', 'Admin\PostController')->only('index');
        Route::get('/tao-moi-bai-viet', 'Admin\PostController@create');
        Route::get('/quan-ly-bai-viet/cap-nhat/{postSlug}', 'Admin\PostController@showUpgrade');

        //Admin/AccountController
        Route::resource('/quan-ly-tai-khoan', 'Admin\AccountController')->only('index');

        //Admin/ConsultingController
        Route::resource('/quan-ly-lien-he-tu-van', 'Admin\ConsultingController')->only('index');

        //Admin/ReviewController
        Route::resource('/quan-ly-danh-gia', 'Admin\ReviewController')->only('index');
    });
});

Route::any('/{page?}', 'HomeController@error')->where('page', '.*');
Route::get('/404', 'HomeController@error');
