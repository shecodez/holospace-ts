<template>
  <FixedPanel>
    <div class="bg-primary-600 w-12 h-12 rounded-full m-2 f-center">
      <a :href="route">
        <icon-profile v-if="isSshChat" />
        <icon-ssh-chat v-else />
      </a>
    </div>

    <div
      class="border-l md:border-t md:border-l-0 border-black dark:border-white border-opacity-10 m-2 sm:py-2 md:pt-2"
    >
      <span class="uppercase text-xs font-medium p-2">{{ t('deck', deckCnt) }}</span>
    </div>

    <div v-if="isLoading">{{ t('loading...') }}</div>
    <div v-else>
      <DeckList />
    </div>

    <div class="sticky sm:right-0 md:bottom-0 p-2">
      <button
        class="border-3 border-dashed hover-border-solid border-black dark:border-white w-12 h-12 rounded-full f-center"
        @click="setModal"
      >
        <icon-plus />
      </button>
    </div>
  </FixedPanel>
  <AddOrJoinDeckModal />
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import IconSshChat from '/@vite-icons/mdi/mail-ru';
import IconProfile from '/@vite-icons/mdi/account-circle';
import IconPlus from '/@vite-icons/mdi/plus';

import FixedPanel from '../panels/FixedPanel.vue';
import DeckList from './DeckList.vue';
import AddOrJoinDeckModal from './AddOrJoinDeckModal.vue';

import { useStore } from '../../store';
import AllActionTypes from '../../store/action-types';
import AllMutationTypes from '../../store/mutation-types';

export default defineComponent({
  components: {
    IconSshChat,
    IconProfile,
    IconPlus,
    FixedPanel,
    DeckList,
    AddOrJoinDeckModal,
  },
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const isSshChat = ref(false); //router.route.name === SshChat ? true : false
    const route = ref('/ssh/d/');

    watch(
      () => isSshChat,
      (isSshChat) => {
        route.value = isSshChat ? '/@me' : '/ssh/d/';
      }
    );

    const setModal = () => {
      //store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, true);
      store.commit(AllMutationTypes.SET_ADD_OR_JOIN_Deck_MODAL, true);
    };

    const isLoading = computed(() => store.state.decks.isLoading);
    onMounted(() => store.dispatch(AllActionTypes.GET_AUTH_USER_Decks));
    const deckCnt = computed(() => store.getters.totalDeckCount);

    return {
      t,
      isSshChat,
      route,
      isLoading,
      setModal,
      deckCnt,
    };
  },
});
</script>
