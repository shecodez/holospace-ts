<template>
  <div class="bg-gray-400 dark:bg-gray-600 h-14">
    <div class="flex items-center h-full mx-4">
      <button
        class="p-2 rounded-full"
        :class="sideDrawerIsOpen ? '' : 'transform rotate-180'"
        @click="toggleSideDrawer"
      >
        <i-mdi-backburger class="text-xl" />
      </button>
      <div
        class="flex flex-grow mx-4 divide-x divide-black divide-opacity-10 dark:divide-white dark:divide-opacity-10 truncate"
        v-if="diskSpace"
      >
        <span class="font-medium font-medium pr-2">{{ diskSpace.name }}</span>
        <span class="font-thin pl-2">{{ diskSpace.topic }}</span>
      </div>

      <div class="hidden md:grid grid-flow-col grid-cols-3 gap-3 mr-4">
        <button><i-mdi-magnify /></button>
        <button><i-mdi-bell /></button>
        <button><i-mdi-calendar-month /></button>
      </div>
      <button class="p-2 rounded-full">
        <i-mdi-dots-vertical />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  name: 'ActiveDiskSpace',
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const diskSpace = computed(() => store.state.diskSpaces.activeDiskSpace);

    const sideDrawerIsOpen = computed(() => store.state.app.sideDrawerIsOpen);
    const toggleSideDrawer = () => {
      store.dispatch(AllActionTypes.TOGGLE_Side_DRAWER);
    };

    return {
      t,
      diskSpace,
      sideDrawerIsOpen,
      toggleSideDrawer,
    };
  },
});
</script>
