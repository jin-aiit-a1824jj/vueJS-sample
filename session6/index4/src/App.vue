<template>
  <div>
    <LikeHeader headerText="Hello" v-slot:default="slotProps">
      <!-- <h2>みなさん</h2>
      
      <template v-slot:title="slotProps">
        <h1>こんにちは</h1>
        <h1>{{ slotProps.user.firstName }}</h1>
      </template>
      
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>

      <template v-slot:number>
        <h2>{{ number }}</h2>
      </template> -->
     
      <p>{{slotProps}}</p>
      <h2>みなさん</h2>
      <h3>はじめまして</h3>
      <p>よろしくお願いします</p>
 
    </LikeHeader> 
    
    <LikeNumber v-bind:totalNumber="number" v-on:my-click="number = $event"></LikeNumber>
    <LikeNumber :totalNumber="number" @my-click="incrementNumber"></LikeNumber>
  </div>
</template>

<script>

import LikeHeader from "./components/LikeHeader.vue";

export default {
  components: {
    LikeHeader: LikeHeader
  },
  data() {
    return {
      number: 10
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