<template>
  <SideDrawer>
    <template v-slot:header>
      <ActiveDeck />
    </template>
    <div class="flex-grow d-none overflow-y-overlay">
      <div class="grid grid-cols-1 divide-y divide-white divide-opacity-10">
        <DiskSpaceList :type="type.TEXT" />
        <DiskSpaceList :type="type.VOIP" />
        <DiskSpaceList :type="type.HOLO" />
      </div>
    </div>
  </SideDrawer>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import ActiveDeck from '@/components/decks/ActiveDeck.vue';
import SideDrawer from '@/components/panels/SideDrawer.vue';
import DiskSpaceList from './DiskSpaceList.vue';
import AllActionTypes from '@/store/action-types';
import { useStore } from '@/store';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  components: { SideDrawer, ActiveDeck, DiskSpaceList },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const route = useRoute();

    const isLoading = computed(() => store.state.diskSpaces.isLoading);
    onBeforeMount(() => store.dispatch(AllActionTypes.GET_DECK_DiskSpaces, route.params.deckId as string));

    watch(
      () => route.params,
      (newParams) => {
        store.dispatch(AllActionTypes.GET_DECK_DiskSpaces, newParams.deckId as string);
        store.dispatch(AllActionTypes.GET_ACTIVE_DiskSpace, newParams.diskSpaceId as string);
      },
      { immediate: true }
    );

    const type = DiskSpaceType;

    return {
      t,
      isLoading,
      type,
    };
  },
});
</script>
