<template>
  <i-mdi-account-circle v-if="iconFor === 'profile'" />
  <i-mdi-hololens v-if="iconFor === 'vr'" />
  <i-mdi-security v-if="iconFor === 'privacy_&_security'" />
  <i-pixelarticons-subscriptions v-if="iconFor === 'subscriptions'" />
  <i-mdi-layers-outline v-if="iconFor === 'memberships'" />
  <i-carbon-app-connectivity v-if="iconFor === 'subroutines'" />
  <i-ri-sound-module-fill v-if="iconFor === 'audio_&_video'" />
  <i-mdi-bell-ring-outline v-if="iconFor === 'notifications'" />
  <i-mdi-theme-light-dark v-if="iconFor === 'appearance_&_themes'" />
  <i-mdi-web v-if="iconFor === 'language'" />
  <i-mdi-help-circle v-if="iconFor === 'help_&_support'" />
  <i-mdi-square-edit-outline v-if="iconFor === 'send_feedback'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForSetting',
  props: {
    iconFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
