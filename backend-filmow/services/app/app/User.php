<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class User extends Model
{

    protected $table= 'users';

    protected $fillable = [
        'name', 'email', 'password',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    protected static function boot() {
      parent::boot();

      static::deleting(function($check) {
          $check->favoriteMovies()->detach();
      });
    }

    public function favoriteMovies()
    {
        return $this->belongsToMany('App\Movie','favorites','user_id','movie_id');
    }
}
