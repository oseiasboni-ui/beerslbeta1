import { i18n } from '../i18n/i18n.js';

export class Header {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        this.currentIndex = 0;
        this.phrases = [
            { id: 'phrase1', color: '#ff9e00' }, // Amber
            { id: 'phrase2', color: '#ff006e' }, // Hot Pink
            { id: 'phrase3', color: '#3a86ff' }, // Blue
            { id: 'phrase4', color: '#8338ec' }, // Purple
            { id: 'phrase5', color: '#fb5607' }  // Orange Red
        ];

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.updateBanner();
        });
    }

    render() {
        this.target.innerHTML = `
            <a href="/" class="header-logo">
                     <div class="site-logo-text">
                        <span class="logo-beer">Beer</span><span class="logo-sl">SL</span>
                     </div>
            </a>
            
            <div class="rotating-banner-container">
                <div id="rotating-text" class="rotating-text">
                    <div class="banner-line title"></div>
                    <div class="banner-line subtitle"></div>
                </div>
            </div>
            
            <div class="header-search">
                <div class="search-input-wrapper">
                    <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="11" cy="11" r="8"></circle>
                        <path d="m21 21-4.35-4.35"></path>
                    </svg>
                    <input type="text" data-i18n-placeholder="header.search_placeholder" placeholder="${i18n.t('header.search_placeholder')}" id="search-input">
                </div>
            </div>
        `;

        this.startRotation();
    }

    startRotation() {
        if (this.rotationTimer) clearTimeout(this.rotationTimer);
        // hideTimer no longer needed in No-Fade version

        this.runCycle();
    }

    runCycle() {
        const container = this.target.querySelector('#rotating-text');
        if (!container) return;

        // 1. Prepare Content
        const phrase = this.phrases[this.currentIndex];
        const titleEl = container.querySelector('.title');
        const subtitleEl = container.querySelector('.subtitle');

        const titleText = i18n.t(`banner.${phrase.id}.title`);
        const subtitleText = i18n.t(`banner.${phrase.id}.subtitle`);

        titleEl.textContent = titleText || "Start Advertising";
        subtitleEl.textContent = subtitleText || "Grow your brand today.";

        // Apply color to Title only (Subtitle is gray via CSS)
        titleEl.style.color = phrase.color;

        // 2. Schedule Next Cycle (Simple 6s rotation, no fade)
        this.rotationTimer = setTimeout(() => {
            this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
            this.runCycle();
        }, 6000);
    }

    // Explicit update for language change
    updateBanner() {
        this.startRotation();
    }
}
