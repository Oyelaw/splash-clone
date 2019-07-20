import Vuex from "vuex";
import Vue from "vue";
import Photos from "./modules/photos";

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
  modules: {
    Photos
  }
});
