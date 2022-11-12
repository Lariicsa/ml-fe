import Vue from "vue";
import Vuex from "vuex";
import { getProductQuery, getProductById } from "@/service/products";

Vue.use(Vuex);
/*eslint-disable */
export default new Vuex.Store({
  state: {
    foundItems: [],
    itemDetail: {},
  },

  mutations: {
    SET_FOUND_ITEMS: (state, payload) => (state.foundItems = payload),
    SET_ITEM_DETAIL: (state, payload) => {
      state.itemDetail = payload;
    },
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

    async getProductDetail({ commit }, productId) {
      try {
        const res = await getProductById(productId);
        const ITEM = res.data;
        const CONDITION = ITEM.condition === "new" ? "Nuevo" : "Usado";
        const QUANTITY = ITEM.sold_quantity > 1 ? "vendidos" : "vendido";
        const DATA = {
          status: `${CONDITION} · ${ITEM.sold_quantity} ${QUANTITY}`,
          title: ITEM.title,
          description: ITEM.description,
          price: `${ITEM.price.currency} ${ITEM.price.amount}`,
          imageSource: ITEM.picture,
        };
        commit("SET_ITEM_DETAIL", DATA);
        console.log("DAta", DATA);
        console.log("item", ITEM);
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
          id: item.id,
        };
      });

      return FORMATTED;
    },
  },
});
