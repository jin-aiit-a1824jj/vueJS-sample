import Vue from 'vue';
import Vuex from 'vuex';
import axiosAuth from "../axios-auth.js";
import router from '../router.js';
import axiosRefresh from "../axios-refresh.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state:{
    idToken: null
  },
  mutations: {
    updateIdToken(state, idToken){
      state.idToken = idToken;
    }
  },
  actions: {
    login({commit, dispatch}, authData){
      const url = '/accounts:signInWithPassword?key=[API_KEY]'
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      axiosAuth.post(url, data)
      .then(response => {
        //console.log(response);
        commit('updateIdToken', response.data.idToken);
        setTimeout(() => {
            dispatch('refreshIdToken', response.data.refreshToken);
        }, response.data.expireIn * 1000);
        router.push('/');
      })
      .catch(error=>{
        console.log(error);
      });
    },
    register({commit}, authData){
      const url = '/accounts:signUp?key=[API_KEY]'
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      axiosAuth.post(url, data)
      .then(response => {
        //console.log(response);
        commit('updateIdToken', response.data.idToken);
        router.push('/');
      })
      .catch(error=>{
        console.log(error);
      });
    },
    refreshIdToken({commit, dispatch}, refreshToken){
        const url_t = '/token?key=[API_KEY]';
        const data_t = {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        };
        axiosRefresh.post(url_t, data_t)
        .then(response => {
          commit('updateIdToken', response.data.id_token);
          setTimeout(()=>{
            dispatch('refreshIdToken', response.data.refresh_token);
          }, response.data.expire_in * 1000);
        });
    }
  },
  getters: {
    idToken: state => state.idToken
  }
});