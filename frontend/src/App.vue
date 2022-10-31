<template>
  <div id="app" class="space">
    <Header></Header>
    <router-view />
  </div>
</template>
<script>
import Header from "./components/Header.vue";
export default {
  name: "app",

  components: {
    Header,
  },
};
</script>
