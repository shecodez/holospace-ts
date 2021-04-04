<template>
  <div class="tooltip bg-white dark:bg-black py-1 px-3 rounded" :class="position">
    <span class="text-xs text-black dark:text-white whitespace-nowrap">
      <slot></slot>
    </span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Tooltip',
  props: {
    position: {
      type: String,
      default: '',
    },
  },
  setup: () => {},
});
</script>

<style>
.tooltip {
  visibility: hidden;
  position: absolute;
}
.has-tooltip:hover .tooltip {
  visibility: visible;
  z-index: 100;
}
</style>
