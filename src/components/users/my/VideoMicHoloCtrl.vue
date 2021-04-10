<template>
  <div class="grid grid-flow-col grid-cols-3">
    <button class="btn f-center" @click="toggleCam">
      <div class="relative">
        <i-mdi-camera-iris />
        <i-mdi-circle-off-outline v-show="!useCamera" class="absolute top-0 text-error-500" />
      </div>
    </button>
    <button class="btn f-center" @click="toggleMic">
      <div class="relative">
        <i-mdi-microphone />
        <i-mdi-circle-off-outline v-show="!useMicrophone" class="absolute top-0 text-error-500" />
      </div>
    </button>
    <button class="btn f-center" @click="toggleVr">
      <div class="relative">
        <i-mdi-hololens />
        <i-mdi-circle-off-outline v-show="!useHoloVr" class="absolute top-0 text-error-500" />
      </div>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'VideoMicHoloCtrl',
  setup: () => {
    const useCamera = ref(false);
    const toggleCam = () => {
      useCamera.value = !useCamera.value;
    };

    const useMicrophone = ref(true);
    const toggleMic = () => {
      useMicrophone.value = !useMicrophone.value;
    };

    const useHoloVr = ref(false);
    const toggleVr = () => {
      useHoloVr.value = !useHoloVr.value;
    };

    return { useCamera, toggleCam, useMicrophone, toggleMic, useHoloVr, toggleVr };
  },
});
</script>
