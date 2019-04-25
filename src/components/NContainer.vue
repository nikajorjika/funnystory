<template>
  <div class="n-container" :class="{fluid: fluid}" :style="{maxWidth: maxWidth}">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    fluid: {
      type: Boolean,
      default: false
    },
    maxWidth: {
      type: String,
      default: '1200px'
    }
  }
}
</script>
<style lang="scss">
  .n-container{
    width: 100%;
    margin: 0 auto;
  }
</style>