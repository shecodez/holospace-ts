<template>
  <Layout view="Chat">
    <ChatCtrl />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../layouts/MainLayout.vue';

import ChatCtrl from '@/components/chat/ChatCtrl.vue';

export default defineComponent({
  name: 'Chat',
  components: { Layout, ChatCtrl },
});
</script>

<style></style>
