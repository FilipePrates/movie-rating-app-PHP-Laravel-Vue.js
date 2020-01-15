

export default{
  createFavorite(favoriteData){
    return window.axios.post('/api/favorites', favoriteData);
  },

  removeFavorite(favoriteData){
    return window.axios.delete('/api/favorites', { params: favoriteData });
  },

  getFavoriteMovies(userData){
    return window.axios.get('/api/favorites/',{ params: userData });
  },

  getMovies(searchTerm){
    return window.axios.get('/api/movies/',{ params: searchTerm });
  },

  authorizeLogin(email){
    return window.axios.get('/api/login/', { params: email });
  },

  createUser(userData){
    return window.axios.post('/api/user/', userData);
  },

  editUser(userData){
    return window.axios.put('/api/user/', userData);
  },

  deleteUser(userData){
    return window.axios.delete('/api/user/', {params:userData});
  }
}
