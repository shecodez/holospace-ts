import { ref, watch } from 'vue';

import { getHashCode, intToHSL } from '@/utils';

export function useHashColor(str: string) {
  const color = ref('var(--hs-primary)');
  
  watch(
    () => str,
    (str) => {
      if (str.length) {
        color.value = intToHSL(getHashCode(str));
      } else {
        color.value = 'var(--hs-primary)';
      }
    }, { immediate: true }
  );

  return color.value
}
