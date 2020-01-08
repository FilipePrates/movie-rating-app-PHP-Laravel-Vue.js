import Vue from 'vue'

import Api from '../../api/Api'
import FilmowApi from '../../api/FilmowApi'

const state = {

}

const getters= {

}

const mutations = {

}

const actions = {
  async createFavoriteInServer(context, payload){
    try{
      // Api.isWaitingResponse(context, true);

      const response= await FilmowApi.createFavorite(payload);

      // Api.isWaitingResponse(context, false);

      return response;
    }catch(error){
      // Api.displayRequestError(context, "Não foi possível favoritar o filme.");
      console.log(error);
    }
  },

  async getFavoritesFromServer(context, payload){
    try{
      // Api.isWaitingResponse(context, true);
      console.log('gFFS',payload)

      const response = await FilmowApi.getFavoritos(payload);

      // Api.isWaitingResponse(context, false);

      return response;
    }catch(error){
      // Api.displayRequestError(context, "Não foi possível pegar os favoritos.");
      console.log(error);
      return 'error'
    }
  },

}

export default {
  state,
  getters,
  mutations,
  actions
}
