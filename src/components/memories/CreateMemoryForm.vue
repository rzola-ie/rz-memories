<template>
  <form class="ion-padding" @submit.prevent="submitForm">
    <ion-list>
      <ion-item>
        <ion-label position="floating">Title</ion-label>
        <ion-input type="text" required v-model="enteredTitle" />
      </ion-item>
      <ion-item>
        <ion-thumbnail slot="start">
          <ion-img :src="takenImageUrl" alt="" />
        </ion-thumbnail>
        <ion-button fill="clear" @click="takePhoto" type="button">
          <ion-icon slot="start" :icon="camera" />
          Take Photo
        </ion-button>
      </ion-item>
      <ion-item>
        <ion-label position="floating">Description</ion-label>
        <ion-textarea rows="5" v-model="enteredDescription" />
      </ion-item>
    </ion-list>
    <ion-button expand="full" type="submit">save</ion-button>
  </form>
</template>

<script>
import {
  IonButton,
  IonList,
  IonItem,
  IonLabel,
  IonInput,
  IonTextarea,
  IonThumbnail,
  IonImg,
} from "@ionic/vue";
import { camera } from "ionicons/icons";
import { Plugins, CameraResultType, CameraSource } from "@capacitor/core";

const { Camera } = Plugins;

export default {
  emits: ["save-memory"],
  components: {
    IonButton,
    IonList,
    IonItem,
    IonLabel,
    IonInput,
    IonTextarea,
    IonThumbnail,
    IonImg,
  },
  data() {
    return {
      camera,
      enteredTitle: "",
      enteredImageUrl: "",
      enteredDescription: "",
      takenImageUrl: "",
    };
  },
  methods: {
    async takePhoto() {
      const photo = await Camera.getPhoto({
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
        quality: 60,
      });

      this.takenImageUrl = photo.webPath;
      console.log(photo);
    },
    submitForm() {
      const memoryData = {
        title: this.enteredTitle,
        image: this.takenImageUrl,
        description: this.enteredDescription,
      };
      this.$emit("save-memory", memoryData);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>