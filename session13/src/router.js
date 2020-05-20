import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Users from './views/Users.vue';
import UsersPosts from './views/UsersPosts.vue';
import UsersProfile from './views/UsersProfile.vue';
import HeaderUsers from './views/HeaderUsers.vue';
import HeaderHome from './views/HeaderHome.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes:[
    {path: '/',
     components: {
        default: Home,
        header: HeaderHome  
      }
    },
    {path: '/users/:id',
      components: {
        default: Users,
        header: HeaderUsers  
      },
     props: {
       default: true,
       header: false
     },
     children: [
       { path: "posts", component:UsersPosts },
       { path: "profile", component:UsersProfile, name: "users-id-profile" }
      ]
    },
    {
      path: '/hello',
      redirect: {path: "/"}
    },
    {
      path: '*',
      redirect: "/"
    },
  ],
  scrollBehavior(to, from, savedPosition){
    console.log("scrollBehavior");
    console.log(to)
    console.log(from)
    console.log(savedPosition)

    if(savedPosition){
      return savedPosition;
    }

    if(to.hash){
      return {
        selector: to.hash
      };
    }

    //return {x: 0, y: 0};
    return {
      selector: '#next-user',
      offset: {x:0, y: 100 }
    };
  }
});