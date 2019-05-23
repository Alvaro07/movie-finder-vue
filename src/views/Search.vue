<template>
  <section class="page-wrap">
    <header-nav></header-nav>

    <main class="page-wrap__main">
      <form class="search-field">
        <input-field
          type="text"
          :placeholder="'Search ' + searchType"
          extraClass="margin-right-10"
          v-model="searchData.title"
        ></input-field>
        <v-button iconClass="search" :onClick="() => getData(this.searchData.page)"></v-button>
      </form>

      <section class="results">
        <ul v-if="searchData.results" class="results__lists">
          <li
            v-for="(item, index) in searchData.results"
            :key="index"
            :style="{ 'background-image': item.Poster === 'N/A' ? `url(${require(`@/assets/icon-no-image.svg`)})` : `url(${item.Poster})` }"
            class="results__item"
          >
            <div class="results__item__title">
              <h4>{{ item.Title }}</h4>
            </div>
          </li>
        </ul>
        <p v-if="searchData.isLoading">Loading ...</p>
        <div class="results__more-data" v-if="searchData.results">
          <v-button text="More data" :onClick="getMoreData"></v-button>
        </div>
      </section>
    </main>
  </section>
</template>



<script>
import HeaderNav from "../components/HeaderNav";
import InputField from "../components/InputField";
import Button from "../components/Button";
import APIKEY from "../../apikey";

export default {
  name: "search",
  components: {
    "header-nav": HeaderNav,
    "input-field": InputField,
    "v-button": Button
  },
  data() {
    return {
      searchType: this.$route.params.type === "series" ? "series" : "movie",
      searchData: {
        title: "",
        page: 1,
        isLoading: false,
        results: null
      }
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.searchType = to.params.type;
    next();
  },
  methods: {
    getData(page) {
      this.searchData.isLoading = true;

      fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${this.searchData.title}&page=${page}&type=${this.searchType}`)
        .then(data => data.json())
        .then(json => {
          this.searchData.isLoading = false;
          let newResults = [];

          this.searchData.results === null
            ? (newResults = json.Search)
            : (newResults = [...json.Search, ...this.searchData.results]);

          this.searchData.results = newResults;
        })
        .catch(error => {
          console.log(error);
        });
    },
    getMoreData() {
      ++this.searchData.page;
      this.getData(this.searchData.page);
    }
  }
};
</script>

<style lang="scss">
.page-wrap {
  padding: 15px;
  max-width: 1280px;
  margin: 0 auto;
}
.search-field {
  display: flex;
  justify-content: center;

  background-color: rgba($lightGrey, 0.4);
  border-radius: 5px;

  max-width: 600px;
  margin: 0 auto 30px auto;
  padding: 10px;
}

.results {
  &__lists {
    display: grid;
    grid-gap: 2px;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: minmax(300px, 1fr);

    @include mediaTablet {
      grid-template-columns: repeat(3, 1fr);
    }

    @include mediaDesktop {
      grid-template-columns: repeat(5, 1fr);
    }
  }

  &__item {
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

  &__more-data {
    padding: 20px 0;
    text-align: center;
  }
}
</style>

