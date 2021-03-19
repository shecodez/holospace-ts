<template>
  <h1>{{ msg }}</h1>
  <div>counter: {{ counter }}</div>
  <div>doubledCounter: {{ doubledCounter }}</div>
  <button class="btn" @click="getCounter">Increment Counter</button>
  <div>
    <button class="btn" @click="resetCounter">Reset Counter</button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '../store';
import AllMutationTypes from '../store/mutation-types';
import AllActionTypes from '../store/action-types';

export default defineComponent({
  name: 'HelloWorld',
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
  setup: (props) => {
    const store = useStore();
    const counter = computed(() => store.getters.counterValue);
    const doubledCounter = computed(() => store.getters.doubledCounter);
    function resetCounter() {
      store.commit(AllMutationTypes.RESET_COUNTER);
    }

    async function getCounter() {
      await store.dispatch(AllActionTypes.GET_COUNTER, 100);
    }

    return {
      counter,
      doubledCounter,
      getCounter,
      resetCounter,
    };
  },
});
</script>

<style scoped></style>
