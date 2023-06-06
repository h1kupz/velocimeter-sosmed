<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="tweet-background pb-14"
        >
          <TweetHeaderV3 />
          <div
            class="flex flex-col w-full h-full mt-12 mb-10 justify-center gap-4"
          >
            <h1 class="text-center text-7xl font-bold">{{ doc.header }}</h1>
            <h1 class="text-center text-7xl font-bold">{{ doc.subheader }}</h1>
            <img
              src="/images/PulseWordmarkDark.png"
              alt=""
              class="w-2/6 mt-6 mx-auto"
            />
          </div>
          <TweetFooterPulse />
          <!-- End Tweet Content -->
        </div>
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
