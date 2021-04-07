<template>
  <ProfileSettings v-if="contentFor === 'profile'" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProfileSettings from './ProfileSettings.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';

export default defineComponent({
  name: 'DetailsForSetting',
  components: { UnderConstruction, ProfileSettings },
  props: {
    contentFor: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup: () => {},
});
</script>
