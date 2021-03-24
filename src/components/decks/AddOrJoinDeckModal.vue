<template>
  <ModalDialog :isOpen="showModal" :onClose="closeModal">
    <div v-show="!isBg" class="relative grid grid-cols-2 divide-x">
      <div class="text-center p-4">
        <h3 class="m-4 font-bold text-xl text-indigo-500 uppercase">{{ t('add') }}</h3>
        <icon-add class="m-auto text-7xl" />
        <p class="py-4">{{ t(`${l10n}.add_a_new_deck_and_`) }}</p>
        <button
          class="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-2 py-2 font-semibold"
          @click="showAddDeck"
        >
          <span class="uppercase">{{ t(`${l10n}.add_a_deck`) }}</span>
        </button>
      </div>

      <div class="divider-text uppercase">{{ t('or') }}</div>

      <div class="text-center p-4">
        <h3 class="m-4 font-bold text-xl text-green-500 uppercase">{{ t('join') }}</h3>
        <icon-join class="m-auto text-7xl" />
        <p class="py-4">{{ t(`${l10n}.enter_a_holokey_and_`) }}</p>
        <button
          class="block w-full max-w-xs mx-auto bg-green-500 hover:bg-green-700 focus:bg-green-700 text-white rounded-lg px-2 py-2 font-semibold"
          @click="showJoinDeck"
        >
          <span class="uppercase">{{ t(`${l10n}.join_a_deck`) }}</span>
        </button>
      </div>
    </div>
    <AddDeckScreen />
    <JoinDeckScreen />
  </ModalDialog>
  <!-- <AddDeckModal /> -->
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import IconAdd from '/@vite-icons/mdi/layers-plus';
import IconJoin from '/@vite-icons/mdi/account-multiple-plus';

import ModalDialog from '../ModalDialog.vue';
import AddDeckScreen from './AddDeckScreen.vue';
import JoinDeckScreen from './JoinDeckScreen.vue';

import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  name: 'AddJoinDeckModal',
  components: { IconAdd, IconJoin, ModalDialog, AddDeckScreen, JoinDeckScreen },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'decks.AddOrJoinDeckModal';

    const store = useStore();

    const showModal = computed(() => store.state.decks.showAddOrJoinDeckModal);

    const isBg = computed(() => {
      if (store.state.decks.showCreateDeckModal || store.state.decks.showJoinDeckModal) {
        return true;
      }
      return false;
    });
    const closeModal = () => {
      store.commit(AllMutationTypes.SET_ADD_OR_JOIN_Deck_MODAL, false);
      store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, false);
      store.commit(AllMutationTypes.SET_JOIN_Deck_MODAL, false);
    };

    const showAddDeck = () => {
      store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, true);
    };
    const showJoinDeck = () => {
      store.commit(AllMutationTypes.SET_JOIN_Deck_MODAL, true);
    };

    return {
      t,
      l10n,
      showModal,
      isBg,
      closeModal,
      showAddDeck,
      showJoinDeck,
    };
  },
});
</script>

<style scoped>
.divider-text {
  position: absolute;
  left: 50%;
  bottom: 50%;
  transform: translate(-50%, 50%);
  border: none;
  background-color: white;
  border-radius: 50%;
  padding: 5px 9px;
}
.dark .divider-text {
  background-color: rgba(31, 41, 55);
}
</style>
