<template>
  <Menu customize="rounded-b-none">
    <div class="flex space-x-6 justify-end">
      <div v-for="(mdGroup, i) in markdownOptions" :key="`md-opts-g${i}`" class="grid grid-flow-col grid-cols-3 gap-2">
        <button v-for="option in mdGroup" :key="option.id" class="p-2">
          <IconForMarkdown :iconFor="option.id" />
          <Tooltip position="-mb-10">{{ `${option.name} ${option.shortcut}` }}</Tooltip>
        </button>
      </div>
    </div>
  </Menu>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import Menu from '../Menu.vue';
import Tooltip from '../Tooltip.vue';
import IconForMarkdown from '@/components/iconFors/IconForMarkdown.vue';

export default defineComponent({
  name: 'MarkDownMenu',
  components: { Menu, Tooltip, IconForMarkdown },
  setup: () => {
    const markdownOptions = {
      HBI: [
        { id: 'header', name: 'add_header_text' },
        { id: 'bold', name: 'add_bold_text', shortcut: '<ctrl+b>' },
        { id: 'italic', name: 'add_italic_text', shortcut: '<ctrl+i>' },
      ],
      QCL: [
        { id: 'quote', name: 'add_quote_text' },
        { id: 'code', name: 'insert_code', shortcut: '<ctrl+e>' },
        { id: 'link', name: 'add_a_link', shortcut: '<ctrl+k>' },
      ],
      UOT: [
        { id: 'ul', name: 'add_bulleted_list' },
        { id: 'ol', name: 'add_numbered_list' },
        { id: 'task', name: 'add_check_list' },
      ],
      MEG: [
        { id: 'mention', name: 'directly mention someone' },
        { id: 'emoji', name: 'add_emoji', shortcut: 'ex: :smile:' }, //https://github.com/ikatyang/emoji-cheat-sheet
        { id: 'gif', name: 'add_gif', shortcut: '/giphy' },
      ],
    };

    return { markdownOptions };
  },
});
</script>
