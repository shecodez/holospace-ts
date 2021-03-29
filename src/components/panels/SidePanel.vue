<template>
  <div class="flex flex-col w-0 md:w-60 bg-gray-300 bg-opacity-80 dark:bg-gray-700 dark:bg-opacity-80 is-collapsed">
    <slot name="header"></slot>
    <slot></slot>
    <slot name="footer">
      <!-- <Ad /> -->
    </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'SidePanel',
});
</script>
