<template>
  <i-gridicons-heading v-if="iconFor === 'header'" />
  <i-mdi-format-bold v-if="iconFor === 'bold'" />
  <i-mdi-format-italic v-if="iconFor === 'italic'" />

  <i-bi-blockquote-left v-if="iconFor === 'quote'" />
  <i-mdi-code-tags v-if="iconFor === 'code'" />
  <i-mdi-link-variant v-if="iconFor === 'link'" />

  <i-mdi-format-list-bulleted v-if="iconFor === 'ul'" />
  <i-mdi-format-list-numbered v-if="iconFor === 'ol'" />
  <i-mdi-checkbox-multiple-marked-outline v-if="iconFor === 'task'" />

  <i-mdi-mail-ru v-if="iconFor === 'mention'" />
  <i-mdi-emoticon v-if="iconFor === 'emoji'" />
  <i-mdi-gif v-if="iconFor === 'gif'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IconForMarkdown',
  props: {
    iconFor: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
