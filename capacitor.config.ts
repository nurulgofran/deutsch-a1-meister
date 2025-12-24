import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.e20f80eb56fd4cd481ee98fa23f39d92',
  appName: 'Leben in Deutschland',
  webDir: 'dist',
  server: {
    url: 'https://e20f80eb-56fd-4cd4-81ee-98fa23f39d92.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#f5f7fa',
      showSpinner: false
    },
    StatusBar: {
      style: 'light',
      backgroundColor: '#f5f7fa'
    }
  }
};

export default config;
