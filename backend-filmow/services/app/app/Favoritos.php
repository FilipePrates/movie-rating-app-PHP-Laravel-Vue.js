<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorito extends Model
{
  protected $table= 'favorites';
  protected $fillable= ['favorite_id', 'user_id', 'movie_id';

  public static function boot() {
    parent::boot();

    // static::deleting(function($favorito) { // before delete() method call this
    //    $resumo->tags()->detach();
    //    $resumo->competencies()->detach();
    // });
  }

  public function movie(){
    return $this->belongsTo('App\Filmes', 'movie_id');
  }

  // public function tags(){
  //   return $this->morphToMany('App\Tag', 'taggable')->withTimestamps();
  // }
}
