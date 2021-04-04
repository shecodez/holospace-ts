<template>
  <ul>
    <li v-for="status in onStatusList" :key="status.id" class="cursor-pointer">
      <div class="flex space-x-8 py-1 px-2 hover:bg-gray-600">
        <IconForOnStatus :iconFor="status.id" :class="`text-${toStatusColor(status.id)}-500`" />
        <div>
          <b>{{ t(`${l10n}.${status.name}`) }}</b>
          <p v-if="status.description" class="text-gray-300">
            {{ t(`${l10n}.${status.description.replace(/ /g, '_')}`) }}
          </p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { OnStatus } from '@/store/interfaces';
import IconForOnStatus from '@/components/IconForOnStatus.vue';

export default defineComponent({
  components: { IconForOnStatus },
  name: 'OnStatusList',
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.OnStatusList';

    const onStatusList = [
      { id: OnStatus.SHOW, name: 'Show', description: 'Available' },
      { id: OnStatus.AWAY, name: 'Away' },
      { id: OnStatus.BRB, name: 'BRB', description: 'Be Right Back' },
      { id: OnStatus.BUSY, name: 'Busy' },
      {
        id: OnStatus.DND,
        name: 'DND',
        description: 'Do NOT Disturb',
      },
      { id: OnStatus.HIDE, name: 'Hide', description: 'Invisible' },
    ];

    const toStatusColor = (status: OnStatus) => {
      switch (status.toLowerCase()) {
        case 'away':
        case 'brb':
          return 'warning';
        case 'busy':
        case 'dnd':
          return 'error';
        case 'show':
          return 'success';
        default:
          return 'gray';
      }
    };

    return { t, l10n, onStatusList, toStatusColor };
  },
});
</script>
