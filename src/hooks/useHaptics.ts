import { Capacitor } from '@capacitor/core';
import { Haptics, ImpactStyle, NotificationType } from '@capacitor/haptics';

export function useHaptics() {
  const isNative = Capacitor.isNativePlatform();

  const impact = async (style: ImpactStyle = ImpactStyle.Medium) => {
    if (!isNative) return;
    try {
      await Haptics.impact({ style });
    } catch (error) {
      console.error('Haptics impact error:', error);
    }
  };

  const notification = async (type: NotificationType = NotificationType.Success) => {
    if (!isNative) return;
    try {
      await Haptics.notification({ type });
    } catch (error) {
      console.error('Haptics notification error:', error);
    }
  };

  const selection = async () => {
    if (!isNative) return;
    try {
      await Haptics.selectionStart();
      await Haptics.selectionChanged();
      await Haptics.selectionEnd();
    } catch (error) {
      console.error('Haptics selection error:', error);
    }
  };

  const vibrate = async (duration: number = 100) => {
    if (!isNative) return;
    try {
      await Haptics.vibrate({ duration });
    } catch (error) {
      console.error('Haptics vibrate error:', error);
    }
  };

  return {
    impact,
    notification,
    selection,
    vibrate,
    ImpactStyle,
    NotificationType
  };
}
