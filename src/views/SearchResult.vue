<template>
  <div>
    <SearchHeader>
      <div
        v-if="this.status === 'pending'"
        class="search-header"
      >Searching for '{{this.searchParam}}'</div>
      <div
        v-else-if="this.status === 'loaded'"
        class="search-header"
      >Search Results for '{{this.searchParam}}'</div>
      <div v-else-if="this.status === 'Error'" class="search-header">
        Unable to find results for
        <span class="key-word">'{{this.searchParam}}'</span>. Check your internet connection
      </div>
    </SearchHeader>
    <PhotosList />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "../components/Header";
import PhotosList from "../components/PhotoList";
import SearchHeader from "../components/SearchHeader";
export default {
  name: "SearchResult",
  components: {
    PhotosList,
    SearchHeader
  },
  methods: {
    ...mapActions("Photos", ["fetchPhotos"])
  },
  created() {
    let query = this.searchParam;
    console.log("SEarch result created with param", query);

    this.fetchPhotos({ query });
  },
  computed: {
    ...mapState("Photos", ["searchParam", "status"])
  }
};
</script>

<style lang="scss" scoped>
.search-header {
  padding: 30px 100px;
  align-items: center;
  height: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.key-word {
  font-weight: bold;
  margin-left: 4px;
}
</style>
