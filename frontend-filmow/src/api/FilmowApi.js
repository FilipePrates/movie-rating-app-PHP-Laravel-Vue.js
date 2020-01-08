

export default{
  createFavorite(favoriteData){
    console.log('create api',favoriteData)
    return window.axios.post('/api/favorites', favoriteData);
  },

  removeFavorite(favoriteData){
    console.log('delete api',favoriteData)
    return window.axios.delete('/api/favorites', { params: favoriteData });
  },

  getFavoriteMovies(userData){
    return window.axios.get('/api/favorites/',{ params: userData });
  },

  getMovies(searchTerm){
    console.log(searchTerm)
    return window.axios.get('/api/movies/',{ params: searchTerm });
  },

}
