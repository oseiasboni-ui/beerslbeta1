import { themeManager } from './theme-manager.js?v=99';
import { i18n } from './i18n/i18n.js?v=99';

export function initUI() {
    console.log('UI Init starting...');

    // 0. Ensure Theme Init
    themeManager.init();

    // 1. Render Theme Menu
    themeManager.renderThemeMenu('#theme-menu-container');

    // 2. Menu Toggle Logic (Event Delegation)
    function toggleMenu() {
        const sidebar = document.getElementById('mobile-sidebar');
        const sidebarOverlay = document.getElementById('sidebar-overlay');

        if (!sidebar) {
            console.error('Mobile Sidebar not found!');
            return;
        }

        const isOpen = sidebar.classList.contains('open');
        if (isOpen) {
            sidebar.classList.remove('open');
            if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            document.body.style.overflow = '';
        } else {
            sidebar.classList.add('open');
            if (sidebarOverlay) sidebarOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        }
    }

    // Attach to body to handle dynamic elements or timing issues
    document.body.addEventListener('click', (e) => {
        // Toggle Button
        if (e.target.closest('#menu-toggle')) {
            e.stopPropagation();
            toggleMenu();
            return;
        }

        // Close Button
        if (e.target.closest('#sidebar-close')) {
            e.stopPropagation();
            toggleMenu();
            return;
        }

        // Overlay
        if (e.target.id === 'sidebar-overlay') {
            e.stopPropagation();
            toggleMenu();
            return;
        }
    });

    // 3. Language Buttons Logic (Sidebar)
    const sidebarLangBtns = document.querySelectorAll('.lang-btn-sidebar');
    sidebarLangBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            console.log('Changing language to:', lang);
            i18n.setLang(lang);
        });
    });

    // Update active state on language change
    window.addEventListener('languageChanged', (e) => {
        const lang = e.detail.language;
        updateActiveLanguage(lang);
    });

    // Initial Active State
    const currentLang = localStorage.getItem('beersl-lang') || 'pt-BR';
    updateActiveLanguage(currentLang);

    function updateActiveLanguage(lang) {
        sidebarLangBtns.forEach(btn => {
            const btnLang = btn.dataset.lang;
            // Simple check or exact match
            const isActive = btnLang === lang || (lang === 'pt' && btnLang === 'pt-BR');

            if (isActive) {
                btn.classList.add('active');
                btn.style.borderColor = 'var(--color-primary)';
                btn.style.backgroundColor = 'rgba(0,0,0,0.05)';
            } else {
                btn.classList.remove('active');
                btn.style.borderColor = 'var(--color-border)';
                btn.style.backgroundColor = 'transparent';
            }
        });
    }
}
