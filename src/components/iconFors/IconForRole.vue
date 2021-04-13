<template>
  <i-mdi-layers-outline v-if="iconFor === 'deck'" />
  <i-mdi-harddisk v-if="iconFor === 'diskspace'" />
  <i-mdi-ticket-account v-if="iconFor === 'permission'" />
  <i-mdi-account-circle v-if="iconFor === 'crew_member'" />
  <i-mdi-account-reactivate v-if="iconFor === 'transfer_crew_member'" />
  <i-mdi-account-multiple-minus v-if="iconFor === 'prune_crew_members'" />
  <i-mdi-account-clock v-if="iconFor === 'timeout_crew_member'" />
  <i-mdi-robot v-if="iconFor === 'bot'" />
  <i-mdi-shield-key-outline v-if="iconFor === 'role'" />
  <i-mdi-key-link v-if="iconFor === 'holokey'" />
  <i-mdi-chat-minus v-if="iconFor === 'message'" />
  <i-typcn-messages v-if="iconFor === 'bulk_messages'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForRole',
  props: {
    iconFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
