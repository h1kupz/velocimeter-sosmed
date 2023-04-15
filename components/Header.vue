<template>
  <header>
    <nav>
      <NuxtLink to="/" class="flex gap-sm">
        <Icon name="ic:twotone-face-2" class="text-nav h-12 w-12" />
        <h2 class="text-nav text-xl font-black uppercase my-auto">Aaaaah</h2>
      </NuxtLink>
      <!-- Main Nav -->
      <div class="hidden md:flex ml-auto">
        <Nav />
      </div>
      <!-- <Nav class="hidden md:flex" /> -->
      <ColorMode />
      <!-- Mobile Nav Button -->
      <div class="flex md:hidden">
        <button title="Menu" @click="mobileMenuOpen = true">
          <Icon name="mdi:hamburger-plus" class="text-nav h-10 w-10" />
        </button>
      </div>
      <!-- Mobile Nav -->
      <transition name="menu">
        <NavMobile v-if="mobileMenuOpen" @close="mobileMenuOpen = false" />
      </transition>
    </nav>
  </header>
</template>

<script setup>
const mobileMenuOpen = ref(false);
</script>

<style scoped>
.menu-enter-active,
.menu-leave-active {
  transition: opacity 0.5s ease;
}

.menu-enter-from,
.menu-leave-to {
  opacity: 0;
}
</style>
