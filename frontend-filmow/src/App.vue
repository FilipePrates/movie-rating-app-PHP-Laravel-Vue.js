<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
      v-if="logado"
    >
      <v-app-bar-nav-icon to="/" class="hidden-sm-and-down">
        <v-img
          :src="require('./assets/lampada.png')"
          contain
          height="45"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title  class="hidden-sm-and-down">{{name}}</v-toolbar-title>

      <v-flex sm4 class="hidden-sm-and-down">
        <v-text-field
          outlined
          rounded
          label="Pesquisar Filmes"
          append-icon="mdi-magnify"
          class="mx-10 mt-9 mb-1 "
          v-model="search"
          @input="changedSerchTerm"
        ></v-text-field>
      </v-flex>
      <v-flex xs12 class="hidden-md-and-up">
        <v-text-field
          outlined
          rounded
          label="Pesquisar Filmes"
          append-icon="mdi-magnify"
          class="mt-8"
          v-model="search"
          @input="changedSerchTerm"
        ></v-text-field>
      </v-flex>
      <v-spacer class="pr-3"></v-spacer>
      <v-divider vertical></v-divider>

      <v-btn to="/favoritos" text class="mx-3 hidden-sm-and-down">
        <v-icon class="mr-2">mdi-heart</v-icon>
        Favoritos
      </v-btn>
      <v-btn to="/favoritos" text class="mx-3 hidden-md-and-up">
        <v-icon class="mx-1">mdi-heart</v-icon>
      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn to="/" text class="mx-3 hidden-sm-and-down">
        <v-icon class="mr-2">mdi-filmstrip</v-icon>
        Filmes
      </v-btn>
      <v-btn to="/" text class="mx-3 hidden-md-and-up">
        <v-icon class="mx-1">mdi-filmstrip</v-icon>
      </v-btn>

      <v-divider vertical></v-divider>



      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item to="/profile">
            <v-list-item-title><v-icon class="mr-3">mdi-account</v-icon>Perfil</v-list-item-title>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item @click="logout">
            <v-list-item-title><v-icon class="mr-3">mdi-exit-to-app</v-icon>Sair</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },
  computed:{
    logado(){
      return this.$store.getters.user.length
    },
    name(){
      return this.$store.getters.user[0].name
    }
  },
  data: () => ({
    search: ""
  }),
  methods: {
    logout(){
      this.$store.commit('setUser',{})
      this.$router.push('/login')
    },
    changedSerchTerm(){
      let lastSearch = this.search
      setTimeout(()=>{
        if (lastSearch == this.search){
          this.$store.dispatch('getMoviesFromServer',{searchTerm: this.search}).then(response=>{
            this.$store.commit('setMovies',response.data)
          })
        }
      },250)
    }
  },
  mounted(){
    this.$store.dispatch('getFavoritesFromServer',{id:this.$store.getters.user[0].id}).then((response)=>{
      this.$store.commit('setMovies',response.data)
      for (var i=0;i<response.data.length;i++){
        this.$store.commit('addToFavorites',response.data[i].id)
      }
    });
    if(!this.logado){
      this.$router.push('/login')
    }
  }
};
</script>
