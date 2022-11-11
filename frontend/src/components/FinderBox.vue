<template>
  <form class="finder" @submit.prevent="search()">
    <input
      class="finder__input"
      :name="inputName"
      :placeholder="placeholderInput"
      type="text"
      ref="input"
      :value="value"
      @input="updateValue()"
      @keyup.enter="keyupEnter()"
    />
    <span class="finder__icon" @click="search()"></span>
  </form>
</template>
<script>
export default {
  name: "FinderBox",

  props: {
    textUrl: {
      type: String,
    },
    inputName: {
      type: String,
    },
    placeholderInput: {
      type: String,
    },
    typedData: {
      type: String,
    },
    value: {
      type: String,
    },
    autofocus: {
      type: Boolean,
    },
  },

  data() {
    return {
      textTyped: this.typedData,
      isOpen: false,
    };
  },

  mounted() {
    if (this.autofocus) this.$refs.input.focus();
  },

  methods: {
    updateValue() {
      this.$emit("input", this.$refs.input.value);
    },
    search() {
      this.$emit("search");
    },
    keyupEnter() {
      this.$emit("keyupEnter");
    },
    iconClick() {
      this.$emit("iconClick");
    },
  },
};
</script>