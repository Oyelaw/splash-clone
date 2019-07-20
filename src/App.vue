<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
}

/* container */

.container {
  width: 100%;
  margin: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

/* container end */

/* Ant styles override */
.ant-input-affix-wrapper {
  box-shadow: 0px 0px 25px rgba(30, 34, 37, 0.05);
  height: 65px;
}

.ant-input-lg {
  padding: 6px 11px;
  height: 65px;
  font-size: 16px;
}
/* End Ant styles override */

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
