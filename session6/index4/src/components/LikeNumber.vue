<template>
  <div>
    <p>いいね({{ halfNumber }})</p>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
export default {
  props: {
    totalNumber: {
      type: Number,
      //required: true,
      default: function () {
        return {
          number: 5
        };
      }
    },
    testProps: {
      type: String,
      required: false
    }
  },
  methods:{
    increment(){
      this.$emit("my-click", this.totalNumber + 1);
    }
  },
  computed:{
    halfNumber() {
      return this.totalNumber / 2;
    }
  }
}
</script>

<style scoped>
div {
  border: 1px solid blue;
}
</style>