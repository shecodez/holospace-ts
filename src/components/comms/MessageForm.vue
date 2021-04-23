<template>
  <div class="relative mb-4 mx-6 md:mx-24">
    <MarkdownMenu v-if="showMarkdownMenu" />
    <form @submit.prevent="submitChatMessageForm">
      <div class="flex relative items-center justify-between">
        <div class="absolute left-2 grid">
          <button class="mx-2">
            <i-mdi-arrow-up-bold-hexagon-outline />
            <span class="sr-only">Upload File</span>
          </button>
        </div>

        <textarea
          v-if="isMultiline"
          class="hs-chatbox"
          v-model="message"
          :placeholder="t(`${l10n}.enter_message`)"
          :rows="3"
        />
        <input v-else class="hs-chatbox" v-model="message" :placeholder="t(`${l10n}.enter_message`)" type="text" />

        <button v-if="message.length" class="absolute right-20" @click="clearInput">
          <i-mdi-close />
          <span class="sr-only">Clear Message</span>
        </button>
        <div
          class="absolute right-2 grid grid-cols-2 divide-x divide-black divide-opacity-10 dark:divide-white dark:divide-opacity-10"
        >
          <button class="mx-2" @click="toggleMarkdownMenu">
            <i-mdi-format-textbox />
            <span class="sr-only">Toggle Markdown Menu</span>
          </button>
          <!-- <button>
            <i-clarity-microphone-solid />
            <span class="sr-only">Toggle Voice Comms</span>
          </button> -->
          <button class="text-primary-500 px-2" type="submit">
            <i-fa-paper-plane />
            <span class="sr-only">Send Message</span>
          </button>
        </div>
      </div>
    </form>
    <!-- <span class="absolute bottom-0 text-xs">This is for typing...</span> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import { useI18n } from 'vue-i18n';

import MarkdownMenu from './MarkdownMenu.vue';

export default defineComponent({
  name: 'MessageForm',
  components: { MarkdownMenu },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'chat.MessageForm';

    const message = ref('');

    const submitChatMessageForm = () => {
      if (!message.value) return;
      console.log('MessageForm.vue > submitChatMessageForm', message.value);
      clearInput();
    };

    const commands = [
      { id: 'emoji', name: 'Emoji', cmd: '/emo' },
      { id: 'gif', name: 'Gif', cmd: '/gif' },
      { id: 'holo', name: 'Holo', cmd: '/holo' },
      { id: 'voco', name: 'Voice Comm', cmd: '/voco' },
      { id: 'md', name: 'Markdown', cmd: '/md' },
      { id: 'afk', name: 'AFK', cmd: '/afk' },
    ];

    const clearInput = () => {
      message.value = '';
    };

    const isMultiline = ref(false);
    const showMarkdownMenu = ref(false);
    const toggleMarkdownMenu = () => {
      // TODO: if (!sm screen)
      showMarkdownMenu.value = !showMarkdownMenu.value;
      isMultiline.value = !isMultiline.value;
      // TODO: focus on input/textarea
    };

    return {
      t,
      l10n,
      message,
      submitChatMessageForm,
      clearInput,
      isMultiline,
      showMarkdownMenu,
      toggleMarkdownMenu,
    };
  },
});
</script>

<style lang="postcss" scoped>
input.hs-chatbox,
textarea.hs-chatbox {
  @apply py-3 pl-12 pr-28 w-full bg-gray-400 dark:bg-gray-600 shadow-inner border-none focus:ring-primary-500;
}
</style>
