<template>
  <section class="sfx-section mb-10 border-b hs-border">
    <div class="pt-2 pb-4 flex items-center">
      <div>
        <h4 class="hs-h4">Enable Desktop Notifications</h4>
        <p class="text-xs text-gray-400">WIP...</p>
      </div>
      <div class="ml-auto">
        <button disabled>false</button>
      </div>
    </div>
  </section>

  <section class="sfx-section mb-10">
    <h3 class="hs-h3 py-3">sfx</h3>

    <ul>
      <li v-for="sfx in sfxSettingList" :key="sfx.id" class="border-b hs-border">
        <div class="sfx py-4 flex items-center">
          <h4 class="hs-h4">{{ sfx.name }}</h4>
          <button class="mx-2 invisible">
            <i-wpf-audio-wave />
          </button>
          <div class="ml-auto">
            <button>{{ sfx.isOn }}</button>
          </div>
        </div>
      </li>
    </ul>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'NotificationSettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const sfxSettingList = [
      { id: 'new_message', name: 'New Message', isOn: true, sfxUrl: '' },
      { id: 'mute', name: 'mute', isOn: true, sfxUrl: '' },
      { id: 'unmute', name: 'Unmute', isOn: true, sfxUrl: '' },
      { id: 'audio_disconnected', name: 'Audio Disconnected', isOn: true, sfxUrl: '' },
      { id: 'on_ptt', name: 'On PTT (Push To Talk)', isOn: true, sfxUrl: '' },
      { id: 'ptt_over', name: 'PTT Over', isOn: true, sfxUrl: '' },
      { id: 'crew_member_join', name: 'Crew Member Join', isOn: true, sfxUrl: '' },
      { id: 'cmder_join', name: 'CMDer Join', isOn: true, sfxUrl: '' },
      { id: 'captain_on_deck', name: 'Captain On Deck', isOn: true, sfxUrl: '' },
      { id: 'crew_member_left', name: 'Crew Member Left', isOn: true, sfxUrl: '' },
      { id: 'crew_member_transfer', name: 'Crew Member Transfer', isOn: true, sfxUrl: '' },
      { id: 'ringtone', name: 'Ringtone', isOn: true, sfxUrl: '' },
    ];

    return { sfxSettingList };
  },
});
</script>

<style lang="postcss">
.sfx:hover > button {
  visibility: visible;
}
</style>
