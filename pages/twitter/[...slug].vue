<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <div
        id="tweet"
        bgImage
        :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
        class="w-[1200px] h-[675px] p-10 mx-auto flex flex-col items-center justify-center"
      >
        <img
          src="/assets/Velocimeter-lg.png"
          alt=""
          class="w-80 mr-auto mb-auto"
        />
        <h1 class="mr-auto mb-auto text-left">
          {{ doc.header }}
        </h1>
        <div class="flex gap-5 mt-8 my-auto mx-44" id="cards">
          <div v-if="doc.c1Token1">
            <Card
              :Cards="doc.cards"
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
              :Token1="doc.c2Token1"
              :Ticker1="doc.c2Ticker1"
              :Token2="doc.c2Token2"
              :Ticker2="doc.c2Ticker2"
              :Apr="doc.c2Apr"
            />
          </div>
        </div>
        <div class="flex w-full" id="footer">
          <h5 class="w-full ml-36 text-center mt-auto">velocimeter.xyz</h5>
          <img
            src="/assets/V.png"
            alt=""
            class="w-36 -mb-10 ml-auto mt-auto bg-circle rounded-full p-8"
          />
        </div>
      </div>
    </ContentDoc>
    <div class="w-full flex justify-center">
      <button
        v-on:click="saveDivAsImage"
        class="bg-vgreen text-background font-medium uppercase hover:bg-vgreen/70 rounded-full px-4 py-2 mt-8"
      >
        Save image
      </button>
    </div>
  </NuxtLayout>
</template>

<script>
export default {
  methods: {
    saveDivAsImage: async () => {
      if (process.client) {
        const html2canvas = await import("html2canvas");
        const div = document.getElementById("tweet");
        const canvas = await html2canvas.default(div);
        const dataUrl = canvas.toDataURL("image/png");
        const link = document.createElement("a");
        link.download = "my-image.png";
        link.href = dataUrl;
        link.click();
      }
    },
  },
};
</script>
