<template>
  <div class="breadcrumb">
    <ul class="breadcrumb__menu">
      <li
        class="breadcrumb__option"
        v-for="(item, $index) in items"
        :key="$index"
      >
        {{ item }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "BreadCrumb",
  props: {
    items: {
      type: Array,
      default: undefined,
    },
  },
};
</script>