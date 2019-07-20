<template>
  <div class="container">
    <div class="grid">
      <div v-for="photo in photos" :key="photo.id" class="holder">
        <img :src="photo.urls.thumb" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  created() {
    this.fetchPhotos();
  },
  computed: {
    ...mapState("Photos", ["photos"])
  },
  methods: {
    ...mapActions("Photos", ["fetchPhotos"])
  }
};
</script>

<style lang="scss" scoped>
.grid {
  top: 0;
  left: 0;
  right: 0;
  margin: -60px 0px;
  top: 1px;
  columns: 3 200px;
  column-gap: 2rem;
}
.holder {
  width: 150px;
  color: white;
  margin: 0 1rem 1rem 0;
  display: inline-block;
  width: 100%;
  text-align: center;
  font-family: system-ui;
  font-weight: 900;
  font-size: 2rem;
  min-height: 400px;
  max-height: 500px;

  img {
    max-height: 500px;
    min-height: 400px;
    max-width: 410px;
    width: 100%;
    border-radius: 8px;
  }
}
</style>