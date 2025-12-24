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

  // Hide nav during active quiz/exam
  if (location.pathname.includes('/quiz') || location.pathname.includes('/exam-session')) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label_de, label_en }) => {
          const isActive = location.pathname === path;
          
          return (
            <NavLink
              key={path}
              to={path}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full min-h-[44px] transition-colors",
                isActive 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon 
                className={cn(
                  "h-6 w-6 transition-transform",
                  isActive && "scale-110"
                )} 
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span className={cn(
                "text-xs mt-1 font-medium",
                isActive && "font-semibold"
              )}>
                {t(label_de, label_en)}
              </span>
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}
