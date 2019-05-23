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
          <card v-for="(item, index) in searchData.results" :key="index" :item="item"></card>
        </ul>

        <div class="results__info" v-if="searchData.isLoading || searchData.errorMessage">
          <p v-if="searchData.isLoading" class="padding-top-10">Loading ...</p>
          <p v-if="searchData.errorMessage" class="padding-top-10">{{ searchData.errorMessage}}</p>
        </div>

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
import Card from "../components/Card";
import Button from "../components/Button";
import APIKEY from "../../apikey";

export default {
  name: "search",
  components: {
    "header-nav": HeaderNav,
    "input-field": InputField,
    "v-button": Button,
    card: Card
  },
  data() {
    return {
      searchType: this.$route.params.type === "series" ? "series" : "movie",
      searchData: {
        title: "",
        page: 1,
        isLoading: false,
        results: null,
        errorMessage: null
      }
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.searchType = to.params.type;
    this.searchData.results = null;
    next();
  },
  methods: {
    getData(page, moreData) {
      this.searchData.isLoading = true;
      this.searchData.errorMessage = null;
      
      fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${this.searchData.title}&page=${page}&type=${this.searchType}`)
        .then(data => data.json())
        .then(json => {
          this.searchData.isLoading = false;

          // Check error fetch
          if (json.Error) {
            this.searchData.errorMessage = json.Error;
            this.searchData.results = null;
            return;
          }

          // Paint fecth results
          let newResults = [];
          this.searchData.errorMessage = null;

          if (this.searchData.results === null || moreData === undefined) {
            newResults = json.Search;
          } else {
            newResults = [...this.searchData.results, ...json.Search];
          }

          this.searchData.results = newResults;
        })
        .catch(error => console.log(error));
    },
    getMoreData() {
      ++this.searchData.page;
      this.getData(this.searchData.page, true);
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

  &__info {
    text-align: center;
    font-size: 2.4rem;
    font-weight: 700;
  }

  &__more-data {
    padding: 20px 0;
    text-align: center;
  }
}
</style>

