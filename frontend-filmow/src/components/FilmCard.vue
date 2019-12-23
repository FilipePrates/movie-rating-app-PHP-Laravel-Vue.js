<template>
  <v-card height="515" width="300" color="primary" class="white--text">
    <v-img
      id="image"
      :src="'http://image.tmdb.org/t/p/w185/' + movie.poster_path"
    ></v-img>
    <v-card-title>
      <div v-if="infoOpen">
        <p  class="mr-4" style="position:absolute; top:60px; font-size:13px; line-height: 15pt;">{{movie.overview}}</p>
        <p  class="mr-4" style="position:absolute; bottom:60px; right:0px; font-size:13px; line-height: 15pt;">{{movie.release_date}}</p>
        <p class="mr-4" style="position:absolute; bottom:60px; left:10px; font-size:13px; line-height: 15pt;">{{genres}}</p>
      </div>


      <v-btn absolute top left fab small class="mt-8" @click="toggleMovieAsFavorite(movie.id)">
        <v-icon v-if="isFavorited" color="secondary">
          mdi-heart
        </v-icon>
        <v-icon v-else>
          mdi-heart-outline
        </v-icon>
      </v-btn>

      <v-btn absolute top right fab small class="mt-8" @click="toggleInfo()">
        <v-icon color="primary">
          mdi-information-outline
        </v-icon>
      </v-btn>

      <v-layout row color="primary">
        <v-flex xs10 class="pl-2">
          <span>{{movie.title}}</span>
        </v-flex>
        <v-flex xs2>
          <span>{{movie.vote_average}}</span>
        </v-flex>
      </v-layout>
    </v-card-title>

  </v-card>
</template>

<script>
export default {
  name: 'FilmCard',
  props: [
    'movie',
    'favorites'
  ],
  data: () => ({
    infoOpen: false
  }),
  computed:{
    userFavorites(){
      return this.$store.getters.user_favorites
    },
    isFavorited(){
      return this.userFavorites.some(item => item.movie_id === this.movie.id)
    },
    genres(){
      let out = ""
      for (var genre in this.movie.genres){
        out = out + this.movie.genres[genre].name + ", "
      }
      return out
    },
  },
  methods:{
    toggleInfo(){
      if(this.infoOpen){
        document.getElementById('image').classList.remove("blurred")
        this.infoOpen = false
      }else{
        document.getElementById('image').classList.add("blurred")
        this.infoOpen = true
      }
    },
    toggleMovieAsFavorite(){
      console.log('isFavorited',this.isFavorited)
      if(this.isFavorited){
        this.$store.commit('removeFromFavorites',this.movie.id)
      }else{
        this.$store.commit('addToFavorites',this.movie.id)
      }
    }
  },
  mounted(){
    // console.log(this.userFavorites)
    // console.log(this.isFavorited)
  }
};
</script>

<style scoped>

.blurred {
  -webkit-filter: blur(10px);
  filter: blur(10px);
}

</style>
