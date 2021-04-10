<template>
  <form @submit.prevent="submitLogin">
    <TextField v-model="email" :label="t('auth.email')" type="email" size="lg" />
    <PasswordField v-model="password" :label="t('auth.password')" size="lg" />

    <div
      class="uppercase font-medium text-sm my-4 text-right cursor-pointer text-gray-300 hover:text-white"
      @click="submitForgot"
    >
      {{ t('auth.forgot_password') }}
    </div>

    <div class="mb-4">
      <button class="block w-full btn btn-primary px-2 py-2" :disabled="!valid" type="submit">
        {{ t('auth.login') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';
import PasswordField from '@/components/inputs/PasswordField.vue';

export default defineComponent({
  name: 'LoginForm',
  components: { TextField, PasswordField },
  setup: () => {
    const { t } = useI18n();

    const user = reactive({
      email: '',
      password: '',
    });
    const valid = ref(true);

    onMounted(() => {
      //email.value.focus();
    });

    const submitForgot = () => {
      console.log(`LoginForm.vue > submitForgot ${user.email}`);
    };

    const submitLogin = () => {
      console.log(`LoginForm.vue > submitLogin ${user}`);
    };

    return { t, ...toRefs(user), valid, submitForgot, submitLogin };
  },
});
</script>

<style></style>
