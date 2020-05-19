<template>
  <div>
    <slot></slot>
  </div> 
</template>

<script>
export default {
  props: ["headerText"],
  data() {
    return {
      user:{
        firstName: 'Jack',
        lastName: 'Donald'
      }
    }
  }
}
</script>