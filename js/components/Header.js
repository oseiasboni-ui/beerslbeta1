import { i18n } from '../i18n/i18n.js';

export class Header {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Initialize theme
        this.initTheme();
    }

    initTheme() {
        const savedTheme = localStorage.getItem('beersl-theme') || 'light';
        document.documentElement.setAttribute('data-theme', savedTheme);
    }

    render() {
        const currentLang = i18n.getLang();
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

        this.target.innerHTML = `
            <a href="/" class="header-logo">
                     <div class="site-logo-text">
                        <span class="logo-beer">Beer</span><span class="logo-sl">SL</span>
                     </div>
            </a>
            
            <h1 class="header-title" data-i18n="header.encyclopedia">${i18n.t('header.encyclopedia')}</h1>
            
            <div class="header-right">
                <div class="header-search">
                    <div class="search-input-wrapper">
                        <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.35-4.35"></path>
                        </svg>
                        <input type="text" data-i18n-placeholder="header.search_placeholder" placeholder="${i18n.t('header.search_placeholder')}" id="search-input">
                    </div>
                </div>

                <div class="hamburger-menu">
                    <button class="hamburger-btn" id="hamburger-toggle">
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                        <span class="hamburger-line"></span>
                    </button>
                    
                    <div class="hamburger-dropdown" id="hamburger-dropdown">
                        <nav class="dropdown-nav">
                            <a href="about.html" data-i18n="footer.about">${i18n.t('footer.about')}</a>
                            <a href="contact.html" data-i18n="footer.contact">${i18n.t('footer.contact')}</a>
                        </nav>
                        
                        <div class="dropdown-section">
                            <span class="dropdown-label" data-i18n="menu.language">${i18n.t('menu.language')}</span>
                            <div class="dropdown-lang">
                                <button class="dropdown-lang-btn ${currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR">🇧🇷 PT</button>
                                <button class="dropdown-lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en">🇺🇸 EN</button>
                                <button class="dropdown-lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de">🇩🇪 DE</button>
                            </div>
                        </div>
                        
                        <div class="dropdown-section">
                            <span class="dropdown-label" data-i18n="menu.theme">${i18n.t('menu.theme')}</span>
                            <div class="dropdown-theme">
                                <button class="dropdown-theme-btn ${currentTheme === 'light' ? 'active' : ''}" data-theme="light">☀️ ${i18n.t('theme.light')}</button>
                                <button class="dropdown-theme-btn ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">🌙 ${i18n.t('theme.dark')}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        // Hamburger toggle
        const hamburgerBtn = this.target.querySelector('#hamburger-toggle');
        const dropdown = this.target.querySelector('#hamburger-dropdown');

        hamburgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            hamburgerBtn.classList.toggle('open');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.hamburger-menu')) {
                dropdown.classList.remove('open');
                hamburgerBtn.classList.remove('open');
            }
        });

        // Language buttons
        const langBtns = this.target.querySelectorAll('.dropdown-lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.setLang(lang);
            });
        });

        // Theme buttons
        const themeBtns = this.target.querySelectorAll('.dropdown-theme-btn');
        themeBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const theme = btn.dataset.theme;
                document.documentElement.setAttribute('data-theme', theme);
                localStorage.setItem('beersl-theme', theme);

                themeBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}
