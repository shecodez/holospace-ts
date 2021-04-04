<template>
  <!-- <VoiceSetting /> -->
  <div class="bg-gray-200 dark:bg-gray-800 h-14">
    <div class="flex items-center h-full px-4">
      <button @click="openMenu">
        <UserAvatar v-bind="user" size="10" />
      </button>

      <div class="d-none truncate flex flex-col flex-grow ml-4">
        <h3 class="font-medium">{{ user.name }}</h3>
        <span class="text-xs font-extralight text-gray-400 -mt-1.5">#{{ user.pin }}</span>
      </div>

      <div class="d-none grid grid-flow-col grid-cols-2 gap-3">
        <button>
          <i-mdi-chevron-up />
          <span class="sr-only">Options Menu</span>
        </button>
        <button>
          <i-mdi-cog />
          <span class="sr-only">User Settings</span>
        </button>
      </div>
    </div>
  </div>
  <OptionsMenu :isOpen="isOpen" />
  <!-- <SettingsModal /> -->
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import UserAvatar from './UserAvatar.vue';
import OptionsMenu from './my/OptionsMenu.vue';
import SettingsModal from './my/SettingsModal.vue';

//import { useStore } from '@/store';
import { users } from '@/data/mock';

export default defineComponent({
  components: { OptionsMenu, UserAvatar, SettingsModal },
  name: 'Me',
  setup: () => {
    //const store = useStore();
    const user = users[1]; //computed(() => store.state.users.me);

    const isOpen = ref(false);
    const openMenu = () => (isOpen.value = !isOpen.value);

    return { isOpen, openMenu, user };
  },
});
</script>
