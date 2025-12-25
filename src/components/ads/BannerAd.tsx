import { useAds } from '@/contexts/AdContext';
import { cn } from '@/lib/utils';

interface BannerAdProps {
  className?: string;
}

export function BannerAd({ className }: BannerAdProps) {
  const { isPro, adUnitIds } = useAds();

  // Don't show ads for Pro users
  if (isPro) return null;

  return (
    <div 
      id="banner-ad-container"
      data-ad-unit-id={adUnitIds.banner}
      className={cn(
        "w-full h-16 rounded-2xl border-2 border-dashed border-border/50",
        "bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30",
        "flex items-center justify-center",
        "overflow-hidden relative",
        className
      )}
    >
      {/* Shimmer effect for placeholder */}
      <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
      
      {/* Placeholder content - Replace with actual ad code */}
      <div className="relative z-10 text-center">
        <span className="text-xs text-muted-foreground font-medium">
          Ad Space • {adUnitIds.banner}
        </span>
      </div>

      {/* 
        INTEGRATION INSTRUCTIONS:
        Replace this placeholder with your actual ad code.
        
        For Google AdSense:
        <ins className="adsbygoogle"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
          data-ad-slot={adUnitIds.banner}
          data-ad-format="auto"
          data-full-width-responsive="true"
        />
        
        For AdMob (React Native/Capacitor):
        Use @capacitor-community/admob plugin
      */}
    </div>
  );
}
