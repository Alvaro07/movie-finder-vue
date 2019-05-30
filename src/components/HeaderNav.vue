<template>
  <nav>
    <ul class="nav">
      <li class="nav__item nav__item--home">
        <router-link to="/" exact class="nav__item__link">
          <font-awesome-icon icon="home"/>
        </router-link>
      </li>

      <li class="nav__item">
        <router-link to="/search/films" class="nav__item__link" exact>Films</router-link>
      </li>

      <li class="nav__item">
        <router-link to="/search/tv-shows" class="nav__item__link" exact>Tv Shows</router-link>
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
.nav {
  display: flex;
  justify-content: center;
  padding-bottom: 15px;

  .nav__item {
    padding: 0 5px;

    &__link {
      --bg-color: #{$darkGrey};
      --txt-color: white;

      display: block;
      padding: 10px;

      font-size: 1.6rem;
      font-weight: 700;
      text-align: center;
      text-decoration: none;
      color: var(--txt-color);

      background-color: var(--bg-color);
      line-height: 1.1;
      transition: 0.3s all ease;
      border-radius: 5px;

      &--active,
      &:hover {
        --txt-color: white;
        --bg-color: #{$pink};
      }
    }
  }
}
</style>
