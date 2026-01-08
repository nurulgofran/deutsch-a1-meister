# Deutsch A1 Meister - AI Coding Instructions

A gamified German A1 learning mobile app built with Capacitor + React + TypeScript + Vite, targeting Android via Google Play Store.

## Architecture Overview

```
src/
├── App.tsx              # Provider hierarchy: QueryClient → BrowserRouter → AppProvider → AdProvider
├── pages/               # Route pages (Dashboard, Learn, Exam, Settings, Welcome)
├── components/          # UI components (custom + shadcn/ui in components/ui/)
│   └── ads/             # InterstitialAd, RewardedAd overlays
├── contexts/            # AppContext (progress), AdContext (monetization + Pro status)
├── hooks/               # useAppStore (central state), useAds, useHaptics
├── data/                # Lesson/vocab content + types.ts (XP system, Lesson definitions)
├── lib/                 # billing.ts (RevenueCat), storage.ts, utils.ts
└── i18n/                # Custom translation system (en, bn, tr, hi, ar)
```

## Key Patterns

### State Management
- **User progress** persists in `localStorage` via `useAppStore` hook (XP, streaks, lesson progress)
- **Pro status** synced from RevenueCat on app launch, cached in `localStorage` key `a1m-is-pro`
- React Context for cross-component state (`AppContext`, `AdContext`)

### i18n System
- Custom implementation in `src/i18n/` - NOT react-i18next
- Use `t(language, 'path.to.key')` function for translations
- All content supports 5 languages via `Record<Language, string>` pattern:
```typescript
translations: {
  en: "Hello",
  bn: "হ্যালো",
  tr: "Merhaba",
  hi: "नमस्ते",
  ar: "مرحبا"
}
```

### UI Components
- **shadcn/ui** components in `src/components/ui/` - add via `npx shadcn@latest add <component>`
- Tailwind + CSS variables for theming (see `tailwind.config.ts`, `index.css`)
- Use existing semantic colors: `primary`, `secondary`, `success`, `warning`, `destructive`

### Monetization (Pro Features)
```typescript
// Check Pro status
import { useAds } from '@/contexts/AdContext';
const { isPro } = useAds();

// Lessons gated by isPremium flag - see src/data/types.ts
```
- RevenueCat handles billing in `src/lib/billing.ts`
- AdMob ads show only for non-Pro users (10-min cooldown for interstitials)

### Data Structure
- Lessons defined in `src/data/types.ts` with XP requirements
- Vocabulary organized by lesson in `src/data/vocab/`
- XP constants: `XP_PER_CORRECT=5`, `XP_LESSON_BONUS=25`, `XP_STREAK_BONUS=10`

## Development Commands

```bash
npm run dev          # Start Vite dev server (web preview)
npm run build        # Build for production (outputs to dist/)
npm run lint         # ESLint check

# Android (after npm run build)
npx cap sync android && npx cap open android
```

## Critical Notes

1. **Native-only features**: RevenueCat billing and AdMob only work on Android - check `Capacitor.isNativePlatform()` before calling
2. **localStorage keys**: Prefix with `a1m-` (e.g., `a1m-progress`, `a1m-settings`, `a1m-is-pro`)
3. **Path aliases**: Use `@/` for imports (configured in `tsconfig.json`, `vite.config.ts`)
4. **No backend**: All user data is client-side localStorage - there's no server/database
