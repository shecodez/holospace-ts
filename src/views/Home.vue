<template>
  <Layout view="Home">
    <Header />
    <main>
      <DeckPanel />
    </main>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Layout from '../layouts/SiteLayout.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import DeckPanel from '../components/decks/DeckPanel.vue';

export default defineComponent({
  name: 'Home',
  components: { Layout, Header, Footer, DeckPanel },
  setup: () => {},
});
</script>
