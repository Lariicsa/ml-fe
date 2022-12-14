import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import store from "@/store/index.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/items:search?",
    name: "ListView",
    component: () => import("@/views/ListView.vue"),
  },

  {
    path: "/items/:id",
    name: "DetailView",
    component: () => import("@/views/DetailView.vue"),
    props: true,
    beforeEnter: (to, from, next) => {
      const exists = store.state.foundItems;
      if (exists) {
        next();
      } else {
        console.log("detail prod not found");
        next(this.$router.go(-1));
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
