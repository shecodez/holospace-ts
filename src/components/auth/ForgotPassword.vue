<template>
  <div class="forgot-password" @onSubmitForgotPassword="handleForgot">
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import useApi from '@/use/api';
import { ForgotPasswordPayload } from '@/store/interfaces';

export default defineComponent({
  name: 'ForgotPassword',
  props: {
    email: {
      type: String,
      required: true,
    },
  },
  emits: {
    onServerResponse: null,
  },
  setup: (props, { emit }) => {
    const { t } = useI18n();
    const store = useStore();

    const { isLoading, post, data, errorMessage, errorDetails } = useApi('/auth/forgot-password');
    const serverResponse = { isLoading, errorMessage, errorDetails };

    watch(
      () => props.email,
      (email) => {
        handleForgot({ email });
      }
    );
    const handleForgot = ({ email }: ForgotPasswordPayload) => {
      console.log(`ForgotPassword.vue > handleForgot ${email}`);
      // post({ email }).then(() => {
      //emit('onServerResponse', serverResponse);
      //   // store.dispatch(AllActionTypes.FORGOT_PASSWORD, data.value)
      //   openModal;
      // });
    };

    return { t, handleForgot };
  },
});
</script>
