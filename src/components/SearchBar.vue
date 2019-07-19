<template>
  <div class="search-div">
    <form class="search-form">
      <a-input size="large" placeholder="Search for photo" v-model="search">
        <a-icon slot="prefix" type="search" />
      </a-input>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchBar",
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
