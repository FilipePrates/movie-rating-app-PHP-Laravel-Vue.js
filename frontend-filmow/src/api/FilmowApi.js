

export default{
  createFavorite(favoriteData){
    return window.axios.post('/api/favorites', { params: favoriteData });
  },

  removeFavorite(favoriteData){
    return window.axios.delete('/api/favorites', { params: favoriteData });
  },

  getFavoriteMovies(userData){
    return window.axios.get('/api/favorites/',{ params: userData });
  },

}
