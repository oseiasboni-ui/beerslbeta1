import { i18n } from '../i18n/i18n.js';

export class Footer {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());
    }

    render() {
        const currentLang = i18n.getLang();

        this.target.innerHTML = `
            <div class="footer-content">
                <div class="footer-brand">
                    <span class="footer-logo"><strong>Beer</strong>SL</span>
                    <span class="footer-tagline" data-i18n="footer.tagline">${i18n.t('footer.tagline')}</span>
                </div>
                
                <div class="footer-center">
                    <nav class="footer-nav">
                        <a href="#sobre" data-i18n="footer.about">${i18n.t('footer.about')}</a>
                        <a href="#contato" data-i18n="footer.contact">${i18n.t('footer.contact')}</a>
                    </nav>
                    
                    <div class="language-switcher">
                        <button class="lang-btn ${currentLang === 'pt-BR' ? 'active' : ''}" data-lang="pt-BR" title="Português">
                            🇧🇷
                        </button>
                        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" data-lang="en" title="English">
                            🇺🇸
                        </button>
                        <button class="lang-btn ${currentLang === 'de' ? 'active' : ''}" data-lang="de" title="Deutsch">
                            🇩🇪
                        </button>
                    </div>
                </div>
                
                <div class="footer-copy" data-i18n="footer.copyright">
                    ${i18n.t('footer.copyright')}
                </div>
            </div>
        `;

        this.attachEvents();
    }

    attachEvents() {
        const langBtns = this.target.querySelectorAll('.lang-btn');
        langBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.dataset.lang;
                i18n.setLang(lang);

                // Update active state
                langBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            });
        });
    }
}
