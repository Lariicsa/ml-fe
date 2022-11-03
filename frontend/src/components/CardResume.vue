<template>
  <div class="card__wrapper">
    <div class="card">
      <figure class="card__image">
        <img :src="imageSource" alt="alt description" />
      </figure>
      <div class="card__info">
        <div class="card__price">${{ price }}</div>
        <div class="card__description">
          {{ description }}
        </div>
      </div>
      <div class="card__location">{{ location }}</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardResume",
  props: {
    imageSource: {
      type: String,
      default:
        "https://http2.mlstatic.com/D_Q_NP_2X_629197-MLM45309720387_032021-AB.webp",
    },
    price: {
      type: String,
      default: "1.980",
    },
    description: {
      type: String,
      default: "Vasito Karla Sabor Tamarindo Y Guayaba Dulce 24 Piezas",
    },
    location: {
      type: String,
      default: "Capital Federal",
    },
  },
};
</script>