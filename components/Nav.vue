<template>
  <ContentNavigation v-slot="{ navigation }">
    <ul>
      <li v-for="link of navigation" :key="link._path">
        <NuxtLink :to="link._path">{{ link.title }}</NuxtLink>
      </li>
    </ul>
  </ContentNavigation>
</template>

<style scoped>
.router-link-active {
  @apply font-bold underline underline-offset-8 decoration-2;
}
</style>
