<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #42b983;
    transition: 0.3s all ease;

    &:hover {
      color: #0f673f;
    }
    &.router-link-exact-active {
      color: #2c3e50;
      cursor: default;
    }
  }
}
</style>
