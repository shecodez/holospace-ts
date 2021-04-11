<template>
  <DeckOverviewTab v-if="tabFor === 'overview'" :deckId="deckId" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UnderConstruction from '@/components/UnderConstruction.vue';
import DeckOverviewTab from './DeckOverview.vue';

export default defineComponent({
  name: 'TabForEditDeckModal',
  components: { UnderConstruction, DeckOverviewTab },
  props: {
    tabFor: {
      type: String,
      required: true,
      default: '',
    },
    deckId: {
      type: String,
    },
  },
  setup: () => {},
});
</script>
