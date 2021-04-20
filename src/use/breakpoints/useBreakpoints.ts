import { computed, onMounted, onUnmounted, ref } from 'vue';

export function useBreakpoints() {
  let windowWidth = ref(window.innerWidth);

  const onWidthChange = () => (windowWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener('resize', onWidthChange));
  onUnmounted(() => window.removeEventListener('resize', onWidthChange));

  const SCREEN = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  };
  const size = computed(() => {
    if (windowWidth.value < SCREEN.sm) return 'sm';
    if (windowWidth.value > SCREEN.sm && windowWidth.value < SCREEN.md) return 'md';
    if (windowWidth.value > SCREEN.md && windowWidth.value < SCREEN.lg) return 'lg';
    if (windowWidth.value > SCREEN.xl) return 'xl';
  });

  const width = computed(() => windowWidth.value);

  return { width, size, SCREEN };
}
