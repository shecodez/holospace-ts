<template>
  <div v-show="showScreen" class="relative">
    <div class="flex justify-between items-center pb-3 text-primary-500">
      <h3 class="text-xl font-bold">Add New Deck</h3>
      <button @click="closeScreen">
        <icon-close />
      </button>
    </div>
    <p class="p-4 text-center">
      By creating a deck, you and your crew can access free VoIP, Text, & Holo
      chat DiskSpaces. Welcome aboard Captain!
    </p>

    <DeckForm :onSubmit="createDeck" :onClose="closeScreen" />

    <p class="text-xs mt-2">
      By creating a deck, you agree to HoloSpace's
      <a class="text-primary-500 font-bold">Crew Regs</a>.
    </p>

    <div class="flex justify-between py-2">
      <button @click="closeScreen" class="py-2 font-semibold">
        <icon-back-arrow class="inline-block mr-2" />
        <span>Back</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import IconClose from '/@vite-icons/mdi/close.vue';
import IconBackArrow from '/@vite-icons/mdi/keyboard-backspace.vue';

import DeckForm from './DeckForm.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'AddDeckScreen',
  components: { DeckForm, IconClose, IconBackArrow },
  setup: () => {
    const store = useStore();

    const createDeck = () => {
      console.log(`AddDeckModal.vue > submitCreateDeck`);
      //store.commit(AllMutationTypes.CREATE_Deck, deck);
    };

    const showScreen = computed(() => store.state.decks.showCreateDeckModal);

    const closeScreen = () => {
      store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, false);
    };

    return {
      createDeck,
      showScreen,
      closeScreen,
    };
  },
});
</script>
