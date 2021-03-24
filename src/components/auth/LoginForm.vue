<template>
  <form>
    <TextInput v-model="email" label="auth.email" />
    <TextInput v-model="password" label="auth.password" />
    <button @click="submitForgot">{{ t('auth.forgot_password') }}</button>

    <div class="flex">
      <div class="w-full mb-5">
        <button class="block w-full btn btn-primary px-2 py-2" :disabled="!valid" @click="submitLogin">
          {{ t('auth.login') }}
        </button>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import TextInput from '@/components/TextInput.vue';

export default defineComponent({
  name: 'LoginForm',
  components: { TextInput },
  setup: () => {
    const { t } = useI18n();

    const email = ref('');
    const password = ref('');
    const valid = ref(true);

    onMounted(() => {
      //email.value.focus();
    });

    const submitForgot = () => {
      console.log(`LoginForm.vue > submitForgot ${email.value}`);
    };

    const submitLogin = () => {
      console.log(`LoginForm.vue > submitLogin ${email.value}`);
    };

    return { t, email, password, valid, submitForgot, submitLogin };
  },
});
</script>

<style></style>
