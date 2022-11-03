<template>
  <div class="container__main">
    <BreadCrumb />
    <CardResume></CardResume>
    <CardResume></CardResume>
  </div>
</template>

<script>
import BreadCrumb from "@/components/Breadcrumb"
import CardResume from "@/components/CardResume";
export default {
  name: "HomeView",
  components: {
    BreadCrumb,
    CardResume,
  },
};
</script>
