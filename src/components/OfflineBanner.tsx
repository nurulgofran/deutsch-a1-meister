import { WifiOff } from 'lucide-react';
import { useOfflineDetection } from '@/hooks/useOfflineDetection';
import { cn } from '@/lib/utils';

export function OfflineBanner() {
  const { isOnline } = useOfflineDetection();

  if (isOnline) return null;

  return (
    <div className={cn(
      "fixed top-0 left-0 right-0 z-50 bg-warning/90 text-warning-foreground px-4 py-2",
      "flex items-center justify-center gap-2 text-sm font-medium",
      "animate-slide-up"
    )}>
      <WifiOff className="h-4 w-4" />
      <span>You're offline. All features still work!</span>
    </div>
  );
}
