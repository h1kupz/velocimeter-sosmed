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
          <TweetHeaderV3 />
          <h1 class="w-full mb-6 text-left">
            {{ doc.header }}
          </h1>
          <div class="mb-auto">
            <CardMultiPulse
              class="w-[410px] mx-auto mb-3 pulse-bg"
              :Token1="doc.Token1"
              :Ticker1="doc.Ticker1"
              :Token2="doc.Token2"
              :Ticker2="doc.Ticker2"
              :Message="doc.Message"
            />
            <div class="flex gap-4">
              <!-- Card -->
              <div class="mt-10 flex pulse-bg h-[116px]">
                <div
                  class="flex items-center justify-center h-28 w-48 rounded-l-3xl bg-gradient-to-t from-background/50 to-lbackground/30 border border-text/30 border-r-0 drop-shadow-v"
                >
                  <div class="flex flex-col gap-1 items-right ml-auto mr-3">
                    <h3 class="mt-auto mb-0 text-right text-4xl">
                      {{ doc.r1Apr }}
                    </h3>
                    <h4 class="text-right normal-case font-medium mb-auto mt-0">
                      {{ doc.r1Ticker }}
                    </h4>
                  </div>
                </div>
                <div
                  class="w-28 h-28 rounded-r-3xl p-1 bg-gradient-to-r from-background/50 to-lbackground/30 border border-text/30 border-l-0 drop-shadow-v"
                >
                  <img
                    :src="doc.r1Token"
                    alt=""
                    class="drop-shadow-v z-50 h-[100px] bg-background rounded-full border-vgreen-light border-2"
                  />
                </div>
              </div>
              <!-- / Card -->
              <img
                src="/assets/DownArrow3.png"
                alt=""
                class="h-28 drop-shadow-v"
              />
              <!-- Card -->
              <div class="mt-10 flex pulse-bg h-[116px]">
                <div
                  class="w-28 h-28 rounded-l-3xl p-1 bg-gradient-to-l from-background/50 to-lbackground/30 border border-text/30 border-r-0 drop-shadow-v"
                >
                  <img
                    :src="doc.r2Token"
                    alt=""
                    class="drop-shadow-v z-50 h-[100px] bg-background rounded-full border-vgreen-light border-2"
                  />
                </div>
                <div
                  class="flex items-center justify-center h-28 w-48 rounded-r-3xl bg-gradient-to-t from-background/50 to-lbackground/30 border border-text/30 border-l-0 drop-shadow-v"
                >
                  <div class="flex flex-col gap-1 items-left ml-3 mr-auto">
                    <h3 class="mt-auto mb-0 text-left text-4xl">
                      {{ doc.r2Apr }}
                    </h3>
                    <h4 class="text-left normal-case font-medium mb-auto mt-0">
                      {{ doc.r2Ticker }}
                    </h4>
                  </div>
                </div>
              </div>
            </div>
            <!-- / Card -->
          </div>
          <TweetFooterPulse />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
