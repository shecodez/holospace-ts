<template>
  <form @submit.prevent="submitRegister">
    <TextInput v-model="username" label="auth.username" />
    <TextInput v-model="email" label="auth.email" type="email" />
    <PasswordInput v-model="password" label="auth.password" showStrMeter />

    <div class="mt-6 mb-4">
      <button class="block w-full btn btn-primary px-2 py-2" :disabled="!valid" type="submit">
        {{ t('auth.register') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import TextInput from '@/components/TextInput.vue';
import PasswordInput from '@/components/PasswordInput.vue';

export default defineComponent({
  components: { TextInput, PasswordInput },
  name: 'RegisterForm',

  setup: () => {
    const { t } = useI18n();

    const user = reactive({
      username: '',
      email: '',
      password: '',
    });
    //const terms = ref(false);
    const valid = ref(true);

    const submitRegister = () => {
      console.log(`RegisterForm.vue > submitRegister ${user.password}`);
    };

    return { t, ...toRefs(user), valid, submitRegister };
  },
});
</script>

<style></style>
