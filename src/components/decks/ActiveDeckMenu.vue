<template>
  <Menu customize="max-w-sm">
    <ul class="py-2">
      <li v-for="(option, i) in menuOptions" :key="`adm-${i}`" @click="option.onClick">
        <div v-if="option.header" class="py-2 mx-3" :class="option.color">
          <h4 class="text-xs font-bold uppercase">{{ t(`${l10n}.${option.id}`) }}</h4>
        </div>
        <div v-else-if="option.divider" class="border-b hs-border mx-2 pb-2" :class="option.color" />
        <div v-else-if="option.disabled" class="py-2 px-3 text-gray-400">
          {{ t(`${l10n}.${option.id}`) }}
        </div>
        <div v-else class="py-2 px-3 hover:bg-gray-600 cursor-pointer" :class="option.color">
          {{ t(`${l10n}.${option.id}`) }}
        </div>
      </li>
    </ul>
  </Menu>
</template>

<script lang="ts">
import { computed, defineComponent, ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute } from 'vue-router';

import Menu from '@/components/Menu.vue';
import { useStore } from '@/store';
import { users } from '@/data/mock';
import AllActionTypes from '@/store/action-types';

export default defineComponent({
  name: 'ActiveDeckMenu',
  components: { Menu },
  setup: () => {
    const { t } = useI18n();
    const l10n = 'decks.ActiveDeckMenu';

    const store = useStore();

    const route = useRoute();

    const captainId = computed(() => store.getters.getActiveDeckCaptainId);
    const meId = computed(() => users[1].id);
    const isCaptain = ref();
    watch(
      () => captainId.value,
      (captainId) => {
        isCaptain.value = meId.value === captainId;
      },
      { immediate: true }
    );

    const setEditModal = () => {
      store.dispatch(AllActionTypes.SET_EDIT_Deck_MODAL, { isOpen: true, deckId: route.params.deckId });
    };

    const menuOptions = [
      { id: 'send_holokey', name: 'Send HoloKey' }, // if role canSendHolokey
      { id: 'contact_captain', name: 'Contact the Captain', disabled: isCaptain.value },
      { id: 'edit_deck', name: 'Edit Deck', onClick: setEditModal }, // role canEditDeck
      { id: 'edit_deck_crew', name: 'Edit Deck Crew' }, // role canEditDeckCrew
      { divider: true, color: 'border-red-500 border-opacity-30' },
      { id: 'danger_zone', header: 'Danger Zone', color: 'text-red-500' },
      { id: 'leave_deck', name: 'Leave this Deck', disabled: isCaptain.value }, // if isCaptain transfer Captaincy first
      { id: 'transfer_deck', name: 'Transfer Deck Captaincy', disabled: !isCaptain.value },
      { id: 'delete_deck', name: 'Delete this Deck' }, // role canDeleteDeck
    ];

    return { t, l10n, menuOptions };
  },
});
</script>
