import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import router from "./router.js";
import store from "./store"

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents";
// axios.defaults.headers.common["Authorization"] = "aasdfasdfa";
// axios.defaults.headers.get["Accept"] = "application/json" 

const interceptorsRequest = axios.interceptors.request.use(
  config =>{
    console.log("axios.interceptors.request.config", config);
    return config;
},
  error =>{
    console.log("axios.interceptors.request.error", error);
    return Promise.reject(error);
});
const interceptorsResponse = axios.interceptors.response.use(
  response =>{
    console.log("axios.interceptors.response.config", response);
    return response;
},
  error =>{
    console.log("axios.interceptors.response.error", error);
    return Promise.reject(error);
});


axios.interceptors.request.eject(interceptorsRequest);
axios.interceptors.response.eject(interceptorsResponse);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
