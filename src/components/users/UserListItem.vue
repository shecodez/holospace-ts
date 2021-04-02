<template>
  <div class="user py-2 px-4 flex items-center hover:bg-gradient-to-r from-black">
    <!-- <div class="user-avatar bg-purple-300 w-10 h-10 rounded-full m-auto"></div> -->
    <UserAvatar v-bind="user" />
    <span class="truncate flex-grow ml-4 d-none">{{ user.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import UserAvatar from './UserAvatar.vue';

export default defineComponent({
  components: { UserAvatar },
  name: 'UserListItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup: () => {},
});
</script>

<style scoped>
.user:hover {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
</style>
