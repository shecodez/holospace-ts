<template>
  <div class="mx-4">
    <div class="flex flex-wrap rounded bg-gray-300 dark:bg-gray-700 p-2 md:p-6">
      <div class="flex w-full items-center">
        <DeckForm :deckId="deckId" :onSubmit="updateDeck" :onClose="noClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import DeckForm from '@/components/decks/DeckForm.vue';

export default defineComponent({
  components: { DeckForm },
  name: 'DeckOverviewTab',
  props: {
    deckId: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const updateDeck = () => {
      console.log(`EditDeckModal.vue > submitUpdateDeck`);
      //store.commit(AllMutationTypes.UPDATE_Deck, deck);
    };
    const noClose = () => {};

    return { updateDeck, noClose };
  },
});
</script>
