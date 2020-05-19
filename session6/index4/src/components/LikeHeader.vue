<template>
  <div>
    <!-- <slot name="title" :user="user" text="text">デフォルトのタイトル</slot>
    <p>{{ headerText }}</p>
    <hr>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot> -->
  

    <slot :user="user" text="text"></slot>
    <slot></slot>
    <hr>
    <p>いいねの数</p>
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