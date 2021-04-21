<template>
  <DeckOverview v-if="tabFor === 'overview'" :deck="deck" />
  <UnderConstruction v-else />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UnderConstruction from '@/components/UnderConstruction.vue';
import DeckOverview from './tabs/DeckOverview.vue';

export default defineComponent({
  name: 'IndexForEditDeckCtrl',
  components: { UnderConstruction, DeckOverview },
  props: {
    tabFor: {
      type: String,
      required: true,
      default: '',
    },
    deck: {
      type: Object,
      required: true,
    },
  },
  setup: () => {},
});
</script>
