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

Route::prefix('admin')->group(function () {
    Route::prefix('manage-order')->group(function () {
        Route::get('order/place', 'Admin\OrderController@listPLaces');
        Route::get('order/filter/{value}/{currentEntries}', 'Admin\OrderController@filter');
        Route::get('order/search/{query}/{currentEntries}', 'Admin\OrderController@search');
        Route::resource('order', 'Admin\OrderController')->except('index');
    });

    Route::prefix('manage-car')->group(function () {
        Route::get('car/detail/{carId}', 'Admin\CarController@detail');
        Route::post('car/upgrade/{carId}', 'Admin\CarController@upgrade');
        Route::patch('car/change/{carId}', 'Admin\CarController@change');
        Route::get('car/all', 'Admin\CarController@all');
        Route::get('car/search/{query}/{currentEntries}', 'Admin\CarController@search');
        Route::resource('car', 'Admin\CarController')->except('index');
    });

    Route::prefix('manage-service')->group(function () {
        Route::get('service/detail/{serviceId}', 'Admin\ServiceController@detail');
        Route::post('service/upgrade/{serviceId}', 'Admin\ServiceController@upgrade');
        Route::get('service/all', 'Admin\ServiceController@all');
        Route::get('service/search/{query}/{currentEntries}', 'Admin\ServiceController@search');
        Route::resource('service', 'Admin\ServiceController')->except('index', 'create');
    });

    Route::prefix('manage-post')->group(function () {
        Route::get('post/detail/{postId}', 'Admin\PostController@detail');
        Route::patch('post/change/{postId}', 'Admin\PostController@change');
        Route::post('post/upgrade/{postId}', 'Admin\PostController@upgrade');
        Route::get('post/search/{query}/{currentEntries}', 'Admin\PostController@search');
        Route::resource('post', 'Admin\PostController')->except('index', 'create');
    });
});
