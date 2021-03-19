<template>
  <ul
    class="sm:overflow-x-auto md:overflow-y-auto flex md:flex-col"
    v-for="deck in decks"
    :key="deck.id"
  >
    <DeckListItem v-bind="deck" />
  </ul>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../../store';
import DeckListItem from './DeckListItem.vue';

export default defineComponent({
  name: 'DeckList',
  components: { DeckListItem },
  setup() {
    const store = useStore();

    const decks = computed(() => store.state.decks.deckList);

    return { decks };
  },
});
</script>

<style></style>
