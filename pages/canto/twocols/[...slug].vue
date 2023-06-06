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
          <h1
            class="w-full mb-auto text-left text-5xl font-monument text-vgreen-dark"
          >
            {{ doc.header }}
          </h1>
          <div
            class="grid grid-cols-2 gap-5 items-center h-full w-full"
            id="cards"
          >
            <div class="flex flex-col gap-6">
              <img
                src="/images/V_Cheers_edit.png"
                alt=""
                class="h-[320px] mx-auto mt-auto drop-shadow-v"
              />
              <h1 class="font-monument text-vgreen-dark text-center text-5xl">
                $PEPE
              </h1>
            </div>
            <div v-if="doc.c1Token1" class="mr-auto">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c1Token1"
                :Ticker1="doc.c1Ticker1"
                :Token2="doc.c1Token2"
                :Ticker2="doc.c1Ticker2"
                :Apr="doc.c1Apr"
                :Tvl="doc.c1Tvl"
              />
            </div>
          </div>
          <TweetFooter />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
