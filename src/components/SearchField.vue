<template>
  <section class="search-field">
    <input-field type="text" placeholder="Search film"></input-field>
    <v-button iconClass="search"></v-button>
  </section>
</template>
<script>
import InputField from "./InputField";
import Button from "./Button";

export default {
  name: "search-field",
  components: {
    "input-field": InputField,
    "v-button": Button
  }
};
</script>
<style lang="scss">
</style>
