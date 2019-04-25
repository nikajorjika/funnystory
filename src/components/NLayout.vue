<template>
  <div class="n-layout">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'NLayoutComponent'
};
</script>

<style lang="scss">
.n-layout {
  display: flex;
}
</style>