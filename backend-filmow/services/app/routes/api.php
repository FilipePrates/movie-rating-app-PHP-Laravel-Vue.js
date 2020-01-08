<?php

use Illuminate\Http\Request;

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

Route::get('teste', 'FilmowController@test');

Route::get('favorites','FilmowController@getUserFavoriteMovies');
Route::post('favorites','FilmowController@createFavorite');
Route::delete('favorites','FilmowController@deleteFavorite');


Route::get('movie','FilmowController@getMovie');

Route::get('user','FilmowController@getUsers');
