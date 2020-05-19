import Vue from 'vue'
import App from './App.vue'
import LikeNumber from './components/LikeNumber.vue'

Vue.config.productionTip = false
Vue.component("LikeNumber", LikeNumber);
Vue.directive("border", {
  bind(el, binding, vnode){
    //console.log("border-bind");
    //el.style.border = "solid black 2px"
    // el.style.borderWidth = binding.value.width;
    // el.style.borderColor = binding.value.color;
    // el.style.borderStyle = binding.arg;
    // if(binding.modifiers.round) {
    //   el.style.borderRadius = "0.5rem";
    // }
    // if(binding.modifiers.shadow) {
    //   el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
    // }
  },
  inserted(el, binding, vnode){},
  update(el, binding, vnode, oldVnode){
    console.log("border-update");
  },
  componentUpdated(el, binding, vnode, oldVnode){},
  unbind(el, binding, vnode){}
});
Vue.filter("upperCase", function(value){
  console.log("Vue.filter-upperCase");
  return value.toUpperCase();
});

new Vue({
  render: h => h(App),
}).$mount('#app')
