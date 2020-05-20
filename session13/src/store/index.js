import Vue from 'vue';
import Vuex from "vuex";
import count from "./modules/count.js";

import getters from "./getters.js";
import mutations from "./mutations.js";
import actions from "./actions.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: ""
  },
  getters: getters,
  mutations,
  actions,
  modules: {
    count
  }
});