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
          <div class="flex items-center gap-4 mb-auto">
            <img
              :src="doc.tPartner"
              alt=""
              class="h-8 w-auto -mt-[10px] drop-shadow-v"
            />
            <img src="/assets/handshake.png" alt="" class="h-8 ml-1 mt-1" />
            <img
              src="/assets/Velocimeter-lg.png"
              alt=""
              class="h-5 drop-shadow-v"
            />
          </div>
          <div class="mb-auto">
            <div
              class="flex items-center justify-center rounded-t-3xl p-6 pb-3 mx-auto bg-gradient-to-l from-background/80 to-lbackground/70 border border-b-0 border-text/30 w-full drop-shadow-v"
            >
              <h3>
                PROVIDE LIQUIDITY ON
                <span class="text-vgreen font-extrabold">dexVAULTS</span> EARN
                $underFLOW
                <h4 class="text-center normal-case m-2">
                  LP $underFLOW/$FLOW ON
                  <span class="text-vgreen font-extrabold">VELOCIMETER</span>
                  EARN $FLOW
                </h4>
              </h3>
            </div>
            <div
              class="rounded-b-3xl p-6 mx-auto bg-gradient-to-r from-background/60 to-lbackground/50 border border-t-0 border-text/30 drop-shadow-v"
            >
              <div
                class="h-full flex flex-col justify-center gap-5 items-center"
              >
                <img :src="doc.image" alt="" class="drop-shadow-v w-[900px]" />
                <UnderFlow />
              </div>
            </div>
          </div>
          <TweetFooter />
          <!-- End Tweet Content -->
        </div>
      </Tweet>
    </ContentDoc>
  </NuxtLayout>
</template>

<!-- <div class="flex items-center gap-4 mb-auto">
            <img
              :src="doc.tPartner"
              alt=""
              class="h-8 w-auto -mt-[10px] drop-shadow-v"
            />
            <img src="/assets/handshake.png" alt="" class="h-8 ml-1 mt-1" />
            <img
              src="/assets/Velocimeter-lg.png"
              alt=""
              class="h-5 drop-shadow-v"
            />
          </div>
          <div
            class="flex items-center rounded-3xl mx-auto bg-gradient-to-l from-background/80 to-lbackground/70 border border-text/30 gap-3 px-5 py-4 mb-auto"
          >
            <div class="h-full flex flex-col justify-center gap-5 items-center">
              <img :src="doc.image" alt="" class="drop-shadow-v w-[900px]" />
              <h3>
                PROVIDE LIQUIDITY ON
                <span class="text-vgreen">dexVAULTS</span> EARN $underFLOW
                <h4 class="text-center normal-case">
                  LP $underFLOW/$FLOW ON
                  <span class="text-vgreen">VELOCIMETER</span> EARN $FLOW
                </h4>
              </h3>
              <UnderFlow />
            </div>
          </div>
          <TweetFooter />
        </div> -->
<!-- End Tweet Content -->
