<template>
  <form @submit.prevent="submitJoinDeckForm" class="c-secondary">
    <TextInput
      ref="inputKeyEl"
      v-model="holoKey"
      label="HoloKey"
      preIcon
      class="focus:ring-secondary-500"
    >
      <template v-slot:preIcon>
        <icon-key class="text-secondary-500" />
      </template>
    </TextInput>

    <button
      class="btn btn-secondary rounded px-4 py-2 absolute right-0 bottom-2"
      :disabled="!isValid"
      type="submit"
    >
      <span class="uppercase">Join</span>
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';
import IconKey from '/@vite-icons/mdi/key-variant.vue';

import TextInput from '../TextInput.vue';
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
  components: { TextInput, IconKey },
  computed: {
    showJoinDeckModal() {
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
      this.$nextTick(function () {
        this.$refs.inputKeyEl.$el.querySelector('input').focus();
      });
    },
  },
  setup: (props) => {
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
      isValid,
      holoKey,
      submitJoinDeckForm,
    };
  },
});
</script>
