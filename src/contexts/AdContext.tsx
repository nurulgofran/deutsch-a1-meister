import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

interface AdContextType {
  isPro: boolean;
  setPro: (value: boolean) => void;
  // Ad unit IDs - replace these with your actual ad unit IDs
  adUnitIds: {
    banner: string;
    interstitial: string;
    rewarded: string;
  };
  // Interstitial ad control
  showInterstitial: boolean;
  triggerInterstitial: () => void;
  closeInterstitial: () => void;
  // Rewarded ad control
  showRewarded: boolean;
  rewardedCallback: (() => void) | null;
  triggerRewardedAd: (onReward: () => void) => void;
  closeRewardedAd: (claimed: boolean) => void;
  // Ad frequency control
  lastInterstitialTime: number;
  canShowInterstitial: () => boolean;
}

const AdContext = createContext<AdContextType | undefined>(undefined);

// Placeholder Ad Unit IDs - Replace with your actual IDs
const AD_UNIT_IDS = {
  banner: 'ca-app-pub-XXXXXXXXXXXXXXXX/YYYYYYYYYY',      // Banner ad unit
  interstitial: 'ca-app-pub-XXXXXXXXXXXXXXXX/ZZZZZZZZZZ', // Interstitial ad unit
  rewarded: 'ca-app-pub-XXXXXXXXXXXXXXXX/WWWWWWWWWW',     // Rewarded ad unit
};

// Minimum time between interstitial ads (10 minutes in ms)
const INTERSTITIAL_COOLDOWN = 10 * 60 * 1000;

export function AdProvider({ children }: { children: ReactNode }) {
  const [isPro, setIsPro] = useState(() => {
    const saved = localStorage.getItem('lid-is-pro');
    return saved === 'true';
  });
  
  const [showInterstitial, setShowInterstitial] = useState(false);
  const [showRewarded, setShowRewarded] = useState(false);
  const [rewardedCallback, setRewardedCallback] = useState<(() => void) | null>(null);
  const [lastInterstitialTime, setLastInterstitialTime] = useState(0);

  const setPro = useCallback((value: boolean) => {
    setIsPro(value);
    localStorage.setItem('lid-is-pro', value.toString());
  }, []);

  const canShowInterstitial = useCallback(() => {
    if (isPro) return false;
    const now = Date.now();
    return now - lastInterstitialTime >= INTERSTITIAL_COOLDOWN;
  }, [isPro, lastInterstitialTime]);

  const triggerInterstitial = useCallback(() => {
    if (isPro) return;
    if (!canShowInterstitial()) return;
    setShowInterstitial(true);
    setLastInterstitialTime(Date.now());
  }, [isPro, canShowInterstitial]);

  const closeInterstitial = useCallback(() => {
    setShowInterstitial(false);
  }, []);

  const triggerRewardedAd = useCallback((onReward: () => void) => {
    if (isPro) {
      // Pro users get reward without ad
      onReward();
      return;
    }
    setRewardedCallback(() => onReward);
    setShowRewarded(true);
  }, [isPro]);

  const closeRewardedAd = useCallback((claimed: boolean) => {
    if (claimed && rewardedCallback) {
      rewardedCallback();
    }
    setShowRewarded(false);
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
