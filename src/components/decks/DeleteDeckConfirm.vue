<template>
  <ModalConfirm :title="`Delete '${deckName}'`" :onClose="() => {}">
    <Alert severity="warning">
      <template v-slot:title>
        <h3 class="uppercase text-sm letter tracking-widest font-bold">Warning</h3>
      </template>
      <p class="text-xs text-gray-200">
        Are you sure want to delete
        <b class="text-base">{{ deckName }}</b
        >? This action is permanent and cannot be undone.
      </p>
    </Alert>

    <div class="mt-4">
      <TextField label="Enter Deck Name" />
    </div>

    <template v-slot:action>
      <button class="btn btn-danger bg-red-500">Delete Deck</button>
    </template>
  </ModalConfirm>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

import ModalConfirm from '../ModalConfirm.vue';
import Alert from '../alerts/Alert.vue';
import TextField from '../inputs/TextField.vue';

export default defineComponent({
  name: 'DeleteDeckModal',
  components: { ModalConfirm, Alert, TextField },
  props: {
    deckId: {
      type: String,
      required: true,
    },
    deckName: {
      type: String,
      required: true,
    },
  },
  setup: () => {},
});
</script>
