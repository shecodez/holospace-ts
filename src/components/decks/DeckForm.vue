<template>
  <form>
    <input v-model="deck.name" type="text" class="rounded text-pink-500" />
    <input v-model="deck.avatarUrl" type="text" class="rounded text-pink-500" />

    <!-- <button v-if="isEdit" :disabled="!valid" @click="submitUpdateDeck">
      Update Deck
    </button> -->
    <button :disabled="!valid" @click="submitAddNewDeck">Add Deck</button>
  </form>
</template>

<script lang="ts">
import { ref, defineComponent, reactive } from 'vue';
//import { Deck } from '../../store/interfaces';

export default defineComponent({
  name: 'DeckForm',
  //   props: {
  //     deck: {
  //       type: Object,
  //       required: false,
  //     },
  //   },
  setup: (props) => {
    const deck = reactive({ name: '', avatarUrl: '' });
    const valid = ref(true);

    const submitAddNewDeck = () => {
      console.log(`DeckForm.vue > submitAddNewDeck ${deck.name}`);
    };

    const submitUpdateDeck = () => {
      console.log(`DeckForm.vue > submitUpdateDeck ${deck.avatarUrl}`);
    };

    return {
      deck,
      valid,
      submitAddNewDeck,
      submitUpdateDeck,
    };
  },
});
</script>

<style>
input {
  display: block;
}
</style>
