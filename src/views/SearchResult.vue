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
      <div v-else-if="this.status === 'error'" class="search-header">
        Unable to find Results for
        <span class="key-word">'{{this.searchParam}}'</span>. Check your internet connection
      </div>
    </SearchHeader>
    <PhotosList />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PhotosList from "../components/PhotoList";
import SearchHeader from "../components/SearchHeader";
export default {
  name: "SearchResult",
  components: {
    PhotosList,
    SearchHeader
  },
  methods: {
    ...mapActions("Photos", ["fetchPhotos", "updateStatus", "clearState"])
  },
  created() {
    let query = this.searchParam;
    this.fetchPhotos({ query });
  },
  beforeDestroy() {
    this.clearState();
    this.updateStatus("pending");
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
  font-size: 30px;
  font-weight: bold;
  font-family: Arial;
}
.key-word {
  font-weight: 400;
  margin-left: 4px;
  text-transform: capitalize;
  opacity: 0.8;
}
</style>
