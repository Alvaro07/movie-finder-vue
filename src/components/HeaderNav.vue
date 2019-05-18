<template>
  <nav class="nav">
    <ul>
      <li class="nav__item">
        <router-link to="/films" exact class="nav__item__link">Films</router-link>
      </li>
      <li class="nav__item nav__item--home">
        <router-link to="/" exact class="nav__item__link">
          <font-awesome-icon icon="home"/>
        </router-link>
      </li>
      <li class="nav__item">
        <router-link to="/series" exact class="nav__item__link">Series</router-link>
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
  ul {
    display: flex;

    .nav__item {
      &:not(.nav__item--home) {
        flex: 1;
      }

      &__link {
        --bg-color: #{$darkGrey};
        --txt-color: white;

        display: block;
        padding: 10px;

        font-size: 2.4rem;
        font-weight: 400;
        text-align: center;
        text-decoration: none;
        color: var(--txt-color);

        background-color: var(--bg-color);
        line-height: 1.1;
        transition: 0.3s all ease;

        &--active,
        &:hover {
          --txt-color: #{$darkGrey};
          --bg-color: white;
        }
      }

      &--home {
        .nav__item__link {
          --txt-color: white;
          --bg-color: #{$pink};

          &:hover {
            --bg-color: #{$lightGrey};
            --txt-color: #{$pink};
          }
        }
      }
    }
  }
}
</style>
