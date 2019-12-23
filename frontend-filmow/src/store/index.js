import Vue from 'vue'
import Vuex from 'vuex'

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
    user_favorites: [
      {'movie_id':862},
      {'movie_id':1672}
    ]
  },
  getters: {
    logado(state){
      return state.logado
    },
    movies(state){
      return state.movies
    },
    user_favorites(state){
      return state.user_favorites
    }
  },
  mutations: {
    signin(state,username){
      // FAZ REQUISICAO PRA CHECAR LOGIN
      console.log(username)
      state.logado = true
    },
    removeFromFavorites(state, id){
      console.log('removeFromFavorites',id)
      for(var favorite in state.user_favorites) {
        console.log('it',state.user_favorites[favorite].movie_id)
          if(state.user_favorites[favorite].movie_id == id) {
              Vue.delete(state.user_favorites,favorite)
              console.log('deletou',state.user_favorites)
          }
      }
    },
    addToFavorites(state,id){
      console.log('addToFavorites',id)
      state.user_favorites.push({'movie_id':id})
      console.log('adicionou',state.user_favorites)
    }
  },
  actions: {
  },
  modules: {
  }
})
