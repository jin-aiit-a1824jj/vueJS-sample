<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
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
</style>