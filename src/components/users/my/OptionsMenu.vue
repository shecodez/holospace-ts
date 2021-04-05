<template>
  <div ref="menu" class="bg-gray-200 dark:bg-gray-700 text-black dark:text-white max-w-sm rounded py-2">
    <OnStatusList />

    <div v-if="metaDrawerIsMini">
      <div class="grid grid-flow-col grid-cols-3 border rounded my-2">
        <button class="btn"><i-mdi-speaker /></button>
        <button class="btn"><i-mdi-microphone /></button>
        <button class="btn"><i-mdi-hololens /></button>
      </div>

      <div class="text-center">
        <button class="p-2 rounded-full">
          <i-mdi-cog />
          <span class="sr-only">My Settings</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

import OnStatusList from './OnStatusList.vue';

export default defineComponent({
  components: { OnStatusList },
  name: 'OptionsMenu',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {
    const store = useStore();

    const metaDrawerIsMini = computed(() => store.state.app.metaDrawerIsMini);

    return { metaDrawerIsMini };
  },
});
</script>
