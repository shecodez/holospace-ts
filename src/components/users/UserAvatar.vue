<template>
  <div class="relative">
    <div class="user-avatar w-10 h-10 m-auto rounded-full overflow-hidden">
      <img v-if="avatarUrl" :src="avatarUrl" alt="User Avatar" />
      <div v-else class="h-full f-center" :style="`background-color: ${useHashColor(name)}`">
        {{ name.charAt(0) }}
      </div>
    </div>
    <i-mdi-circle class="text-xs absolute bottom-0 right-0" :class="`text-${statusColor()}-500`" />
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
  },
  setup: (props) => {
    const statusColor = () => {
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
    return { statusColor, useHashColor };
  },
});
</script>
