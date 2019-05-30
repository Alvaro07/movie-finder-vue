<template>
  <section class="page-wrap">
    <header-nav></header-nav>

    <main class="page-wrap__main">
      <div v-if="isLoading">Loading ...</div>
      <section v-if="dataTitle" class="full-title">
        <div class="full-title__poster">
          <img :src="dataTitle.Poster" :v-model="dataTitle.Title">
        </div>

        <div class="full-title__content">
          <header>
            <h2 class="full-title__content__name">{{ dataTitle.Title }}</h2>
            <h3 class="margin-bottom-20">{{ dataTitle.Released }}</h3>
          </header>
          <h4 v-if="dataTitle.Director !== 'N/A'">Direction: {{ dataTitle.Director }}</h4>
          <h4 v-if="dataTitle.Writer !== 'N/A'">Writer: {{ dataTitle.Writer }}</h4>
          <p>Duration: {{ dataTitle.Runtime }}</p>
          <p>Country: {{ dataTitle.Country }}</p>
          <p>Language: {{ dataTitle.Language }}</p>
          <p>Genre: {{ dataTitle.Genre }}</p>
          <h3 class="full-title__content__cat">Summary</h3>
          <p>{{ dataTitle.Plot }}</p>
        </div>

        <div class="full-title__content"></div>
      </section>
      <div v-if="errorTitle">{{ errorTitle }}</div>
    </main>
  </section>
</template>
<script>
import APIKEY from "../../apikey";
import HeaderNav from "../components/HeaderNav";

export default {
  name: "v-title",
  components: {
    "header-nav": HeaderNav
  },
  data() {
    return {
      urlTitle: this.$route.params.name,
      isLoading: true,
      dataTitle: null,
      errorTitle: null
    };
  },
  created() {
    this.getFullData().then(data => {
      if (data.Error) {
        this.errorTitle = data.Error;
        this.isLoading = false;
        return;
      }

      this.dataTitle = data;
      this.isLoading = false;
    });
  },
  methods: {
    getFullData() {
      return new Promise((resolve, reject) => {
        fetch(`http://www.omdbapi.com/?apikey=${APIKEY}&t=${this.urlTitle}`)
          .then(data => data.json())
          .then(json => {
            resolve(json);
          })
          .catch(error => reject(error));
      });
    }
  }
};
</script>


<style lang="scss">
.full-title {
  padding-top: 20px;

  @include mediaTablet {
    display: flex;
  }
  // Intro image and props
  // Poster
  &__poster {
    text-align: center;
    margin-bottom: 20px;

    @include mediaTablet {
      padding-right: 20px;
    }

    img {
      border: 10px solid white;
      border-radius: 5px;
    }
  }

  // Props
  &__content {
    &__name {
      font-size: 2.4rem;
      font-weight: 700;
      padding-top: 20px;
    }
    &__cat {
      padding: 20px 0 10px 0;
      font-size: 2rem;
      font-weight: 700;
    }
  }
}
</style>