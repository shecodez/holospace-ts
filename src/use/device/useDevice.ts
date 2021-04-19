import { ref, onMounted, onUnmounted } from 'vue';

export function useDevice(kind: MediaDeviceKind) {
  const device = ref('');
  const devices = ref<MediaDeviceInfo[]>([]);
  const error = ref('');

  async function getConnectedDevices() {
    const constaints: MediaStreamConstraints = {};

    if (kind === 'audioinput' || kind === 'audiooutput') constaints.audio = true;
    if (kind === 'videoinput') constaints.video = true;

    // ensure user has granted access to the device
    try {
      error.value = '';
      await navigator.mediaDevices.getUserMedia(constaints);
    } catch (err) {
      error.value = err;
      return;
    }

    navigator.mediaDevices
      .enumerateDevices()
      .then((data) => {
        const _devices = data.filter((device) => device.kind === kind);
        devices.value = _devices;

        if (devices.value.length > 0) {
          device.value = devices.value[0].deviceId;
        }
      })
      .catch((err) => {
        error.value = err; // err.name, err.message
        console.error(err);
      });
  }

  // async function startCapture(constraints: MediaStreamConstraints) {
  //   let captureStream = null;

  //   try {
  //     captureStream = await navigator.mediaDevices.getUserMedia(constraints);
  //   } catch (err) {
  //     // captureError.value = err
  //     console.error(err);
  //   }

  //   return captureStream;
  // }

  onMounted(() => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.addEventListener('devicechange', getConnectedDevices);
      getConnectedDevices();
    }
  });

  onUnmounted(() => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.removeEventListener('devicechange', getConnectedDevices);
    }
  });

  return {
    device,
    devices,
    error,
  };
}
