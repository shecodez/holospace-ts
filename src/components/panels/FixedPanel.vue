<template>
  <div
    class="bg-gray-900 bg-opacity-80 flex flex-row h-16 w-full md:flex-col md:w-20 md:h-full items-center"
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
