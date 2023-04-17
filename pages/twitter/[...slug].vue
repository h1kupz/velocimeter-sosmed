<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <div ref="element" class="w-full h-full">
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="w-[1200px] h-[675px] p-10 mx-auto flex flex-col items-center justify-center"
        >
          <img
            src="/assets/Velocimeter-lg.png"
            alt=""
            class="w-80 mr-auto mb-4"
          />
          <h1 class="mr-auto mb-auto text-left">
            {{ doc.header }}
          </h1>
          <div class="flex gap-5 mt-8 my-auto mx-44" id="cards">
            <div v-if="doc.c1Token1">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c1Token1"
                :Ticker1="doc.c1Ticker1"
                :Token2="doc.c1Token2"
                :Ticker2="doc.c1Ticker2"
                :Apr="doc.c1Apr"
              />
            </div>
            <div v-if="doc.c2Token1">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c2Token1"
                :Ticker1="doc.c2Ticker1"
                :Token2="doc.c2Token2"
                :Ticker2="doc.c2Ticker2"
                :Apr="doc.c2Apr"
              />
            </div>
            <div v-if="doc.c3Token1">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c3Token1"
                :Ticker1="doc.c3Ticker1"
                :Token2="doc.c3Token2"
                :Ticker2="doc.c3Ticker2"
                :Apr="doc.c3Apr"
              />
            </div>
          </div>
          <div class="flex w-full" id="footer">
            <h5 class="w-full ml-28 text-center mt-auto">velocimeter.xyz</h5>
            <img
              src="/assets/V.png"
              alt=""
              class="w-36 -mr-8 -mb-8 ml-auto mt-auto bg-circle rounded-full p-8"
            />
          </div>
        </div>
      </div>
    </ContentDoc>
    <div class="w-full flex justify-center">
      <button
        @click="captureElement"
        class="bg-vgreen text-background font-medium uppercase hover:bg-vgreen/70 rounded-full px-3 py-1 my-4"
      >
        Capture Image
      </button>
    </div>
    <img v-if="imageData" :src="imageData" />
  </NuxtLayout>
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
