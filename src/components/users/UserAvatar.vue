<template>
  <div class="relative">
    <div class="user-avatar m-auto rounded-full overflow-hidden" :class="`w-${size} h-${size}`">
      <img v-if="avatarUrl" :src="avatarUrl" alt="User Avatar" />
      <div v-else class="h-full f-center" :style="`background-color: ${useHashColor(name)}`">
        <span :class="toFontSize()">{{ name.charAt(0) }}</span>
      </div>
    </div>
    <i-mdi-circle class="absolute bottom-0 right-0" :class="[`text-${toStatusColor()}-500`, toIconSize()]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { useHashColor } from '@/useables/useHashColor';

export default defineComponent({
  name: 'UserAvatar',
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    avatarUrl: { type: String }, //type: URL
    online: { type: Boolean, required: true },
    status: { type: String, required: true }, // type: String as () => OnlineStatus
    size: { type: String, default: '9' },
  },
  setup: (props) => {
    const toStatusColor = () => {
      const status = props.online ? props.status : 'offline';
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

    return { useHashColor, toStatusColor, toFontSize, toIconSize };
  },
});
</script>
