<template>
  <div class="mx-4">
    <div class="flex flex-wrap rounded bg-gray-300 dark:bg-gray-700 p-2 md:p-6">
      <div class="flex w-full items-center">
        <DeckForm :deck="deck" :onSubmit="updateDeck" :onClose="noClose" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import DeckForm from '@/components/decks/DeckForm.vue';
import { useStore } from '@/store';

export default defineComponent({
  components: { DeckForm },
  name: 'DeckOverviewTab',
  props: {
    deck: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const store = useStore();

    const editDeckId = computed(() => store.state.decks.editDeckId);

    const updateDeck = () => {
      console.log(`EditDeckModal.vue > submitUpdateDeck`);
      //store.commit(AllMutationTypes.UPDATE_Deck, deck);
    };
    const noClose = () => {};

    return { editDeckId, updateDeck, noClose };
  },
});
</script>
