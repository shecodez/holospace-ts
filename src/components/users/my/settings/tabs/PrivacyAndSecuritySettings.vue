<template>
  <div class="text-sm font-bold">
    <ul class="options flex-grow overflow-y-overlay">
      <li v-for="(option, i) in options" :key="`ps-${i}`">
        <h3 v-if="option.header" class="text-xs font-bold uppercase pt-4">{{ option.header }}</h3>

        <div v-else-if="option.divider" class="my-8" />

        <div v-else class="option relative py-4 flex items-center border-b hs-border">
          <div class="w-full">
            <h3 class="capitalize">{{ option.name }}</h3>
            <p v-if="option.description" class="text-xs text-gray-500">{{ option.description }}</p>
          </div>
          <button class="btn">{{ option.toggle }}</button>
        </div>
      </li>
    </ul>
  </div>

  <div class="mt-10 rounded bg-gray-300 dark:bg-gray-700 p-6">
    <p>
      Please view our <a class="text-primary-500">Crew Regs</a> and <a class="text-primary-500">Privacy Policy</a> for
      more information.
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

export default defineComponent({
  name: 'PrivacyAndSecuritySettings',
  props: {
    profile: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'users.my.options.tabs.PrivacyAndSecuritySettings';

    const options = [
      { id: 'chat_default_security', header: 'Chat Default Security' },
      {
        id: 'allow_ssh_messages_from_crew',
        name: 'Allow Shh Messages from Crew Members',
        description: "Note: This doesn't apply retroactively.",
        toggle: true,
      },
      { divider: true },
      { id: 'who_can_add_you_as_a_friend', header: 'Who can add you as a friend' },
      { id: 'everyone', name: 'Everyone', toggle: true },
      { id: 'friends_of_friends', name: 'Friends of Friends', toggle: true },
      { id: 'crew_members', name: 'Crew Members', toggle: true },
      { divider: true },
    ];

    // const state = reactive({
    //   scanSshMessages: '', // SCAN_FROM_ALL, FROM_ALL_EXCEPT_FRIENDS, DONT_SCAN_ANY
    //   allowSshMessagesFromCrew: true,
    // });

    // const setFields = () => {
    //   if (!props.profile) return;
    // };
    // onMounted(() => setFields());

    return { t, l10n, options };
  },
});
</script>
