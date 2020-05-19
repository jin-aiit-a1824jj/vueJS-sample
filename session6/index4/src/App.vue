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
      currnetComponent: "Home"
    }
  },
  methods: {
    incrementNumber(value){
      this.number = value
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}

h1 {
  color: green;
}
</style>