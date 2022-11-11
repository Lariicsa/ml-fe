<template>
  <div class="card__wrapper" @click="onClick()">
    <div class="card">
      <figure class="card__image">
        <img :src="item.imageSource" alt="alt description" />
      </figure>
      <div class="card__info">
        <div class="card__price">${{ item.price }}</div>
        <div class="card__description">
          {{ item.description }}
        </div>
      </div>
      <div class="card__location">{{ item.location }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardResume",
  props: {
    item: {
      type: Object,
      default: null,
    },
  },

  methods: {
    onClick() {
      this.$emit("click");
    },
  },
};
</script>