<template>
  <icon-united-states v-show="flagFor === 'US'" />
  <icon-japan v-show="flagFor === 'JP'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconUnitedStates from '/@vite-icons/emojione-v1/flag-for-united-states.vue';
import IconJapan from '/@vite-icons/emojione-v1/flag-for-japan.vue';

export default defineComponent({
  name: 'IconForFlag',
  components: { IconUnitedStates, IconJapan },
  props: {
    flagFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
