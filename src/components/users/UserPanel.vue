<template>
  <MetaDrawer>
    <template v-slot:header>
      <ActiveUsers />
    </template>
    <UserList />
    <template v-slot:footer>
      <Me />
    </template>
  </MetaDrawer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import MetaDrawer from '@/components/panels/MetaDrawer.vue';
import ActiveUsers from './ActiveUsers.vue';
import UserList from './UserList.vue';
import Me from './Me.vue';

export default defineComponent({
  components: { MetaDrawer, ActiveUsers, UserList, Me },
  name: 'UserPanel',
  setup: () => {},
});
</script>

<style>
.is-mini .d-none {
  display: none;
}
</style>
