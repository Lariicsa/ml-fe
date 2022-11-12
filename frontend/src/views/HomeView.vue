<template>
  <div class="container__inner">
    <BreadCrumb />
  </div>
</template>

<script>
import BreadCrumb from "@/components/Breadcrumb"

import { mapActions } from 'vuex';
export default {
  name: "HomeView",

  components: {
    BreadCrumb,
  },

  data() {
    return {
      seoTitle: 'Inicio'
    };
  },

  head: {
    title: function () {
      return {
        inner: this.seoTitle,
      };
    },
  },

  methods:{
    ...mapActions(["getProductSearch"])
  }
};
</script>
