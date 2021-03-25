<template>
  <Layout view="Register">
    <div class="text-center mb-10">
      <h2 class="font-bold text-xl">{{ t('views.Register.create_an_account') }}</h2>
    </div>
    <RegisterForm />
    <p class="text-center font-medium">
      {{ t('views.Register.have_an_account') }}
      <router-link class="text-primary-500" to="/login">{{ t('auth.login') }}</router-link>
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
