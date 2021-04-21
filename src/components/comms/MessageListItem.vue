<template>
  <li class="flex mx-4 my-3" :class="fromMe ? 'justify-self-end flex-row-reverse' : 'justify-self-start'">
    <div
      class="w-10 h-10 rounded-full m-2 overflow-hidden flex-shrink-0 hidden md:block"
      :class="fromMe ? 'invisible' : ''"
    >
      <img v-if="author.avatarUrl" :src="author.avatarUrl" alt="Author Avatar" />
      <div v-else class="h-full f-center" :style="`background-color: ${useHashColor(author.name)}`">
        {{ author.name.charAt(0) }}
      </div>
    </div>
    <div class="p-2 rounded max-w-5xl bg-opacity-90" :class="fromMe ? 'bg-gray-600' : 'bg-primary-500 '">
      <span class="font-medium mr-2">{{ author.name }}</span>
      <span class="text-xs text-gray-400">{{ formatDate(createdAt) }}</span>
      <span v-if="updatedAt" class="italic text-xs">{{ t('edited') }}</span>
      <p>{{ text }}</p>
    </div>
  </li>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';
import formatRelative from 'date-fns/formatRelative';

import { useHashColor } from '@/useables/useHashColor';

export default defineComponent({
  name: 'MessageListItem',
  props: {
    id: { type: String, required: true },
    text: { type: String, required: true },
    authorId: { type: String },
    author: { type: Object, required: true },
    createdAt: { type: Date, required: true },
    updatedAt: { type: Date },
  },
  setup: (props) => {
    const { t } = useI18n();

    const fromMe = computed(() => props.authorId === '1');
    const formatDate = (date: number | Date) => {
      return formatRelative(date, new Date());
    };

    return { t, useHashColor, fromMe, formatDate };
  },
});
</script>
