<template>
  <i-mdi-account-circle v-if="iconFor === 'profile'" />
  <i-mdi-card-bulleted-settings v-if="iconFor === 'captains_log'" />
  <i-mdi-book-open-variant v-if="iconFor === 'crew_regs'" />
  <i-mdi-contacts v-if="iconFor === 'subscriptions'" />
  <i-mdi-layers-outline v-if="iconFor === 'memberships'" />
  <i-mdi-account-voice v-if="iconFor === 'voice_&_visuals'" />
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
