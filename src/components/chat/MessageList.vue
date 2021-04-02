<template>
  <div class="flex-1 overflow-y-overlay">
    <ul class="m-6">
      <li class="grid" v-for="message in messages" :key="message.id">
        <MessageListItem v-bind="message" />
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';

import MessageListItem from './MessageListItem.vue';
import { useStore } from '@/store';

export default defineComponent({
  name: 'MessageList',
  components: { MessageListItem },
  setup: () => {
    const store = useStore();

    const messages = computed(() => store.state.chat.messageList);

    return { messages };
  },
});
</script>
