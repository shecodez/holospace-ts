<template>
  <FixedPanel>
    <div class="bg-purple-600 w-12 h-12 rounded-full m-2 f-center">
      <a :href="route">
        <icon-profile v-if="isSshChat" />
        <icon-ssh-chat v-else />
      </a>
    </div>

    <div
      class="border-l md:border-t md:border-l-0 border-opacity-10 m-2 sm:py-2 md:pt-2"
    >
      <span class="uppercase text-xs font-medium p-2">Decks</span>
    </div>
    <div v-if="isLoading">Loading...</div>
    <div v-else>
      <DeckList />
    </div>

    <div class="sticky sm:right-0 md:bottom-0 p-2">
      <button
        class="border-dashed hover-border-solid border-3 w-12 h-12 rounded-full f-center"
      >
        <icon-plus />
      </button>
    </div>
  </FixedPanel>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, watch } from 'vue';

import IconSshChat from '/@vite-icons/mdi/mail-ru.vue';
import IconProfile from '/@vite-icons/mdi/account-circle.vue';
import IconPlus from '/@vite-icons/mdi/plus.vue';
import DeckList from './DeckList.vue';
import { useStore } from '../../store';
import AllActionTypes from '../../store/action-types';
import FixedPanel from '../panels/fixedPanel.vue';

export default defineComponent({
  components: { IconSshChat, IconProfile, IconPlus, DeckList, FixedPanel },
  setup() {
    const store = useStore();

    const isSshChat = ref(false); //router.route.name === SshChat ? true : false
    const route = ref('/ssh/d/');

    watch(
      () => isSshChat,
      (isSshChat) => {
        route.value = isSshChat ? '/@me' : '/ssh/d/';
      }
    );

    const isLoading = computed(() => store.state.decks.isLoading);
    onMounted(() => store.dispatch(AllActionTypes.GET_AUTH_USER_Decks));
    //const memberDeckCount = computed(() => store.getters.totalDeckCount);

    return { isSshChat, route, isLoading };
  },
});
</script>

<style></style>
