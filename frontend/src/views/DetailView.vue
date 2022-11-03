<template>
  <div class="container__inner">
    <BreadCrumb />
    <div class="carddetail__wrapper">
      <div class="carddetail">
        <div class="carddetail__image">
          <figure class="carddetail__image">
            <img :src="imageSource" alt="alt description" />
          </figure>
        </div>
        <div class="carddetail__info">
          <span class="carddetail__status">Nuevo · 234 vendidos</span>
          <h1 class="carddetail__title">Deco reverse Sombrero Oxford</h1>
          <h2 class="carddetail__price">$ 1.980</h2>
          <div class="carddetail__button">
            <ButtonUI text="Comprar"></ButtonUI>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/Breadcrumb";
import ButtonUI from "@/components/Button";
export default {
  name: "DetailView",
  components: {
    BreadCrumb,
    ButtonUI,
  },

  props: {
    imageSource: {
      type: String,
      default:
        "https://http2.mlstatic.com/D_NQ_NP_2X_826416-MLM51485410736_092022-F.webp",
    },
  },
};
</script>

