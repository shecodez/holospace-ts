<template>
  <div class="absolute right-6 bottom-2 w-64">
    <Toast type="success">
      <template v-slot:header>Success</template>
      <span>Yay, you did a thing!</span>
    </Toast>

    <Toast type="error">
      <template v-slot:header>Error</template>
      <span>Oops, something went wrong...</span>
    </Toast>

    <Toast type="info">
      <template v-slot:header>Cookie Info</template>
      <span>
        By closing this toast, you agree HoloSpace can store cookies on your device and dislose information in
        accordance with our <a class="text-gray-200 underline">Cookie Policy</a>.
      </span>
    </Toast>

    <Toast type="warning">
      <template v-slot:header>Warning</template>
      <span>It's a warning not an error keep calm and carry on</span>
    </Toast>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Toast from '@/components/alerts/Toast.vue';

export default defineComponent({
  name: 'ToastDemo',
  components: { Toast },
  setup: () => {},
});
</script>
