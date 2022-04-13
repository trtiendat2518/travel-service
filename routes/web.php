<?php

use Illuminate\Support\Facades\Route;

Route::prefix('')->group(function () {
    Route::get('/', function () {
        return view('user.pages.home');
    });

    Route::get('/gioi-thieu', function () {
        return view('user.pages.introduction');
    });

    Route::get('/dich-vu-thue-xe', function () {
        return view('user.pages.ourservice');
    });

    Route::prefix('bai-viet')->group(function () {
        Route::get('/', function () {
            return view('user.pages.posts.index');
        });
        Route::get('/chi-tiet', function () {
            return view('user.pages.posts.detail');
        });
    });
});

Route::prefix('admin')->group(function () {
    Route::get('/login', function () {
        return view('admin.pages.auth.login');
    });

    Route::get('/', function () {
        return view('admin.pages.dashboard');
    });

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
