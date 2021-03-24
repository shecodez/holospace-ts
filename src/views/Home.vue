<template>
  <Layout view="Home">
    <Header />
    <main>
      <I18nDemo />
    </main>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import Layout from '../layouts/SiteLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '../components/Footer.vue';
import I18nDemo from '@/components/I18nDemo.vue';

export default defineComponent({
  name: 'Home',
  components: { Layout, Header, Footer, I18nDemo },
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>
