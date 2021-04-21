<template>
  <li class="p-2 my-auto md:my-0 md:mx-auto">
    <router-link :to="`/d/${id}/${idsId}`">
      <div
        class="deck w-12 h-12 f-center text-white has-tooltip"
        :class="isActive(id) ? 'active rounded-md' : 'rounded-full'"
        :style="`background-color: ${useHashColor(name)}`"
      >
        <span>{{ name.charAt(0) }}</span>
        <Tooltip position="-mb-24 md:mb-0 md:-mr-40">{{ name }}</Tooltip>
      </div>
    </router-link>
  </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import { useHashColor } from '@/useables/useHashColor';
import Tooltip from '../Tooltip.vue';

export default defineComponent({
  name: 'DeckListItem',
  components: { Tooltip },
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    idsId: { type: String, required: true },
  },
  setup: () => {
    const route = useRoute();

    const isActive = (deckId: string) => {
      return deckId === route.params.deckId.toString();
    };

    return { route, isActive, useHashColor };
  },
});
</script>
