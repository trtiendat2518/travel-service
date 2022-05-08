<?php

use Illuminate\Support\Facades\Route;

Route::prefix('')->group(function () {
    Route::get('/', 'HomeController@index');

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

    Route::get('gioi-thieu', 'HomeController@aboutUs');

    Route::get('dich-vu-thue-xe', function () {
        return view('customer.pages.services.detail');
    });

    Route::prefix('bai-viet')->group(function () {
        Route::get('/', function () {
            return view('customer.pages.posts.index');
        });
        Route::get('/chi-tiet', function () {
            return view('customer.pages.posts.detail');
        });
    });
});

Route::prefix('admin')->group(function () {
    Route::get('/', function () {
        return view('admin.pages.dashboard');
    })->middleware('loged');

    Route::get('/quan-ly-tai-khoan', function () {
        return view('admin.pages.account.list');
    });

    Route::get('/don-dat-thue-xe', function () {
        return view('admin.pages.order.list');
    });

    Route::get('/quan-ly-loai-xe', function () {
        return view('admin.pages.car.list');
    });

    Route::get('/tao-moi-dich-vu', function () {
        return view('admin.pages.service.create');
    });
    Route::get('/quan-ly-dich-vu', function () {
        return view('admin.pages.service.list');
    });

    Route::get('/tao-moi-bai-viet', function () {
        return view('admin.pages.post.create');
    });
    Route::get('/quan-ly-bai-viet', function () {
        return view('admin.pages.post.list');
    });

    Route::get('/lien-he-tu-van', function () {
        return view('admin.pages.consulting.list');
    });
});
