<template>
  <div class="flex flex-col flex-grow bg-gray-400 bg-opacity-80 dark:bg-gray-600 dark:bg-opacity-80">
    <slot name="header"></slot>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'StretchPanel',
});
</script>
