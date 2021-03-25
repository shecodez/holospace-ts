<template>
  <Layout view="Login">
    <div class="text-center mb-10">
      <h2 class="font-bold text-xl">{{ t('views.Login.hey_welcome_back') }}</h2>
    </div>
    <LoginForm />
    <p class="text-center font-medium">
      {{ t('views.Login.need_an_account') }}
      <router-link class="text-primary-500" to="/register">{{ t('auth.register') }}</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import Layout from '../layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';

export default defineComponent({
  name: 'Login',
  components: { Layout, LoginForm },
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style></style>
