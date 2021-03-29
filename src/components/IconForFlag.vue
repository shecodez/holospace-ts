<template>
  <i-emojione-flag-for-united-states v-show="flagFor === 'US'" />
  <i-emojione-flag-for-japan v-show="flagFor === 'JP'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForFlag',
  props: {
    flagFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
