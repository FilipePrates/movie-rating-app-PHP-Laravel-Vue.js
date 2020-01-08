<template>
  <v-layout row wrap>
    <v-flex xs12></v-flex>
    <v-flex xs3 class="mt-5">
      <!-- <v-icon class="mb-3 ml-9" color="primary" large>mdi-heart</v-icon> -->
      <span class="mytitle ml-9">Favoritos</span>
    </v-flex>
    <v-flex xs12>
      <v-layout row wrap class="ml-5">
        <v-flex xs2 class="ma-4" v-for="movie in movies" :key="movie.id">
          <film-card :movie="movie"></film-card>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import FilmCard from '@/components/FilmCard.vue'
export default {
  name: 'Favorites',
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
  methods:{
    test(){
      console.log(this.movies)
    }
  },
  created(){
    // this.moviesData = this.movies
  },
  mounted(){
    // console.log('movies',this.movies)
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
