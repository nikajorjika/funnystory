<template>
  <div>
    <n-card v-for="(item, index) in $store.getters['Feed/feed']" :key="index">
      <template v-slot:header>
        <div>{{item.firstName}}</div>
      </template>
      <template v-slot:content>
        <div>{{item.firstName}}</div>
      </template>
    </n-card>
  </div>
</template>

<script>
export default {
  name: 'FeedListComponent',
  mounted: function () {
    this.$store.dispatch('Feed/getFeed').then(response => {
    }).catch(err => console.error(err))
  }
}
</script>

<style scoped>

</style>
