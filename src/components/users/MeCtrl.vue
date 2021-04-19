<template>
  <VoIPCtrl />
  <div class="bg-gray-200 dark:bg-gray-800 h-14">
    <div class="flex items-center h-full px-4">
      <Popper placement="top">
        <template v-slot:activator>
          <UserAvatar v-bind="user" size="10" />
        </template>
        <OptionsMenu />
      </Popper>

      <div class="d-none flex flex-1 flex-col overflow-hidden ml-4">
        <h3 class="font-medium truncate">{{ user.name }}</h3>
        <span class="text-xs font-extralight text-gray-400 -mt-1.5">#{{ user.pin }}</span>
      </div>

      <div class="d-none grid grid-flow-col grid-cols-2 gap-3">
        <Popper placement="top-start">
          <template v-slot:activator>
            <button>
              <i-mdi-chevron-up />
              <span class="sr-only">Video Microphone Holo VR Control</span>
            </button>
          </template>
          <Menu>
            <VideoMicHoloCtrl />
          </Menu>
        </Popper>
        <button @click="openSettings">
          <i-mdi-cog />
          <span class="sr-only">User Settings</span>
        </button>
      </div>
    </div>
  </div>

  <SettingsModal :showModal="showSettings" :closeModal="closeSettings" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import Popper from '@/components/Popper.vue';
import Menu from '@/components/Menu.vue';
import UserAvatar from './UserAvatar.vue';
import OptionsMenu from './my/OptionsMenu.vue';
import VoIPCtrl from './my/VoIPCtrl.vue';
import VideoMicHoloCtrl from './my/VideoMicHoloCtrl.vue';
import SettingsModal from './my/settings/SettingsModal.vue';

//import { useStore } from '@/store';
import { users } from '@/data/mock';

export default defineComponent({
  components: { OptionsMenu, UserAvatar, SettingsModal, Popper, VoIPCtrl, VideoMicHoloCtrl, Menu },
  name: 'Me',
  setup: () => {
    //const store = useStore();
    const user = users[1]; //computed(() => store.state.users.me);

    const showSettings = ref(false);
    const openSettings = () => {
      showSettings.value = true;
    };
    const closeSettings = () => {
      showSettings.value = false;
    };

    return { user, showSettings, openSettings, closeSettings };
  },
});
</script>
