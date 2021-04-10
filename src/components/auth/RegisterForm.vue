<template>
  <form @submit.prevent="submitRegister">
    <TextField v-model="username" :label="t('auth.username')" size="lg" />
    <TextField v-model="email" :label="t('auth.email')" type="email" size="lg" />
    <PasswordField v-model="password" :label="t('auth.password')" size="lg" showMeter />

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

import TextField from '@/components/inputs/TextField.vue';
import PasswordField from '@/components/inputs/PasswordField.vue';

export default defineComponent({
  components: { TextField, PasswordField },
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
