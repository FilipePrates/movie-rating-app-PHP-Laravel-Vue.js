<template>
  <v-layout row wrap justify-center>
    <v-flex xs12></v-flex>
    <v-flex sm3 xs8 class="mt-5">
      <span class="mytitle ml-9 px-0">Perfil
        <v-btn text small fab class="pb-1" @click="editProfile"><v-icon>mdi-pencil</v-icon></v-btn>
        <v-btn text small fab class="pb-1" @click="editProfile"><v-icon color="red">mdi-delete</v-icon></v-btn>
      </span>

    </v-flex>
    <v-flex sm9 xs4></v-flex>


    <v-flex xs12 class="mt-8">
      <v-layout row wrap class="ml-12">
        <v-flex sm2>
          <v-avatar :tile="true" size="200px" class="hidden-sm-and-down">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
              alt="Jovens Gênios">
          </v-avatar>
        </v-flex>
        <v-flex sm4 class="mt-5">
          <v-layout row wrap>
            <v-flex xs12>
              <span class="headline"><b>Id: </b>{{user[0].id}}</span>
            </v-flex>
            <v-flex xs12 class="mt-2">
              <span class="headline"><b>Nome: </b>{{user[0].name}}</span>
            </v-flex>
            <v-flex xs12 class="mt-2">
              <span class="headline"><b>Email: </b>{{user[0].email}}</span>
            </v-flex>
            <v-flex xs12 class="mt-2">
              <span class="headline"><b>Filmes Favoritos: </b>{{user_favorites.length}}</span>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex sm2>
          <v-avatar :tile="true" size="200px" class="hidden-md-and-up mt-4">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_azLcOFrNrDr3ZKCDnN24oxT7d5xGl0NWqe1MP3UnAMX9rK5m&s"
              alt="Jovens Gênios">
          </v-avatar>
        </v-flex>
      </v-layout>
    </v-flex>



  </v-layout>
</template>

<script>

export default {
  name: 'Profile',
  components:{
  },

  data: () => ({
  }),
  computed: {
    movies() {
      return this.$store.getters.movies
    },
    user() {
      return this.$store.getters.user
    },
    user_favorites() {
      return this.$store.getters.user_favorites
    }
  },
  methods: {
    editProfile(){
      this.$store.commit('setEditingUser',true)
      this.$router.push('/create-account')
    },
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
