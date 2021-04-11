<template>
  <form @submit.prevent="submitDeckForm" class="w-full">
    <div class="grid grid-cols-2 gap-4">
      <div class="l-col">
        <TextField ref="inputNameEl" v-model="name" :label="t(`${l10n}.deck_name`)" :max="64" required>
          <template v-slot:prepend>
            <i-mdi-layers-outline class="text-primary-500" />
          </template>
        </TextField>

        <Select v-model="hq" :label="t(`${l10n}.deck_hq`)" :options="getRegionList">
          <template v-slot:prepend>
            <IconForFlag :flagFor="getRegionFlag" />
          </template>
          <template v-slot:hint>
            <span>
              {{ t('recommended') }}: <b>{{ getRegionByIP }}</b>
            </span>
          </template>
        </Select>
      </div>
      <div class="text-center m-auto">
        <!-- <TextField v-model="avatarUrl" label="Icon" /> -->
        <!-- if image error add border-red-500 to class -->
        <div
          class="relative border-4 rounded-full w-32 h-32 f-center"
          :style="`background-color: ${useHashColor(name)}`"
        >
          <span class="text-4xl text-white">{{ name.charAt(0) }}</span>
          <img v-show="isImage" class="rounded-full" :src="avatarUrl" alt="Deck Avatar" />
          <button
            class="absolute right-0 bottom-0 bg-white dark:bg-gray-700 border-2 border-dashed rounded-full w-9 h-9 f-center"
          >
            <i-mdi-arrow-up-bold-hexagon-outline />
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

    <button class="btn btn-primary rounded px-4 py-2" :class="btnPos" :disabled="!isValid" type="submit">
      <span v-if="deckId" class="uppercase">{{ t(`${l10n}.update_deck`) }}</span>
      <span v-else class="uppercase">{{ t('add') }}</span>
    </button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive, onMounted, toRefs, watch, computed } from 'vue';
import { useI18n } from 'vue-i18n';

import TextField from '@/components/inputs/TextField.vue';
import Select from '@/components/inputs/Select.vue';
import IconForFlag from '../iconFors/IconForFlag.vue';
import { useHashColor } from '@/useables/useHashColor';
import { IDeck, Region } from '@/store/interfaces';
import { useStore } from '@/store';

export default defineComponent({
  name: 'DeckForm',
  props: {
    deckId: {
      type: String,
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
    btnPos: {
      type: String,
      default: '',
    },
  },
  components: { TextField, Select, IconForFlag },
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

    const store = useStore();

    const isValid = ref(true);
    const state = reactive({
      name: '',
      avatarUrl: '',
      hq: Region.US_EAST,
    });

    const getRegionByIP = ref('US-East');
    const getRegionList = ref([
      { id: Region.US_EAST, name: 'US-East', abbr: 'US' },
      { id: Region.JP_ASIA, name: 'JP-Asia', abbr: 'JP' },
    ]);
    const getRegionFlag = computed(
      () => getRegionList.value[getRegionList.value.findIndex((x) => x.id === state.hq)].abbr
    );

    const setFields = () => {
      if (props.deckId) {
        const deck = computed(() => store.getters.getDeckById(props.deckId as string));
        const { name, hq, avatarUrl } = deck.value as IDeck;
        state.name = name;
        state.hq = hq;
        //state.avatarUrl = avatarUrl;
      }
    };
    onMounted(() => setFields()); //if props.deck? setFields() : resetForm();

    const resetForm = () => {
      state.name = '';
      state.hq = Region.US_EAST;
      state.avatarUrl = '';
    };

    const submitDeckForm = () => {
      console.log('DeckForm.vue > submitDeckForm', state);
      props.onSubmit(state);
      resetForm();
      props.onClose();
    };

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
      useHashColor,
      isImage,
      imgError,
      getRegionByIP,
      getRegionList,
      getRegionFlag,
    };
  },
});
</script>
