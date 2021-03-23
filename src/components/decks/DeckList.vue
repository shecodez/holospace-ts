<template>
  <ul
    class="sm:overflow-x-auto md:overflow-y-auto flex md:flex-col"
    v-for="deck in decks"
    :key="deck.id"
  >
    <DeckListItem v-bind="deck" />
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
