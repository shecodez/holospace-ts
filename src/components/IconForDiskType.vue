<template>
  <div :class="iconColor">
    <icon-text v-show="iconFor === 'TEXT'" />
    <icon-voip v-show="iconFor === 'VOIP'" />
    <icon-holo v-show="iconFor === 'HOLO'" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import IconText from '/@vite-icons/ph/chats';
import IconVoip from '/@vite-icons/mdi/microphone';
import IconHolo from '/@vite-icons/heroicons-solid/cube-transparent';

export default defineComponent({
  name: 'IconForDiskType',
  components: { IconText, IconVoip, IconHolo },
  props: {
    iconFor: {
      type: String, //String as () => DiskSpaceType
      required: true,
    },
    iconColor: {
      type: String,
      default: '',
    },
  },
  setup: () => {},
});
</script>
