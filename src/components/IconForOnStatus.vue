<template>
  <div class="text-sm my-1">
    <i-mdi-check-circle v-if="iconFor === status.SHOW" />
    <i-mdi-clock-outline v-else-if="iconFor === status.BRB" />
    <i-mdi-minus-circle-outline v-else-if="iconFor === status.DND" />
    <i-mdi-circle v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { OnStatus } from '@/store/interfaces';

export default defineComponent({
  name: 'IconOnStatus',
  props: {
    iconFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const status = OnStatus;
    return { status };
  },
});
</script>
