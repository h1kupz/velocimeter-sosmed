<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="tweet-background pb-10"
        >
          <div v-if="doc.template === 'one'" class="flex items-center gap-4">
            <img :src="doc.tPartner" alt="" class="h-9 drop-shadow-v" />
            <img
              src="/assets/cross.svg"
              alt=""
              class="h-5 mt-[2px] drop-shadow-v"
            />
            <img
              src="/assets/Velocimeter-lg.png"
              alt=""
              class="h-5 drop-shadow-v"
            />
          </div>
          <div
            v-if="doc.template === 'one'"
            class="flex justify-center items-center h-full gap-6"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <img
                :src="doc.mPartner"
                alt=""
                class="h-80 mx-auto drop-shadow-v"
              />
            </div>
            <img
              src="/assets/cross.svg"
              alt=""
              class="h-24 ml-8 mb-8 drop-shadow-v"
            />
            <div class="flex flex-col items-center justify-center h-full">
              <img src="/assets/V.svg" alt="" class="h-72 drop-shadow-v" />
            </div>
          </div>
          <div
            v-if="doc.template === 'two'"
            class="flex flex-col justify-center items-center h-full gap-12 mb-12"
          >
            <img
              :src="doc.mPartner"
              alt=""
              class="w-[600px] mx-auto drop-shadow-v"
            />

            <img
              src="/assets/cross.svg"
              alt=""
              class="h-16 mx-4 drop-shadow-v"
            />

            <img
              src="/assets/Velocimeter-lg.png"
              alt=""
              class="w-[600px] mx-auto drop-shadow-v"
            />
          </div>
          <TweetFooterNoV />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
