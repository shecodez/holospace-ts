<template>
  <ApperanceAndThemeSettings v-if="tabFor === 'appearance_&_themes'" :profile="profile" />
  <ProfileSettings v-else-if="tabFor === 'profile'" :profile="profile" />
  <PrivacyAndSecuritySettings v-else-if="tabFor === 'privacy_&_security'" :profile="profile" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ProfileSettings from './ProfileSettings.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
import PrivacyAndSecuritySettings from './PrivacyAndSecuritySettings.vue';
import ApperanceAndThemeSettings from './ApperanceAndThemeSettings.vue';

export default defineComponent({
  name: 'IndexForSettingTabs',
  components: { UnderConstruction, ProfileSettings, PrivacyAndSecuritySettings, ApperanceAndThemeSettings },
  props: {
    tabFor: {
      type: String,
      default: '',
      required: true,
    },
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {},
});
</script>
