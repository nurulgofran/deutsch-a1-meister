import { useAds } from '@/contexts/AdContext';
import { cn } from '@/lib/utils';

interface BannerAdProps {
  className?: string;
}

export function BannerAd({ className }: BannerAdProps) {
  const { isPro, adUnitIds } = useAds();

  if (isPro) return null;

  return (
    <div 
      id="banner-ad-container"
      data-ad-unit-id={adUnitIds.banner}
      className={cn(
        "w-full h-16 rounded-2xl border-2 border-dashed border-border/50",
        "bg-gradient-to-r from-muted/30 via-muted/50 to-muted/30",
        "flex items-center justify-center overflow-hidden relative",
        className
      )}
    >
      <div className="absolute inset-0 bg-shimmer bg-[length:200%_100%] animate-shimmer opacity-30" />
      <span className="text-xs text-muted-foreground font-medium relative z-10">
        Ad Space
      </span>
    </div>
  );
}
