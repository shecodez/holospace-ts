<template>
  <div class="bg-gray-300 dark:bg-gray-700 h-14">
    <div class="flex items-center h-full mx-4">
      <span v-if="deck" class="truncate flex-grow mr-2 font-medium text-base">{{ deck.name }}</span>

      <Popper placement="bottom">
        <template v-slot:activator>
          <button class="p-2 rounded-full">
            <i-mdi-chevron-down />
            <span class="sr-only">Active Deck Menu</span>
          </button>
        </template>
        <ActiveDeckMenu />
      </Popper>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import { useStore } from '@/store';
import Popper from '@/components/Popper.vue';
import ActiveDeckMenu from './ActiveDeckMenu.vue';

export default defineComponent({
  components: { Popper, ActiveDeckMenu },
  name: 'ActiveDeck',
  setup() {
    const { t } = useI18n();

    const store = useStore();

    const deck = computed(() => store.state.decks.activeDeck);

    // const setDropdown = () => {
    //   //store.commit(AllMutationTypes.SET_CREATE_Deck_MODAL, true);
    // };

    return {
      t,
      deck,
    };
  },
});
</script>
