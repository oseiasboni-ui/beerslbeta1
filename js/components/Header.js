import { i18n } from '../i18n/i18n.js';

export class Header {
    constructor(targetId) {
        this.target = document.getElementById(targetId);
    }

    render() {
        this.target.innerHTML = `
            <a href="/" class="header-logo">
                <div class="logo-container">
                     <img src="img/logo.png" alt="BeerSL" class="site-logo">
                     <span class="site-subtitle" data-i18n="header.subtitle">${i18n.t('header.subtitle')}</span>
                </div>
            </a>
            
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
    }
}
