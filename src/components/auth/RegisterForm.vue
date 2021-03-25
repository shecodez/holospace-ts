<template>
  <form>
    <TextInput v-model="username" label="auth.username" />
    <TextInput v-model="email" label="auth.email" />
    <PasswordInput v-model="password" label="auth.password" />

    <div class="mt-6 mb-4">
      <button class="block w-full btn btn-primary px-2 py-2" :disabled="!valid" @click="submitRegister">
        {{ t('auth.register') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import TextInput from '@/components/TextInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';

export default defineComponent({
  components: { TextInput, PasswordInput },
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
