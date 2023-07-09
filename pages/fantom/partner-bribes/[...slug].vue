<template>
  <NuxtLayout>
    <ContentDoc v-slot="{ doc }">
      <Tweet>
        <!-- Tweet Content -->
        <div bgImage :style="{ backgroundImage: 'url(' + doc.bgImage + ')' }" class="tweet-background pb-10">
          <TweetHeaderFantom />
          <div class="flex flex-col items-center justify-center h-full mb-16">
            <h4 class="w-full text-center text-vgreen drop-shadow-v uppercase mb-4 tracking-wider">
              {{ doc.header }}
            </h4>
            <!-- Card -->
            <div>
              <div
                class="flex flex-col items-center justify-center rounded-t-3xl p-5 mx-auto bg-gradient-to-r from-background/50 to-vgreen-dark/40 border-2 border-b-0 border-vgreen-dark/30 text-vgreen drop-shadow-fvm">
                <img :src="doc.partner" class="drop-shadow-v h-[70px]" />
              </div>
              <div
                class="flex items-start justify-center p-4 mx-auto bg-gradient-to-l from-background/60 to-vgreen-dark/50 border border-vgreen-dark/30 drop-shadow-fvm">
                <h2 class="text-center text-8xl text-vgreen px-8 py-1">
                  $ {{ doc.bribeAmount }}
                </h2>
              </div>
              <div
                class="flex flex-col items-center gap-3 rounded-b-3xl p-4 mx-auto bg-gradient-to-r from-background/50 to-vgreen-dark/40 border-2 border-t-0 border-vgreen-dark/30 text-vgreen drop-shadow-fvm">
                <img src="/images/down.png" class="drop-shadow-v" />
                <div class="flex mb-2">
                  <img :src="doc.pt1"
                    class="drop-shadow-v h-[110px] bg-background rounded-full -mr-2 border border-vgreen-dark/30" />
                  <img :src="doc.pt2"
                    class="drop-shadow-v h-[110px] bg-background rounded-full -ml-2  border border-vgreen-dark/30" />
                </div>
                <div
                  class="flex items-start justify-center px-4 py-3 mx-auto rounded-2xl bg-gradient-to-l from-background/80 to-vgreen-dark/50 border border-vgreen-dark/30 drop-shadow-fvm">
                  <h4 class="text-center uppercase m-auto w-full drop-shadow-v text-text  ">
                    {{ doc.pt1Ticker }} / {{ doc.pt2Ticker }}
                  </h4>
                </div>
              </div>
            </div>
            <!-- .Card -->
          </div>
          <TweetFooterFantom />
        </div>
        <!-- End Tweet Content -->
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>
