<template>
  <div class="mb-auto">
    <ContentNavigation v-slot="{ navigation }">
      <div class="layout gap-1">
        <NuxtLink to="/"
          ><img src="/assets/V.png" alt="" class="w-8 mr-4 drop-shadow-v"
        /></NuxtLink>
        <div class="dropdown relative w-fit">
          <button class="dropdown-btn">APRs</button>
          <ul class="dropdown-menu absolute top-4 text-left w-full hidden">
            <li
              :data="aprs"
              v-for="apr of aprs"
              :key="apr.slug"
              class="dropdown-item"
            >
              <NuxtLink :to="apr._path">{{ apr.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown relative w-fit">
          <button class="dropdown-btn">Partnership</button>
          <ul class="dropdown-menu absolute top-4 text-left w-full hidden">
            <li
              :data="partnership"
              v-for="partner of partnership"
              :key="partner.slug"
              class="dropdown-item"
            >
              <NuxtLink :to="partner._path">{{ partner.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown relative w-fit">
          <button class="dropdown-btn">Matched Bribe</button>
          <ul class="dropdown-menu absolute top-4 text-left w-full hidden">
            <li
              :data="bribematching"
              v-for="bribematch of bribematching"
              :key="bribematch.slug"
              class="dropdown-item"
            >
              <NuxtLink :to="bribematch._path">{{ bribematch.title }}</NuxtLink>
            </li>
          </ul>
        </div>
        <div class="dropdown relative w-fit">
          <button class="dropdown-btn">Total Bribes</button>
          <ul class="dropdown-menu absolute top-4 text-left w-full hidden">
            <li
              :data="totalbribes"
              v-for="totalbribe of totalbribes"
              :key="totalbribe.slug"
              class="dropdown-item"
            >
              <NuxtLink :to="totalbribe._path">{{ totalbribe.title }}</NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </ContentNavigation>
  </div>
</template>

<script setup>
const { data: aprs } = await useAsyncData("aprs", () => {
  return queryContent("/aprs").sort({ order: 1 }).find();
});
const { data: partnership } = await useAsyncData("partnership", () => {
  return queryContent("/partnership").sort({ order: 1 }).find();
});
const { data: bribematching } = await useAsyncData("bribematching", () => {
  return queryContent("/bribe-matching").sort({ order: 1 }).find();
});
const { data: totalbribes } = await useAsyncData("totalbribes", () => {
  return queryContent("/total-bribes").sort({ order: 1 }).find();
});
</script>

<style scoped>
.router-link-active {
  @apply font-bold text-vgreen underline underline-offset-8 decoration-2 hover:text-vgreen trans;
}
.dropdown-btn {
  @apply text-xs font-semibold text-background uppercase tracking-wide bg-vgreen rounded-md px-2 py-1 hover:bg-vgreen/70 trans drop-shadow-v;
}
.dropdown:hover .dropdown-menu {
  @apply block w-full trans;
}
.dropdown-item {
  @apply w-screen px-3 py-2 bg-background/90 hover:text-vgreen trans;
}

.dropdown-menu {
  @apply pt-4 z-10;
}

.dropdown-menu.hidden {
  display: none;
}
</style>
