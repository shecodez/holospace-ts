<template>
  <ul class="sm-overflow-x-overlay md-overflow-y-overlay flex md:flex-col">
    <template v-for="deck in decks" :key="deck.id">
      <DeckListItem v-bind="deck" />
    </template>
  </ul>
  <!-- <EditDeckModal v-show="showEditModal" :id="editDeckId" /> -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../../store';
import DeckListItem from './DeckListItem.vue';
//import EditDeckModal from './EditDeckModal.vue';

export default defineComponent({
  name: 'DeckList',
  components: { DeckListItem },
  setup() {
    const store = useStore();

    const decks = computed(() => store.state.decks.deckList);

    //const showEditModal = computed(() => store.state.decks.showEditDeckModal);
    //const editDeckId = computed(() => store.state.decks.editDeckId);

    return { decks };
  },
});
</script>

<style scoped>
@media (min-width: 768px) {
  .md-overflow-y-overlay {
    overflow-y: auto;
    overflow-y: overlay;
  }
}
@media (min-width: 640px) {
  .sm-overflow-x-overlay {
    overflow-x: auto;
    overflow-x: overlay;
  }
}
</style>
