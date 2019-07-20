<template>
  <div class="container">
    <div v-if="this.status === 'pending'">
      <div class="grid">
        <div v-for="(n, index) in 8" :key="index" class="holder skeleton">
          <div class="overlay">
            <span class="text text-name"></span>
            <span class="text"></span>
          </div>
        </div>
      </div>
    </div>
    <div v-else-if="this.status === 'loaded'">
      <div class="grid">
        <div v-for="photo in photos" :key="photo.id" class="holder">
          <div class="overlay nameAndLocation">
            <span class="text text-name">{{photo.user.first_name}}{{photo.user.last_name}}</span>
            <span class="text text-location">{{photo.user.location}}</span>
          </div>
          <img @click="modalClicked()" :src="photo.urls.thumb" />
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
  name: "PhotoList",
  computed: {
    ...mapState("Photos", ["photos", "status"])
  },
  methods: {
    ...mapActions("Photos", []),
    modalClicked() {
      console.log("image clicked");
    }
  },
  data() {
    return {
      showModal: false
    };
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

.nameAndLocation {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 15px 0 15px 25px;
}

.skeleton {
  position: relative;
  background: #ddd;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  &::after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    transform: translateX(-100%);
    background-image: linear-gradient(
      90deg,
      rgba(#fff, 0) 0,
      rgba(#fff, 0.2) 20%,
      rgba(#fff, 0.5) 60%,
      rgba(#fff, 0)
    );
    animation: shimmer 5s infinite;
    content: "";
  }

  @keyframes shimmer {
    100% {
      transform: translateX(100%);
    }
  }

  .text {
    height: 10px;
    width: 60%;
    background: #e8e8e8;
    margin: 0 0 20px 10px;
  }

  .text-name {
    width: 70%;
  }
}

.overlay {
  opacity: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.text {
  font-weight: 500;
  opacity: 1;
  color: white;
}

.text-name {
  font-size: 20px;
}

.text-location {
  font-size: 15px;
}
</style>