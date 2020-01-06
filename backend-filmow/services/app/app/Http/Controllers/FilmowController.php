<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Favoritos;
use App\Services\FavoritarFilme;
/**
 * @group Resumos
 * APIs para o gerenciamento dos resumos.
 */
class FilmowController extends Controller
{
  public function test(){
    return response()->json("test", 200);
  }

  public function getFavorites(Request $request){
    $filmes= Favoritos::get()->where('user_id',$request->user);

    return response()->json($filmes, 200);
  }


}
