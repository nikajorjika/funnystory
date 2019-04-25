<template>
  <nav id="nav">
    <n-container>
      <n-layout>
        <n-flex>
          <div class="logo">
            <img :src="logo" alt>
          </div>
        </n-flex>
        <n-flex class="n-col-6 n-ma-auto">
          <n-search />
        </n-flex>
        <n-flex></n-flex>
      </n-layout>
    </n-container>
  </nav>
</template>

<script>
export default {
  name: "NHeader",
  computed: {
    logo: function() {
      return `${this.url}/img/logo.png`;
    }
  }
};
</script>

<style lang="scss" scoped>
#nav {
  background: #35ce8d;
  padding: 12px;
}
.logo {
  color: #fff;
  font-family: "Courier New", Courier, monospace;
  margin-left: 15px;
  width: 90px;
  img{
    width: 100%;
  
  }
}
</style>