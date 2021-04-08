<template>
  <div class="on-text my-2 ml-5 w-3/5">{{ t(forUsers) }}</div>
  <ul class="user-ul" :class="forUsers">
    <template v-for="user in users" :key="user.id">
      <UserListItem :user="user" />
    </template>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import UserListItem from './UserListItem.vue';

export default defineComponent({
  name: 'UserList',
  components: { UserListItem },
  props: {
    users: {
      type: Object,
      required: true,
    },
    forUsers: {
      type: String,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();

    return { t };
  },
});
</script>

<style scoped>
.is-mini .on-text {
  margin-left: auto;
  margin-right: auto;
  text-align: center;
}
</style>
