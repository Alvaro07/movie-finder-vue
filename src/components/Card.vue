<template>
  <li
    :style="{ 'background-image': item.Poster === 'N/A' ? `url(${require(`@/assets/icon-no-image.svg`)})` : `url(${item.Poster})` }"
    class="c-card"
  >
    <div class="c-card__title">
      <h4>{{ item.Title }}</h4>
    </div>
  </li>
</template>
<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object,
      required: true
    }
  }
};
</script>
<style lang="scss">
.c-card {
  background-size: cover;
  background-position: center center;
  padding: 5px 10px;
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  transition: 0.3s all ease;

  &:hover {
    opacity: 0.8;
  }

  &__title {
    & > h4 {
      display: inline;

      color: $darkGrey;
      font-size: 1.8rem;
      font-weight: 700;

      background: white;
      padding: 2px 0;
      line-height: 28px;
      box-shadow: 5px 0 0 white, -5px 0 0 white;
    }
  }
}
</style>
