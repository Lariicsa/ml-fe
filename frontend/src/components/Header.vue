<template>
  <header class="header">
    <div class="header__container container__inner">
      <router-link  class="header__logo" to="/"></router-link >
      <FinderBox
        inputName="meliFinder"
        placeholderInput="Buscar productos, marcas y más..."
        @search="getProductSearch(textTyped)"
        v-model="textTyped"
      />
      <router-link class="header__promo" to="/">
        <img src="../assets/promo_disney.webp" alt="FREETRIAL" />
      </router-link>
    </div>
  </header>
</template>
<script>
/*eslint-disable*/
import FinderBox from "@/components/FinderBox.vue";
export default {
  name: "HeaderUI",

  components: {
    FinderBox,
  },

  data() {
    return {
      textTyped: "",
    };
  },
  methods: {
    getProductSearch(text) {
      if (this.textTyped !== "") {
        const URL_TEXT = text.toLowerCase().replace(/[/, ' ']/g, "+");
        this.$store.dispatch("getProductSearch", URL_TEXT).then(() => {
          this.$router
            .push({
              name: "ListView",
              query: { ...this.$route.query, search: URL_TEXT },
            })
            .catch((err) => {});
        });
      }
    },
  },
};
</script>