import { watch, unref, onUnmounted, defineComponent } from "vue";
//import { MaybeRef } from '@vueuse/shared'

type VueInstance = InstanceType<ReturnType<typeof defineComponent>>;
type MaybeElementRef = MaybeRef<Element | VueInstance | undefined | null>;

/**
 * Get the dom element of a ref of element or Vue component instance
 *
 * @param elRef
 */
function unrefElement(elRef: MaybeElementRef) {
  const plain = unref(elRef);
  return (plain as VueInstance)?.$el ?? plain;
}

const EVENTS = ["mousedown", "touchstart", "pointerdown"] as const;
type EventType = WindowEventMap[typeof EVENTS[number]];

/**
 * Listen for clicks outside of an element.
 *
 * @param target
 * @param handler
 * @param options
 */
function useEventListener(...args: any[]) {
  let target: MaybeRef<EventTarget> | undefined;
  let event: string;
  let listener: any;
  let options: any;

  [target, event, listener, options] = args;

  if (!target) return;

  let cleanup = () => {}; //noop

  watch(
    () => unref(target),
    (el) => {
      cleanup();
      if (!el) return;

      el.addEventListener(event, listener, options);

      cleanup = () => {
        el.removeEventListener(event, listener, options);
        cleanup = () => {}; //noop
      };
    },
    { immediate: true }
  );

  onUnmounted(stop);

  return stop;
}

export default function useClickOutside() {
  function onClickOutside(
    target: MaybeElementRef,
    callback: (evt: EventType) => void
  ) {
    const listener = (event: EventType) => {
      const el = unrefElement(target);
      if (!el) return;

      if (el === event.target || event.composedPath().includes(el)) return;

      callback(event);
    };

    let disposables = EVENTS.map((event) =>
      useEventListener(window, event, listener, { passive: true })
    );

    const stop = () => {
      disposables.forEach((stop) => stop());
      disposables = [];
    };

    onUnmounted(stop);

    return stop;
  }
  return {
    onClickOutside,
  };
}
