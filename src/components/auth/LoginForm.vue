<template>
  <form @submit.prevent="submitLogin">
    <FormValidation v-if="errorMessage" :errorMessage="errorMessage" :errorDetails="errorDetails" />

    <ForgotPassword :email="onSubmitForgotPassword" @onServerResponse="handleServerResponse">
      <TextField
        v-model="email"
        :label="t('auth.email')"
        type="email"
        size="lg"
        name="user.email"
        :error="errors['user.email']"
      />
    </ForgotPassword>
    <PasswordField
      v-model="password"
      :label="t('auth.password')"
      size="lg"
      name="user.password"
      :error="errors['user.password']"
    />

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
import { defineComponent, reactive, ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useField, useForm, useFormErrors } from 'vee-validate';

import TextField from '@/components/inputs/TextField.vue';
import PasswordField from '@/components/inputs/PasswordField.vue';
import FormValidation from '@/components/alerts/FormValidation.vue';
import ForgotPassword from './ForgotPassword.vue';
import { loginSchema } from '@/validators/auth';
import { UseApiServerResponse } from '@/use/api/useApi';

export default defineComponent({
  name: 'LoginForm',
  components: { TextField, PasswordField, FormValidation, ForgotPassword },
  props: {
    serverResponse: {
      type: Object,
      required: true,
    },
  },
  emits: {
    onSubmitLogin: null,
    onSubmitForgotPassword: null,
  },
  setup: (_, { emit }) => {
    const { t } = useI18n();

    //onMounted(() => email.value.focus());

    const veeForm = useForm({
      validationSchema: loginSchema,
    });
    // const formForForgot = useForm({
    //   validationSchema: forgotPasswordSchema,
    // });

    const { value: email } = useField('user.email');
    const { value: password, resetField } = useField('user.password');

    const valid = ref(true); // computed(() => veeForm.validate().valid)
    const submitLogin = async () => {
      const { valid } = await veeForm.validate();
      //resetServerResponse();
      if (valid) {
        const { user } = veeForm.values;
        emit('onSubmitLogin', user);
      }
    };

    const onSubmitForgotPassword = ref('');
    const submitForgot = async () => {
      await resetField();
      const { valid } = await veeForm.validateField('user.email');
      //resetServerResponse();
      if (valid) {
        const { user } = veeForm.values;
        onSubmitForgotPassword.value = user.email!;
      }
    };

    const serverAuthResponse = reactive<UseApiServerResponse>({
      isLoading: false,
      errorDetails: [],
      errorFields: {},
      errorMessage: '',
    });
    const handleServerResponse = (serverResponse: UseApiServerResponse) => {
      //console.log('handleServerResponse', serverResponse);
      // get serverResponse emitted from ForgotPassword
      serverAuthResponse.isLoading = serverResponse.isLoading;
      serverAuthResponse.errorDetails = serverResponse.errorDetails;
      serverAuthResponse.errorFields = serverResponse.errorFields;
      serverAuthResponse.errorMessage = serverResponse.errorMessage;
      // get serverRespnse passed from Login Parent
      // serverAuthResponse = props.serverResponse
    };

    const resetServerResponse = () => {
      serverAuthResponse.isLoading = false;
      serverAuthResponse.errorDetails = [];
      serverAuthResponse.errorFields = {};
      serverAuthResponse.errorMessage = '';
    };

    return {
      t,
      email,
      password,
      errors: useFormErrors(),
      valid,
      submitForgot,
      onSubmitForgotPassword,
      submitLogin,
      ...toRefs(serverAuthResponse),
      handleServerResponse,
    };
  },
});
</script>
