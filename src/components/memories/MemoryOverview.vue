<template>
  <ion-img :src="image" :alt="title" />
  <h2 class="ion-text-center">{{ title }}</h2>
  <p class="ion-text-center">{{ description }}</p>
</template>

<script>
import { IonImg } from "@ionic/vue";

export default {
  components: {
    IonImg,
  },
  props: ["title", "image", "description"],
};
</script>

<style lang="scss" scoped>
</style>