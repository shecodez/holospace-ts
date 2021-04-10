<template>
  <div class="flex items-center space-x-1 px-3 rounded-full" :class="`bg-${color}-200 text-${color}-800 text-${size}`">
    <slot name="prepend"></slot>
    <slot></slot>
    <slot name="append"></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Badge',
  props: {
    color: {
      type: String,
      default: 'gray',
    },
    size: {
      type: String,
      default: 'xs',
    },
  },
  setup: () => {},
});
</script>
