<template>
  <form>
    <TextInput v-model="username" label="auth.username" />
    <TextInput v-model="email" label="auth.email" />
    <TextInput v-model="password" label="auth.password" />

    <input v-model="terms" type="checkbox" />
    <button :disabled="!valid" @click="submitRegister">{{ t('auth.register') }}</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import TextInput from '@/components/TextInput.vue';

export default defineComponent({
  components: { TextInput },
  name: 'RegisterForm',

  setup: () => {
    const { t } = useI18n();

    const username = ref('');
    const email = ref('');
    const password = ref('');
    const terms = ref(false);
    const valid = ref(true);

    const submitRegister = () => {
      console.log(`RegisterForm.vue > submitRegister ${username.value}`);
    };

    return { t, username, email, password, terms, valid, submitRegister };
  },
});
</script>

<style></style>
