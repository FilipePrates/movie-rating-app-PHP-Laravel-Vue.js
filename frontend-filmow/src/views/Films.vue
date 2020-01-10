<template>
  <v-layout row wrap justify-center>
    <v-flex xs12></v-flex>
    <v-flex xs3 class="mt-5">
      <span class="mytitle ml-9">Filmes</span>
    </v-flex>
    <v-flex xs9></v-flex>
    <v-flex xs12>
      <v-layout row wrap class="ml-5">
        <v-flex xs12 sm2 class="ma-4" v-for="movie in movies" :key="movie.id">
          <film-card :movie="movie"></film-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs1>
      <v-btn text @click="moreMovies">
        <v-icon color="primary">mdi-dots-vertical</v-icon>
      </v-btn>
    </v-flex>

  </v-layout>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue'

export default {
  name: 'Films',
  components:{
    'film-card':FilmCard
  },

  data: () => ({
  }),
  computed: {
    movies() {
      return this.$store.getters.movies
    },
  },
  methods: {
    moreMovies(){
      this.$store.dispatch('getMoviesFromServer').then(response=>{
        for(var i = 0;i < response.data.length;i++){
          this.$store.commit('pushMovies',response.data[i]);
        }
        console.log(this.$store.getters.movies)
      });
    }
  },
  created(){
    console.log(this.$store.getters.movies)
    this.$store.dispatch('getMoviesFromServer').then(response=>{
      this.$store.commit('setMovies',response.data);
      console.log(this.$store.getters.movies)
    })
  }
};
</script>

<style scoped>
  .mytitle{
    padding: 15px;
    text-align: center;
    font-size: 26px;
  }
</style>
