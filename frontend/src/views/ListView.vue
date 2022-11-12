<template>
  <div class="container__inner">
    <div class="row">
      <BreadCrumb :items="currentCategories" />
    </div>
    <div class="row">
      <CardResume
        v-for="itemData in currentFoundItems"
        :item="itemData"
        :key="itemData.id"
        @click="getItemDetail(itemData)"
      />
    </div>
  </div>
</template>
<script>
/*eslint-disable*/
import BreadCrumb from "@/components/Breadcrumb";
import CardResume from "@/components/CardResume";
export default {
  name: "ListView",

  components: {
    BreadCrumb,
    CardResume,
  },

  props: {
    urlText: {
      type: String,
    },
    textTyped: {
      type: String,
    },
  },

  head: {
    title: function () {
      return {
        inner: this.textInPath,
      };
    },
  },

  mounted() {
    this.getSeacrhOnLoad();
  },

  methods: {
    getSeacrhOnLoad() {
      if (this.textTyped !== "") {
        this.textTyped = this.textInPath;
      }
    },

    getItemDetail(itemData) {
      this.$store.dispatch("getProductDetail", itemData.id);
      this.$router.push({ name: "DetailView", params: { id: itemData.id } });
      console.log(itemData);
    },
  },

  computed: {
    textInPath() {
      const FULL_PATH = this.$route.fullPath.slice(14, 1000).toString();
      const URL_TEXT = FULL_PATH.toLowerCase().replace(
        /%[a-fA-F0-9-2f][a-fA-F0-9-2F]/g,
        " "
      );
      return URL_TEXT;
    },

    currentPath() {
      return this.$route.name;
    },
    currentCategories() {
      if (this.$store.state.categories.length > 5) {
        return undefined;
      }
      return this.$store.state.categories;
    },
    currentFoundItems() {
      return this.$store.state.foundItems;
    },
  },
};
</script>