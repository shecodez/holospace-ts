import { usePermission } from '@vueuse/core';

import useDevice from '@/use/device';

export function useMicrophone() {
  const { device, devices, error } = useDevice('audioinput')
  const microphoneAccess = usePermission('microphone')

  return {
    microphone : device,
    microphones: devices,
    microphoneError: error,
    microphoneAccess
  };
}
