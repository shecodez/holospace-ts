<template>
  <Layout view="Comms">
    <CommsCtrl />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Layout from '../layouts/MainLayout.vue';

import CommsCtrl from '@/components/comms/CommsCtrl.vue';

export default defineComponent({
  name: 'Comms',
  components: { Layout, CommsCtrl },
});
</script>
