<?php

namespace App\Services\Filmes;

use App\Favorite;
use App\Movie;

class FavoritarFilme{
  public function favoriteMovie($user_id, $movie_id){
      Favorite::insert([
        'user_id' => $user_id,
        'movie_id' => $movie_id
      ]);
  }
}
