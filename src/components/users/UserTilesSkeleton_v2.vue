<template>
  <div class="sticky top-0 h-10 w-full bg-gray-500 my-2" />
  <section class="grid grid-cols-2 md:grid-cols-5 gap-4 py-8">
    <div v-for="n in 10" :key="n" class="animate-pulse">
      <div
        class="shadow rounded hover:shadow-lg h-44 bg-gray-500 transform transition-all duration-500 hover:scale-110 hover:ease-out"
      >
        <div class="relative grid place-content-center h-full">
          <div class="w-24 md:w-28 overflow-hidden">
            <div class="w-20 h-20 rounded-full bg-gray-800 mx-auto" />
            <div class="h-5 w-full rounded-full -mt-2 flex items-center">
              <span class="block bg-gray-400 h-full px-6 rounded-full mx-auto text-sm truncate" />
            </div>
            <div class="h-5 bg-gray-400 mt-4 flex items-center">
              <h5 class="font-semibold text-sm truncate">
                <span class="text-xs text-gray-400"></span>
              </h5>
            </div>
          </div>
          <!-- <i-mdi-handshake-outline /> -->
          <div class="absolute h-4 w-4 rounded-full top-2 right-2 bg-green-400" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'UserTilesSkeleton_v2',
  setup: () => {},
});
</script>
