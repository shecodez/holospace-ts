<template>
  <ul class="sm:overflow-x-auto md:overflow-y-auto flex md:flex-col animate-pulse">
    <li v-for="(item, i) in len" :key="i" class="p-2">
      <div class="bg-gray-300 dark:bg-gray-800 w-12 h-12 rounded-full"></div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DeckListSkeleton',
  props: {
    len: {
      type: Number,
      default: 3,
    },
  },
});
</script>
