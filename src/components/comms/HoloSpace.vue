<template>
  <div ref="canvas">Height: {{ height }} Width: {{ Width }}</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useElementSize } from '@vueuse/core';

export default defineComponent({
  name: 'HoloSpace',
  setup: () => {
    const canvas = ref(null);
    const { width, height } = useElementSize(canvas);

    return {
      canvas,
      width,
      height,
    };
  },
});
</script>
