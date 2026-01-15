// import { Header } from './components/Header.js';
import { Sidebar } from './components/Sidebar.js';
import { Hero } from './components/Hero.js';
import { Grid } from './components/Grid.js';
import { Modal } from './components/Modal.js';
import { ReferenceRulers } from './components/ReferenceRulers.js';
// import { Footer } from './components/Footer.js';
import { i18n } from './i18n/i18n.js';
import { beers } from './data/beers.js';

document.addEventListener('DOMContentLoaded', async () => {
    // Initialize i18n first
    i18n.init();

    // Initialize Components
    // const header = new Header('main-header');
    // header.render();

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

    // Initialize Grid with beer data
    let gridInstance = null;
    if (document.getElementById('beer-grid')) {
        gridInstance = new Grid('beer-grid', beers);
        gridInstance.render();
    }

    // Initialize Modal
    new Modal('modal-container');

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

    // Filter state
    let currentSearchQuery = '';
    let currentSrmFilter = { min: 1, max: 100 };
    let currentFtuFilter = { min: 0, max: 500 };
    let currentFermentationFilters = [];
    let currentAbvFilters = [];
    let currentIbuFilters = [];

    // Classify beer clarity based on category/style
    // Classify beer clarity based on category/style/description
    function getBeerClarityLevel(beer) {
        // Safe access to translated text or original data
        // We use the beer object directly, but we can also look up translations if needed.
        // For consistent logic, we'll check the 'category' and 'name' properties (English keys usually)
        // AND also check specific keywords if we had access to the full description text.

        // Since we don't have the full description text easily accessible here without i18n lookup 
        // (which might vary by language), we will stick to the robust category/name mapping 
        // PLUS potentially checking the 'specs.clarity' if it existed, but it doesn't.
        // However, we can use the translation keys logic if we want to be very precise, 
        // but simple category mapping is safer and faster.

        const category = (beer.category || '').toLowerCase();
        const name = (beer.name || '').toLowerCase();

        // Level 1: Crystal (Cristalina) - 0-20
        // Lagers, Pilsners (Industrial/Premium)
        if ((category.includes('lager') && !category.includes('amber') && !category.includes('dark')) ||
            category.includes('pilsner') || category.includes('light lager') ||
            category.includes('helles') || category.includes('kolsch') || category.includes('kölsch')) {
            return 1;
        }

        // Level 4: Cloudy (Turva) - Wheat beers
        if (category.includes('wheat') || category.includes('weizen') ||
            category.includes('wit') || name.includes('hefe') ||
            name.includes('weiss')) {
            return 4;
        }

        // Level 5: Opaque (Opaca) - Stouts, Porters
        if (category.includes('stout') || category.includes('porter') ||
            category.includes('schwarzbier') || category.includes('dunkel') ||
            category.includes('bock')) { // Bocks are often dark/clear but treated as opaque/dark contextually or check SRM
            // Actually Bocks can be clear (Level 2/3) or Dark... 
            // Let's refine:
            if (category.includes('bock') && !category.includes('doppel')) return 2; // Maibock/Helles Bock
            return 5;
        }

        // Level 3: Foggy (Velada) - IPAs, Pale Ales (The "Craft" look)
        if (category.includes('ipa') || category.includes('pale ale') ||
            category.includes('bitter') || category.includes('amber') ||
            (category.includes('ale') && !category.includes('dark'))) {
            return 3;
        }

        // Level 2: Brilliant (Brilhante) - Default fallback for "Good Clarity"
        // Blonde Ales, Cream Ales, etc.
        return 2;
    }

    // Combined filter function
    function applyAllFilters() {
        let filteredBeers = beers;

        // Apply search filter
        if (currentSearchQuery) {
            const lowerQuery = currentSearchQuery.toLowerCase();
            filteredBeers = filteredBeers.filter(beer => {
                const nameMatch = beer.name.toLowerCase().includes(lowerQuery);
                const translationKey = `beer.${beer.id}`;
                const translatedName = i18n.t(translationKey);
                const translatedMatch = translatedName !== translationKey &&
                    translatedName.toLowerCase().includes(lowerQuery);
                const categoryMatch = beer.category &&
                    beer.category.toLowerCase().includes(lowerQuery);
                return nameMatch || translatedMatch || categoryMatch;
            });
        }

        // Apply SRM filter
        filteredBeers = filteredBeers.filter(beer => {
            const srmRange = ReferenceRulers.parseSrmRange(beer.specs?.srm);
            return ReferenceRulers.rangesOverlap(srmRange, currentSrmFilter);
        });

        // Apply Clarity/FTU filter
        if (currentFtuFilter && currentFtuFilter.level) {
            filteredBeers = filteredBeers.filter(beer => {
                const beerLevel = getBeerClarityLevel(beer);
                return beerLevel === currentFtuFilter.level;
            });
        }

        // Apply Fermentation filter
        if (currentFermentationFilters.length > 0) {
            filteredBeers = filteredBeers.filter(beer => {
                const category = (beer.category || '').toLowerCase();
                return currentFermentationFilters.some(f => category.includes(f));
            });
        }

        // Apply ABV filter
        if (currentAbvFilters.length > 0) {
            filteredBeers = filteredBeers.filter(beer => {
                const abv = parseFloat(beer.abv) || 0;
                return currentAbvFilters.some(f => {
                    if (f === 'session') return abv < 4;
                    if (f === 'standard') return abv >= 4 && abv < 6;
                    if (f === 'high') return abv >= 6 && abv < 9;
                    if (f === 'very-high') return abv >= 9;
                    return false;
                });
            });
        }

        // Apply IBU filter
        if (currentIbuFilters.length > 0) {
            filteredBeers = filteredBeers.filter(beer => {
                const ibuStr = beer.specs?.ibu || '0';
                const ibuParts = ibuStr.split(/[–\-]/);
                const ibuMin = parseInt(ibuParts[0]) || 0;
                const ibuMax = parseInt(ibuParts[1] || ibuParts[0]) || 0;

                return currentIbuFilters.some(f => {
                    if (f === '120+') return ibuMax >= 120;
                    const range = f.split('-');
                    const filterMin = parseInt(range[0]) || 0;
                    const filterMax = parseInt(range[1]) || filterMin;
                    return ibuMin <= filterMax && ibuMax >= filterMin;
                });
            });
        }

        // Update grid
        if (gridInstance) {
            gridInstance.update(filteredBeers);
        }
    }

    // Handle Search from Sidebar
    document.addEventListener('searchChanged', (e) => {
        currentSearchQuery = e.detail.query || '';
        applyAllFilters();
    });

    // Update sidebar with active ruler filters
    function updateSidebarFilters(srmFilter, ftuFilter, srmLabel, ftuLabel) {
        const container = document.getElementById('active-ruler-filters');
        const clearBtn = document.getElementById('clear-filters-btn');

        if (!container) return;

        // Get existing sidebar filter badges
        const existingSidebarBadges = container.querySelectorAll('.sidebar-badge');
        const sidebarBadgesHtml = Array.from(existingSidebarBadges).map(b => b.outerHTML).join('');

        let badges = [];
        const hasActiveFilters = (srmFilter.min > 1 || srmFilter.max < 100) ||
            (ftuFilter && ftuFilter.level);

        if (srmFilter.min > 1 || srmFilter.max < 100) {
            badges.push(`<span class="active-filter-badge ruler-badge"><strong>SRM:</strong> ${srmLabel || `${srmFilter.min}-${srmFilter.max}`}</span>`);
        }

        if (ftuFilter && ftuFilter.level) {
            badges.push(`<span class="active-filter-badge ruler-badge"><strong>FTU:</strong> ${ftuLabel}</span>`);
        }

        container.innerHTML = badges.join('') + sidebarBadgesHtml;

        // Update clear button style
        if (clearBtn) {
            if (hasActiveFilters) {
                clearBtn.classList.add('has-active-filters');
            } else {
                clearBtn.classList.remove('has-active-filters');
            }
        }
    }

    // Handle Ruler Filter changes
    document.addEventListener('rulerFilterChanged', (e) => {
        currentSrmFilter = e.detail.srm;
        currentFtuFilter = e.detail.ftu;
        applyAllFilters();
        updateSidebarFilters(currentSrmFilter, currentFtuFilter, e.detail.srmLabel, e.detail.ftuLabel);
    });

    // Handle Sidebar checkbox filter changes
    document.addEventListener('sidebarFilterChanged', (e) => {
        currentFermentationFilters = e.detail.fermentation || [];
        currentAbvFilters = e.detail.abv || [];
        currentIbuFilters = e.detail.ibu || [];
        applyAllFilters();
    });
});

