<template>
  <div class="container__inner">
    <BreadCrumb />
    <div class="carddetail__wrapper">
      <div class="carddetail">
        <div class="carddetail__image">
          <figure class="carddetail__image">
            <img
              :src="currentItemDetail.imageSource"
              :alt="currentItemDetail.title"
            />
          </figure>
        </div>
        <div class="carddetail__info">
          <span class="carddetail__status">{{ currentItemDetail.status }}</span>
          <h1 class="carddetail__title">{{ currentItemDetail.title }}</h1>
          <h2 class="carddetail__price">{{ currentItemDetail.price }}</h2>
          <div class="carddetail__button">
            <ButtonUI text="Comprar" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BreadCrumb from "@/components/Breadcrumb";
import ButtonUI from "@/components/Button";
import { mapActions } from "vuex";
export default {
  name: "DetailView",

  components: {
    BreadCrumb,
    ButtonUI,
  },

  head: {
    title: function () {
      return {
        inner: this.currentItemDetail.title,
      };
    },
  },

  mounted() {
    this.getProductDetail(this.itemId);
    this.currentItemDetail;
  },

  methods: {
    ...mapActions(["getProductDetail"]),
  },

  computed: {
    currentItemDetail() {
      return this.$store.state.itemDetail;
    },

    itemId() {
      return this.$route.params.id;
    },
  },
};
</script>

