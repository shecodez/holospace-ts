<template>
  <AccountAndAppSettings v-if="tabFor === 'profile'" :profile="profile" />
  <ApperanceAndThemeSettings v-else-if="tabFor === 'appearance_&_themes'" :profile="profile" />
  <AudioAndVideoSettings v-else-if="tabFor === 'audio_&_video'" :profile="profile" />
  <LanguageSettings v-else-if="tabFor === 'language'" :profile="profile" />
  <NotificationSettings v-else-if="tabFor === 'notifications'" :profile="profile" />
  <PrivacyAndSecuritySettings v-else-if="tabFor === 'privacy_&_security'" :profile="profile" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';

import AccountAndAppSettings from './AccountAndAppSettings.vue';
import UnderConstruction from '@/components/UnderConstruction.vue';
import PrivacyAndSecuritySettings from './PrivacyAndSecuritySettings.vue';
import ApperanceAndThemeSettings from './ApperanceAndThemeSettings.vue';
import AudioAndVideoSettings from './AudioAndVideoSettings.vue';
import NotificationSettings from './NotificationSettings.vue';
import LanguageSettings from './LanguageSettings.vue';

export default defineComponent({
  name: 'IndexForSettingTabs',
  components: {
    UnderConstruction,
    AccountAndAppSettings,
    PrivacyAndSecuritySettings,
    ApperanceAndThemeSettings,
    AudioAndVideoSettings,
    NotificationSettings,
    LanguageSettings,
  },
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
  setup: () => {
    const profile = reactive({
      settings: {
        account_and_app: {},
        apperance_and_theme: {},
        audio_and_video: {},
        language: {},
        notification: {},
        privacy_and_security: {},
      },
    });

    return { ...toRefs(profile) };
  },
});
</script>
