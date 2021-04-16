import useDevice from '@/use/device';

export function useSpeaker() {
  const { device, devices, error } = useDevice('audiooutput')

  return {
    speaker : device,
    speakers: devices,
    speakerError: error,
  };
}
