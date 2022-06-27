import { NativeModules, Platform } from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-clock' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo managed workflow\n';

const Clock = NativeModules.Clock
  ? NativeModules.Clock
  : new Proxy(
      {},
      {
        get() {
          throw new Error(LINKING_ERROR);
        },
      }
    );

export function multiply(a: number, b: number): Promise<number> {
  return Clock.multiply(a, b);
}

export function isTimeAutomatic(): Promise<number> {
  return Clock.isTimeAutomatic();
}

export function isBluetoothEnabled(): Promise<boolean> {
  return Clock.isBluetoothEnabled();
}
