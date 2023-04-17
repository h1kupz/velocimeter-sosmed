<template>
  <ContentNavigation v-slot="{ navigation }">
    <div class="layout flex-col">
      <!-- <NuxtLink to="/"
        ><img src="/assets/V.png" alt="" class="w-8 mr-2"
      /></NuxtLink> -->
      <ul>
        <li><h4 class="mt-[2px] text-vgreen">APRs</h4></li>
        <li :data="aprs" v-for="apr of aprs" :key="apr.slug">
          <NuxtLink :to="apr._path">{{ apr.title }}</NuxtLink>
        </li>
      </ul>
      <ul class="mt-1">
        <li><h4 class="mt-[2px] text-vgreen">Bribe Matching</h4></li>
        <li
          :data="bribematching"
          v-for="bribematch of bribematching"
          :key="bribematch.slug"
        >
          <NuxtLink :to="bribematch._path">{{ bribematch.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </ContentNavigation>
</template>

<script setup>
const { data: aprs } = await useAsyncData("aprs", () => {
  return queryContent("/aprs").sort({ order: 1 }).find();
});
const { data: bribematching } = await useAsyncData("bribematching", () => {
  return queryContent("/bribe-matching").sort({ order: 1 }).find();
});
</script>

<style scoped>
.router-link-active {
  @apply font-bold text-vgreen underline underline-offset-8 decoration-2 hover:text-vgreen;
}
</style>
