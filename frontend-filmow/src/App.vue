<template>
  <v-app>
    <v-app-bar
      color="primary"
      dark
      app
      v-if="logado"
    >
      <v-app-bar-nav-icon to="/">
        <v-img
          :src="require('./assets/lampada.png')"
          class=""
          contain
          height="45"
        ></v-img>
      </v-app-bar-nav-icon>

      <v-toolbar-title>Filmei</v-toolbar-title>

      <v-flex xs4>
        <v-text-field
          outlined
          rounded
          label="Pesquisar Filmes"
          append-icon="mdi-magnify"
          class="mx-10 mt-9 mb-1">

        </v-text-field>
      </v-flex>
      <v-spacer></v-spacer>
      <v-divider vertical></v-divider>

      <v-btn to="/favoritos" text class="mx-3">
        <v-icon class="mr-2">mdi-heart</v-icon>
        Favoritos
      </v-btn>
      <v-divider vertical></v-divider>

      <v-btn to="/filmes" text class="mx-3">
        <v-icon class="mr-2">mdi-filmstrip</v-icon>
        Filmes
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
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
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
      return this.$store.getters.logado
    }
  },
  data: () => ({
    //
  }),
  mounted(){
    this.$store.dispatch('getFavoritesFromServer',{id:4}).then((response)=>{
      this.$store.commit('setMovies',response.data)
      for (var i=0;i<response.data.length;i++){
        console.log(response.data[i])
        this.$store.commit('addToFavorites',response.data[i].id)
      }
    });
    if(!this.logado){
      this.$router.push('/login')
    }
  }
};
</script>
