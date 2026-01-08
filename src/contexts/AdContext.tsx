import React, { createContext, useContext, useState, useCallback, ReactNode, useEffect } from 'react';
import { AdMob, RewardAdPluginEvents, AdMobRewardItem } from '@capacitor-community/admob';
import { Capacitor } from '@capacitor/core';
import { checkProStatus } from '@/lib/billing';

interface AdContextType {
  isPro: boolean;
  setPro: (value: boolean) => void;
  adUnitIds: {
    interstitial: string;
    rewarded: string;
  };
  showInterstitial: boolean;
  triggerInterstitial: () => Promise<void>;
  closeInterstitial: () => void;
  showRewarded: boolean;
  rewardedCallback: (() => void) | null;
  triggerRewardedAd: (onReward: () => void) => Promise<void>;
  closeRewardedAd: (claimed: boolean) => void;
  lastInterstitialTime: number;
  canShowInterstitial: () => boolean;
}

const AdContext = createContext<AdContextType | undefined>(undefined);

// ============================================
// AdMob Configuration for Deutsch A1 Meister
// ============================================
// TODO: Replace with actual AdMob ad unit IDs after creating them
// Steps:
// 1. Go to https://admob.google.com
// 2. Create new app "Deutsch A1 Meister" (Android, com.nurulgofran.deutscha1meister)
// 3. Create Interstitial ad unit
// 4. Create Rewarded ad unit
// 5. Copy the ad unit IDs here

const AD_UNIT_IDS = {
  // PLACEHOLDERS - Replace after setting up AdMob
  // Format: ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY
  interstitial: 'ca-app-pub-4236881254988952/PLACEHOLDER_INTERSTITIAL',
  rewarded: 'ca-app-pub-4236881254988952/PLACEHOLDER_REWARDED',
};

// Set to false for production builds
const IS_TESTING = import.meta.env.DEV;

// Cooldown between interstitial ads (10 minutes)
const INTERSTITIAL_COOLDOWN = 10 * 60 * 1000;

export function AdProvider({ children }: { children: ReactNode }) {
  // Pro status is verified via RevenueCat on app launch
  const [isPro, setIsPro] = useState(() => {
    const saved = localStorage.getItem('a1m-is-pro');
    return saved === 'true';
  });
  
  // UI state for ads
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showRewarded, setShowRewarded] = useState(false);
  const [rewardedCallback, setRewardedCallback] = useState<(() => void) | null>(null);
  const [lastInterstitialTime, setLastInterstitialTime] = useState(0);

  useEffect(() => {
    const initAdMob = async () => {
      if (!Capacitor.isNativePlatform()) return;
      
      // Skip if placeholders
      if (AD_UNIT_IDS.interstitial.includes('PLACEHOLDER')) {
        console.warn('AdMob: Ad unit IDs not configured');
        return;
      }
      
      try {
        // 1. Initialize AdMob
        await AdMob.initialize({
          initializeForTesting: IS_TESTING,
        });
        
        // 2. Request consent info for GDPR (EEA/UK)
        const consentInfo = await AdMob.requestConsentInfo();
        
        // 3. Show consent form if required and available
        if (consentInfo.isConsentFormAvailable && !consentInfo.canRequestAds) {
          await AdMob.showConsentForm();
        }
      } catch (error) {
        console.error('AdMob init error', error);
      }
    };
    initAdMob();
  }, []);

  // Sync pro status from RevenueCat on app startup
  useEffect(() => {
    const syncProStatus = async () => {
      try {
        const hasPro = await checkProStatus();
        setIsPro(hasPro);
        localStorage.setItem('a1m-is-pro', hasPro.toString());
      } catch (error) {
        console.error('Failed to sync pro status', error);
      }
    };
    syncProStatus();
  }, []);

  const setPro = useCallback((value: boolean) => {
    setIsPro(value);
    localStorage.setItem('a1m-is-pro', value.toString());
  }, []);

  const canShowInterstitial = useCallback(() => {
    if (isPro) return false;
    if (AD_UNIT_IDS.interstitial.includes('PLACEHOLDER')) return false;
    const now = Date.now();
    return now - lastInterstitialTime >= INTERSTITIAL_COOLDOWN;
  }, [isPro, lastInterstitialTime]);

  const triggerInterstitial = useCallback(async () => {
    if (isPro) return;
    if (!canShowInterstitial()) return;

    if (Capacitor.isNativePlatform() && !AD_UNIT_IDS.interstitial.includes('PLACEHOLDER')) {
      try {
        await AdMob.prepareInterstitial({
          adId: AD_UNIT_IDS.interstitial,
          isTesting: IS_TESTING,
        });
        await AdMob.showInterstitial();
        setLastInterstitialTime(Date.now());
      } catch (error) {
        console.error('Interstitial failed', error);
      }
    }
  }, [isPro, canShowInterstitial]);

  const closeInterstitial = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  // Helper to handle the reward event
  useEffect(() => {
    let handler: any; 

    const setupListener = async () => {
      if (Capacitor.isNativePlatform() && !AD_UNIT_IDS.rewarded.includes('PLACEHOLDER')) {
        handler = await AdMob.addListener(RewardAdPluginEvents.Rewarded, (item: AdMobRewardItem) => {
          setRewardedCallback(prevCallback => {
            if (prevCallback) {
              prevCallback();
              return null;
            }
            return prevCallback;
          });
        });
      }
    };
    
    setupListener();

    return () => {
      if (handler) {
        handler.remove();
      }
    };
  }, []);

  const triggerRewardedAd = useCallback(async (onReward: () => void) => {
    if (isPro) {
      onReward();
      return;
    }
    
    setRewardedCallback(() => onReward);

    if (Capacitor.isNativePlatform() && !AD_UNIT_IDS.rewarded.includes('PLACEHOLDER')) {
      try {
        await AdMob.prepareRewardVideoAd({
          adId: AD_UNIT_IDS.rewarded,
          isTesting: IS_TESTING,
        });
        await AdMob.showRewardVideoAd();
      } catch (error) {
        console.error('Rewarded ad failed', error);
        setRewardedCallback(null); 
      }
    }
  }, [isPro]);

  const closeRewardedAd = useCallback((claimed: boolean) => {
    setShowRewarded(false);
    if (claimed && rewardedCallback) {
      rewardedCallback();
    }
    setRewardedCallback(null);
  }, [rewardedCallback]);

  return (
    <AdContext.Provider
      value={{
        isPro,
        setPro,
        adUnitIds: AD_UNIT_IDS,
        showInterstitial,
        triggerInterstitial,
        closeInterstitial,
        showRewarded,
        rewardedCallback,
        triggerRewardedAd,
        closeRewardedAd,
        lastInterstitialTime,
        canShowInterstitial,
      }}
    >
      {children}
    </AdContext.Provider>
  );
}

export function useAds() {
  const context = useContext(AdContext);
  if (context === undefined) {
    throw new Error('useAds must be used within an AdProvider');
  }
  return context;
}
