<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::prefix('customer')->group(function () {
    Route::get('service/detail/{serviceSlug}', 'Customer\ServiceController@detail');
    Route::get('service/popular', 'Customer\ServiceController@popular');

    Route::get('post/detail/{postSlug}', 'Customer\PostController@detail');
    Route::get('post/popular', 'Customer\PostController@popular');

    Route::post('send-contact/consulting', 'HomeController@contact');
});

Route::prefix('admin')->group(function () {
    Route::prefix('manage-order')->group(function () {
        Route::get('order/place', 'Admin\OrderController@listPLaces');
        Route::get('order/filter/{value}/{currentEntries}', 'Admin\OrderController@filter');
        Route::get('order/search/{query}/{currentEntries}', 'Admin\OrderController@search');
        Route::resource('order', 'Admin\OrderController')->except('index');
    });

    Route::prefix('manage-car')->group(function () {
        Route::get('car/detail/{carSlug}', 'Admin\CarController@detail');
        Route::post('car/upgrade/{carId}', 'Admin\CarController@upgrade');
        Route::patch('car/change/{carId}', 'Admin\CarController@change');
        Route::get('car/all', 'Admin\CarController@all');
        Route::get('car/search/{query}/{currentEntries}', 'Admin\CarController@search');
        Route::resource('car', 'Admin\CarController')->except('index');
    });

    Route::prefix('manage-service')->group(function () {
        Route::get('service/eight-services/', 'Admin\ServiceController@eightServices');
        Route::get('service/detail/{serviceSlug}', 'Admin\ServiceController@detail');
        Route::post('service/upgrade/{serviceId}', 'Admin\ServiceController@upgrade');
        Route::get('service/all', 'Admin\ServiceController@all');
        Route::get('service/search/{query}/{currentEntries}', 'Admin\ServiceController@search');
        Route::resource('service', 'Admin\ServiceController')->except('index', 'create');
    });

    Route::prefix('manage-post')->group(function () {
        Route::get('post/all', 'Admin\PostController@all');
        Route::get('post/detail/{postSlug}', 'Admin\PostController@detail');
        Route::patch('post/change/{postId}', 'Admin\PostController@change');
        Route::post('post/upgrade/{postId}', 'Admin\PostController@upgrade');
        Route::get('post/search/{query}/{currentEntries}', 'Admin\PostController@search');
        Route::resource('post', 'Admin\PostController')->except('index', 'create');
    });

    Route::prefix('manage-user')->group(function () {
        Route::patch('user/change/{userId}', 'Admin\AccountController@change');
        Route::get('user/filter/{query}/{currentEntries}', 'Admin\AccountController@filter');
        Route::get('user/search/{query}/{currentEntries}', 'Admin\AccountController@search');
        Route::resource('user', 'Admin\AccountController')->except('index', 'create');
    });

    Route::prefix('manage-contact')->group(function () {
        Route::get('contact/filter/{query}/{currentEntries}', 'Admin\ConsultingController@filter');
        Route::get('contact/search/{query}/{currentEntries}', 'Admin\ConsultingController@search');
        Route::resource('contact', 'Admin\ConsultingController')->except('index', 'create');
    });

    Route::prefix('manage-review')->group(function () {
        Route::get('review/filter/{query}/{currentEntries}', 'Admin\ReviewController@filter');
        Route::get('review/search/{query}/{currentEntries}', 'Admin\ReviewController@search');
        Route::resource('review', 'Admin\ReviewController')->except('index');
    });

    Route::prefix('dashboard-statistic')->group(function () {
        Route::get('export-by-year/{from_year}/{to_year}', 'Admin\DashboardController@exportByYear');
        Route::get('export-by-month/{from_month}/{to_month}', 'Admin\DashboardController@exportByMonth');
        Route::get('export-by-day/{from_date}/{to_date}', 'Admin\DashboardController@exportByDay');
        Route::get('export-one-month', 'Admin\DashboardController@exportStatistic');
        Route::get('show', 'Admin\DashboardController@statisticShow');
        Route::post('by-day', 'Admin\DashboardController@statisticDay');
        Route::post('by-month', 'Admin\DashboardController@statisticMonth');
        Route::post('by-year', 'Admin\DashboardController@statisticYear');
    });
});
