<template>
  <input
    :type="type"
    :placeholder="placeholder"
    class="c-input"
    :class="extraClass"
    :value="value"
    @input="getData($event.target.value)"
  >
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
    },
    value: {
      type: String,
      required: true
    }
  },
  methods: {
    getData(data) {
      this.$emit("input", data);
    }
  },
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