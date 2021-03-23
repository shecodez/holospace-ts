<template>
  <div v-show="showScreen" class="relative">
    <div class="flex justify-between items-center pb-3 text-secondary-500">
      <h3 class="text-xl font-bold">Join a Deck</h3>
      <button @click="closeScreen">
        <icon-close />
      </button>
    </div>
    <p class="p-4 text-center">
      Enter a HoloKey to join an existing Deck. Your key should look something
      like this:
      <br />
      <span class="text-secondary-500"
        >https://holospace-app.com/holokeys/H6x35a</span
      >
    </p>

    <JoinDeckForm :onSubmit="joinDeck" :onClose="closeScreen" />

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

import JoinDeckForm from './JoinDeckForm.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'JoinDeckScreen',
  components: { JoinDeckForm, IconClose, IconBackArrow },
  setup: () => {
    const store = useStore();

    const joinDeck = () => {
      console.log(`JoinDeckScreen.vue > submitJoinDeck`);
      //store.commit(AllMutationTypes.JOIN_Deck, deck);
    };

    const showScreen = computed(() => store.state.decks.showJoinDeckModal);

    const closeScreen = () => {
      store.commit(AllMutationTypes.SET_JOIN_Deck_MODAL, false);
    };

    return {
      joinDeck,
      showScreen,
      closeScreen,
    };
  },
});
</script>
