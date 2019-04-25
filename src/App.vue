<template>
  <div id="app">
    <n-header />
    <router-view/>
  </div>
</template>
<script>
import NHeader from './core/NHeader';
export default {
  name: 'App',
  components: {
    NHeader
  }
}
</script>
<style lang="scss">
@import './styles/main';
</style>
