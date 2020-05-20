import Vue from 'vue';
import Router from 'vue-router';

const Home = ()=> import(/* webpackChunkName: "Home" */"./views/Home.vue");
const Users = ()=> import(/* webpackChunkName: "Users" */"./views/Users.vue");
const UsersPosts = ()=> import(/* webpackChunkName: "UsersPosts" */"./views/UsersPosts.vue");
const UsersProfile = ()=> import(/* webpackChunkName: "UsersProfile" */"./views/UsersProfile.vue");
const HeaderUsers = ()=> import(/* webpackChunkName: "HeaderUsers" */"./views/HeaderUsers.vue");
const HeaderHome = ()=> import(/* webpackChunkName: "HeaderHome" */"./views/HeaderHome.vue");

// import Home from './views/Home.vue';
// import Users from './views/Users.vue';
// import UsersPosts from './views/UsersPosts.vue';
// import UsersProfile from './views/UsersProfile.vue';
// import HeaderUsers from './views/HeaderUsers.vue';
// import HeaderHome from './views/HeaderHome.vue';

Vue.use(Router);

export default new Router({
  mode: "history",
  routes:[
    {path: '/',
     components: {
        default: Home,
        header: HeaderHome  
      },
      beforeEnter(to, from, next){
        console.log(to);
        console.log(from);
        next(true);
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
    console.log(from);

    return new Promise(resolve => {
      console.log("scrollBehavior-Promise");
      this.app.$root.$on('triggerScroll', () => {
        let postion = {x: 0, y: 0};

        if(savedPosition){
          postion = savedPosition;
        }

        if(to.hash){
          postion = {
            selector: to.hash
          };
        }

        resolve(postion);
      });
    });

  }
});