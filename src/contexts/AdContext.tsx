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
// AdMob Production Configuration
// ============================================
const AD_UNIT_IDS = {
  interstitial: 'ca-app-pub-4236881254988952/1536678955',
  rewarded: 'ca-app-pub-4236881254988952/1262165026',
};

// Set to false for production builds
const IS_TESTING = import.meta.env.DEV;

const INTERSTITIAL_COOLDOWN = 10 * 60 * 1000;

export function AdProvider({ children }: { children: ReactNode }) {
  // Pro status is verified via RevenueCat on app launch - not stored in plain localStorage
  // This is just the UI state, actual entitlement is checked via billing
  const [isPro, setIsPro] = useState(() => {
    const saved = localStorage.getItem('lid-is-pro');
    return saved === 'true';
  });
  
  // These are mainly for UI state if needed, but AdMob handles its own views
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showRewarded, setShowRewarded] = useState(false);
  const [rewardedCallback, setRewardedCallback] = useState<(() => void) | null>(null);
  const [lastInterstitialTime, setLastInterstitialTime] = useState(0);

  useEffect(() => {
    const initAdMob = async () => {
      if (!Capacitor.isNativePlatform()) return;
      
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
        if (hasPro) {
          setIsPro(true);
          localStorage.setItem('lid-is-pro', 'true');
        }
      } catch (error) {
        console.error('Failed to sync pro status', error);
      }
    };
    syncProStatus();
  }, []);

  const setPro = useCallback((value: boolean) => {
    setIsPro(value);
    localStorage.setItem('lid-is-pro', value.toString());
  }, []);

  const canShowInterstitial = useCallback(() => {
    if (isPro) return false;
    const now = Date.now();
    return now - lastInterstitialTime >= INTERSTITIAL_COOLDOWN;
  }, [isPro, lastInterstitialTime]);

  const triggerInterstitial = useCallback(async () => {
    if (isPro) return;
    if (!canShowInterstitial()) return;

    if (Capacitor.isNativePlatform()) {
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
    // No web fallback - ads only work on native
  }, [isPro, canShowInterstitial]);

  const closeInterstitial = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  // Helper to handle the reward event
  useEffect(() => {
    let handler: any; 

    const setupListener = async () => {
      // Only set up listener on native
      if (Capacitor.isNativePlatform()) {
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
  }, []); // Remove dependency on rewardedCallback to avoid re-binding

  const triggerRewardedAd = useCallback(async (onReward: () => void) => {
    if (isPro) {
      onReward();
      return;
    }
    
    setRewardedCallback(() => onReward);

    if (Capacitor.isNativePlatform()) {
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
    // No web fallback - ads only work on native
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
