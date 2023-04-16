<template>
  <!-- <div> -->
  <div
    :class="Cards"
    class="flex items-start rounded-t-3xl p-5 mx-auto bg-gradient-to-l from-background/50 to-background/20 backdrop-blur-2xl h-32 border border-b-0 border-text/30 drop-shadow-v backdrop-opacity-50"
  >
    <img src="/assets/CantoLogo.svg" alt="" class="h-8 ml-auto mr-3" />
    <div class="flex flex-col">
      <h5 class="text-cgreen text-xs text-left -mt-[10px] leading-3">
        Live on:
      </h5>
      <h5 class="text-cgreen text-lg text-left">CANTO</h5>
    </div>
  </div>
  <div
    :class="Cards"
    class="rounded-b-3xl p-6 pl-4 mx-auto bg-gradient-to-r from-background/50 to-background/20 backdrop-blur-v border border-t-0 border-text/30 drop-shadow-v backdrop-opacity-80"
  >
    <div class="flex">
      <img
        :src="Token1"
        alt=""
        class="w-32 h-32 -mt-28 drop-shadow-xl z-50 bg-black rounded-full p-[0.5px]"
      />
      <img
        :src="Token2"
        alt=""
        class="w-32 h-32 mr-auto -mt-28 -ml-8 drop-shadow-xl bg-black rounded-full p-[0.5px]"
      />
    </div>
    <h4>APR:</h4>
    <h2>{{ Apr }}%</h2>
    <h3>{{ Ticker1 }}/{{ Ticker2 }}</h3>
  </div>
  <!-- </div> -->
</template>

<script setup lang="ts">
const props = defineProps({
  Cards: {
    type: String,
    required: true,
  },
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
  Apr: {
    type: String,
    required: false,
  },
});
</script>
