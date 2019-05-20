<template>
  <section class="home">
    <router-link tag="figure" to="/search/films" class="home__figure home__figure--films">
      <h2 class="home__figure__title">Films</h2>
    </router-link>
    <router-link tag="figure" to="/search/series" class="home__figure home__figure--series">
      <h2 class="home__figure__title">Series</h2>
    </router-link>
  </section>
</template>

<script>
export default {
  name: "home"
};
</script>

<style lang="scss">
.home {
  display: flex;
  flex-direction: column;
  height: 100vh;

  @include mediaDesktop {
    flex-direction: initial;
  }

  &__figure {
    flex: 1;
    cursor: pointer;
    background-size: cover;
    background-position: center center;
    position: relative;
    z-index: 1;
    transition: opacity 0.3s ease;

    // Hover effect

    &::after {
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      height: 5px;
      background-color: $pink;
      transform: scaleX(0);
      transition: transform 0.2s ease-in;
    }

    &:hover {
      opacity: 0.9;
      .home__figure__title {
        color: $pink;
        --type-shadow: 1px 2px white;
      }
    }

    &::after {
      bottom: 0;
      transform-origin: center left;
    }

    &:hover::after {
      transform-origin: center right;
      transform: scaleX(1);
    }

    // Figure difference

    &--films {
      --film-image: url("../assets/star-wars.webp");
      background-image: var(--film-image);

      @include mediaDesktop {
        --film-image: url("../assets/star-wars-large.jpg");
      }

      .home__figure__title {
        right: 20px;
        top: 10px;

        @include mediaDesktop {
          right: 30px;
          top: initial;
          bottom: 30px;
        }
      }
    }

    &--series {
      --series-image: url("../assets/got.jpeg");
      background-image: var(--series-image);

      @include mediaDesktop {
        --series-image: url("../assets/got-large.jpg");
      }

      .home__figure__title {
        left: 20px;
        bottom: 10px;

        @include mediaDesktop {
          left: inherit;
          right: 30px;
          bottom: 30px;
        }
      }
    }

    &__title {
      --typo-size: 5rem;
      --type-shadow: 1px 2px black;

      font-family: $Luckiest;
      color: white;
      font-weight: 400;
      font-size: var(--typo-size);
      text-shadow: var(--type-shadow);
      position: absolute;
      transition: all 0.3s ease;

      @include mediaTablet {
        --typo-size: 7rem;
      }
    }
  }
}
</style>
