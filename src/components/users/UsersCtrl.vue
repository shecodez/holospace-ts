<template>
  <MetaDrawer>
    <template v-slot:header>
      <ActiveUsers />
    </template>

    <UserListSkeleton v-if="isLoading" />
    <div v-else class="users flex-1 overflow-y-overlay">
      <!-- <UserList :users="usersOffline" label="Lt. Cmdrs" color="yellow-500" /> -->
      <UserList :users="usersOnDeck" :label="t('on_deck')" />
      <UserList :users="usersOffline" :label="t('offline')" off />
    </div>

    <template v-slot:footer>
      <Me />
    </template>
  </MetaDrawer>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import MetaDrawer from '@/components/panels/MetaDrawer.vue';
import ActiveUsers from './ActiveUsers.vue';
import UserListSkeleton from './UserListSkeleton.vue';
import UserList from './UserList.vue';
import Me from './MeCtrl.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'UsersCtrl',
  components: { MetaDrawer, ActiveUsers, UserListSkeleton, UserList, Me },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const isLoading = computed(() => store.state.users.isLoading);
    const usersOnDeck = computed(() => store.getters.membersOnDeck); //if isSsh getters.subscribers
    const usersOffline = computed(() => store.getters.membersOffline);

    return { t, isLoading, usersOnDeck, usersOffline };
  },
});
</script>

<style>
.is-mini .d-none {
  display: none;
}
.users .user-ul.on-deck .user-avatar {
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
