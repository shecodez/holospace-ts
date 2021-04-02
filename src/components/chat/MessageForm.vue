<template>
  <div class="relative h-16 mt-3 mx-10 md:mx-24">
    <form @submit.prevent="submitChatMessageForm">
      <div class="flex relative items-center justify-between">
        <div class="absolute left-2 grid">
          <button class="mx-2">
            <i-mdi-arrow-up-bold-hexagon-outline />
            <span class="sr-only">Upload File</span>
          </button>
        </div>
        <input
          class="py-3 pl-12 pr-28 w-full bg-gray-400 dark:bg-gray-600 border-none"
          v-model="message"
          :placeholder="t(`${l10n}.enter_message`)"
          type="text"
        />
        <button v-if="message.length" class="absolute right-20" @click="clearInput">
          <i-mdi-close />
          <span class="sr-only">Clear Message</span>
        </button>
        <div
          class="absolute right-2 grid grid-cols-2 divide-x divide-black divide-opacity-10 dark:divide-white dark:divide-opacity-10"
        >
          <button class="mx-2">
            <i-mdi-emoticon-dead />
            <span class="sr-only">Emoji Menu</span>
          </button>
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

export default defineComponent({
  name: 'MessageForm',
  setup: () => {
    const { t } = useI18n();
    const l10n = 'chat.MessageForm';

    const message = ref('');

    const submitChatMessageForm = () => {
      if (!message.value) return;
      console.log('MessageForm.vue > submitChatMessageForm', message.value);
      clearInput();
    };

    const clearInput = () => {
      message.value = '';
    };

    return {
      t,
      l10n,
      message,
      submitChatMessageForm,
      clearInput,
    };
  },
});
</script>
