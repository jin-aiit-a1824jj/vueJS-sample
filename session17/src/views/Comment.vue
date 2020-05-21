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
      axios.post("/comments",data).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
      this.name = "";
      this.comment = "";
    }
  },
  created(){
    axios.get("/comments").then((response)=>{
      console.log(response.data.documents);
      this.posts = response.data.documents;
    }).catch((error)=>{
      console.log(error);
    });
  }
}
</script>

<style>
</style>
