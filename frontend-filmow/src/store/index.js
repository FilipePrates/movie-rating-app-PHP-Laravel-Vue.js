import Vue from 'vue'
import Vuex from 'vuex'
import FilmowApi from '../api/FilmowApi'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logado: false,
    isEditingUser: false,
    movies: [],
    user: {},
    user_favorites: [],
    searchTerm: "",
  },
  getters: {
    isEditingUser(state){
      return state.isEditingUser
    },
    searchTerm(state){
      return state.searchTerm
    },
    logado(state){
      return state.logado
    },
    movies(state){
      return state.movies
    },
    user_favorites(state){
      return state.user_favorites
    },
    user(state){
      return state.user
    }
  },
  mutations: {
    setEditingUser(state, bool){
      state.isEditingUser = bool;
    },
    setSearchTerm(state, searchTerm){
      state.searchTerm = searchTerm;
    },
    removeFromFavorites(state, id){
      for(var favorite in state.user_favorites) {
          if(state.user_favorites[favorite].movie_id == id) {
              Vue.delete(state.user_favorites,favorite)
          }
      }
    },
    addToFavorites(state,id){
      state.user_favorites.push({'movie_id':id})
    },
    setFavorites(state, favorites){
      state.user_favorites = []
      console.log(favorites)
      for (var i = 0;i<favorites.length;i++){
        state.user_favorites.push({'movie_id':favorites[i].id})
      }
    },
    setMovies(state, movies){
      state.movies = movies;
    },
    pushMovies(state, movies){
      state.movies.push(movies);
    },
    removeFromMovies(state, id){
      for (var i = 0;i<state.movies.length;i++){
        if(state.movies[i].id == id){
          state.movies.splice(i,1)
        }
      }
    },
    setUser(state, user){
      state.user = user;
    }
  },
  actions: {
    async removeFavoriteFromServer(context, payload){
      try{
        console.log('rFFS index.js', payload)
        const response = await FilmowApi.removeFavorite(payload);
        return response;
      }catch(error){
        return 'error'
      }
    },

    async createFavoriteInServer(context, payload){
      try{
        console.log('cFFS index.js', payload)
        const response = await FilmowApi.createFavorite(payload);
        return response;
      }catch(error){
        return 'error'
      }
    },

    async getFavoritesFromServer(context, payload){
      try{
        console.log('gFFS index.js', payload)
        const response = await FilmowApi.getFavoriteMovies(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async getMovieByIdFromServer(context, payload){
      try{
        console.log('gMFS index.js', payload)
        const response = await FilmowApi.getMovie(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async getMoviesFromServer(context,payload){
      try{
        console.log('gRMFS index.js',payload)
        const response = await FilmowApi.getMovies(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async authorizeLoginInServer(context,payload){
      try{
        console.log('aLIS index.js',payload)
        const response = await FilmowApi.authorizeLogin(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async createUserInServer(context,payload){
      try{
        console.log('cUIS index.js',payload)
        const response = await FilmowApi.createUser(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async editUserInServer(context,payload){
      try{
        console.log('eUIS index.js',payload)
        const response = await FilmowApi.editUser(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },

    async deleteUserInServer(context,payload){
      try{
        console.log('dUIS index.js',payload)
        const response = await FilmowApi.deleteUser(payload);
        return response;
      }catch(error){
        console.log(error);
        return 'error'
      }
    },
  },
  modules: {
  }
})
