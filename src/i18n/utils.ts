import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getTargetUrl(currentPath: string, currentLang: string, newLang: string) {
  const newPath = currentPath.replace(new RegExp(`^/${currentLang}(/|$)`), `/${newLang}$1`);
  
  if (newPath === currentPath) {
    return currentPath;
  }
  
  return newPath;
}