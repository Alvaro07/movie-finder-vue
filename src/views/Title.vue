<template>
  <div>
    <div v-if="isLoading">Loading ...</div>
    <div v-if="dataTitle">{{ dataTitle.Title }}</div>
    <div v-if="errorTitle">{{ errorTitle }}</div>
  </div>
</template>
<script>
import APIKEY from "../../apikey";

export default {
  name: "v-title",
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
</style>