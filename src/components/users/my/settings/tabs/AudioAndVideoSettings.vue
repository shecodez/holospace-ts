<template>
  <section class="mb-6">
    <h3 class="text-sm font-bold uppercase py-1">Audio Settings</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div class="">
        <Select
          label="Input - Microphone"
          v-model="microphone.active"
          :defaultOption="!microphone.list.length ? 'N/A' : ''"
          :options="microphone.list"
          :disabled="!!microphone.error"
        />
        <div class="py-2">
          <label class="hs-label mb-4">Microphone Volume</label>
          <Slider v-model="microphone.volume" noLabel />
        </div>
      </div>

      <div class="">
        <Select
          label="Output - Speaker"
          v-model="speaker.active"
          :defaultOption="!speaker.list.length ? 'N/A' : ''"
          :options="speaker.list"
          :disabled="!!speaker.error"
        />
        <div class="py-2">
          <label class="hs-label mb-4">Speaker Volume</label>
          <Slider v-model="speaker.volume" noLabel />
        </div>
      </div>
    </div>

    <div class="pt-4">
      <label class="hs-label mb-2">Mic Check</label>
      <p class="text-sm">Having trouble with your microphone? Let's try testing it.</p>
      <div class="flex items-center space-x-3 my-2">
        <button class="btn btn-primary flex-shrink-0" :disabled="!!microphone.error">
          <i-mdi-microphone class="inline-block mr-1" />
          <span>Testing 1, 2, 3</span>
        </button>
        <div class="border-4 border-gray-500 border-dashed w-full h-4" />
      </div>
    </div>
  </section>

  <section class="input-mode py-6 mb-4 border-t hs-border">
    <!-- v-if input.mode.active === 'VOICE_ACTIVATED' -->
    <label class="hs-label mb-4">Audio Input Sensitivity</label>
    <div v-if="microphone.error" class="bg-error-500 bg-opacity-30 border-l-4 border-error-500">
      <p class="p-2 flex items-center">
        <i-mdi-alert class="mr-1" />
        <span>{{ microphone.error }}</span>
      </p>
    </div>

    <Slider
      v-model="input.sensitivity"
      trackColor="gradient-to-r from-green-400 to-red-400 via-yellow-400"
      progressColor="transparent"
      :disabled="!!microphone.error"
    />
    <!-- v-else-if input.mode.active === 'PUSH_TO_TALK' -->
  </section>

  <section class="pt-6 border-t hs-border">
    <h3 class="text-sm font-bold uppercase py-1">Video Settings</h3>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <Select
          label="Input - Camera"
          v-model="camera.active"
          :defaultOption="!camera.list.length ? 'N/A' : ''"
          :options="camera.list"
          :disabled="!!camera.error"
        />
        <div v-if="camera.error" class="bg-error-500 bg-opacity-30 border-l-4 border-error-500">
          <p class="p-2 flex items-center">
            <i-mdi-alert class="mr-1" />
            <span>{{ camera.error }}</span>
          </p>
        </div>
      </div>

      <div>
        <label class="hs-label">Preview</label>
        <div class="relative h-48 border-4 rounded overflow-hidden" :class="!!camera.error ? 'disabled' : ''">
          <img src="@/assets/images/test-bg-img.jpg" alt="video-test-img" />
          <div class="absolute top-4 right-4">
            <button class="btn btn-primary" :disabled="!!camera.error">Test Video</button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, reactive, ref, toRefs } from 'vue';
import { useI18n } from 'vue-i18n';

import Select from '@/components/inputs/Select.vue';
import Slider from '@/components/inputs/RangeSlider.vue';
import useCamera from '@/use/camera';
import useMicrophone from '@/use/microphone';
import useSpeaker from '@/use/speaker';

export enum AudioInputMode {
  VOICE_ACTIVATED = 'VOICE_ACTIVATED',
  PUSH_TO_TALK = 'PUSH_TO_TALK',
}

export default defineComponent({
  name: 'VoiceAndVisualSettings',
  components: { Select, Slider },
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.options.tabs.VoiceAndVisualSettings';

    const { camera, cameras, cameraError } = useCamera();
    const { microphone, microphones, microphoneError } = useMicrophone();
    const { speaker, speakers, speakerError } = useSpeaker();

    const formatError = (error: any, deviceName: string) => {
      switch (error.name) {
        case 'NotFoundError':
        case 'DevicesNotFoundError':
          // required track is missing
          return `Device not found. Please make sure your ${deviceName} is connected and powered on.`;
        case 'NotReadableError':
        case 'TrackStartError':
          // camera or microphone are already in use
          return `Your ${deviceName} is already in use by another application.`;
        case 'OverconstrainedError':
        case 'ConstraintNotSatisfiedError':
          // constraints can not be satisfied by avb. devices
          // const v = constraints.video;
          // return `The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`
          return `${deviceName} unsupported resolution: ${error.constraintName}`;
        case 'NotAllowedError':
        case 'PermissionDeniedError':
          // permission denied in browser
          // return t(`${l10n}.${deviceName}.permission_denied_error_message`)
          return `Permission has not been granted to HoloSpace to access to your ${deviceName}.`;
        case 'TypeError':
          // empty constraints object
          return `constraints object passed to getUserMedia() is empty, 
            or has all tracks (audio, video or both) set to false`;
        default:
          console.log(error);
          return error;
      }
    };

    // profile.settings.audio_and_video
    const devices = reactive({
      input: {
        sensitivity: 50, // get from profile
        mode: {
          active: AudioInputMode.VOICE_ACTIVATED,
          list: computed(() => getInputModeList()),
        },
        pttKey: '',
        pttKeyReleaseDelay: 0,
      },
      microphone: {
        active: microphone,
        list: computed(() =>
          microphones.value.map((i) => ({
            id: i.deviceId,
            name: i.label,
          }))
        ),
        volume: 70, // get from profile
        error: formatError(microphoneError, 'microphone'),
      },

      camera: {
        active: camera,
        list: computed(() => cameras.value.map((i) => ({ id: i.deviceId, name: i.label }))),
        error: formatError(cameraError, 'camera'),
      },

      speaker: {
        active: speaker,
        list: computed(() => speakers.value.map((o) => ({ id: o.deviceId, name: o.label }))),
        volume: 75, // get from profile
        error: formatError(speakerError, 'speaker'),
      },
    });

    // get from api
    const getInputModeList = () => [
      { id: AudioInputMode.VOICE_ACTIVATED, name: 'Voice Activated' },
      { id: AudioInputMode.PUSH_TO_TALK, name: 'Push to Talk' },
    ];

    //const cameraList = computed(() => cameras.value.map((i) => ({ id: i.deviceId, name: i.label })));
    // watch(cameras, (value) => {
    //   console.log(value)
    // });

    // const microphoneVolume = ref(70);
    // const microphoneList = computed(() =>
    //   microphones.value.map((i) => ({
    //     id: i.deviceId,
    //     name: i.label,
    //   }))
    // );

    // const inputMode = ref(AudioInputMode.VOICE_ACTIVATED);
    // const inputModeList = [
    //   { id: AudioInputMode.VOICE_ACTIVATED, name: 'Voice Activated' },
    //   { id: AudioInputMode.PUSH_TO_TALK, name: 'Push to Talk' },
    // ];
    // const inputSensitivity = ref(50);

    // const speakerVolume = ref(75);
    // const speakerList = computed(() => speakers.value.map((o) => ({ id: o.deviceId, name: o.label })));

    return { t, l10n, ...toRefs(devices) };
  },
});
</script>
