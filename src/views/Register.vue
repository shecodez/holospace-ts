<template>
  <Layout view="Register">
    <h2>{{ t('views.Register.create_an_account') }}</h2>
    <RegisterForm />
    <p>
      {{ t('views.Register.have_an_account') }}
      <router-link to="/login">{{ t('auth.login') }}</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import Layout from '../layouts/AuthLayout.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';

export default defineComponent({
  name: 'Register',
  components: { Layout, RegisterForm },
  setup: () => {
    const { t } = useI18n();
    return { t };
  },
});
</script>

<style></style>
