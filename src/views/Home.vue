<template>
  <div>
    <Header />
    <PhotosList />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from "../components/Header";
import PhotosList from "../components/PhotoList";

export default {
  name: "Home",
  components: {
    Header,
    PhotosList
  },
  methods: {
    ...mapActions("Photos", ["fetchPhotos"])
  },
  created() {
    this.fetchPhotos();
  }
};
</script>