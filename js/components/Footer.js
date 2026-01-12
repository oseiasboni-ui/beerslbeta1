import { i18n } from '../i18n/i18n.js';

export class Footer {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Initialize theme from localStorage
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
            <div class="footer-top">
                <div class="footer-brand">
                    <span class="footer-logo"><strong>Beer</strong>SL</span>
                    <span class="footer-tagline" data-i18n="footer.tagline">${i18n.t('footer.tagline')}</span>
                </div>
                
                <div class="footer-links">
                    <div class="footer-column">
                        <h4>Início</h4>
                        <a href="index.html">Home</a>
                        <a href="index.html#styles">Estilos</a>
                    </div>
                    <div class="footer-column">
                        <h4 data-i18n="footer.about">${i18n.t('footer.about')}</h4>
                        <a href="about.html" data-i18n="footer.about">${i18n.t('footer.about')}</a>
                        <a href="contact.html" data-i18n="footer.contact">${i18n.t('footer.contact')}</a>
                    </div>
                    <div class="footer-column">
                        <h4>Admin</h4>
                        <a href="admin.html">🔐 Painel</a>
                    </div>
                </div>

                <div class="footer-right-section">
                    <div class="footer-actions">
                        <div class="language-switcher">
                            <button class="lang-btn ${currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR" title="Português">🇧🇷</button>
                            <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" title="English">🇺🇸</button>
                            <button class="lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de" title="Deutsch">🇩🇪</button>
                        </div>
                        <a href="contact.html" class="footer-contact-btn" data-i18n="footer.contact">${i18n.t('footer.contact')}</a>
                    </div>
                    <div class="theme-toggle">
                        <span class="theme-label" data-i18n="menu.theme">${i18n.t('menu.theme')}:</span>
                        <button class="theme-btn-text ${currentTheme === 'light' ? 'active' : ''}" data-theme="light">${i18n.t('theme.light')}</button>
                        <span class="theme-divider">|</span>
                        <button class="theme-btn-text ${currentTheme === 'dark' ? 'active' : ''}" data-theme="dark">${i18n.t('theme.dark')}</button>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <span data-i18n="footer.copyright">${i18n.t('footer.copyright')}</span>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        // Language buttons
        const langBtns = this.target.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.setLang(lang);

                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });

        // Theme buttons
        const themeBtns = this.target.querySelectorAll('.theme-btn-text');
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
