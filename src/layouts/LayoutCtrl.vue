<template>
  <slot></slot>
</template>

<script lang="ts">
import { defineComponent, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export enum Layout {
  AUTH = 'AUTH_LAYOUT',
  MAIN = 'MAIN_LAYOUT',
  SITE = 'SITE_LAYOUT',
}

export default defineComponent({
  name: 'LayoutCtrl',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const store = useStore();

    const route = useRoute();

    const initMainLayout = () => {
      store.dispatch(AllActionTypes.GET_AUTH_USER_Decks);
      /*
      store.dispatch(AllActionTypes.GET_ACTIVE_Deck, route.params.deckId as string); // change to GET_Active_DECK
      // after SET_Active_DECK
      const { value: activeDeck } = computed(() => store.state.decks.activeDeck);
      store.dispatch(AllActionTypes.GET_DECK_Members, activeDeck?.id); // GET_DECK_Crew
      store.dispatch(AllActionTypes.GET_DECK_DiskSpaces, activeDeck?.id);

      store.dispatch(AllActionTypes.GET_ACTIVE_DiskSpace, route.params.diskSpaceId as string); // GET_Active_DiskSpace
      // after SET_Active_DISKSPACE
      const { value: activeDiskSpace } = computed(() => store.state.diskSpaces.activeDiskSpace);
      store.dispatch(AllActionTypes.GET_Chat_Messages, activeDiskSpace?.id); // GET_CHAT_Messages
      */
    };

    // onMounted and when routeChanges
    const initLayoutActionsAndMutations = () => {
      switch (props.view) {
        case Layout.MAIN:
          initMainLayout();
          break;
        default:
          console.error('undefined view', props.view);
      }
    };
    onMounted(() => initLayoutActionsAndMutations());

    watch(
      () => route.params,
      (newRoute, oldRoute) => {
        if (newRoute.deckId !== oldRoute?.deckId) {
          store.dispatch(AllActionTypes.GET_ACTIVE_Deck, newRoute.deckId as string);
          store.dispatch(AllActionTypes.GET_DECK_DiskSpaces, newRoute.deckId as string);
          store.dispatch(AllActionTypes.GET_DECK_Members, newRoute.deckId as string);
        }
        if (newRoute.diskSpaceId !== oldRoute?.diskSpaceId) {
          store.dispatch(AllActionTypes.GET_ACTIVE_DiskSpace, newRoute.diskSpaceId as string);
          store.dispatch(AllActionTypes.GET_Chat_Messages, newRoute.diskSpaceId as string);
        }
      },
      { immediate: true }
    );
  },
});
</script>
