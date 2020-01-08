<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
  protected $table= 'favorites';
  protected $fillable= ['favorite_id', 'user_id', 'movie_id'];

  public static function boot() {
    parent::boot();
  }

  public function movie(){
    return $this->belongsTo('App\Movie');
  }

  // public function tags(){
  //   return $this->morphToMany('App\Tag', 'taggable')->withTimestamps();
  // }
}
