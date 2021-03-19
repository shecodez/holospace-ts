<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-2">
      <div>logo</div>

      <div><slot></slot></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'AuthLayout',
  props: {
    view: {
      type: String,
      required: true,
    },
  },
});
</script>

<style></style>
