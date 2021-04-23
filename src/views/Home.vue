<template>
  <Layout view="Home">
    <Header />
    <main class="flex-1 flex flex-col">
      <I18nDemo />
      <div>
        <PopperDemo />
      </div>
      <ToastDemo />
      <div>
        <button class="px-4 py-2 text-red-500" @click="showModal = !showModal">Delete Deck</button>
      </div>
      <DeleteDeckConfirm deckId="1" deckName="Ageis" :isOpen="showModal" />
    </main>
    <Footer />
  </Layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import Layout from '@/layouts/SiteLayout.vue';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import I18nDemo from '@/components/_demos/I18nDemo.vue';
import PopperDemo from '@/components/_demos/PopperDemo.vue';
import ToastDemo from '@/components/alerts/ToastDemo.vue';
import DeleteDeckConfirm from '@/components/decks/DeleteDeckConfirm.vue';

export default defineComponent({
  name: 'Home',
  components: { Layout, Header, Footer, I18nDemo, PopperDemo, ToastDemo, DeleteDeckConfirm },
  setup: () => {
    const { t } = useI18n();

    const showModal = ref(false);

    return { t, showModal };
  },
});
</script>
