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
export default {
  data(){
    return {
      title: "Welcome to Tokyo",
      subtitle: "Tokyo is a great city",
      number: 0
    }
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    }
  },
  filters: {
    lowerCase(value){
      //this.tmpData = "can not use";
      return value.toLowerCase();
    }
  }
}
</script>