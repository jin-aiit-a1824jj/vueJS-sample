<template>
  <div>
    <slot name="title">デフォルトのタイトル</slot>
    <p>{{ headerText }}</p>
    <hr>
    <p>いいねの数</p>
    <slot name="number"></slot>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>