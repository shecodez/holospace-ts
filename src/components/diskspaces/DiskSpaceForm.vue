<template>
  <form @submit.prevent="submitDiskSpaceForm" class="pt-4">
    <TextField ref="inputNameEl" v-model="name" :label="t(`${l10n}.disk_space_name`)" :max="256" required>
      <template v-slot:prepend>
        <i-carbon-vmdk-disk class="text-primary-500" />
      </template>
    </TextField>

    <Textarea v-model="topic" :label="t(`${l10n}.disk_space_topic`)" :max="512">
      <template v-slot:prepend>
        <i-mdi-note-text class="text-primary-500" />
      </template>
    </Textarea>

    <div class="w-1/2">
      <Select v-model="type" :label="t(`${l10n}.disk_space_type`)" :options="getDiskSpaceTypeList" required>
        <template v-slot:prepend>
          <IconForDiskType :iconFor="type" iconColor="text-primary-500" />
        </template>
      </Select>
    </div>

    <div class="mt-4 mb-2 text-right">
      <button class="btn btn-primary rounded px-4 py-2" :disabled="!isValid" type="submit">
        <span v-if="diskSpace" class="uppercase">{{ t(`${l10n}.update_diskSpace`) }}</span>
        <span v-else class="uppercase">{{ t('create') }}</span>
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, toRefs, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';
import Select from '@/components/inputs/Select.vue';
import Textarea from '@/components/inputs/Textarea.vue';
import IconForDiskType from '../iconFors/IconForDiskType.vue';
import { DiskSpaceType } from '@/store/interfaces';

export default defineComponent({
  name: 'DiskSpaceForm',
  components: { TextField, Select, Textarea, IconForDiskType },
  props: {
    diskSpaceType: {
      type: String,
      required: true,
    },
    diskSpace: {
      type: Object, // DiskSpace
      required: false,
    },
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

  computed: {
    showCreateModal(): boolean {
      return this.$store.state.diskSpaces.showCreateDiskSpaceModal;
    },
    showEditModal(): boolean {
      return this.$store.state.diskSpaces.showEditDiskSpaceModal;
    },
  },
  watch: {
    showCreateModal(isOpen) {
      if (isOpen) {
        this.focusInput();
      }
    },
    showEditModal(isOpen) {
      if (isOpen) {
        this.focusInput();
      }
    },
  },
  methods: {
    focusInput() {
      this.$nextTick(() => {
        (this.$refs.inputNameEl as any).$el.querySelector('input').focus();
      });
    },
  },
  // mounted: function () {
  //   this.focusInput();
  // },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'diskSpaces.DiskSpaceForm';

    const isValid = ref(true);
    const state = reactive({
      name: '',
      topic: '',
      type: props.diskSpaceType,
    });

    const getDiskSpaceTypeList = ref([
      { id: DiskSpaceType.TEXT, name: 'TEXT' },
      { id: DiskSpaceType.VOIP, name: 'VoIP' },
      { id: DiskSpaceType.HOLO, name: 'HOLO' },
    ]);

    const setFields = () => {
      if (props.diskSpace) {
        const { name, topic, type } = props.diskSpace;
        state.name = name;
        state.topic = topic;
        state.type = type;
      }
    };
    onMounted(() => setFields()); //if props.deck? setFields() : resetForm();

    const resetForm = () => {
      state.name = '';
      state.topic = '';
      state.type = '';
    };

    const submitDiskSpaceForm = () => {
      console.log('DiskSpaceForm.vue > submitDiskSpaceForm', state);
      props.onSubmit(state);
      resetForm();
      props.onClose();
    };

    return {
      t,
      l10n,
      isValid,
      ...toRefs(state),
      getDiskSpaceTypeList,
      submitDiskSpaceForm,
    };
  },
});
</script>
