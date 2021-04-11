<template>
  <div class="relative p-0.5">
    <div class="user-avatar m-auto rounded-full overflow-hidden" :class="`w-${size} h-${size}`">
      <img v-if="avatarUrl" :src="avatarUrl" alt="User Avatar" />
      <div v-else class="h-full f-center" :style="`background-color: ${useHashColor(name)}`">
        <span class="text-white" :class="toFontSize()">{{ name.charAt(0) }}</span>
      </div>
    </div>
    <i-mdi-view-headline v-if="isCaptain" class="absolute left-0 top-0 text-yellow-500" :class="toIconSize()" />
    <IconForOnStatus
      :iconFor="isOnline ? status : 'offline'"
      class="absolute bottom-0 right-0"
      :class="[`text-${toStatusColor()}-500`, toIconSize()]"
    />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, watch, ref } from 'vue';

import IconForOnStatus from '@/components/iconFors/IconForOnStatus.vue';
import { useHashColor } from '@/useables/useHashColor';
import { useStore } from '@/store';

export default defineComponent({
  name: 'UserAvatar',
  components: { IconForOnStatus },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    avatarUrl: { type: String }, //type: URL
    isOnline: { type: Boolean, required: true },
    status: { type: String, required: true }, // type: String as () => OnlineStatus
    size: { type: String, default: '9' },
  },
  setup: (props) => {
    const store = useStore();

    const captainId = computed(() => store.getters.getActiveDeckCaptainId);
    const isCaptain = ref(false);
    watch(
      () => captainId.value,
      (captainId) => {
        isCaptain.value = props.id === captainId;
      },
      { immediate: true }
    );

    const toStatusColor = () => {
      const status = props.isOnline ? props.status : 'offline';
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
    const toFontSize = () => {
      const size = props.size;
      switch (size) {
        case '16':
          return 'text-2xl';
        default:
          return '';
      }
    };

    const toIconSize = () => {
      const size = props.size;
      switch (size) {
        case '16':
          return '';
        default:
          return 'text-xs';
      }
    };

    return { isCaptain, useHashColor, toStatusColor, toFontSize, toIconSize };
  },
});
</script>
