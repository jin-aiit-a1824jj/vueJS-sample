import Vue from 'vue'
import App from './App.vue'
import axios from "axios";

Vue.config.productionTip = false

axios.defaults.baseURL = "https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents";
// axios.defaults.headers.common["Authorization"] = "aasdfasdfa";
// axios.defaults.headers.get["Accept"] = "application/json" 

new Vue({
  render: h => h(App),
}).$mount('#app')
