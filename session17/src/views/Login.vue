<template>
  <div id="app">
    <h2>ログイン</h2>
    <label for="email">Email：</label>
    <input id="email" type="text" v-model="email">
    <br><br>
    <label for="password">パスワード：</label>
    <input id="password" type="password" v-model="password">
    <br><br>
    <button @click="login">送信</button>

  </div>
</template>

<script>
import axiosAuth from "../axios-auth.js";
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login(){
      const url = '/accounts:signInWithPassword?key=[API_KEY]'
      const data = {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      };
      axiosAuth.post(url, data)
      .then(response => {
        console.log(response);
      })
      .catch(error=>{
        console.log(error);
      });
      this.email = "";
      this.password = "";
    }
  }
}
</script>

<style>
</style>
