<template>
  <i-mdi-alert-octagon v-if="type === alert.ERROR" />
  <i-mdi-information v-if="type === alert.INFO" />
  <i-mdi-checkbox-marked v-if="type === alert.SUCCESS" />
  <i-mdi-alert v-if="type === alert.WARNING" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import { AlertTypes } from '@/store/interfaces';

export default defineComponent({
  name: 'IconForAlert',
  props: {
    type: {
      type: String,
      default: '',
      required: true,
    },
  },
  setup: () => {
    const alert = AlertTypes;
    return { alert };
  },
});
</script>
