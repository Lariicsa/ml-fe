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
      @keyup="keyup()"
      @keyup.enter="keyupEnter()"
      @blur="onBlur()"
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
    phText: String,
    textIn: String,
    value: String,
    autofocus: Boolean,
  },

  data() {
    return {
      textTyped: this.textIn,
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
    keyup() {
      this.$emit("keyup");
    },
    keyupEnter() {
      this.$emit("keyupEnter");
    },
    blur() {
      this.$emit("blur");
    },
    iconClick() {
      this.$emit("iconClick");
    },
  },
};
</script>