<template>
  <MetaDrawer>
    <template v-slot:header>
      <ActiveUsers />
    </template>

    <UserList />
    <button @click="openCard">Open Card</button>

    <template v-slot:footer>
      <Me />
    </template>
  </MetaDrawer>
  <UserCard :isOpen="isOpen" :user="user" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import MetaDrawer from '@/components/panels/MetaDrawer.vue';
import ActiveUsers from './ActiveUsers.vue';
import UserList from './UserList.vue';
import Me from './Me.vue';
import { users } from '@/data/mock';

export default defineComponent({
  name: 'UserCtrl',
  components: { MetaDrawer, ActiveUsers, UserList, Me },
  setup: () => {
    const isOpen = ref(false);
    const openCard = () => (isOpen.value = !isOpen.value);
    const user = users[0];

    return { isOpen, openCard, user };
  },
});
</script>

<style>
.is-mini .d-none {
  display: none;
}
</style>
