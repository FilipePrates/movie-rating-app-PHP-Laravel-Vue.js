<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Filmes extends Model
{
  protected $table= 'movies';
  protected $fillable= [
        'id',
        'adult',
        'belongs_to_collection',
        'budget',
        'genres',
        'homepage',
        'imdb_id',
        'original_language',
        'original_title',
        'overview',
        'popularity',
        'poster_path',
        'production_companies',
        'production_countries',
        'release_date',
        'revenue',
        'runtime',
        'spoken_languages',
        'status',
        'tagline',
        'title',
        'video',
        'vote_average',
        'vote_count'
  ];

  public static function boot() {
    parent::boot();
  }
}
