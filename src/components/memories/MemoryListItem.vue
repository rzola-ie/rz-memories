<template>
  <ion-item :router-link="`/memories/${memory.id}`">
    <ion-thumbnail slot="start">
      <ion-img :src="memory.image" :alt="memory.title" />
    </ion-thumbnail>

    <ion-label>
      {{ memory.title }}
    </ion-label>
  </ion-item>
</template>

<script>
import { IonItem, IonThumbnail, IonImg, IonLabel } from "@ionic/vue";

export default {
  components: {
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
  },
  props: ["memory"],
};
</script>

<style lang="scss" scoped>
</style>