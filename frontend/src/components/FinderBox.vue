<template>
  <div class="finder">
    <input
      class="finder__input"
      :name="inputName"
      :placeholder="placeholderInput"
      ref="input"
      :value="value"
      @input="updateValue()"
      @keyup="keyup()"
      @keyup.enter="keyupEnter()"
      @blur="blur()"
    />
    <span class="finder__icon" @click="iconClick"></span>
  </div>
</template>
<script>
export default {
  name: "FinderBox",

  props: {
    inputName: {
      type: String,
    },
    placeholderInput: {
      type: String,
    },
    value: {
      type: String,
    },
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