<template>
  <div v-show="isVoIP" class="flex items-center px-4 py-1 bg-gray-200 dark:bg-gray-800 mb-0.5">
    <div class="d-none flex flex-col flex-1 font-medium overflow-hidden">
      <div class="truncate overflow-hidden">
        <IconForVoIPSignal :strength="getSignalStr" class="inline mr-2" />
        <span class="text-secondary-500">
          {{ t(`${l10n}.voip_comms`) }}
          <i-mdi-check-circle class="ml-1 inline text-sm" />
        </span>
      </div>
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
import { useI18n } from 'vue-i18n';

import IconForVoIPSignal from '@/components/iconFors/IconForVoIPSignal.vue';
import { useStore } from '@/store';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  components: { IconForVoIPSignal },
  name: 'VoIPCtrl',
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.VoIPCtrl';

    const getSignalStr = 2;
    const inCall = false;

    const store = useStore();

    const activeDeck = computed(() => store.state.decks.activeDeck?.name);
    const activeDisk = computed(() => store.state.diskSpaces.activeDiskSpace?.name);
    const isVoIP = computed(() => store.getters.getActiveDiskSpaceType === DiskSpaceType.VOIP);

    return { t, l10n, getSignalStr, inCall, activeDeck, activeDisk, isVoIP };
  },
});
</script>
