<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Favorite;
use App\Movie;
use App\User;
use App\Services\Filmes\FavoritarFilme;


class FilmowController extends Controller
{
  private $favoritarFilme;

  public function __construct(FavoritarFilme $favoritarFilme){
    $this->favoritarFilme = $favoritarFilme;
  }

//

  public function test(){
    return response()->json("test", 200);
  }

//

  public function createFavorite(Request $request){
    $this->favoritarFilme->favoriteMovie($request->user_id,$request->movie_id);
    return response()->json('Favorito registrado com sucesso', 200);
  }

//

  public function deleteFavorite(Request $request){
    $favorite = User::where('id',$request->user_id)->first();
    $favorite->favoriteMovies()->detach($request->movie_id);
    return response()->json('Favorito deletado com sucesso', 200);
  }

//

  public function getMovies(Request $request){
    if($request->searchTerm != ""){
      $filmes= Movie::where('title','like', '%' . $request->searchTerm . '%')->get();
    }else{
      $filmes = Movie::all()->random(25);
    }
    return response()->json($filmes, 200);
  }

//

  public function getUsers(Request $request){
    $users = User::get();
    return response()->json($users, 200);
  }

//

  public function getUserFavoriteMovies(Request $request){
    $users = User::where('id',$request->id)->first();
    return response()->json($users->favoriteMovies, 200);
  }


}
