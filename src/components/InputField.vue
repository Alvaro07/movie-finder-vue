<template>
  <input :type="type" :placeholder="placeholder" class="c-input" :class="extraClass">
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
    },
    extraClass: {
      type: String,
      requirted: false
    }
  }
};
</script>
<style lang="scss">
.c-input {
  width: 100%;
  padding: 10px 20px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid $lightGrey;
}
</style>