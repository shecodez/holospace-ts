<template>
  <ProfileSettings v-if="tabFor === 'profile'" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProfileSettings from './ProfileSettings.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';

export default defineComponent({
  name: 'TabForSettingsModal',
  components: { UnderConstruction, ProfileSettings },
  props: {
    tabFor: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup: () => {},
});
</script>
