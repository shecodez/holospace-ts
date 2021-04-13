<template>
  <div :class="$attrs.class">
    <i-mdi-plus-circle-outline v-if="iconFor === 'create'" class="text-success-500" />
    <i-mdi-refresh v-if="iconFor === 'update'" class="text-warning-500" />
    <i-mdi-minus-circle-outline v-if="iconFor === 'delete'" class="text-error-500" />
    <i-mdi-eye-circle-outline v-if="iconFor === 'read'" class="text-info-500" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForCRUD',
  props: {
    iconFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
