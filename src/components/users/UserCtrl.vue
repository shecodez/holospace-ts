<template>
  <MetaDrawer>
    <template v-slot:header>
      <ActiveUsers />
    </template>

    <UserListSkeleton v-if="isLoading" />
    <div v-else class="users flex-1 overflow-y-overlay">
      <UserList :users="usersOnDeck" forUsers="on_deck" />
      <UserList :users="usersOffline" forUsers="offline" />
    </div>

    <template v-slot:footer>
      <Me />
    </template>
  </MetaDrawer>
</template>

<script lang="ts">
import { computed, defineComponent, onBeforeMount, watch } from 'vue';
import { useRoute } from 'vue-router';

import MetaDrawer from '@/components/panels/MetaDrawer.vue';
import ActiveUsers from './ActiveUsers.vue';
import UserListSkeleton from './UserListSkeleton.vue';
import UserList from './UserList.vue';
import Me from './Me.vue';
import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  name: 'UserCtrl',
  components: { MetaDrawer, ActiveUsers, UserListSkeleton, UserList, Me },
  setup: () => {
    const store = useStore();

    const route = useRoute();

    const isLoading = computed(() => store.state.users.isLoading);
    onBeforeMount(() => store.dispatch(AllActionTypes.GET_DECK_Members, route.params.deckId as string));

    watch(
      () => route.params,
      (newParams) => {
        store.dispatch(AllActionTypes.GET_DECK_Members, newParams.deckId as string);
        // if isSsh
        //store.dispatch(AllActionTypes.GET_DISKSPACE_Subscribers, newParams.diskSpaceId as string);
      },
      { immediate: true }
    );

    const usersOnDeck = computed(() => store.getters.membersOnDeck); //if isSsh getters.subscribers
    const usersOffline = computed(() => store.getters.membersOffline);

    return { isLoading, usersOnDeck, usersOffline };
  },
});
</script>

<style>
.is-mini .d-none {
  display: none;
}
.users .user-ul.on_deck .user-avatar {
  filter: none;
}
.users .user-ul.offline .user-avatar {
  filter: grayscale(100%);
}
.users .user-ul.offline .user-avatar:hover {
  filter: none;
}
.user-card .user-avatar {
  filter: none !important;
}
</style>
