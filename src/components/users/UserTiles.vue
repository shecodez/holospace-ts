<template>
  <section class="flex flex-wrap justify-center max-w-xl mx-auto">
    <div v-for="n in 10" :key="n" class="grid gap-2 m-2 animate-pulse">
      <figure
        class="shadow rounded-md hover:shadow-lg h-32 w-32 bg-gray-400 transform transition-all duration-500 hover:scale-110 hover:ease-out"
      ></figure>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserTiles',
  setup: () => {},
});
</script>
