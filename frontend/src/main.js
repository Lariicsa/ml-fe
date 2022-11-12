import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./scss/index.scss";
import VueHead from "vue-head";

Vue.config.productionTip = false;
Vue.use(VueHead, {
  separator: "|",
  complement: "Mercado Libre",
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
