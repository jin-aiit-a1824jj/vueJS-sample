<template>
  <div>
    <p>About</p>
    <input>
  </div>
</template>

<script>
export default {
  destroyed(){
    console.log("destroyed - About.vue");
  },
  deactivated(){
    console.log("deactivated - About.vue");
  },
  activated(){
    console.log("activated - About.vue");
  }
}
</script>