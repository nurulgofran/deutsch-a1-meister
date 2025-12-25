import { NavLink, useLocation } from 'react-router-dom';
import { Home, BookOpen, ClipboardList, Settings } from 'lucide-react';
import { useApp } from '@/contexts/AppContext';
import { cn } from '@/lib/utils';

const navItems = [
  { path: '/', icon: Home, label_de: 'Home', label_en: 'Home' },
  { path: '/study', icon: BookOpen, label_de: 'Üben', label_en: 'Study' },
  { path: '/exam', icon: ClipboardList, label_de: 'Prüfung', label_en: 'Exam' },
  { path: '/settings', icon: Settings, label_de: 'Einstellungen', label_en: 'Settings' }
];

export function BottomNav() {
  const location = useLocation();
  const { t } = useApp();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom">
      {/* Glass background */}
      <div className="absolute inset-0 bg-card/80 backdrop-blur-xl border-t border-border/50" />
      
      <div className="relative flex items-center justify-around h-16 max-w-lg mx-auto px-2">
        {navItems.map(({ path, icon: Icon, label_de, label_en }) => {
          const isActive = location.pathname === path;
          
          return (
            <NavLink
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full min-h-[44px] relative group",
                "transition-colors duration-200"
              )}
            >
              {/* Active indicator */}
              {isActive && (
                <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 w-8 h-1 bg-primary rounded-full" />
              )}
              
              <div className={cn(
                "flex flex-col items-center justify-center transition-transform duration-200",
                isActive ? "scale-105" : "group-active:scale-95"
              )}>
                <div className={cn(
                  "p-1.5 rounded-xl transition-colors duration-200",
                  isActive ? "bg-primary/10" : "bg-transparent"
                )}>
                  <Icon 
                    className={cn(
                      "h-5 w-5 transition-colors duration-200",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )} 
                    strokeWidth={isActive ? 2.5 : 2}
                  />
                </div>
                <span className={cn(
                  "text-[10px] mt-0.5 font-semibold tracking-wide transition-colors duration-200",
                  isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                )}>
                  {t(label_de, label_en)}
                </span>
              </div>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
