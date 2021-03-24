<template>
  <div
    class="flex flex-row h-16 w-full md:flex-col md:w-20 md:h-full items-center bg-gray-100 bg-opacity-80 dark:bg-gray-900 dark:bg-opacity-80"
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
