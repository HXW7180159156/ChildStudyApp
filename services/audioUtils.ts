/**
 * Decodes base64 string to Uint8Array.
 */
export function decodeBase64(base64: string): Uint8Array {
  const binaryString = atob(base64);
  const len = binaryString.length;
  const bytes = new Uint8Array(len);
  for (let i = 0; i < len; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return bytes;
}

/**
 * Decodes PCM data into an AudioBuffer.
 */
export async function decodeAudioData(
  data: Uint8Array,
  ctx: AudioContext,
  sampleRate: number = 24000,
  numChannels: number = 1
): Promise<AudioBuffer> {
  const dataInt16 = new Int16Array(data.buffer);
  const frameCount = dataInt16.length / numChannels;
  const buffer = ctx.createBuffer(numChannels, frameCount, sampleRate);

  for (let channel = 0; channel < numChannels; channel++) {
    const channelData = buffer.getChannelData(channel);
    for (let i = 0; i < frameCount; i++) {
      channelData[i] = dataInt16[i * numChannels + channel] / 32768.0;
    }
  }
  return buffer;
}

/**
 * Encodes a Uint8Array as a base64 string.
 */
export function encodeBase64(bytes: Uint8Array): string {
  let binary = '';
  const chunk = 0x8000;
  for (let i = 0; i < bytes.length; i += chunk) {
    binary += String.fromCharCode(...bytes.subarray(i, i + chunk));
  }
  return btoa(binary);
}

/**
 * Decodes a base64 PCM blob into an AudioBuffer using the supplied context.
 */
export async function audioBufferFromBase64(
  base64: string,
  ctx: AudioContext,
  sampleRate = 24000,
  numChannels = 1,
): Promise<AudioBuffer> {
  const bytes = decodeBase64(base64);
  return decodeAudioData(bytes, ctx, sampleRate, numChannels);
}

/**
 * Plays an audio buffer.
 */
export function playAudioBuffer(buffer: AudioBuffer, ctx: AudioContext) {
  if (ctx.state === 'suspended') {
    // Best-effort resume for mobile/Safari.
    ctx.resume().catch(() => undefined);
  }
  const source = ctx.createBufferSource();
  source.buffer = buffer;
  source.connect(ctx.destination);
  source.start();
}
