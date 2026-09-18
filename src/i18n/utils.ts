import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');
  let pathname = url.pathname;

  if (baseUrl && pathname.startsWith(baseUrl)) {
    pathname = pathname.slice(baseUrl.length);
  }
  
  const [, lang] = pathname.split('/');
  
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getTargetUrl(currentPath: string, currentLang: string, targetLang: string): string {
  const baseUrl = import.meta.env.BASE_URL.replace(/\/$/, '');

  let pathWithoutBase = currentPath;
  if (baseUrl && currentPath.startsWith(baseUrl)) {
    pathWithoutBase = currentPath.substring(baseUrl.length);
  }

  if (!pathWithoutBase.startsWith('/')) {
    pathWithoutBase = '/' + pathWithoutBase;
  }

  const newPath = pathWithoutBase.replace(new RegExp(`^/${currentLang}(/|$)`), `/${targetLang}$1`);

  return `${baseUrl}${newPath}`;
}