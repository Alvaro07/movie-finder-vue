<template>
  <button class="c-button" :class="extraClass" @click.prevent="onButtonClick">
    <font-awesome-icon v-if="this.iconClass" :icon="this.iconClass"/>
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "v-button",
  props: {
    text: {
      type: String,
      required: false
    },
    iconClass: {
      type: String,
      required: false
    },
    extraClass: {
      type: String,
      requirted: false
    },
    onClick: {
      type: Function,
      required: false
    }
  },
  methods: {
    onButtonClick() {
      this.onClick();
    }
  }
};
</script>
<style lang="scss">
.c-button {
  --bg-color: #{$darkGrey};
  --txt-color: white;

  font-size: 1.6rem;
  font-weight: 700;
  color: var(--txt-color);
  cursor: pointer;

  padding: 10px 20px;
  background-color: var(--bg-color);
  border: none;
  border-radius: 3px;
  transition: 0.3s all ease;

  &:hover {
    --bg-color: #{$pink};
    --txt-color: white;
  }
}
</style>