<template>
  <div class="rounded-t-3xl drop-shadow-v">
    <div
      class="flex items-start rounded-t-3xl p-5 mx-auto bg-gradient-to-l from-background/80 to-lbackground/70 h-24 border border-b-0 border-text/30"
    >
      <img src="/assets/CantoLogo.svg" alt="" class="h-6 ml-auto mr-3" />
      <div class="flex flex-col">
        <h5
          class="font-medium text-cgreen text-[10px] text-left leading-2 -mt-[1px]"
        >
          Live on:
        </h5>
        <h5 class="font-medium text-cgreen text-sm text-left tracking-wider">
          CANTO
        </h5>
      </div>
    </div>
    <div
      class="rounded-b-3xl p-6 mx-auto bg-gradient-to-r from-background/60 to-lbackground/50 border border-t-0 border-text/30 w-full"
    >
      <div class="flex">
        <img
          :src="Token1"
          alt=""
          class="w-32 h-32 -mt-24 drop-shadow-xl z-50 bg-background rounded-full border-vgreen-light border-2"
        />
        <img
          :src="Token2"
          alt=""
          class="w-32 h-32 mr-auto -mt-24 -ml-8 drop-shadow-xl bg-background rounded-full border-vgreen-light border-2"
        />
      </div>
      <h3 class="text-left mt-6 text-4xl">{{ Ticker1 }}/{{ Ticker2 }}</h3>
      <h4 class="text-left mt-2 mb-0 leading-tight normal-case font-medium">
        {{ Message }}
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  Token1: {
    type: String,
    required: true,
  },
  Ticker1: {
    type: String,
    required: false,
  },
  Token2: {
    type: String,
    required: true,
  },
  Ticker2: {
    type: String,
    required: false,
  },
  Message: {
    type: String,
    required: false,
  },
});
</script>
