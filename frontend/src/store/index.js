import Vue from "vue";
import Vuex from "vuex";
import { getProductQuery, getProductById } from "@/service/products";

Vue.use(Vuex);
/*eslint-disable */
export default new Vuex.Store({
  state: {
    foundItems: [],
    itemDetail: {},
    categories: [],
  },

  mutations: {
    SET_FOUND_ITEMS: (state, payload) => (state.foundItems = payload),
    SET_ITEM_DETAIL: (state, payload) => (state.itemDetail = payload),
    SET_CATEGORIES: (state, payload) => (state.categories = payload),
  },
  actions: {
    async getProductSearch({ commit }, param) {
      try {
        const res = await getProductQuery(param);
        const DATA = res.data;
        const ITEMS = DATA.items.map((item) => {
          return {
            imageSource: item.picture,
            price: item.price.amount,
            description: item.title,
            location: item.state_name,
            id: item.id,
          };
        });
        commit("SET_FOUND_ITEMS", ITEMS);
        commit("SET_CATEGORIES", DATA.categories);
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
      } catch (error) {
        console.log(error);
      }
    },
  },


});
