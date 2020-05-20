<template>
  <div>
    <h3>Users</h3>
    <router-link to="/users/1">ユーザー１</router-link>
    <router-link to="/users/2">ユーザー２</router-link>
    <hr>
    <h1>User No. {{ id }} </h1>
    <router-link :to="'/users/' + (Number(id) + 1) + '/profile?lang=ja'">次のユーザー</router-link>
    <router-link :to="{ name: 'users-id-profile', params: { id: Number(id) + 1}, query: { lang: 'ja', page: 2} }">次のユーザー</router-link>
    <router-view></router-view>
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
  }
}
</script>