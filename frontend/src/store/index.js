import Vue from "vue";
import Vuex from "vuex";
import { getProductQuery } from "@/service/products";

Vue.use(Vuex);
/*eslint-disable */
export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    async getProductSearch({ commit }, param) {
      try {
        const res = await getProductQuery(param);
        const DATA = res.data
        console.log('res', DATA);
      } catch (error) {
        console.log(error);
      }
    },
  },
  modules: {},
});
