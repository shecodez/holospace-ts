<template>
  <div class="mb-6" v-if="errorMessage">
    <Alert severity="error">
      <template v-slot:title>
        <div class="font-bold">{{ errorMessage }}</div>
      </template>
      <ul v-if="errorDetails">
        <li class="text-sm" v-for="error in errorDetails" :key="error" v-html="error" />
      </ul>
    </Alert>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Alert from './Alert.vue';

export default defineComponent({
  name: 'FormValidation',
  components: { Alert },
  props: {
    errorMessage: String,
    errorDetails: Array,
    errorFields: Object,
  },
});
</script>
