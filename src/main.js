import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";

import { Input, Icon } from "ant-design-vue";
import "ant-design-vue/dist/antd.css";

Vue.use(Input);
Vue.use(Icon);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
