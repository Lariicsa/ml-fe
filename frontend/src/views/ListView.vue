<template>
  <div class="cintainer__inner">
    <div class="row">
      <CardResume
        v-for="itemData in currentFoundItems"
        :item="itemData"
        :key="itemData.title"
      />
    </div>
  </div>
</template>
<script>
import CardResume from "@/components/CardResume";
import { mapGetters } from "vuex";
export default {
  name: "ListView",

  components: {
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

  mounted() {
    this.getSeacrhOnLoad();
  },

  methods: {
    getSeacrhOnLoad() {
      if (this.textTyped !== "") {
        const parsed = this.textTyped.split(" ");
        const finalArray = [];
        parsed.forEach((item) => {
          const hasSpecial = item.includes("#");
          if (hasSpecial) {
            const splited = item.split("#").join("");
            finalArray.push(splited);
          } else {
            finalArray.push(item);
          }
        });
        const toSearch = finalArray.join("+");
        return toSearch;
      } else {
        return this.textTyped;
      }
    },
  },

  computed: {
    ...mapGetters(["currentFoundItems"]),
    textInPath() {
      const FULL_PATH = this.$route.fullPath.slice(7, 1000).toString();
      const URL_TEXT = FULL_PATH.toLowerCase().replace(
        /%[a-fA-F0-9-2f][a-fA-F0-9-2F]/g,
        " "
      );
      return URL_TEXT;
    },

    currentPath() {
      return this.$route.name;
    },
  },
};
</script>