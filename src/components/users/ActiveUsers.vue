<template>
  <div class="h-14">
    <div class="flex items-center h-full mx-4">
      <button
        class="p-2 rounded-full m-auto"
        :class="metaDrawerIsMini ? 'transform rotate-180' : ''"
        @click="toggleMetaDrawer"
      >
        <i-mdi-forwardburger class="text-xl" />
      </button>
      <span class="flex-grow ml-4 font-medium text-base d-none">
        {{ t('crew') }}
      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  name: 'ActiveUsers',
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const metaDrawerIsMini = computed(() => store.state.app.metaDrawerIsMini);
    const toggleMetaDrawer = () => {
      store.dispatch(AllActionTypes.TOGGLE_Meta_DRAWER);
    };
    //const usersType = computed(() => store.state.users.activeUsersType); // crew || friends

    return {
      t,
      metaDrawerIsMini,
      toggleMetaDrawer,
      //usersType
    };
  },
});
</script>
