<template>
  <div class="flex items-center ml-auto md:ml-4 mr-4 md:mr-0">
    <button @click="changeMode" class="hidden dark:block">
      <Icon
        name="material-symbols:dark-mode-outline-rounded"
        class="text-nav h-8 md:h-6 w-8 md:w-6"
      />
    </button>
    <button @click="changeMode" class="dark:hidden">
      <Icon
        name="material-symbols:sunny-outline-rounded"
        class="text-nav h-8 md:h-6 w-8 md:w-6"
      />
    </button>
  </div>
</template>

<script lang="ts">
export default {
  methods: {
    changeMode() {
      this.$colorMode.preference =
        this.$colorMode.preference === "light" ? "dark" : "light";
    },
  },
};
</script>
