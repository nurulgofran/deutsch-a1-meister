import { Capacitor } from '@capacitor/core';
import { Purchases, LOG_LEVEL } from '@revenuecat/purchases-capacitor';
import { Browser } from '@capacitor/browser';

// ============================================
// RevenueCat Configuration for Deutsch A1 Meister
// ============================================
// TODO: Replace with actual RevenueCat API key after creating the app in RevenueCat dashboard
// Steps:
// 1. Go to https://app.revenuecat.com
// 2. Create new project "Deutsch A1 Meister"
// 3. Add Android app with package ID: com.nurulgofran.deutscha1meister
// 4. Create entitlement "pro"
// 5. Create offering "default" with lifetime package
// 6. Create product with ID "deutscha1_lifetime_pro" in Google Play Console
// 7. Link product in RevenueCat
// 8. Copy Android Public API Key here

const BILLING_CONFIG = {
  // RevenueCat Public API Key (Android)
  // PLACEHOLDER - Replace after setting up RevenueCat project
  revenueCatApiKey: 'goog_REPLACE_WITH_YOUR_REVENUECAT_API_KEY',
  
  // Entitlement ID (set up in RevenueCat)
  entitlementId: 'pro',
  
  // Offering identifier (optional, uses "current" if not set)
  offeringId: 'default',
  
  // Package identifier for one-time purchase
  packageId: '$rc_lifetime',
  
  // Product ID in Google Play Console
  productId: 'deutscha1_lifetime_pro',
  
  // Price display (fallback if RevenueCat fails)
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

// Generate or retrieve a stable user ID for RevenueCat
function getOrCreateUserId(): string {
  const storageKey = 'a1m-revenuecat-user-id';
  let userId = localStorage.getItem(storageKey);
  
  if (!userId) {
    // Generate a UUID v4
    userId = 'a1m_' + crypto.randomUUID();
    localStorage.setItem(storageKey, userId);
  }
  
  return userId;
}

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

  // Skip if API key is placeholder
  if (BILLING_CONFIG.revenueCatApiKey.includes('REPLACE')) {
    console.warn('Billing: RevenueCat API key not configured');
    return;
  }

  try {
    // Get or create a stable user ID for consistent analytics
    const appUserID = getOrCreateUserId();
    
    await Purchases.configure({
      apiKey: BILLING_CONFIG.revenueCatApiKey,
      appUserID: appUserID,
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

// Get the Pro product price from RevenueCat (dynamic, matches Play Console)
export async function getProPrice(): Promise<string | null> {
  if (!Capacitor.isNativePlatform()) {
    return null;
  }

  // Return fallback if not configured
  if (BILLING_CONFIG.revenueCatApiKey.includes('REPLACE')) {
    return BILLING_CONFIG.price;
  }

  try {
    const offerings = await Purchases.getOfferings();
    
    if (!offerings.current) {
      return null;
    }

    // Find the Pro package (lifetime)
    const proPackage = offerings.current.lifetime || 
      offerings.current.availablePackages.find(
        pkg => pkg.identifier === BILLING_CONFIG.packageId
      );

    if (!proPackage) {
      return null;
    }

    // Return the localized price string from RevenueCat
    return proPackage.product.priceString;
  } catch (error) {
    console.error('Billing: Failed to get price', error);
    return null;
  }
}

// Purchase Pro version
export async function purchasePro(): Promise<PurchaseResult> {
  const isNative = Capacitor.isNativePlatform();

  if (!isNative) {
    // Web: Purchase not available - must use native app
    return { success: false, error: 'Purchase only available in the app' };
  }

  // Return error if not configured
  if (BILLING_CONFIG.revenueCatApiKey.includes('REPLACE')) {
    return { success: false, error: 'Billing not configured yet' };
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
    
    // Handle ITEM_ALREADY_OWNED - auto-trigger restore
    const isAlreadyOwned = error.code === 'ITEM_ALREADY_OWNED' || 
                           error.code === 6 || // Google Play ITEM_ALREADY_OWNED code
                           error.message?.toLowerCase().includes('already own') ||
                           error.message?.toLowerCase().includes('already purchased');
    
    if (isAlreadyOwned) {
      console.log('Billing: Item already owned, triggering restore');
      try {
        const restoreResult = await restorePurchases();
        if (restoreResult.success) {
          return { success: true };
        }
      } catch (restoreError) {
        console.error('Billing: Auto-restore failed', restoreError);
      }
      return { success: false, error: 'Item already owned. Please try "Restore Purchases".' };
    }
    
    return { success: false, error: error.message || 'Purchase failed' };
  }
}

// Check if user has Pro entitlement
export async function checkProStatus(): Promise<boolean> {
  if (!Capacitor.isNativePlatform()) {
    // Web: check localStorage
    return localStorage.getItem('a1m-is-pro') === 'true';
  }

  // Return cached status if not configured
  if (BILLING_CONFIG.revenueCatApiKey.includes('REPLACE')) {
    return localStorage.getItem('a1m-is-pro') === 'true';
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

  // Return error if not configured
  if (BILLING_CONFIG.revenueCatApiKey.includes('REPLACE')) {
    return { success: false, error: 'Billing not configured yet' };
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
