<template>
  <div class="rounded-t-3xl drop-shadow-v">
    <div
      class="flex items-start rounded-t-3xl p-5 mx-auto bg-gradient-to-l from-background/60 to-vgreen/50 h-24 border border-b-0 border-vgreen-dark/30"
    >
      <img
        src="/images/FantomEventLogo.jpg"
        alt=""
        class="h-10 ml-auto mr-3 -mt-2 rounded-full"
      />
      <div class="flex flex-col">
        <h5
          class="font-medium text-vgreen text-[10px] text-left leading-2 -mt-[1px]"
        >
          Live on:
        </h5>
        <h5 class="font-medium text-cgreen text-sm text-left tracking-wider">
          FANTOM
        </h5>
      </div>
    </div>
    <div
      class="rounded-b-3xl p-6 mx-auto bg-gradient-to-r from-background/50 to-lbackground/40 border border-t-0 border-text/30 w-full text-vgreen"
    >
      <div class="flex">
        <img
          :src="Token1"
          alt=""
          class="w-28 h-28 -mt-28 drop-shadow-xl z-50 bg-background rounded-full border-vgreen-light border-2"
        />
        <img
          :src="Token2"
          alt=""
          class="w-28 h-28 mr-auto -mt-28 -ml-8 drop-shadow-xl bg-background rounded-full border-vgreen-light border-2"
        />
      </div>
      <h3 class="text-left mt-4 text-4xl">{{ Ticker1 }}/{{ Ticker2 }}</h3>
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
