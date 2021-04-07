<template>
  <div ref="menu" class="bg-gray-200 dark:bg-gray-700 text-black dark:text-white max-w-sm rounded py-2">
    <OnStatusCtrl />

    <div v-if="metaDrawerIsMini">
      <VideoMicHoloCtrl />

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

import OnStatusCtrl from './OnStatusCtrl.vue';
import VideoMicHoloCtrl from './VideoMicHoloCtrl.vue';

export default defineComponent({
  components: { OnStatusCtrl, VideoMicHoloCtrl },
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
