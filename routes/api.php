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

// Route::middleware('auth:api')->get('/user', function (Request $request) {
//     return $request->user();
// });



Route::group(['prefix' => 'names'], function () {
    Route::get('', 'NamesController@index');
    Route::post('', 'NamesController@store');
    Route::group(['prefix' => '{name}'], function () {
        Route::get('', 'NamesController@show');
        Route::delete('', 'NamesController@destroy');
    });
});