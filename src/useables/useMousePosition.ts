import { onMounted, onUnmounted, toRefs } from 'vue';

export function useMousePosition() {
  const pos = {
    x: 0,
    y: 0,
  };

  function update(e: MouseEvent) {
    pos.x = e.pageX;
    pos.y = e.pageY;
  }

  onMounted(() => {
    window.addEventListener('mousemove', update);
  });

  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });

  return toRefs(pos);
}

/*
Example Use:

<template>
  <h1>Use Mouse Demo</h1>
  <p>x: {{ x }} | y: {{ y }}</p>
</template>

<script>
  import { useMousePosition } from "./use/useMousePosition";

  export default {
    setup() {
      const { x, y } = useMousePosition();
      return { x, y };
    }
  };
</script>
*/
