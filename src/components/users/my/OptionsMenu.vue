<template>
  <Menu customize="max-w-sm py-2">
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
  </Menu>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import Menu from '@/components/Menu.vue';
import OnStatusCtrl from './OnStatusCtrl.vue';
import VideoMicHoloCtrl from './VideoMicHoloCtrl.vue';
import { useStore } from '@/store';

export default defineComponent({
  components: { OnStatusCtrl, VideoMicHoloCtrl, Menu },
  name: 'OptionsMenu',
  setup: () => {
    const store = useStore();

    const metaDrawerIsMini = computed(() => store.state.app.metaDrawerIsMini);

    return { metaDrawerIsMini };
  },
});
</script>
