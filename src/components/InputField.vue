<template>
  <input :type="type" :placeholder="placeholder">
</template>
<script>
export default {
  name: "input-field",
  props: {
    type: {
      type: String,
      required: true
    },
    placeholder: {
      type: String,
      required: false
    }
  }
};
</script>
<style lang="scss">
</style>