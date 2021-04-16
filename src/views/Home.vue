<template>
  <Layout view="Home">
    <Header />
    <main class="flex-1">
      <I18nDemo />
      <PopperDemo />
      <ToastDemo />
    </main>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import Layout from '@/layouts/SiteLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import I18nDemo from '@/components/_demos/I18nDemo.vue';
import PopperDemo from '@/components/_demos/PopperDemo.vue';
import ToastDemo from '@/components/alerts/ToastDemo.vue';

export default defineComponent({
  name: 'Home',
  components: { Layout, Header, Footer, I18nDemo, PopperDemo, ToastDemo },
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>
