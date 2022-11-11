import Vue from "vue";
import Vuex from "vuex";
import { getProductQuery } from "@/service/products";

Vue.use(Vuex);
/*eslint-disable */
export default new Vuex.Store({
  state: {
    foundItems: [],
  },

  mutations: {
    SET_FOUND_ITEMS: (state, payload) => (state.foundItems = payload),
  },
  actions: {
    async getProductSearch({ commit }, param) {
      try {
        const res = await getProductQuery(param);
        const DATA = res.data;
        commit("SET_FOUND_ITEMS", DATA.items);
        console.log("res", DATA);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    currentFoundItems(state) {
      const FORMATTED = state.foundItems.map((item) => {
        return {
          imageSource: item.picture,
          price: item.price.amount,
          description: item.title,
          location: item.state_name,
        };
      });

      return FORMATTED
    },
  },
});
