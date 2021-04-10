<template>
  <div class="mx-6 p-4">
    <TextField v-model="name" label="Text Field 1" />
    <TextInput v-model="name" label="Text Input 1" />

    <TextField v-model="name" label="Text Field prepend" :max="64" required>
      <template v-slot:prepend>
        <i-mdi-turtle class="text-secondary-500" />
      </template>
    </TextField>

    <TextField v-model="name" label="Text Field append" :max="64" required>
      <template v-slot:append>
        <i-mdi-close class="text-red-500" />
      </template>
    </TextField>

    <TextField v-model="name" label="Text Field Error" error="There's an error">
      <template v-slot:append>
        <i-mdi-alert-circle class="text-error-500" />
      </template>
    </TextField>

    <TextField v-model="name" label="Text Field icons" :max="64" required>
      <template v-slot:prepend>
        <i-mdi-turtle class="text-secondary-500" />
      </template>
      <template v-slot:append>
        <i-mdi-close class="text-red-500" />
      </template>
    </TextField>

    <TextInput v-model="name" label="Text Input icons" :max="64" required preIcon postIcon>
      <template v-slot:preIcon>
        <i-mdi-turtle class="text-secondary-500" />
      </template>
      <template v-slot:postIcon>
        <i-mdi-close class="text-red-500" />
      </template>
    </TextInput>

    <PasswordField v-model="pass" label="Password Field" />
    <PasswordInput v-model="pass" label="Password Input" />

    <PasswordField v-model="pass" label="Password with strength meter" showMeter />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

import TextField from './TextField.vue';
import TextInput from '../TextInput.vue';
import PasswordField from './PasswordField.vue';
import PasswordInput from '../PasswordInput.vue';

export default defineComponent({
  components: { TextField, TextInput, PasswordField, PasswordInput },
  setup: () => {
    const name = ref('');
    const pass = ref('');

    return { name, pass };
  },
});
</script>
