<template>
  <i-mdi-signal-cellular-1 v-if="strength === 1" class="text-error-500" />
  <i-mdi-signal-cellular-2 v-else-if="strength === 2" class="text-warning-500" />
  <i-mdi-signal-cellular-3 v-else-if="strength === 3" class="text-success-500" />
  <i-mdi-signal-cellular-outline v-else class="text-gray-500" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForVoIPSignal',
  props: {
    strength: {
      type: Number,
      default: 0,
    },
  },
  setup: () => {},
});
</script>
