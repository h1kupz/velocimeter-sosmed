<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div
          bgImage
          :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }"
          class="tweet-background pb-10 text-vgreen"
        >
          <div class="flex items-center">
            <img :src="doc.partner" alt="" class="h-16 drop-shadow-fvm" />
            <img src="/assets/handshake.png" alt="" class="h-8 mx-5 mt-1" />
            <img src="/images/fvm.png" alt="" class="h-10" />
          </div>
          <div class="flex my-auto">
            <div>
              <img
                :src="doc.token1"
                alt=""
                class="w-[240px] h-[240px] drop-shadow-fvm z-50 bg-background rounded-full mx-auto"
              />
              <h2 class="text-center text-5xl mt-6 drop-shadow-fvm">
                {{ doc.t1Amount }}
              </h2>
              <h3 class="text-center mt-4 drop-shadow-fvm">
                ${{ doc.t1Ticker }}
              </h3>
            </div>
            <div class="flex flex-col items-center">
              <h5
                class="text-vgreen uppercase tracking-wider border-y border-vgreen py-3 mb-3"
              >
                Bribe Matched
              </h5>
              <template v-if="doc.total">
                <h3 :class="{ 'text-vgreen mb-3 drop-shadow-fvm': true }">
                  TOTAL: {{ doc.total }}
                </h3>
              </template>
              <template v-else>
                <h3 class="mb-3" style="visibility: hidden">
                  TOTAL:
                  <span style="visibility: hidden">{{ doc.total }}</span>
                </h3>
              </template>
              <img
                src="/assets/Arrow.png"
                alt=""
                class="w-80 mt-2 drop-shadow-fvm"
              />
              <div class="flex mt-2">
                <img
                  :src="doc.pt1"
                  alt=""
                  class="w-[90px] h-[90px] drop-shadow-fvm z-50 bg-background rounded-full"
                />
                <img
                  :src="doc.pt2"
                  alt=""
                  class="w-[90px] h-[90px] mr-auto -ml-3 drop-shadow-fvm bg-background rounded-full"
                />
              </div>
              <h3 class="mt-4 drop-shadow-fvm">
                {{ doc.pt1Ticker }}/{{ doc.pt2Ticker }}
              </h3>
              <h4 v-if="doc.pApr" class="mt-1">
                Projected APR: {{ doc.pApr }}%
              </h4>
            </div>
            <div>
              <img
                :src="doc.token2"
                alt=""
                class="w-[240px] h-[240px] mr-auto drop-shadow-fvm bg-background rounded-full mx-auto"
              />
              <h2 class="text-center text-5xl mt-6 drop-shadow-fvm">
                {{ doc.t2Amount }}
              </h2>
              <h3 class="text-center mt-4 drop-shadow-fvm">
                ${{ doc.t2Ticker }}
              </h3>
            </div>
          </div>
          <TweetFooterFantom />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
