<template>
  <Layout view="Home">
    <Header />
    <main>
      <DeckPanel />

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
import DeckPanel from '../components/decks/DeckPanel.vue';
import I18nDemo from '@/components/I18nDemo.vue';

export default defineComponent({
  name: 'Home',
  components: { Layout, Header, Footer, DeckPanel, I18nDemo },
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>
