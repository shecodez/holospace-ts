<template>
  <div class="users flex-grow overflow-y-overlay">
    <div class="ml-6 my-2">{{ t('on_deck') }}</div>
    <ul class="on-deck">
      <li v-for="user in usersOnDeck" :key="user.id">
        <UserListItem :user="user" />
      </li>
    </ul>

    <div class="ml-6 my-2">{{ t('offline') }}</div>
    <ul class="offline">
      <li v-for="user in usersOffline" :key="user.id">
        <UserListItem :user="user" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import UserListItem from './UserListItem.vue';
//import { useStore } from '@/store';
import { users } from '@/data/mock';

export default defineComponent({
  name: 'UserList',
  components: { UserListItem },
  setup: () => {
    const { t } = useI18n();

    //const store = useStore();
    //const usersOnDeck = computed(() => store.getters.usersOnDeck);
    //const usersOffline = computed(() => store.getters.usersOffline);
    const usersOnDeck = users.filter((x) => x.online && x.status !== 'HIDE');
    const usersOffline = users.filter((x) => !x.online || x.status === 'HIDE');

    return { t, usersOnDeck, usersOffline };
  },
});
</script>

<style>
.users .on-deck .user-avatar {
  filter: none;
}
.users .offline .user-avatar {
  filter: grayscale(100%);
}
.users .offline .user-avatar:hover {
  filter: none;
}
</style>
