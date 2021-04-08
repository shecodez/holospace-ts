<template>
  <li class="user-li f-center py-1 px-4 flex items-center hover:bg-gradient-to-r from-black">
    <!-- <div class="user-avatar bg-purple-300 w-10 h-10 rounded-full m-auto"></div> -->
    <Popper placement="left">
      <template v-slot:activator>
        <UserAvatar v-bind="user" />
      </template>
      <UserCard :user="user" />
    </Popper>
    <span class="d-none truncate flex-grow ml-4">{{ user.name }}</span>
  </li>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import UserAvatar from './UserAvatar.vue';
import Popper from '../Popper.vue';
import UserCard from './UserCard.vue';

export default defineComponent({
  components: { UserAvatar, UserCard, Popper },
  name: 'UserListItem',
  props: {
    user: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const isOpen = ref(false);
    const openCard = () => (isOpen.value = !isOpen.value);

    return { isOpen, openCard };
  },
});
</script>

<style scoped>
.user-li:hover {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
</style>
