<template>
  <nav
    class="fixed inset-0 z-50 flex flex-col justify-center bg-primary rounded-none"
  >
    <!-- Close Button -->
    <button
      class="absolute top-5 right-9"
      title="Close"
      @click="$emit('close')"
    >
      <Icon name="mdi:hamburger-remove" class="text-nav h-10 w-10" />
    </button>
    <Nav />
  </nav>
</template>

<script setup>
const route = useRoute();
const emit = defineEmits(["close"]);
watch(route, () => {
  emit("close");
});
</script>
