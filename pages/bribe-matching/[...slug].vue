<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <div ref="element" class="w-full h-full">
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="w-[1200px] h-[675px] p-6 pb-10 mx-auto flex flex-col items-center justify-center"
        >
          <div class="flex items-center mb-auto">
            <img :src="doc.partner" alt="" class="h-16" />
            <img src="/assets/handshake.png" alt="" class="h-8 mx-4 mt-1" />
            <img src="/assets/Velocimeter-lg.png" alt="" class="h-5" />
          </div>
          <div class="flex mt-12">
            <div>
              <img
                :src="doc.token1"
                alt=""
                class="w-[240px] h-[240px] drop-shadow-v z-50 bg-background rounded-full mx-auto"
              />
              <h2 class="text-center text-5xl mt-6 drop-shadow-v">
                {{ doc.t1Amount }}
              </h2>
              <h3 class="text-center mt-4 drop-shadow-v">
                ${{ doc.t1Ticker }}
              </h3>
            </div>
            <div class="flex flex-col items-center">
              <h5
                class="text-vgreen uppercase tracking-wider border-y border-vgreen py-3 mb-12 drop-shadow-v"
              >
                Bribe Matched
              </h5>
              <img
                src="/assets/Arrow.png"
                alt=""
                class="w-80 mt-2 drop-shadow-v"
              />
              <div class="flex mt-2">
                <img
                  :src="doc.pt1"
                  alt=""
                  class="w-[90px] h-[90px] drop-shadow-v z-50 bg-background rounded-full"
                />
                <img
                  :src="doc.pt2"
                  alt=""
                  class="w-[90px] h-[90px] mr-auto -ml-3 drop-shadow-v bg-background rounded-full"
                />
              </div>
              <h3 class="mt-4 drop-shadow-v">
                {{ doc.pt1Ticker }}/{{ doc.pt2Ticker }}
              </h3>
            </div>
            <div>
              <img
                :src="doc.token2"
                alt=""
                class="w-[240px] h-[240px] mr-auto drop-shadow-v bg-background rounded-full mx-auto"
              />
              <h2 class="text-center text-5xl mt-6 drop-shadow-v">
                {{ doc.t2Amount }}
              </h2>
              <h3 class="text-center mt-4 drop-shadow-v">
                ${{ doc.t2Ticker }}
              </h3>
            </div>
          </div>
          <div class="flex w-full mt-auto" id="footer">
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
