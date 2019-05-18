<template>
  <button>
    <font-awesome-icon v-if="this.iconClass" :icon="this.iconClass"/>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "v-button",
  props: {
    text: {
      type: String
    },
    iconClass: {
      type: String
    }
  }
};
</script>
<style lang="scss">
</style>