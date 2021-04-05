<template>
  <div v-show="isVoIP" class="flex items-center px-4 py-1 bg-gray-200 dark:bg-gray-800 mb-0.5">
    <IconForVoIPSignal :strength="getSignalStr" class="text-2xl mr-2" />

    <div class="d-none flex flex-col flex-1 font-medium overflow-hidden">
      <h3 class="text-secondary-500">VoIP Comms: 200</h3>
      <span class="italic text-xs text-gray-400 -mt-1 truncate">{{ activeDisk }} / {{ activeDeck }}</span>
    </div>

    <button>
      <i-mdi-phone-off v-if="inCall" />
      <i-mdi-phone v-else />
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import IconForVoIPSignal from '@/components/IconForVoIPSignal.vue';
import { useStore } from '@/store';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  components: { IconForVoIPSignal },
  name: 'VoIPCtrl',
  setup: () => {
    const getSignalStr = 2;
    const inCall = false;

    const store = useStore();

    const activeDeck = computed(() => store.state.decks.activeDeck?.name);
    const activeDisk = computed(() => store.state.diskSpaces.activeDiskSpace?.name);
    const isVoIP = computed(() => store.getters.getActiveDiskSpaceType === DiskSpaceType.VOIP);

    return { getSignalStr, inCall, activeDeck, activeDisk, isVoIP };
  },
});
</script>
