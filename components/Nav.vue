<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <NuxtLink to="/"
        ><img src="/assets/V.png" alt="" class="w-8 mr-2"
      /></NuxtLink>
      <li :data="twitter" v-for="tweet of twitter" :key="tweet.slug">
        <NuxtLink :to="tweet._path">{{ tweet.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>

<script setup>
const { data: twitter } = await useAsyncData("twitter", () => {
  return queryContent("/twitter").sort({ order: 1 }).find();
});
</script>

<style scoped>
.router-link-active {
  @apply font-bold text-vgreen underline underline-offset-8 decoration-2 hover:text-vgreen;
}
</style>
