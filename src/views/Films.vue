<template>
  <div class="films">
    <header-nav></header-nav>
    <search-field></search-field>
    <h1>This is an films page</h1>
  </div>
</template>

<script>
import HeaderNav from "../components/HeaderNav";
import SearchField from "../components/SearchField";

export default {
  name: "films",
  components: {
    "header-nav": HeaderNav,
    'search-field': SearchField
  }
};
</script>

<style lang="scss">
</style>

