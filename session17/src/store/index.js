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
    async autoLogin({commit, dispatch}){
      const idToken = localStorage.getItem('idToken');
      if(!idToken) return;
      const expiryTimeMs = localStorage.getItem('expiryTimeMs');
      const refreshToken = localStorage.getItem('refreshToken');
      const now = new Date();
      const isExpired = now.getTime() >= expiryTimeMs;
      if (isExpired){
        await dispatch('refreshToken', refreshToken);
      } else {
        const expiresInMs = expiryTimeMs - now.getTime();
        setTimeout(()=>{
          dispatch('refreshToken', refreshToken);
        }, expiresInMs);
        commit('updatedIdToken', idToken);
      }
    },
    login({dispatch}, authData){
      const url = '/accounts:signInWithPassword?key=[API_KEY]'
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      axiosAuth.post(url, data)
      .then(response => {
        //console.log(response);
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        })
        router.push('/');
      })
      .catch(error=>{
        console.log(error);
      });
    },
    register({dispatch}, authData){
      const url = '/accounts:signUp?key=[API_KEY]'
      const data = {
        email: authData.email,
        password: authData.password,
        returnSecureToken: true
      };
      axiosAuth.post(url, data)
      .then(response => {
        //console.log(response);
        dispatch('setAuthData', {
          idToken: response.data.idToken,
          expiresIn: response.data.expiresIn,
          refreshToken: response.data.refreshToken,
        })
        router.push('/');
      })
      .catch(error=>{
        console.log(error);
      });
    },
    async refreshIdToken({dispatch}, refreshToken){
        const url_t = '/token?key=[API_KEY]';
        const data_t = {
          grant_type: 'refresh_token',
          refresh_token: refreshToken
        };
        await axiosRefresh.post(url_t, data_t)
        .then(response => {
          dispatch('setAuthData', {
            idToken: response.data.id_token,
            expiresIn: response.data.expires_in,
            refreshToken: response.data.refresh_token,
          })
        });
    },
    setAuthData({commit, dispatch}, authData) {
      commit('updateIdToken', authData.idToken);
      const now = new Date();
      const expiryTimeMs = now.getTime() + authData.expireIn * 1000;
      localStorage.setItem('expiryTimeMs', expiryTimeMs);
      localStorage.setItem('idToken', authData.idToken);
      localStorage.setItem('refreshToken', authData.refreshToken);
      setTimeout(() => {
        dispatch('refreshIdToken', authData.refreshToken);
      }, authData.expireIn * 1000);
    },
    logout({commit}){
      commit('updateIdToken', null);
      localStorage.removeItem('expiryTimeMs');
      localStorage.removeItem('idToken');
      localStorage.removeItem('refreshToken');
      router.replace('/login');
    }
  },
  getters: {
    idToken: state => state.idToken
  }
});