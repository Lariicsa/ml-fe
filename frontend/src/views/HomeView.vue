<template>
  <div class="container__inner">
    <BreadCrumb />
    <CardResume></CardResume>
    <CardResume></CardResume>
  </div>
</template>

<script>
import BreadCrumb from "@/components/Breadcrumb"
import CardResume from "@/components/CardResume";
import { mapActions } from 'vuex';
export default {
  name: "HomeView",
  components: {
    BreadCrumb,
    CardResume,
  },


  methods:{
    ...mapActions(["getProductSearch"])
  }
};
</script>
