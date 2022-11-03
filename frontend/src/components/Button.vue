<template>
  <button
    v-if="isSubmit"
    :class="`btn__${ui}`"
    @click="onClick"
    :type="type"
  >
    {{ text }}
  </button>
</template>
<script>
export default {
  name: "ButtonUI",
  props: {
    text: {
      type: String,
    },
    type: {
      type: String,
    },
    ui: {
      type: String,
      default: "primary",
    },
    isSubmit: {
      type: Boolean,
    },
  },
  methods: {
    onClick() {
      this.$emit("onClick");
    },
  },
};
</script>
