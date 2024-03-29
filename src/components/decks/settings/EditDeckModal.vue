<template>
  <ModalFullScreen :isOpen="showModal" :onClose="closeModal">
    <Modal2ColumnLayout v-if="editDeck" :closeModal="closeModal">
      <template v-slot:leftcolheader>
        <i-mdi-layers-outline class="text-xl flex-shrink-0" />
        <h3 class="font-bold text-xl uppercase mx-2 truncate">{{ editDeck.name }}</h3>
      </template>
      <template v-slot:leftcolbody>
        <ul class="options">
          <li v-for="(option, i) in editDeckOptions" :key="`ed-opts-${i}`">
            <div v-if="option.header" class="py-2 mx-3">
              <h3 class="text-xs font-bold uppercase">{{ t(`${l10n}.${option.id}`) }}</h3>
            </div>
            <div v-else-if="option.divider" class="border-b hs-border mx-2 pb-2" />
            <div
              v-else
              class="option relative p-2 border-l-4 hover:bg-gradient-to-r from-gray-600 cursor-pointer"
              :class="isActive(i) ? 'active font-medium border-primary-500 bg-gradient-to-r' : 'border-transparent'"
              @click="setActive(i)"
            >
              <div class="ribbon-tail flex items-center overflow-hidden">
                <span class="mx-2 capitalize truncate">{{ t(`${l10n}.${option.id}`) }}</span>
              </div>
            </div>
          </li>
        </ul>
      </template>
      <template v-slot:leftcolfooter>
        <div class="px-2 text-red-500 font-bold">{{ t('danger_zone') }}</div>
      </template>

      <template v-slot:rightcolheader>
        <h3 class="font-bold text-xl uppercase mx-2">{{ t(`${l10n}.${editDeckOptions[activeIdx].id}`) }}</h3>
      </template>
      <div class="flex-1 overflow-y-scroll">
        <IndexForEditDeckCtrl :tabFor="editDeckOptions[activeIdx].id" :deck="editDeck" />
      </div>
    </Modal2ColumnLayout>
    <div v-else>Loading...</div>
  </ModalFullScreen>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

import ModalFullScreen from '@/components/ModalFullScreen.vue';
import Modal2ColumnLayout from '@/components/Modal2ColumnLayout.vue';
import IndexForEditDeckCtrl from '@/components/decks/settings/IndexForEditDeckCtrl.vue';
import { useStore } from '@/store';
import AllMutationTypes from '@/store/mutation-types';

export default defineComponent({
  name: 'EditDeckModal',
  components: { ModalFullScreen, Modal2ColumnLayout, IndexForEditDeckCtrl },
  props: {
    deckId: {
      type: String,
      //required: true,
    },
  },
  setup: (props) => {
    const { t } = useI18n();
    const l10n = 'decks.settings.EditDeckModal';

    const store = useStore();
    const editDeck = ref(store.getters.getDeckById(props.deckId));
    watch(
      () => props.deckId,
      (deckId) => {
        editDeck.value = store.getters.getDeckById(deckId);
      },
      { immediate: true }
    );

    const editDeckOptions = [
      { divider: true },
      { id: 'deck_management', header: 'Deck Management' },
      { id: 'overview', name: 'Overview' },
      { id: 'authorization', name: 'Authorization' },
      { id: 'captains_log', name: "Captain's Log", description: 'Audit Logs' },
      { id: 'roles', name: 'Roles', description: 'Cmd Crew' },
      { id: 'widgets', name: 'Widgets', description: 'widgets' },
      { id: 'subroutines', name: 'Subroutines', description: 'Webhooks' },

      { divider: true },
      { id: 'crew_management', header: 'Crew Management' },
      { id: 'crew', name: 'Crew' },
      { id: 'holokeys', name: 'HoloKeys' },
      { id: 'bans', name: 'Bans' },
    ];

    const activeIdx = ref(2);
    const isActive = (index: number) => {
      return index === activeIdx.value;
    };
    const setActive = (index: number) => {
      activeIdx.value = index;
    };

    const showModal = computed(() => store.state.decks.showEditDeckModal);

    const closeModal = () => {
      store.commit(AllMutationTypes.SET_EDIT_Deck_MODAL, {
        isOpen: false,
        deckId: undefined,
      });
    };

    return {
      t,
      l10n,
      editDeck,
      editDeckOptions,
      showModal,
      closeModal,
      isActive,
      setActive,
      activeIdx,
    };
  },
});
</script>

<style lang="postcss" scoped>
.option:hover {
  border-color: var(--hs-primary);
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.option.active > .ribbon-tail:before {
  width: 2.5rem;
  background: rgba(235, 235, 235, 0.1);
}
</style>
