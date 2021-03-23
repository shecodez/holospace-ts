<template>
  <ModalDialog
    :isOpen="showModal"
    :onClose="closeModal"
    title="Create New Deck"
  >
    <DeckForm :onSubmit="createDeck" :onClose="closeModal" />
  </ModalDialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import ModalDialog from '../ModalDialog.vue';
import DeckForm from './DeckForm.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'AddDeckModal',
  components: { ModalDialog, DeckForm },
  setup: () => {
    const store = useStore();

    const createDeck = () => {
      console.log(`AddDeckModal.vue > submitCreateDeck`);
      //store.commit(AllMutationTypes.CREATE_Deck, deck);
    };

    const showModal = computed(() => store.state.decks.showCreateDeckModal);

    const closeModal = () => {
      store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, false);
    };

    return {
      createDeck,
      showModal,
      closeModal,
    };
  },
});
</script>
