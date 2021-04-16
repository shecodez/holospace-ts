<template>
  <div
    class="hs-alert py-2 px-4 shadow"
    :class="`bg-${severity}-500 bg-opacity-30 border-l-4 border-${severity}-500`"
    role="alert"
  >
    <div class="p-2 flex items-center text">
      <div v-if="!noIcon" class="icon py-2">
        <slot name="icon"><IconForAlert :iconFor="severity" /></slot>
      </div>
      <div class="message" :class="`text-${severity}-400`">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="action flex items-center ml-auto">
        <slot class="action"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import IconForAlert from '../iconFors/IconForAlert.vue';

export default defineComponent({
  name: 'Alert',
  components: { IconForAlert },
  props: {
    severity: {
      type: String,
      default: 'gray',
    },
    noIcon: {
      type: Boolean,
      default: false,
    },
  },
  setup: () => {},
});
</script>
