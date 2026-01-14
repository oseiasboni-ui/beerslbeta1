// Internationalization (i18n) Module for BeerStylesLibrary
import { translations } from './translations.js?v=38';

class I18n {
    constructor() {
        this.currentLang = localStorage.getItem('beersl-lang') || 'pt-BR';
        this.translations = translations;
    }

    // Get current language
    getLang() {
        return this.currentLang;
    }

    // Set language and persist
    setLang(lang) {
        if (this.translations[lang]) {
            this.currentLang = lang;
            localStorage.setItem('beersl-lang', lang);
            this.translatePage();
            document.documentElement.lang = lang;

            // Dispatch event for dynamic components
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        }
    }

    // Get translation by key
    t(key) {
        const langData = this.translations[this.currentLang];
        if (langData && langData[key] !== undefined) {
            return langData[key];
        }
        // Fallback to English
        if (this.translations['en'] && this.translations['en'][key] !== undefined) {
            return this.translations['en'][key];
        }
        // Return key if not found
        console.warn(`Translation missing: ${key}`);
        return key;
    }

    // Translate entire page by scanning data-i18n attributes
    translatePage() {
        // Translate elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            el.textContent = this.t(key);
        });

        // Translate placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            el.placeholder = this.t(key);
        });

        // Translate titles (tooltips)
        document.querySelectorAll('[data-i18n-title]').forEach(el => {
            const key = el.getAttribute('data-i18n-title');
            el.title = this.t(key);
        });

        // Translate aria-labels
        document.querySelectorAll('[data-i18n-aria]').forEach(el => {
            const key = el.getAttribute('data-i18n-aria');
            el.setAttribute('aria-label', this.t(key));
        });
    }

    // Initialize - call after DOM is ready
    init() {
        this.translatePage();
        document.documentElement.lang = this.currentLang;
    }
}

// Export singleton instance
export const i18n = new I18n();
