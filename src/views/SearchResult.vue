<template>
  <div>
    <h3>Search results screen</h3>
    <PhotosList />
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import Header from "../components/Header";
import PhotosList from "../components/PhotoList";
export default {
  name: "SearchResult",
  components: {
    PhotosList
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
    ...mapState("Photos", ["searchParam"])
  }
};
</script>

<style scoped>
</style>
