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
import { defineComponent, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import StretchPanel from '@/components/panels/StretchPanel.vue';
import ActiveDiskSpace from '@/components/diskspaces/ActiveDiskSpace.vue';
import MessageList from './MessageList.vue';
import MessageForm from './MessageForm.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'CommsCtrl',
  components: { StretchPanel, ActiveDiskSpace, MessageList, MessageForm },
  setup: () => {
    const { t } = useI18n();

    const store = useStore();

    const isLoading = computed(() => store.state.chat.isLoading);

    return {
      t,
      isLoading,
    };
  },
});
</script>
