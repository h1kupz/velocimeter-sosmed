<template>
  <div class="w-full flex justify-center">
    <button
      @click="captureElement"
      class="bg-vgreen text-background font-medium uppercase hover:bg-vgreen/70 rounded-md px-3 py-1 my-4"
    >
      Capture Image
    </button>
  </div>
  <img v-if="imageData" :src="imageData" />
</template>

<script>
import domToImage from "dom-to-image";

export default {
  data() {
    return {
      imageData: null,
    };
  },
  methods: {
    async captureElement() {
      const element = this.$refs.element;
      try {
        const dataUrl = await domToImage.toPng(element);
        this.imageData = dataUrl;
      } catch (error) {
        console.error("Failed to capture element:", error);
      }
    },
  },
};
</script>
