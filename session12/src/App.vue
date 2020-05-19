<template>
  <div class="main">
    <button @click="show = !show">切り替え</button>
    <transition name="fade">
      <p v-if="show">hello</p>
    </transition>
    
  </div>
</template>

<script>
export default {
  data(){
    return{
      show: true
    };
  }
}
</script>

<style scoped>
.fade-enter{

}

.fade-enter-active{

}

.fade-enter-to{

}

.fade-leave{

}

.fade-leave-active{

}

.fade-leave-to{

}


.main{
  width: 70%;
  margin: auto;
  padding-top: 5rem;
  text-align: center;
}
</style>
