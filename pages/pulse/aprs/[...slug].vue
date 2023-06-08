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
          <TweetHeaderV3 />
          <h1 class="w-full mb-auto text-left">
            {{ doc.header }}
          </h1>
          <div class="flex gap-5 items-center h-full" id="cards">
            <div v-if="doc.c1Token1" class="pulse-bg">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c1Token1"
                :Ticker1="doc.c1Ticker1"
                :Token2="doc.c1Token2"
                :Ticker2="doc.c1Ticker2"
                :Apr="doc.c1Apr"
                :Tvl="doc.c1Tvl"
                Chain="PULSE"
                Logo="/images/PulseLogoVector.svg"
              />
            </div>
            <div v-if="doc.c2Token1" class="pulse-bg">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c2Token1"
                :Ticker1="doc.c2Ticker1"
                :Token2="doc.c2Token2"
                :Ticker2="doc.c2Ticker2"
                :Apr="doc.c2Apr"
                :Tvl="doc.c2Tvl"
                Chain="PULSE"
                Logo="/images/PulseLogoVector.svg"
              />
            </div>
            <div v-if="doc.c3Token1" class="pulse-bg">
              <Card
                :Cards="doc.cards"
                :AprType="doc.aprType"
                :Token1="doc.c3Token1"
                :Ticker1="doc.c3Ticker1"
                :Token2="doc.c3Token2"
                :Ticker2="doc.c3Ticker2"
                :Apr="doc.c3Apr"
                :Tvl="doc.c3Tvl"
                Chain="PULSE"
                Logo="/images/PulseLogoVector.svg"
              />
            </div>
          </div>
          <TweetFooterPulse />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
