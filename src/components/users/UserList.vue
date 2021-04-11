<template>
  <div v-show="userCount">
    <Badge :content="userCount" :color="color">
      <div class="on-text text-xs my-2 ml-5 w-4/5">{{ label }}</div>
    </Badge>
    <ul class="user-ul" :class="off ? 'offline' : 'on-deck'">
      <template v-for="user in users" :key="user.id">
        <UserListItem :user="user" :color="color" />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import UserListItem from './UserListItem.vue';
import Badge from '@/components/Badge.vue';

export default defineComponent({
  name: 'UserList',
  components: { UserListItem, Badge },
  props: {
    users: {
      type: Object,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
    },
    off: {
      type: Boolean,
      default: false,
    },
  },
  setup: (props) => {
    const userCount = computed(() => props.users.length);

    return { userCount };
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
