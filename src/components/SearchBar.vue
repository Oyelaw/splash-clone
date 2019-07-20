<template>
  <div class="search-div">
    <form class="search-form" @submit="onSubmit">
      <a-input size="large" placeholder="Search for photo" v-model="search" name="search">
        <a-icon slot="prefix" type="search" />
      </a-input>
    </form>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "SearchBar",
  methods: {
    ...mapActions("Photos", [
      "updateStateSearchParam",
      "updateStatus",
      "clearState"
    ]),
    // Onclick dispatch action to update the search param in state and transition to result screen
    onSubmit(e) {
      //prevent page from reloading
      e.preventDefault();

      if (this.search) {
        this.updateStateSearchParam(this.search);
        this.clearState();
        this.updateStatus("pending");
        // transit to search screen
        this.$router.push({ path: "/search" });
      }
    }
  },
  data() {
    return {
      search: ""
    };
  }
};
</script>

<style lang="scss" scoped>
.search-div {
  padding: 30px 100px;
  align-items: center;
  height: 60px;
  height: 100%;
  display: flex;
  justify-content: center;
}
.search-form {
  border-radius: 4px;
  background-color: #f5f5f5;
  display: flex;
  position: relative;
  width: 80%;
}
</style>
