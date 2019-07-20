import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home";
import SearchResult from "../views/SearchResult";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: "/",
      component: Home,
      name: "home"
    },
    {
      path: "/search",
      component: SearchResult,
      name: "search_result"
    }
  ],
  mode: "history"
});
