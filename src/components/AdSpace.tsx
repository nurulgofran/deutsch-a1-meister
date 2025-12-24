import { cn } from '@/lib/utils';

interface AdSpaceProps {
  className?: string;
}

export function AdSpace({ className }: AdSpaceProps) {
  return (
    <div 
      id="ad-space"
      className={cn(
        "w-full h-[60px] bg-muted/50 rounded-lg border border-dashed border-border flex items-center justify-center",
        className
      )}
    >
      <span className="text-xs text-muted-foreground">Ad Space</span>
    </div>
  );
}
