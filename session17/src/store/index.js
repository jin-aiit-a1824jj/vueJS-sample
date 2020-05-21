import Vue from 'vue';
import Vuex from 'vuex';
import axiosAuth from "../axios-auth.js";
import router from '../router.js';

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
    login({commit}, authData){
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
    }
  },
  getters: {
    idToken: state => state.idToken
  }
});