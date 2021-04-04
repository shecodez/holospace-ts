<template>
  <StretchPanel>
    <template v-slot:header>
      <ActiveDiskSpace />
    </template>

    <!-- <MessageListSkeleton v-if="isLoading" /> -->
    <div v-if="isLoading">{{ t('loading...') }}</div>
    <div class="flex flex-col h-full overflow-hidden" v-else>
      <MessageList />
      <MessageForm />
    </div>
  </StretchPanel>
</template>

<script lang="ts">
import { defineComponent, computed, onBeforeMount, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import StretchPanel from '@/components/panels/StretchPanel.vue';
import ActiveDiskSpace from '@/components/diskspaces/ActiveDiskSpace.vue';
import MessageList from './MessageList.vue';
import MessageForm from './MessageForm.vue';
import { useStore } from '../../store';
import AllActionTypes from '../../store/action-types';

export default defineComponent({
  name: 'ChatCtrl',
  components: { StretchPanel, ActiveDiskSpace, MessageList, MessageForm },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const route = useRoute();

    const isLoading = computed(() => store.state.decks.isLoading);
    onBeforeMount(() => store.dispatch(AllActionTypes.GET_Chat_Messages, route.params.diskSpaceId as string));

    watch(
      () => route.params,
      (newParams) => {
        store.dispatch(AllActionTypes.GET_Chat_Messages, newParams.diskSpaceId as string);
      },
      { immediate: true }
    );

    return {
      t,
      isLoading,
    };
  },
});
</script>
