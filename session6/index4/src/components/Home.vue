<template>
  <div>
    <p v-border:solid.round.shadow="{ width: '5px', color: 'red' }">Home</p>
    <h2>{{ title | upperCase | lowerCase}}</h2>
    <p>{{ subtitle | lowerCase | upperCase }}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      tmpData: "hello",
      title: "Welcome to Tokyo",
      subtitle: "Tokyo is a great city"
    }
  },
  computed: {
    upperCaseTitle() {
      return this.title.toUpperCase();
    }
  },
  directives: {
    border: function(el, binding){
      //this.tmpData = "can not use";
      el.style.borderWidth = binding.value.width;
      el.style.borderColor = binding.value.color;
      el.style.borderStyle = binding.arg;
      if(binding.modifiers.round) {
        el.style.borderRadius = "0.5rem";
      }
      if(binding.modifiers.shadow) {
        el.style.boxShadow = "0 2px 5px rgba(0,0,0,0.26)";
      }
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