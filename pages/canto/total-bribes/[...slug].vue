<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="tweet-background"
        >
          <img
            src="/assets/Velocimeter-lg.png"
            alt=""
            class="w-80 mr-auto mb-4 drop-shadow-v"
          />
          <div class="flex flex-col justify-center items-center h-full">
            <h2
              class="font-monument text-vgreen text-6xl tracking-wider uppercase mb-2"
            >
              Epoch #<span class="font-inter ml-1">{{ doc.epoch }}</span>
            </h2>
            <h1 class="text-[200px] font-bold tracking-normal mb-6">
              ${{ doc.total }}
            </h1>
            <h2
              class="font-monument text-vgreen text-6xl tracking-wider uppercase mb-0"
            >
              In Bribes Available
            </h2>
          </div>
          <TweetFooter />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
