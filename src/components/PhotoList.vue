<template>
  <div class="container">
    <div v-if="this.status === 'pending'">
      <div class="grid">
        <div v-for="(n, index) in 8" :key="index" class="holder skeleton">
          <div class="overlay">
            <span class="text text-name"></span>
            <span class="text text-location"></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="this.status === 'loaded'">
      <div class="grid">
        <div v-for="photo in photos" :key="photo.id" class="holder">
          <img :src="photo.urls.thumb" />
        </div>
      </div>
    </div>
    <div
      v-else-if="this.status === 'error'"
    >Unable to fetch Pictures. Check your internet connection</div>
  </div>
</template>


<script>
import { mapState, mapActions } from "vuex";
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
  position: relative;

  img {
    max-height: 500px;
    min-height: 400px;
    max-width: 410px;
    width: 100%;
    border-radius: 8px;
  }
}

.skeleton {
  position: relative;
  background: rgb(225, 233, 235);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .text {
    height: 10px;
    width: 150px;
    background: rgb(116, 185, 197);
    margin: 0 0 20px 10px;
  }

  .text-name {
    width: 250px;
  }
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 1;
  transition: 0.5s ease;
  color: grey;
  display: flex;
  align-items: flex-start;
  flex-direction: column-reverse;

  .text {
    font-weight: 900;
    opacity: 0.8;
    color: white;
    text-shadow: 0 1px 8px rgba(0, 0, 0, 0.1);
    font-size: 40px;
  }

  .text-name {
    font-size: 35px;
  }

  .text-location {
    font-size: 5px;
  }
}
</style>