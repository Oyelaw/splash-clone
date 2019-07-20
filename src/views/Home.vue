<template>
  <div>
    <Header />
    <PhotosList />
  </div>
</template>

<script>
import Header from "../components/Header";
import PhotosList from "../components/PhotoList";

export default {
  name: "Home",
  components: {
    Header,
    PhotosList
  }
};
</script>