<template>
  <Layout view="Chat">
    <ChatPanel />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../layouts/MainLayout.vue';

import ChatPanel from '@/components/chat/ChatPanel.vue';

export default defineComponent({
  name: 'Chat',
  components: { Layout, ChatPanel },
});
</script>

<style></style>
