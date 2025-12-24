import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
}

export function AdSpace({ className }: AdSpaceProps) {
  return (
    <div 
      id="ad-space"
      className={cn(
        "w-full h-16 rounded-2xl border-2 border-dashed border-border",
        "bg-muted/50 flex items-center justify-center overflow-hidden relative",
        className
      )}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 shimmer" />
      <span className="text-xs text-muted-foreground font-semibold relative z-10 uppercase tracking-wider">Ad Space</span>
    </div>
  );
}
