<template>
  <div
    class="flex flex-row md:flex-col h-16 md:h-full w-full md:w-20 bg-gray-100 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'FixedPanel',
});
</script>
