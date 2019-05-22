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
        <v-button iconClass="search" :onClick="getData"></v-button>
      </form>

      <section class="results">
        <p v-if="searchData.isLoading">Loading ...</p>
        <ul v-if="searchData.results" class="results__lists">
          <li
            v-for="(item, index) in searchData.results"
            :key="index"
            :style="{ 'background-image': 'url(' + searchData.results[index].Poster + ')' }"
            class="results__item"
          >
            <div class="results__item__title">
              <h4>{{ searchData.results[index].Title }}</h4>
            </div>
          </li>
        </ul>
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
      searchType: this.$route.params.type,
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
    getData() {
      this.searchData.isLoading = true;
      this.searchData.results = null;
      
      fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&s=${this.searchData.title}&page=${this.searchData.page}&type=${this.searchType}`)
        .then(data => data.json())
        .then(json => {
          this.searchData.isLoading = false;
          this.searchData.results = json.Search;
          console.log(this.searchData.results);
        })
        .catch(error => {});
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
      grid-template-columns: repeat(4, 1fr);
    }
  }

  &__item {
    background-size: cover;
    background-position: center center;
    padding: 5px 10px;
    display: flex;
    align-items: flex-end;
    cursor: pointer;
    transition: .3s all ease;

    &:hover {
      opacity: .8;
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
        box-shadow:5px 0 0 white, -5px 0 0 white;
      }
    }
  }
}
</style>

