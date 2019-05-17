<template>
  <nav>
    <ul>
      <li>
        <router-link to="/films" exact>Films</router-link>
      </li>
      <li>
        <router-link to="/" exact>Home</router-link>
      </li>
      <li>
        <router-link to="/series" exact>Series</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "header-nav"
};
</script>

<style lang="scss">
</style>
