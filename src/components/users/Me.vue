<template>
  <div class="bg-gray-200 dark:bg-gray-800 h-16">
    <div class="flex items-center h-full px-4">
      <div class="bg-purple-300 w-12 h-12 rounded-full m-auto flex-shrink-0"></div>
      <div class="truncate flex-grow ml-4 d-none">
        <span class="font-medium text-base">Me</span>
        <span class="text-xs font-extralight">#1234</span>
      </div>
      <div class="actions d-none grid grid-flow-col grid-cols-2 gap-3">
        <button>
          <i-mdi-chevron-up />
          <span class="sr-only">Options Menu</span>
        </button>
        <button>
          <i-mdi-cog />
          <span class="sr-only">User Settings</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
//import { useStore } from '@/store';

export default defineComponent({
  name: 'ActiveUser',
  setup: () => {
    // const store = useStore();
    // const user = computed(() => store.state.users.me);
    // return {
    //   user,
    // };
  },
});
</script>
