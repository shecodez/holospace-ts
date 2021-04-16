import { usePermission } from '@vueuse/core';

import useDevice from '@/use/device';

export function useCamera() {
  const { device, devices, error } = useDevice('videoinput')
  const cameraAccess = usePermission('camera')

  return {
    camera : device,
    cameras: devices,
    cameraError: error,
    cameraAccess
  };
}
