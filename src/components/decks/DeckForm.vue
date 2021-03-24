<template>
  <form @submit.prevent="submitDeckForm">
    <div class="grid grid-cols-2 gap-4">
      <div class="l-col">
        <TextInput ref="inputNameEl" v-model="name" :label="`${l10n}.deck_name`" :max="64" preIcon required>
          <template v-slot:preIcon>
            <IconDeck class="text-primary-500" />
          </template>
        </TextInput>

        <Select v-model="hq" :label="`${l10n}.deck_hq`" :options="getRegionList" preIcon>
          <template v-slot:preIcon>
            <IconForFlag :flagFor="getRegionFlag" />
          </template>
          <template v-slot:hint>
            {{ t('recommended') }}: <b>{{ getRegionByIP }}</b>
          </template>
        </Select>
      </div>
      <div class="text-center m-auto">
        <!-- <TextInput v-model="avatarUrl" label="Icon" /> -->
        <!-- if image error add border-red-500 to class -->
        <div class="relative border-4 rounded-full w-32 h-32 f-center" :style="`background-color: ${defBgColor}`">
          <span class="text-4xl text-white">{{ name.charAt(0) }}</span>
          <img v-show="isImage" class="rounded-full" :src="avatarUrl" alt="Deck Avatar" />
          <button class="absolute right-0 bottom-0 bg-white border-2 border-dashed rounded-full w-9 h-9 f-center">
            <icon-upload />
          </button>
        </div>

        <span class="text-xs leading-3">
          <!-- if image error add text-red-500 to class -->
          <span class="capitalize">{{ t('min') }}: <b>128</b> ~ {{ t('max') }}: <b>1024</b></span>
          <span v-if="imgError" class="text-error-500 block">{{ imgError }}</span>
          <span v-else class="hint block">{{ t('recommended') }}: <b>512</b></span>
        </span>
      </div>
    </div>

    <button class="btn btn-primary rounded px-4 py-2 absolute right-0 bottom-2" :disabled="!isValid" type="submit">
      <span v-if="deck" class="uppercase">{{ t(`${l10n}.update_deck`) }}</span>
      <span v-else class="uppercase">{{ t('add') }}</span>
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, toRefs, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import IconUpload from '/@vite-icons/mdi/arrow-up-bold-hexagon-outline';
import IconDeck from '/@vite-icons/mdi/layers-outline';

import IconForFlag from '../IconForFlag.vue';
import TextInput from '../TextInput.vue';
import Select from '../SelectField.vue';
import { getHashCode, intToHSL } from '../../utils';

export default defineComponent({
  name: 'DeckForm',
  props: {
    deck: {
      type: Object, // IDeck
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
  components: { TextInput, Select, IconUpload, IconDeck, IconForFlag },
  computed: {
    showCreateModal(): boolean {
      return this.$store.state.decks.showCreateDeckModal;
    },
    showEditModal(): boolean {
      return this.$store.state.decks.showEditDeckModal;
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
    const l10n = 'decks.DeckForm';

    const isValid = ref(true);
    const state = reactive({
      name: '',
      avatarUrl: '',
      hq: 0,
    });

    const getRegionByIP = ref('US-East');
    const getRegionList = ref([
      { id: 0, name: 'US-East', abbr: 'US' },
      { id: 1, name: 'JP-Asia', abbr: 'JP' },
    ]);
    const getRegionFlag = computed(() => getRegionList.value[state.hq].abbr);

    const setFields = () => {
      if (props.deck) {
        const { name, hq, avatarUrl } = props.deck;
        state.name = name;
        state.hq = hq;
        state.avatarUrl = avatarUrl;
      }
    };
    onMounted(() => setFields()); //if props.deck? setFields() : resetForm();

    const resetForm = () => {
      state.name = '';
      state.hq = 0;
      state.avatarUrl = '';
    };

    const submitDeckForm = () => {
      console.log('DeckForm.vue > submitDeckForm', state);
      props.onSubmit(state);
      resetForm();
      props.onClose();
    };

    const defBgColor = ref('var(--hs-primary)');
    watch(
      () => state.name,
      (name) => {
        if (name.length) {
          defBgColor.value = intToHSL(getHashCode(name));
        } else {
          defBgColor.value = 'var(--hs-primary)';
        }
      }
    );

    const isImage = ref(false);
    const imgError = ref('');
    watch(
      () => state.avatarUrl,
      (url) => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = url;

        if (!img.complete) {
          isImage.value = false;
          //imgError.value = "Image Incomplete Error";
        } else if (img.height === 0) {
          isImage.value = false;
          //imgError.value = "Image height 0 Error";
        }

        isImage.value = true;
      }
    );

    return {
      t,
      l10n,
      isValid,
      ...toRefs(state),
      submitDeckForm,
      defBgColor,
      isImage,
      imgError,
      getRegionByIP,
      getRegionList,
      getRegionFlag,
    };
  },
});
</script>
