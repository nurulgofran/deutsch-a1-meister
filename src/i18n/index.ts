import en from './locales/en.json';
import bn from './locales/bn.json';
import tr from './locales/tr.json';
import hi from './locales/hi.json';
import ar from './locales/ar.json';

export type Language = 'en' | 'bn' | 'tr' | 'hi' | 'ar';

export const languages: Record<Language, { name: string; nativeName: string; rtl?: boolean }> = {
  en: { name: 'English', nativeName: 'English' },
  bn: { name: 'Bengali', nativeName: 'বাংলা' },
  tr: { name: 'Turkish', nativeName: 'Türkçe' },
  hi: { name: 'Hindi', nativeName: 'हिन्दी' },
  ar: { name: 'Arabic', nativeName: 'العربية', rtl: true }
};

const translations: Record<Language, typeof en> = {
  en,
  bn,
  tr,
  hi,
  ar
};

export function getTranslations(lang: Language) {
  return translations[lang] || translations.en;
}

// Helper to get nested translation value
export function t(lang: Language, path: string): string {
  const keys = path.split('.');
  let value: any = translations[lang] || translations.en;
  
  for (const key of keys) {
    if (value && typeof value === 'object' && key in value) {
      value = value[key];
    } else {
      // Fallback to English
      value = translations.en;
      for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
          value = value[k];
        } else {
          return path; // Return path if translation not found
        }
      }
      break;
    }
  }
  
  return typeof value === 'string' ? value : path;
}

export default translations;
