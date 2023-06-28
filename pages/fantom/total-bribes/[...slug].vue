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
          <TweetHeaderFantom />
          <div class="flex flex-col justify-center items-center h-full">
            <h2
              class="font-monument text-6xl tracking-wider uppercase mb-2 text-vgreen"
            >
              Epoch #<span class="font-inter ml-1">{{ doc.epoch }}</span>
            </h2>
            <h1
              class="text-[200px] font-bold tracking-normal mb-6 text-transparent bg-clip-text text-vgreen drop-shadow-fvm"
            >
              ${{ doc.total }}
            </h1>
            <h2
              class="font-monument text-6xl tracking-wider uppercase mb-0 text-vgreen drop-shadow-fvm"
            >
              In Bribes Available
            </h2>
          </div>
          <TweetFooterFantom />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
