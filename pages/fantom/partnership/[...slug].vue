<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="tweet-background py-10"
        >
          <div v-if="doc.template === 'one'" class="flex items-center gap-4">
            <img :src="doc.tPartner" alt="" class="h-9 drop-shadow-fvm" />
            <img
              src="/assets/cross.svg"
              alt=""
              class="h-5 mt-[2px] drop-shadow-fvm"
            />
            <img src="/images/fvm.png" alt="" class="h-9 drop-shadow-fvm" />
          </div>
          <div
            v-if="doc.template === 'one'"
            class="flex justify-center items-center h-full gap-6"
          >
            <div class="flex flex-col items-center justify-center h-full">
              <img
                :src="doc.mPartner"
                alt=""
                class="h-96 mx-auto drop-shadow-fvm"
              />
            </div>
            <img
              src="/assets/cross.svg"
              alt=""
              class="h-20 mx-8 mb-1 drop-shadow-fvm"
            />
            <div class="flex flex-col items-center justify-center h-full">
              <img
                src="/images/FVM-token-blu.png"
                alt=""
                class="h-96 drop-shadow-fvm"
              />
            </div>
          </div>
          <div
            v-if="doc.template === 'two'"
            class="flex flex-col justify-center items-center h-full gap-12 mb-12"
          >
            <img
              :src="doc.mPartner"
              alt=""
              class="w-[600px] mx-auto drop-shadow-fvm"
            />

            <img
              src="/assets/cross.svg"
              alt=""
              class="h-16 mx-4 drop-shadow-fvm"
            />

            <img
              src="/images/fvm.png"
              alt=""
              class="h-20 mx-auto drop-shadow-fvm"
            />
          </div>
          <TweetFooterFantom />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
