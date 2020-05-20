import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store';

Vue.config.productionTip = false

// router.beforeEach((to, from, next)=>{
//   console.log('global-beforeEach');
//   console.log(to);
//   console.log(from);

//   if(to.path === '/users/1'){
//     next("/");
//     //next(false);
//   }

//   next();
// });

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
