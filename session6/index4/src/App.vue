<template>
  <div>
    <LikeHeader>
      <h3>はじめまして</h3>
    </LikeHeader> 
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
    <button @click="currnetComponent = 'Home'">Home</button>
    <button @click="currnetComponent = 'About'">About</button>
    <keep-alive>
      <component v-bind:is="currnetComponent"></component>
    </keep-alive>
    
    <div>
      <h2>イベントのフォーム</h2>
      <label for="title">タイトル</label>
      <input id="title" type="text" v-model.lazy="eventData.title">
      <pre>{{eventData.title}}</pre>

      <label for="maxNumber">最大人数</label>
      <input id="maxNumber" type="number" v-model.number="eventData.maxNumber">
      <p>{{typeof eventData.maxNumber}}</p>

      <label for="host">主催者</label>
      <input id="host" type="text" v-model.trim="eventData.host">
      <pre>{{eventData.host}}</pre>

      <label for="detail">イベント内容</label>
      <textarea id="detail" cols="30" rows="10" v-model="eventData.detail"></textarea>
      <p style="white-space: pre;">{{eventData.detail}}</p>

    </div>

  </div>
</template>

<script>

import LikeHeader from "./components/LikeHeader.vue";
import About from "./components/About.vue";
import Home from "./components/Home.vue";

export default {
  components: {
    LikeHeader: LikeHeader,
    About,
    Home
  },
  data() {
    return {
      number: 10,
      currnetComponent: "Home",
      eventData:{
        title: "タイトル",
        maxNumber: 0,
        host: "",
        detail: ""
      }
    }
  },
  methods: {
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>
