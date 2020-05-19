<template>
  <div>
    <slot>デフォルトのタイトル</slot>
    <p>{{ headerText }}</p>
  </div>
</template>

<script>
export default {
  props: ["headerText"]
}
</script>