import { Capacitor } from '@capacitor/core';
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { Browser } from '@capacitor/browser';

// ============================================
// RevenueCat Configuration
// ============================================
const BILLING_CONFIG = {
  // RevenueCat Public API Key (Android)
  revenueCatApiKey: 'goog_uNzZhuaPXvvBSjOxFithxuQVYvb',
  
  // Entitlement ID (set up in RevenueCat)
  entitlementId: 'pro',
  
  // Offering identifier (optional, uses "current" if not set)
  offeringId: 'default',
  
  // Package identifier for one-time purchase
  packageId: '$rc_lifetime',
  
  // Price display
  price: '$4.99',
  priceDE: '4,99€',
};

export interface PurchaseResult {
  success: boolean;
  error?: string;
  pending?: boolean; // For offline/retry scenarios
}

// Safeguard flag to prevent multiple SDK initializations
let isInitialized = false;

// Initialize billing - call this on app start
export async function initializeBilling(): Promise<void> {
  // Prevent double initialization
  if (isInitialized) {
    return;
  }

  const isNative = Capacitor.isNativePlatform();

  if (!isNative) {
    return;
  }

  try {
    await Purchases.configure({
      apiKey: BILLING_CONFIG.revenueCatApiKey,
    });
    
    // Set log level to ERROR for production
    await Purchases.setLogLevel({ level: LOG_LEVEL.ERROR });

    // Check initial status
    const info = await Purchases.getCustomerInfo();
    
    isInitialized = true;
  } catch (error) {
    console.error('Billing: Failed to initialize', error);
  }
}

// Purchase Pro version
export async function purchasePro(): Promise<PurchaseResult> {
  const isNative = Capacitor.isNativePlatform();

  if (!isNative) {
    // Web: Purchase not available - must use native app
    return { success: false, error: 'Purchase only available in the app' };
  }

  try {
    // Get available packages
    const offerings = await Purchases.getOfferings();
    
    if (!offerings.current) {
      return { success: false, error: 'No offerings available' };
    }

    // Find the Pro package (lifetime)
    const proPackage = offerings.current.lifetime || 
      offerings.current.availablePackages.find(
        pkg => pkg.identifier === BILLING_CONFIG.packageId
      );

    if (!proPackage) {
      return { success: false, error: 'Pro package not found' };
    }

    // Make the purchase

    const result = await Purchases.purchasePackage({
      aPackage: proPackage,
    });


    // Check if Pro entitlement is now active
    const entitlements = result.customerInfo.entitlements.active;
    if (entitlements && entitlements[BILLING_CONFIG.entitlementId]) {

      return { success: true };
    }

    return { success: false, error: 'Purchase not completed' };
  } catch (error: any) {
    console.error('Billing: Purchase failed', error);
    
    // Handle user cancellation
    if (error.userCancelled) {
      return { success: false, error: 'cancelled' };
    }
    
    return { success: false, error: error.message || 'Purchase failed' };
  }
}

// Check if user has Pro entitlement
export async function checkProStatus(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Web: check localStorage
    return localStorage.getItem('lid-is-pro') === 'true';
  }

  try {
    const { customerInfo } = await Purchases.getCustomerInfo();
    const entitlements = customerInfo.entitlements.active;
    
    return !!(entitlements && entitlements[BILLING_CONFIG.entitlementId]);
  } catch (error) {
    console.error('Billing: Failed to check status', error);
    return false;
  }
}

// Restore purchases (for users who reinstall)
// Includes retry logic for offline scenarios
export async function restorePurchases(retryCount = 0): Promise<PurchaseResult> {
  const MAX_RETRIES = 2;
  
  if (!Capacitor.isNativePlatform()) {
    return { success: false, error: 'Not available on web' };
  }

  try {
    const { customerInfo } = await Purchases.restorePurchases();
    const entitlements = customerInfo.entitlements.active;
    
    if (entitlements && entitlements[BILLING_CONFIG.entitlementId]) {
      return { success: true };
    }
    
    return { success: false, error: 'No previous purchase found' };
  } catch (error: any) {
    console.error('Billing: Restore failed', error);
    
    // Check if it's a network error and we should retry
    const isNetworkError = error.message?.includes('network') || 
                           error.message?.includes('offline') ||
                           error.code === 'NETWORK_ERROR';
    
    if (isNetworkError && retryCount < MAX_RETRIES) {
      // Wait 2 seconds before retry
      await new Promise(resolve => setTimeout(resolve, 2000));
      return restorePurchases(retryCount + 1);
    }
    
    return { 
      success: false, 
      error: isNetworkError ? 'Please check your internet connection' : (error.message || 'Restore failed'),
      pending: isNetworkError
    };
  }
}

// Check if running on Android
export function isAndroidPlatform(): boolean {
  return Capacitor.getPlatform() === 'android';
}

// Redeem promo code via Google Play
export async function redeemPromoCode(code?: string): Promise<void> {
  const baseUrl = 'https://play.google.com/redeem';
  const url = code?.trim() ? `${baseUrl}?code=${encodeURIComponent(code.trim())}` : baseUrl;
  
  if (Capacitor.isNativePlatform()) {
    try {
      await Browser.open({ url });
    } catch (error) {
      console.error('Billing: Failed to open browser', error);
      // Fallback to window.open
      window.open(url, '_blank');
    }
  } else {
    window.open(url, '_blank');
  }
}

export { BILLING_CONFIG };
