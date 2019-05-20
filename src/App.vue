<template>
  <div id="app" class="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>


<style lang="scss">
@import "styles/index";

.app {
  min-height: 100%;
  background-image: linear-gradient(to top, #e6e9f0 0%, #eef1f5 100%);
}
</style>
