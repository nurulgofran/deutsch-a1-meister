# Deutsch A1 Meister - AI Coding Instructions

## 1. Project Overview & Architecture
To successfully contribute to this codebase, you must understand the following high-level architecture:

-   **Core Stack**: React 18 (Vite) + TypeScript + TailwindCSS.
-   **Mobile Integration**: Capacitor (Android) wraps the React app. Native functionality (billing, ads, status bar) is accessed via Capacitor plugins.
-   **State Management**: `AppContext` (React Context) + `src/hooks/useAppStore.ts` for global state. Re-renders are acceptable for this app size; avoid over-optimization unless necessary.
-   **Data Storage**:
    -   **Persistence**: `src/lib/storage.ts` wraps `localStorage`. **ALWAYS** use this wrapper. Never use `localStorage` directly.
    -   **Static Data**: Course content (vocab, grammar, exams) lives in typed TypeScript files in `src/data/`. This is the "database" for the app.
-   **Monetization**:
    -   **Billing**: `src/lib/billing.ts` abstracts RevenueCat. All purchase logic MUST go through this.
    -   **Ads**: `src/contexts/AdContext.tsx` handles AdMob state.

## 2. Critical Workflows
Use these specific commands for development and verification:

-   **Start Dev Server**: `npm run dev` (Runs on port 8080)
-   **Build for Web**: `npm run build`
-   **Sync to Android**: `npx cap sync android` (Run this after `npm run build` to update the native project)
-   **Mobile Preview**: To test native features, you usually need to run on a device/emulator via Android Studio (`npx cap open android`).

## 3. Project-Specific Conventions

### A. Data & Logic
-   **Translations**: Use the `t()` function from the `useApp()` hook.
    ```typescript
    const { t } = useApp();
    return <h1>{t('welcome.title')}</h1>;
    ```
-   **New Content**: When adding lessons or grammar, follow the types in `src/data/types.ts`. All IDs must be unique.

### B. UI Components
-   **Library**: Shadcn/UI (found in `src/components/ui`). Do not install new UI libraries without permission.
-   **Tailwind**: Use standard utility classes. Start with mobile-first responsive design.
-   **Icons**: Use `lucide-react`.

### C. Native Features
-   **Billing Checks**: Use `checkProStatus()` from `@/lib/billing` or the `isPro` flag from `useApp()` to gate content.
    ```typescript
    if (!isPro && isLocked) {
      return <ProModal />;
    }
    ```

## 4. Key Directories
-   `src/components/ads`: AdSpecific components (Interstitial, Rewarded).
-   `src/data`: The static content database.
-   `src/lib`: Core infrastructure (billing, storage).
-   `src/pages`: Top-level route components.
-   `android/`: Native Android project files.

## 5. Common "Gotchas"
-   **Capacitor APIs**: Web APIs might not work as expected on Android. Always check if a Capacitor plugin is required (stored in `package.json`).
-   **Safe Area**: Mobile devices have notches. Ensure top/bottom padding accounts for safe areas if not handled by the layout container.
-   **Offline First**: The app must work offline. All critical data matches this requirement by being bundled or cached.
