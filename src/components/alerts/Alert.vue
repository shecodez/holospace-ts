<template>
  <div class="relative p-2" :class="`bg-${severity}-500 bg-opacity-30 border-l-4 border-${severity}-500`" role="alert">
    <div class="p-2 flex items-center text">
      <div v-if="!noIcon" class="icon self-start" :class="`text-${severity}-500`">
        <slot name="icon">
          <IconForAlert :type="severity.toUpperCase()" />
        </slot>
      </div>
      <div class="ml-2" :class="`text-${severity}-400`">
        <slot name="title"></slot>
        <slot></slot>
      </div>
      <div class="action flex items-center ml-auto">
        <slot name="action"></slot>
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
  setup: (props) => {},
});
</script>
