<template>
  <div v-if="diskSpace" class="bg-gray-400 dark:bg-gray-600 h-14 flex-shrink-0">
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
      >
        <span class="font-medium pr-2">{{ diskSpace.name }}</span>
        <span v-if="diskSpace.topic" class="font-thin pl-2">{{ diskSpace.topic }}</span>
      </div>

      <div class="hidden md:grid grid-flow-col grid-cols-3 gap-3 mr-4 ml-auto">
        <button @click="openSearch">
          <i-mdi-magnify />
          <span class="sr-only">Search Modal</span>
        </button>
        <Popper placement="bottom">
          <template v-slot:activator>
            <Badge :content="getNotificationsCount">
              <i-mdi-bell />
              <span class="sr-only">Notifications Menu</span>
            </Badge>
          </template>
          <NotificationMenu />
        </Popper>
        <button @click="openCalendar">
          <i-mdi-calendar-month />
          <span class="sr-only">Calendar Modal</span>
        </button>
      </div>
      <button class="p-2 rounded-full">
        <i-mdi-dots-vertical />
      </button>
    </div>
  </div>
  <div v-else>Loading...</div>
  <SearchModal :isOpen="showSearch" :closeModal="closeSearch" />
  <CalendarModal :isOpen="showCalendar" :closeModal="closeCalendar" />
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useTitle } from '@vueuse/core';

import Popper from '@/components/Popper.vue';
import NotificationMenu from '@/components/users/my/NotificationMenu.vue';
import SearchModal from '@/components/search/SearchModal.vue';
import CalendarModal from '@/components/events/CalendarModal.vue';
import Badge from '@/components/Badge.vue';
import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  components: { Popper, NotificationMenu, SearchModal, CalendarModal, Badge },
  name: 'ActiveDiskSpace',
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const diskSpace = computed(() => store.state.diskSpaces.activeDiskSpace);
    watch(
      () => diskSpace.value,
      (diskSpace) => {
        const title = diskSpace ? `${diskSpace?.name} | HoloSpace` : 'HoloSpace';
        useTitle(title);
      },
      { immediate: true }
    );

    const sideDrawerIsOpen = computed(() => store.state.app.sideDrawerIsOpen);
    const toggleSideDrawer = () => {
      store.dispatch(AllActionTypes.TOGGLE_Side_DRAWER);
    };

    const getNotificationsCount = ref(0);

    const showSearch = ref(false);
    const openSearch = () => {
      showSearch.value = true;
    };
    const closeSearch = () => {
      showSearch.value = false;
    };
    const showCalendar = ref(false);
    const openCalendar = () => {
      showCalendar.value = true;
    };
    const closeCalendar = () => {
      showCalendar.value = false;
    };

    return {
      t,
      diskSpace,
      sideDrawerIsOpen,
      toggleSideDrawer,
      getNotificationsCount,
      showSearch,
      openSearch,
      closeSearch,
      showCalendar,
      openCalendar,
      closeCalendar,
    };
  },
});
</script>
