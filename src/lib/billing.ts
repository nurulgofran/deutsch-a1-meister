import { Capacitor } from '@capacitor/core';
import { CapacitorPurchases } from '@capgo/capacitor-purchases';

// Google Play Billing configuration
// REPLACE THESE WITH YOUR REAL VALUES IN VS CODE
const BILLING_CONFIG = {
  // RevenueCat API Key (get from RevenueCat dashboard)
  revenueCatApiKey: 'YOUR_REVENUECAT_API_KEY',
  
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
}

// Initialize billing - call this on app start
export async function initializeBilling(): Promise<void> {
  if (!Capacitor.isNativePlatform()) {
    console.log('Billing: Running on web, using mock mode');
    return;
  }

  try {
    await CapacitorPurchases.setup({
      apiKey: BILLING_CONFIG.revenueCatApiKey,
    });
    
    // Enable debug logs during development
    await CapacitorPurchases.setDebugLogsEnabled({ enabled: true });
    
    console.log('Billing: RevenueCat initialized successfully');
  } catch (error) {
    console.error('Billing: Failed to initialize', error);
  }
}

// Purchase Pro version
export async function purchasePro(): Promise<PurchaseResult> {
  if (!Capacitor.isNativePlatform()) {
    // Web fallback: simulate purchase for testing
    console.log('Billing: Web mock purchase');
    return { success: true };
  }

  try {
    // Get available packages
    const { offerings } = await CapacitorPurchases.getOfferings();
    
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
    const result = await CapacitorPurchases.purchasePackage({
      identifier: proPackage.identifier,
      offeringIdentifier: proPackage.offeringIdentifier,
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
    if (error.code === 1 || error.message?.includes('cancelled') || error.message?.includes('canceled')) {
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
    const { customerInfo } = await CapacitorPurchases.getCustomerInfo();
    const entitlements = customerInfo.entitlements.active;
    
    return !!(entitlements && entitlements[BILLING_CONFIG.entitlementId]);
  } catch (error) {
    console.error('Billing: Failed to check status', error);
    return false;
  }
}

// Restore purchases (for users who reinstall)
export async function restorePurchases(): Promise<PurchaseResult> {
  if (!Capacitor.isNativePlatform()) {
    return { success: false, error: 'Not available on web' };
  }

  try {
    const { customerInfo } = await CapacitorPurchases.restorePurchases();
    const entitlements = customerInfo.entitlements.active;
    
    if (entitlements && entitlements[BILLING_CONFIG.entitlementId]) {
      return { success: true };
    }
    
    return { success: false, error: 'No previous purchase found' };
  } catch (error: any) {
    console.error('Billing: Restore failed', error);
    return { success: false, error: error.message || 'Restore failed' };
  }
}

export { BILLING_CONFIG };
