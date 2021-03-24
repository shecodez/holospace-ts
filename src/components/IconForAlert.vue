<template>
  <icon-error v-if="type === alert.ERROR" />
  <icon-info v-if="type === alert.INFO" />
  <icon-success v-if="type === alert.SUCCESS" />
  <icon-warning v-if="type === alert.WARNING" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconError from '/@vite-icons/mdi/alert-octagon';
import IconInfo from '/@vite-icons/mdi/information';
import IconSuccess from '/@vite-icons/mdi/checkbox-marked';
import IconWarning from '/@vite-icons/mdi/alert';

import { AlertTypes } from '@/store/interfaces';

export default defineComponent({
  name: 'IconForAlert',
  components: { IconError, IconInfo, IconSuccess, IconWarning },
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
