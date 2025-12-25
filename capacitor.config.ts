import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e20f80eb56fd4cd481ee98fa23f39d92',
  appName: 'Leben in Deutschland',
  webDir: 'dist',

  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      // Match app background color (--background: 45 30% 97% in HSL = #FAF8F5)
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
