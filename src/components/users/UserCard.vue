<template>
  <div class="absolute user-card overflow-hidden" :class="isOpen ? 'flex' : 'hidden'">
    <div ref="card" class="bg-gray-200 dark:bg-gray-700 text-black dark:text-white max-w-sm rounded py-2 px-4">
      <div class="flex items-center space-x-4">
        <UserAvatar v-bind="user" size="16" />
        <span class="truncate text-3xl">
          {{ user.name }}<span class="text-xs text-gray-400">#{{ user.pin }}</span>
          <p class="text-xs text-right">{{ t(`${l10n}.joined`) }}: {{ d(membershipCreatedAt, 'short') }}</p>
        </span>
      </div>

      <div class="grid grid-flow-col grid-cols-2 gap-4 my-4">
        <div>
          <i-mdi-shield-half-full class="inline mr-1" />
          <span>{{ t(`${l10n}.role`) }}</span>
          <p>badges go here</p>
        </div>
        <div>
          <i-mdi:note-outline class="inline mr-1" />
          <span>{{ t(`${l10n}.note`) }}</span>
          <p>user notes go here</p>
        </div>
      </div>

      <div class="actions">
        <button class="px-2 py-1">
          <span class="font-medium uppercase mr-2">IM</span>
          <i-fa-paper-plane class="inline text-primary-500" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from 'vue-i18n';

import UserAvatar from './UserAvatar.vue';

export default defineComponent({
  components: { UserAvatar },
  name: 'UserCard',
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    user: {
      type: Object,
      required: true,
    },
  },
  setup: () => {
    const { t, d } = useI18n();
    const l10n = 'users.UserCard';

    const membershipCreatedAt = new Date(2018, 5, 7); // store.getters.membershipByUserId(userId)

    return { t, d, l10n, membershipCreatedAt };
  },
});
</script>

<style scoped>
.user-card::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: -90%;
  transform: skewY(-15deg);
}
</style>
