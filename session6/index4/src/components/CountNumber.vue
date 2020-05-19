<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">Home</p>
    <h2>{{ title | upperCase | lowerCase}}</h2>
    <p>{{ subtitle | lowerCase | upperCase }}</p>
    <p>{{number}}</p>
    <button @click="number++">+1</button>
  </div>
</template>

<script>
import { tokyoNumber } from "@/tokyoNumber"

export default {
  mixins: [tokyoNumber],
  created(){
    console.log("created in Mixin -CountNumber");
  }
}
</script>