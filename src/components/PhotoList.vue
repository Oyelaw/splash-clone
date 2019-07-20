<template>
  <div class="container">
    <div v-if="this.status === 'pending'">Loading</div>
    <div v-else-if="this.status === 'loaded'">
      <div class="grid">
        <div v-for="photo in photos" :key="photo.id" class="holder">
          <img :src="photo.urls.thumb" />
        </div>
      </div>
    </div>
    <div
      v-else-if="this.status === 'Error'"
    >Unable to fetch Pictures. Check your internet connection</div>
  </div>
</template>


<script>
import { mapState, mapActions, mapGetters } from "vuex";
export default {
  name: "PhotoList2",
  computed: {
    ...mapState("Photos", ["photos", "status"])
  },
  methods: {
    ...mapActions("Photos", [])
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