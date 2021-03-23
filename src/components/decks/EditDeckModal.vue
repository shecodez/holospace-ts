<template>
  <ModalDialog :isOpen="showModal" :onClose="closeModal">
    <h1>Edit Deck</h1>
    <DeckForm :deck="editDeck" :onSubmit="updateDeck" :onClose="closeModal" />
  </ModalDialog>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import ModalDialog from '../ModalDialog.vue';
import DeckForm from './DeckForm.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'EditDeckModal',
  components: { ModalDialog, DeckForm },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const store = useStore();

    const editDeck = computed(() => store.getters.getDeckById(props.id));

    const updateDeck = () => {
      console.log(`EditDeckModal.vue > submitUpdateDeck`);
      //store.commit(AllMutationTypes.UPDATE_Deck, deck);
    };

    const showModal = computed(() => store.state.decks.showEditDeckModal);

    const closeModal = () => {
      store.commit(AllMutationTypes.SET_EDIT_Deck_MODAL, {
        isOpen: false,
        deckId: undefined,
      });
    };

    return {
      editDeck,
      updateDeck,
      showModal,
      closeModal,
    };
  },
});
</script>
