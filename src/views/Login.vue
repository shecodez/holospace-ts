<template>
  <Layout view="Login">
    <div class="text-center mb-10">
      <h2 class="font-bold text-xl">{{ t('views.Login.hey_welcome_back') }}</h2>
    </div>

    <LoginForm @onSubmitLogin="handleLogin" :serverResponse="serverResponse" />

    <p class="text-center font-medium">
      {{ t('views.Login.need_an_account') }}
      <router-link class="text-primary-500" to="/register">{{ t('auth.register') }}</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import Layout from '../layouts/AuthLayout.vue';
import LoginForm from '../components/auth/LoginForm.vue';
import { useStore } from '@/store';
import useApi from '@/use/api';
import { LoginPayload } from '@/store/interfaces';

export default defineComponent({
  name: 'Login',
  components: { Layout, LoginForm },
  setup: () => {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();

    const { isLoading, post, data, errorMessage, errorDetails } = useApi('/auth/login');
    const serverResponse = { isLoading, errorMessage, errorDetails };

    const handleLogin = (user: LoginPayload) => {
      console.log(`Login.vue > handleLogin ${user}`);
      // post(user).then(() => {
      //   // store.dispatch(AllActionTypes.LOGIN, data.value) // , user.rememberMe
      //   router.push({ name: 'home' });
      // });
    };

    return { t, handleLogin, serverResponse };
  },
});
</script>
