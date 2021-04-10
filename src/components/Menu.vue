<template>
  <div
    ref="menu"
    class="bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded border-t-2 border-primary-500"
    :class="customize"
  >
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Menu',
  props: {
    customize: {
      type: String,
    },
  },
  setup: () => {},
});
</script>
