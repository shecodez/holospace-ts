<template>
  <Layout view="Chat">
    <h1>Chat Message Area</h1>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../layouts/MainLayout_test.vue';

export default defineComponent({
  name: 'Test',
  components: { Layout },
});
</script>
