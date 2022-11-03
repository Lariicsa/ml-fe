<template>
  <div class="carddetail">
    <div class="carddetail__image"></div>
    <div class="carddetail__info">
      <span class="carddetail__status">Nuevo · 234 vendidos</span>
      <h1 class="carddetail__title">Deco reverse Sombrero Oxford</h1>
      <h2>$ 1.980</h2>
      <ButtonUI text="Comprar"></ButtonUI>
    </div>
  </div>
</template>

<script>
import ButtonUI from "@/components/Button";
export default {
  name: "DetailView",
  components: {
    ButtonUI,
  },
};
</script>

