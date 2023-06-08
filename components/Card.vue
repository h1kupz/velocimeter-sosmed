<template>
  <div class="rounded-t-3xl drop-shadow-v">
    <div
      class="flex items-start rounded-t-3xl p-5 mx-auto bg-gradient-to-l from-background/80 to-lbackground/70 h-32 border border-b-0 border-text/30"
    >
      <img :src="Logo" alt="" class="h-6 ml-auto mr-3" />
      <div class="flex flex-col">
        <h5
          class="font-medium text-vgreen text-[10px] text-left leading-2 -mt-[1px]"
        >
          Live on:
        </h5>
        <h5 class="font-medium text-vgreen text-sm text-left tracking-wider">
          {{ Chain }}
        </h5>
      </div>
    </div>
    <div
      :class="Cards"
      class="rounded-b-3xl p-6 mx-auto bg-gradient-to-r from-background/60 to-lbackground/50 border border-t-0 border-text/30"
    >
      <div class="flex">
        <img
          :src="Token1"
          alt=""
          class="w-[125px] h-[125px] -mt-28 drop-shadow-xl z-50 bg-background rounded-full"
        />
        <img
          :src="Token2"
          alt=""
          class="w-[125px] h-[125px] mr-auto -mt-28 -ml-8 drop-shadow-xl bg-background rounded-full"
        />
      </div>
      <h4>~{{ AprType }}:</h4>
      <h2>{{ Apr }}%</h2>
      <h3>{{ Ticker1 }}/{{ Ticker2 }}</h3>
      <h4 v-if="Tvl" class="text-lg mt-2 mb-0 tracking-widest">
        Current TVL: ~${{ Tvl }}
      </h4>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  Cards: {
    type: String,
    required: true,
  },
  AprType: {
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
  Tvl: {
    type: String,
    required: false,
  },
  Chain: {
    type: String,
    required: false,
  },
  Logo: {
    type: String,
    required: false,
  },
});
</script>
