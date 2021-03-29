<template>
  <FixedPanel>
    <div class="bg-primary-600 w-12 h-12 rounded-full m-2 f-center">
      <router-link to="/profile">
        <i-mdi-account-circle />
        <!-- <i-mdi-mail-ru v-else /> -->
      </router-link>
    </div>

    <div
      class="border-l md:border-t md:border-l-0 border-black border-opacity-10 dark:border-white dark:border-opacity-10 m-2 sm:py-2 md:pt-2"
    >
      <span class="uppercase text-xs font-medium p-2">{{ t('deck', deckCnt) }}</span>
    </div>

    <div v-if="isLoading">{{ t('loading...') }}</div>
    <!-- <DeckListSkeleton v-if="isLoading" /> -->
    <DeckList v-else />

    <div class="sticky sm:right-0 md:bottom-0 p-2">
      <button
        class="border-3 border-dashed hover-border-solid border-black dark:border-white w-12 h-12 rounded-full f-center"
        @click="setModal"
      >
        <i-mdi-plus />
      </button>
    </div>
  </FixedPanel>
  <AddOrJoinDeckModal />
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import FixedPanel from '../panels/FixedPanel.vue';
import DeckList from './DeckList.vue';
import AddOrJoinDeckModal from './AddOrJoinDeckModal.vue';
import { useStore } from '../../store';
import AllActionTypes from '../../store/action-types';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  components: { FixedPanel, DeckList, AddOrJoinDeckModal },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const isLoading = computed(() => store.state.decks.isLoading);
    onBeforeMount(() => store.dispatch(AllActionTypes.GET_AUTH_USER_Decks));

    const route = useRoute();

    watch(
      () => route.params,
      (newParams) => {
        store.dispatch(AllActionTypes.GET_ACTIVE_Deck, newParams.deckId as string);
      },
      { immediate: true }
    );

    const setModal = () => {
      store.commit(AllMutationTypes.SET_ADD_OR_JOIN_Deck_MODAL, true);
    };

    const deckCnt = computed(() => store.getters.totalDeckCount);

    return {
      t,
      isLoading,
      setModal,
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
