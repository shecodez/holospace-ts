<template>
  <div class="flex flex-col h-screen bg-white dark:bg-gray-800 dark:text-white">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SiteLayout',
  props: {
    view: {
      type: String,
      //required: true,
    },
  },
});
</script>

<style></style>
