<template>
  <div>
    <LikeHeader></LikeHeader>
    <p>{{ number }}</p>
    <LikeNumber v-bind:number="number"></LikeNumber>
    <LikeNumber :number="number"></LikeNumber>
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
  }
}
</script>

<style scoped>
div {
  border: 1px solid red;
}
</style>