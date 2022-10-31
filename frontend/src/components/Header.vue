<template>
  <header class="header">
    <div class="header__container container__inner">
      <div class="header__logo"></div>
      <FinderBox placeholderInput="Buscar productos, marcas y más..." />
      <router-link class="header__promo" to="/">
        <img src="../assets/promo_disney.webp" alt="FREETRIAL" />
      </router-link>
    </div>
  </header>
</template>
<script>
import FinderBox from "@/components/FinderBox.vue";
export default {
  name: "HeaderUI",

  components: {
    FinderBox,
  },
};
</script>