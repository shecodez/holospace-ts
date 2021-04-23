<template>
  <div class="mx-4">
    <DeckCrew v-if="tabFor === 'crew'" :deck="deck" />
    <DeckOverview v-else-if="tabFor === 'overview'" :deck="deck" />
    <UnderConstruction v-else />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UnderConstruction from '@/components/UnderConstruction.vue';
import DeckOverview from './tabs/DeckOverview.vue';
import DeckCrew from './tabs/DeckCrew.vue';

export default defineComponent({
  name: 'IndexForEditDeckCtrl',
  components: { UnderConstruction, DeckOverview, DeckCrew },
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
