<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }} </h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">次のユーザー</router-link>
    <router-view></router-view>
    <div style="height: 1700px;"></div>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: { lang: 'ja', page: 2}, hash: '#next-user' }">次のユーザー</router-link>
  </div>
</template>

<script>
export default {
  props: ["id"],
  created() {
    console.log("created");
  },
  watch:{
    $route(to, from){
      console.log(to);
      console.log(from);
    }
  },
  beforeRouteEnter(to, from, next){
    console.log("beforeRouteEnter");
    console.log(to);
    console.log(from);
    next(vm =>{
      console.log(vm.id);
    });
  },
  beforeRouteUpdate(to, from, next){
    console.log("beforeRouteUpdate");
    console.log(to);
    console.log(from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log("beforeRouteLeave");
    console.log(to);
    console.log(from);
    const isLeave = window.confirm("本当にこのページを離れますか？");
    next(isLeave);
  },
}
</script>