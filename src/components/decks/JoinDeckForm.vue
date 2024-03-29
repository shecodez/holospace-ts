<template>
  <form @submit.prevent="submitJoinDeckForm" class="c-secondary">
    <TextField ref="inputKeyEl" v-model="holoKey" label="HoloKey">
      <template v-slot:prepend>
        <i-mdi-key-variant class="text-secondary-500" />
      </template>
    </TextField>

    <button class="btn btn-secondary rounded px-4 py-2 absolute right-0 bottom-2" :disabled="!isValid" type="submit">
      <span class="uppercase">{{ t('join') }}</span>
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';

export default defineComponent({
  name: 'JoinDeckForm',
  props: {
    onSubmit: {
      type: Function,
      required: true,
    },
    onClose: {
      type: Function,
      required: true,
    },
    error: {
      type: Object,
      required: false,
    },
  },
  components: { TextField },
  computed: {
    showJoinDeckModal(): boolean {
      return this.$store.state.decks.showJoinDeckModal;
    },
  },
  watch: {
    showJoinDeckModal(isOpen) {
      if (isOpen) {
        this.focusInput();
      }
    },
  },
  methods: {
    focusInput() {
      this.$nextTick(() => {
        (this.$refs.inputKeyEl as any).$el.querySelector('input').focus();
      });
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const isValid = ref(true);
    const holoKey = ref('');

    const resetForm = () => {
      holoKey.value = '';
    };

    const submitJoinDeckForm = () => {
      props.onSubmit(holoKey.value);
      resetForm();
      props.onClose();
    };

    return {
      t,
      isValid,
      holoKey,
      submitJoinDeckForm,
    };
  },
});
</script>
