<template>
  <form @submit.prevent="submitRegister">
    <FormValidation v-if="errorMessage" :errorMessage="errorMessage" :errorDetails="errorDetails" />

    <TextField v-model="name" :label="t('auth.username')" size="lg" :error="errors['user.name']" />
    <TextField v-model="email" :label="t('auth.email')" type="email" size="lg" :error="errors['user.email']" />
    <PasswordField
      v-model="password"
      :label="t('auth.password')"
      size="lg"
      showMeter
      :error="errors['user.password']"
    />

    <div class="mb-4 mt-6">
      <button class="block w-full btn btn-primary px-2 py-2" :disabled="!valid || isLoading" type="submit">
        {{ t('auth.register') }}
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';
import { useField, useForm, useFormErrors } from 'vee-validate';

import TextField from '@/components/inputs/TextField.vue';
import PasswordField from '@/components/inputs/PasswordField.vue';
import FormValidation from '@/components/alerts/FormValidation.vue';
import { registerSchema } from '@/validators/auth';
import { UseApiServerResponse } from '@/use/api/useApi';

export default defineComponent({
  name: 'RegisterForm',
  components: { TextField, PasswordField, FormValidation },
  props: {
    serverResponse: {
      type: Object,
      required: true,
    },
  },
  emits: {
    onSubmitRegister: null,
  },
  setup: (props, { emit }) => {
    const { t } = useI18n();

    const veeForm = useForm({
      validationSchema: registerSchema,
    });

    const { value: name } = useField('user.name');
    const { value: email } = useField('user.email');
    const { value: password } = useField('user.password');

    const valid = ref(true); // computed(() => veeForm.validate().valid)
    const submitRegister = async () => {
      const { valid } = await veeForm.validate();
      //resetServerResponse();
      if (valid) {
        const { user } = veeForm.values;
        emit('onSubmitRegister', user);
      }
    };

    const serverAuthResponse = reactive<UseApiServerResponse>({
      isLoading: false,
      errorDetails: [],
      errorFields: {},
      errorMessage: '',
    });
    const handleServerResponse = () => {
      //console.log('handleServerResponse', serverResponse);
      serverAuthResponse.isLoading = props.serverResponse.isLoading;
      serverAuthResponse.errorDetails = props.serverResponse.errorDetails;
      serverAuthResponse.errorFields = props.serverResponse.errorFields;
      serverAuthResponse.errorMessage = props.serverResponse.errorMessage;
    };

    const resetServerResponse = () => {
      serverAuthResponse.isLoading = false;
      serverAuthResponse.errorDetails = [];
      serverAuthResponse.errorFields = {};
      serverAuthResponse.errorMessage = '';
    };

    return {
      t,
      name,
      email,
      password,
      errors: useFormErrors(),
      valid,
      submitRegister,
      ...toRefs(serverAuthResponse),
      handleServerResponse,
    };
  },
});
</script>
