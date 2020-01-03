<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMoviesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('movies', function (Blueprint $table) {
          $table->increments('id');
          $table->string('adult');
          $table->text('belongs_to_collection');
          $table->integer('budget');
          $table->text('genres');
          $table->string('homepage');
          $table->string('imdb_id');
          $table->string('original_language');
          $table->string('original-title');
          $table->string('overview');
          $table->string('popularity');
          $table->string('poster_path');
          $table->text('production_companies');
          $table->text('production_countries');
          $table->string('release_date');
          $table->string('revenue');
          $table->decimal('runtime',4,1);
          $table->text('spoken_languages');
          $table->string('status');
          $table->string('tagline');
          $table->string('title');
          $table->string('video');
          $table->decimal('vote_average',2,1);
          $table->integer('vote_count');
          $table->timestamps();

        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('movies');
    }
}
