import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.nurulgofran.deutscha1meister',
  appName: 'Deutsch A1 Meister',
  webDir: 'dist',

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#FAF8F5',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark',
      backgroundColor: '#FAF8F5'
    },
    Haptics: {
      // Enable haptic feedback
    }
  }
};

export default config;
