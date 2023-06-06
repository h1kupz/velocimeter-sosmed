<template>
  <div class="mb-auto">
    <ContentNavigation v-slot="{ navigation }">
      <div class="layout gap-1">
        <NuxtLink to="/">
          <img src="/assets/V.png" alt="" class="w-8 mr-4 drop-shadow-v" />
        </NuxtLink>
        <div
          v-for="link of navigation"
          :key="link._path"
          class="dropdown relative w-fit"
        >
          <button class="dropdown-btn">{{ link.title }}</button>
          <ul class="dropdown-menu absolute top-4 text-left w-full hidden">
            <li
              v-for="childLink of link.children"
              :key="childLink._path"
              class="w-screen px-3 py-2 bg-background/80"
            >
              <ul class="flex flex-col">
                <p class="uppercase font-bold mb-1">{{ childLink.title }}</p>
                <li
                  v-for="subChildLink of childLink.children"
                  :key="subChildLink._path"
                  class="dropdown-item"
                >
                  <NuxtLink :to="subChildLink._path">{{
                    subChildLink.title
                  }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </ContentNavigation>
  </div>
</template>

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
