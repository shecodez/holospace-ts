<template>
  <div v-show="showScreen" class="relative">
    <div class="flex justify-between items-center pb-3 text-primary-500">
      <h3 class="text-xl font-bold">{{ t(`${l10n}.add_new_deck`) }}</h3>
      <button @click="closeScreen">
        <i-mdi-close />
      </button>
    </div>
    <p class="p-4 text-center">
      {{ t(`${l10n}.by_creating_a_deck_you_`) }}
    </p>

    <DeckForm :onSubmit="createDeck" :onClose="closeScreen" />

    <p class="text-xs mt-2">
      {{ t(`${l10n}.by_creating_a_deck_you_agree_`) }}

      <a class="text-primary-500 font-bold">{{ t(`${l10n}.crew_regs`) }}</a
      >.
    </p>

    <div class="flex justify-between py-2">
      <button @click="closeScreen" class="py-2 font-semibold">
        <i-mdi-keyboard-backspace class="inline-block mr-2" />
        <span class="capitalize">{{ t('back') }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import DeckForm from './DeckForm.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'AddDeckScreen',
  components: { DeckForm },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'decks.AddDeckScreen';

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
      t,
      l10n,
      createDeck,
      showScreen,
      closeScreen,
    };
  },
});
</script>
