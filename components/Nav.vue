<template>
  <ContentNavigation v-slot="{ navigation }">
    <div class="layout gap-1">
      <NuxtLink to="/"
        ><img src="/assets/V.png" alt="" class="w-8 mr-4"
      /></NuxtLink>
      <!-- <ul>
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
      </ul> -->
      <div class="dropdown relative w-fit">
        <button class="dropdown-btn">APRs</button>
        <ul class="dropdown-menu absolute -left-3 text-left w-full hidden">
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
        <button class="dropdown-btn">Matched Bribe</button>
        <ul class="dropdown-menu absolute -left-3 text-left w-full hidden">
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
.dropdown-btn {
  @apply text-sm font-semibold text-background uppercase tracking-wide bg-vgreen rounded-md px-3 py-1;
}
.dropdown:hover .dropdown-menu {
  @apply block w-full;
}
.dropdown-item {
  @apply pb-4 w-screen px-6 bg-background hover:text-vgreen;
}

.dropdown-menu {
  @apply pt-4 z-10;
}

.dropdown-menu.hidden {
  display: none;
}
</style>
