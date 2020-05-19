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

      <input type="checkbox" id="isPrivate" v-model="eventData.isPrivate">
      <label for="isPrivate">非公開</label>
      <p>{{eventData.isPrivate}}</p>

      <p>参加条件</p>
      <input type="checkbox" id="10" value="10代" v-model="eventData.target">
      <label for="10">10代</label>
      <input type="checkbox" id="20" value="20代" v-model="eventData.target">
      <label for="20">20代</label>
      <input type="checkbox" id="30" value="30代" v-model="eventData.target">
      <label for="30">30代</label>
      <p>{{eventData.target}}</p>
      

      <p>参加費</p>
      <input type="radio" id="free" value="無料" v-model="eventData.price">
      <label for="free">無料</label>
      <input type="radio" id="paid" value="有料" v-model="eventData.price">
      <label for="paid">有料</label>
      <p>{{eventData.price}}</p>
    
    
    
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
        detail: "",
        isPrivate: false,
        target: [],
        price: "無料"
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
