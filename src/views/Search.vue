<template>
  <section class="page-wrap">
    <header-nav></header-nav>

    <main class="page-wrap__main">
      <form class="search-field">
        <input-field
          type="text"
          :placeholder="'Search ' + searchType"
          extraClass="margin-right-10"
          v-model="searchValue"
        ></input-field>
        <v-button iconClass="search" :onClick="getData"></v-button>
      </form>

      <section class="results">
        <p v-if="isLoading">Loading ...</p>
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
      searchValue: "",
      isLoading: false,
      searchType: this.$route.params.type
    };
  },
  beforeRouteUpdate(to, from, next) {
    this.searchType = to.params.type;
    next();
  },
  methods: {
    getData() {
      this.isLoading = true;

      fetch(`https://www.omdbapi.com/?apikey=${APIKEY}&t=star-wars&page=20`)
        .then(data => data.json())
        .then(json => {
          console.log(json)
          this.isLoading = false;
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
  margin: 0 auto;
  padding: 10px;
}
</style>

