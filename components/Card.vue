<template>
  <div class="drop-shadow-v">
    <div
      class="flex items-start rounded-t-3xl w-96 p-5 mx-auto bg-gradient-to-l from-background/50 to-background/20 backdrop-opacity-70 backdrop-blur-2xl h-32 border border-b-0 border-text/30"
    >
      <img src="/images/CantoLogo.svg" alt="" class="h-8 ml-auto mr-3" />
      <div class="flex flex-col">
        <h5 class="text-cgreen text-xs text-left -mt-[10px] leading-3">
          Live on:
        </h5>
        <h5 class="text-cgreen text-lg text-left">CANTO</h5>
      </div>
    </div>
    <div
      class="rounded-b-3xl p-6 mx-auto bg-gradient-to-r from-background/50 to-background/20 backdrop-opacity-50 backdrop-blur-v border border-t-0 border-text/30"
    >
      <div class="flex">
        <img
          :src="Token1"
          alt=""
          class="w-32 h-32 -mt-28 drop-shadow-xl z-50"
        />
        <img
          :src="Token2"
          alt=""
          class="w-32 h-32 mr-auto -mt-28 -ml-8 drop-shadow-xl"
        />
      </div>
      <h4>APR:</h4>
      <h2>{{ Apr }}%</h2>
      <h3>{{ Pair }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  Token1: {
    type: String,
    required: true,
  },
  Token2: {
    type: String,
    required: true,
  },
  Apr: {
    type: String,
    required: false,
  },
  Pair: {
    type: String,
    required: false,
  },
});
</script>
