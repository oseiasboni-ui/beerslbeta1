import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Hero } from './components/Hero.js';
import { Grid } from './components/Grid.js';
import { Modal } from './components/Modal.js';
import { ReferenceRulers } from './components/ReferenceRulers.js';
import { Footer } from './components/Footer.js';
import { i18n } from './i18n/i18n.js';
import { beers } from './data/beers.js';

document.addEventListener('DOMContentLoaded', () => {
    // Initialize i18n first
    i18n.init();

    // Initialize Components
    const header = new Header('main-header');
    header.render();

    // Initialize Sidebar (if exists)
    if (document.getElementById('sidebar')) {
        const sidebar = new Sidebar('sidebar');
        sidebar.render();
    }

    // Initialize Hero (if exists)
    if (document.getElementById('hero-section')) {
        const hero = new Hero('hero-section');
        hero.render();
    }

    // Initialize Reference Rulers (if exists)
    if (document.getElementById('reference-rulers')) {
        const rulers = new ReferenceRulers('reference-rulers');
        rulers.render();
    }

    // Initialize Grid (if exists)
    if (document.getElementById('beer-grid')) {
        const grid = new Grid('beer-grid', beers);
        grid.render();
    }

    // Initialize Modal
    new Modal('modal-container');

    // Initialize Footer with language switcher
    const footer = new Footer('main-footer');
    footer.render();

    // Hide filters bar
    const filtersBar = document.getElementById('filters-bar');
    if (filtersBar) {
        filtersBar.style.display = 'none';
    }

    // Translate static HTML elements
    i18n.translatePage();

    // Re-translate on language change
    window.addEventListener('languageChanged', () => {
        i18n.translatePage();
    });
});
