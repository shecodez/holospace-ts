<template>
  <FixedPanel>
    <div class="my-auto md:my-0 md:mx-auto">
      <router-link to="/@me">
        <div class="bg-primary-500 w-12 h-12 rounded-full m-2 f-center">
          <i-mdi-account-circle />
          <!-- <i-mdi-mail-ru v-else /> -->
        </div></router-link
      >
    </div>

    <div
      class="border-l md:border-t md:border-l-0 border-black border-opacity-10 dark:border-white dark:border-opacity-10 my-auto md:my-0 md:mx-auto md:pt-2"
    >
      <span class="uppercase text-xs font-medium p-2">{{ t('deck', deckCnt) }}</span>
    </div>

    <!-- <DeckListSkeleton v-if="isLoading" /> -->
    <div v-if="isLoading">{{ t('loading...') }}</div>
    <DeckList v-else />

    <div class="sticky right-0 md:bottom-0 p-2 my-auto md:my-0 md:mx-auto">
      <button
        class="border-3 border-dashed hover-border-solid border-black dark:border-white w-12 h-12 rounded-full f-center"
        @click="setAddOrJoinModal"
      >
        <i-mdi-plus />
      </button>
    </div>
  </FixedPanel>
  <AddOrJoinDeckModal />
  <EditDeckModal :deckId="editDeckId" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import FixedPanel from '../panels/FixedPanel.vue';
import DeckList from './DeckList.vue';
import AddOrJoinDeckModal from './AddOrJoinDeckModal.vue';
import { useStore } from '../../store';
import AllMutationTypes from '../../store/mutation-types';
import EditDeckModal from './settings/EditDeckModal.vue';

export default defineComponent({
  name: 'DeckCtrl',
  components: { FixedPanel, DeckList, AddOrJoinDeckModal, EditDeckModal },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const isLoading = computed(() => store.state.decks.isLoading);
    const editDeckId = computed(() => store.state.decks.editDeckId);

    const setAddOrJoinModal = () => {
      store.commit(AllMutationTypes.SET_ADD_OR_JOIN_Deck_MODAL, true);
    };

    const deckCnt = computed(() => store.getters.totalDeckCount);

    return {
      t,
      isLoading,
      editDeckId,
      setAddOrJoinModal,
      deckCnt,
    };
  },
});
</script>

<style>
.deck.active:hover {
  animation: none;
}
.deck:hover {
  border-radius: 0.375rem; /*10%*/
  animation: borders 0.5s ease-in-out;
}
@keyframes borders {
  0% {
    border-radius: 50%;
  }
  33% {
    border-radius: 15%;
  }
  66% {
    border-radius: 25%;
  }
  100% {
    border-radius: 0.375rem; /*10%*/
  }
}
</style>
