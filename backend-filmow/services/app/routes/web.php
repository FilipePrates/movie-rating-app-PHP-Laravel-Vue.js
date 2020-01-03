<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/ok', function () {
    // return view('welcome');
    console_log('web2.php');
    return view('welcome');
});
Route::get('/', function () {
    console_log('web.php');
    return view('welcome');
    // return ['status' =>  true];
});
