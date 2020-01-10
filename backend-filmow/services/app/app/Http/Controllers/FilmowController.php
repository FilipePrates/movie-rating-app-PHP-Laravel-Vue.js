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

  public function authorizeLogin(Request $request){
    $users = User::where('email', '=', $request->email)->get();
    if(!$users){
      return response()->json('Nao foi encontrado uma conta com esse email e senha. Tente de novo.', 200);
    }else{
      return response()->json($users, 200);
    }
  }

//

  public function getUsers(Request $request){
    $users = User::get();
    return response()->json($users, 200);
  }

//

  public function createUser(Request $request){
    $emailAlreadyRegistered = User::where('email','=',$request->email)->first();
    if($emailAlreadyRegistered){
      return response()->json('Ja existe uma conta com esse email!', 200);
    }else{
      $user = User::insert([
        'name' => $request->name,
        'email' => $request->email,
        'password' => $request->password
      ]);
      return response()->json($user, 200);
    }
  }

//

  public function editUser(Request $request){
    $user = User::where('email','=',$request->email)->first();
    $user->name = $request->name;
    $user->email = $request->email;
    $user->password = $request->password;
    $user->save();
    return response()->json($user, 200);
  }

//

  public function deleteUser(Request $request){
    $user = User::where('email','=',$request->email)->first();
    $user->favoriteMovies()->detach();
    $user->delete();
    return response()->json('Usuario deletado com sucesso', 200);
  }

//
  public function getUserFavoriteMovies(Request $request){
    $users = User::where('id',$request->id)->first();
    return response()->json($users->favoriteMovies, 200);
  }


}
