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
});
