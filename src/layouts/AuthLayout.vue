<template>
  <div class="min-w-screen min-h-screen flex items-center justify-center">
    <div
      class="bg-gray-800 bg-opacity-50 text-gray-100 rounded-2xl shadow-xl w-full overflow-hidden"
      style="max-width: 600px"
    >
      <div class="md:flex w-full">
        <div class="hidden md:block w-2/5 bg-indigo-500 py-10 px-10">
          <img alt="logo" />
        </div>

        <div class="w-full md:w-3/5 py-10 px-5 md:px-10">
          <slot></slot>
        </div>
      </div>
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
