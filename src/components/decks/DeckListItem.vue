<template>
  <router-link :to="`/d/${id}/${ids}`">
    <div
      class="deck w-12 h-12 f-center text-white"
      :class="isActive(id) ? 'active rounded-md' : 'rounded-full'"
      :style="`background-color: ${useHashColor(name)}`"
    >
      <span>{{ name.charAt(0) }}</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

import { useHashColor } from '@/useables/useHashColor';

export default defineComponent({
  name: 'DeckListItem',
  props: {
    id: { type: String, required: true },
    name: { type: String, required: true },
    ids: { type: String, required: true },
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
