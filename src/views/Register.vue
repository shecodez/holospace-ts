<template>
  <Layout view="Register">
    <div class="text-center mb-10">
      <h2 class="font-bold text-xl">{{ t('views.Register.create_an_account') }}</h2>
    </div>

    <RegisterForm @onSubmitRegister="handleRegister" :serverResponse="serverResponse" />

    <p class="text-center font-medium">
      {{ t('views.Register.have_an_account') }}
      <router-link class="text-primary-500" to="/login">{{ t('auth.login') }}</router-link>
    </p>
  </Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

import Layout from '../layouts/AuthLayout.vue';
import RegisterForm from '../components/auth/RegisterForm.vue';
import { useStore } from '@/store';
import useApi from '@/use/api';
import { RegisterPayload } from '@/store/interfaces';

export default defineComponent({
  name: 'Register',
  components: { Layout, RegisterForm },
  setup: () => {
    const { t } = useI18n();
    const store = useStore();
    const router = useRouter();

    const { isLoading, post, data, errorMessage, errorDetails } = useApi('/auth/register');
    const serverResponse = { isLoading, errorMessage, errorDetails };

    const handleRegister = (user: RegisterPayload) => {
      console.log(`Register.vue > handleRegister ${user}`);
      // post(user).then(() => {
      //   // store.dispatch(AllActionTypes.REGISTER, data.value)
      //   router.push({ name: 'home' });
      // });
    };

    return { t, handleRegister, serverResponse };
  },
});
</script>
