import Vue from 'vue'
import Vuex from 'vuex'
import FilmowApi from '../api/FilmowApi'
// import Api from '../api/Api'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logado: false,
    movies: [{
      'id': 862,
      'imdb_id': 'tt0114709',
      'adult': false,
      'belongs_to_collection':{'id': 10194, 'name': 'Toy Story Collection', 'poster_path': '/7G9915LfUQ2lVfwMEEhDsn3kT4B.jpg', 'backdrop_path': '/9FBwqcd9IRruEDUrTdcaafOMKUq.jpg'},
      'budget': '30000000',
      'genres': [{'id': 16, 'name': 'Animation'}, {'id': 35, 'name': 'Comedy'}, {'id': 10751, 'name': 'Family'}],
      'homepage': 'http://toystory.disney.com/toy-story',
      'original_language': 'en',
      'original_title': 'Toy Story',
      'overview': 'Led by Woody, Andys toys live happily in his room until Andys birthday brings Buzz Lightyear onto the scene. Afraid of losing his place in Andys heart, Woody plots against Buzz. But when circumstances separate Buzz and Woody from their owner, the duo eventually learns to put aside their differences.',
      'popularity': 21.946943,
      'poster_path': '/rhIRbceoE9lR4veEXuwCC2wARtG.jpg',
      'production_companies': [{'name': 'Pixar Animation Studios', 'id': 3}],
      'production_countries': [{'iso_3166_1': 'US', 'name': 'United States of America'}],
      'release_date': '1995-10-30',
      'revenue': 373554033,
      'runtime': 81.0,
      'spoken_languages': [{'iso_639_1': 'en', 'name': 'English'}],
      'status': 'Released',
      'tagline': '',
      'title': 'Toy Story',
      'video': false,
      'vote_average': 7.7,
      'vote_count': 5415
    }],
    user: {
      'id': 4,
      'name': 'Sofia Costa',
      'email': 'sofiacostadesouza2006',
    },
    user_favorites: [],
    searchTerm: ""
  },
  getters: {
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
    setSearchTerm(state, searchTerm){
      state.searchTerm = searchTerm;
    },
    signin(state,username){
      // FAZ REQUISICAO PRA CHECAR LOGIN
      console.log(username)
      state.logado = true
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
    setMovies(state, movies){
      state.movies = movies;
    },
    pushMovies(state, movies){
      state.movies.push(movies);
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
  },
  modules: {
  }
})
