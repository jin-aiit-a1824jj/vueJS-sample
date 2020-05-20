<template>
  <div id="app">
    <h3>掲示板に投稿する</h3>
    <label for="name">ニックネーム：</label>
    <input id="name" type="text" v-model="name">
    <br><br>
    <label for="comment">コメント：</label>
    <textarea id="comment" v-model="comment"></textarea>
    <br><br>
    <button @click="createComment">コメントをサーバーに送る</button>
    <h2>掲示板</h2>
    <div v-for="post in posts" :key="post.name">
      <br>
      <div>名前：{{post.fields.name.stringValue}}</div>
      <div>コメント：{{post.fields.comment.stringValue}}</div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const url = 'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/cities/LA';
export default {
  data() {
    return {
      name: "",
      comment: "",
      posts: []
    };
  },
  methods: {
    createComment(){
      const data = { 
        fields:{
          name: { stringValue: this.name},
          comment: { stringValue: this.comment}
        }
      };
      axios.post(url,data).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
      this.name = "";
      this.comment = "";
    }
  },
  created(){
    axios.get(url).then((response)=>{
      console.log(response.data.documents);
      this.posts = response.data.documents;
    }).catch((error)=>{
      console.log(error);
    });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
