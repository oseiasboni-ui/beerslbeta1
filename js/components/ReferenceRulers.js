import { i18n } from '../i18n/i18n.js';

export class ReferenceRulers {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // SRM Data definition
        this.srmColors = [
            { range: '1-3', key: 'color.pale', color: '#F9F19E', textColor: '#333', srmMin: 1, srmMax: 3 },
            { range: '4-5', key: 'color.gold', color: '#EBC815', textColor: '#333', srmMin: 4, srmMax: 5 },
            { range: '6', key: 'color.deep_gold', color: '#D9A208', textColor: '#333', srmMin: 6, srmMax: 6 },
            { range: '7-9', key: 'color.amber', color: '#D17616', textColor: '#fff', srmMin: 7, srmMax: 9 },
            { range: '10-12', key: 'color.deep_amber', color: '#BF6017', textColor: '#fff', srmMin: 10, srmMax: 12 },
            { range: '13-15', key: 'color.copper', color: '#A8450F', textColor: '#fff', srmMin: 13, srmMax: 15 },
            { range: '16-19', key: 'color.deep_copper', color: '#82330A', textColor: '#fff', srmMin: 16, srmMax: 19 },
            { range: '20-29', key: 'color.brown', color: '#5D2808', textColor: '#fff', srmMin: 20, srmMax: 29 },
            { range: '30+', key: 'color.dark', color: '#241205', textColor: '#fff', srmMin: 30, srmMax: 100 }
        ];

        // Clarity Data Definition
        this.clarityLevels = [
            { key: 'clarity.crystal', level: 1, blur: '0px', opacity: 0.2 },
            { key: 'clarity.brilliant', level: 2, blur: '0px', opacity: 0.3 },
            { key: 'clarity.foggy', level: 3, blur: '2px', opacity: 0.6 },
            { key: 'clarity.cloudy', level: 4, blur: '4px', opacity: 0.8 },
            { key: 'clarity.opaque', level: 5, blur: '10px', opacity: 1.0 }
        ];

        // Current filter state
        this.selectedSrmIndex = null;  // null = show all
        this.selectedClarityIndex = null;

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Listen for clear filters from sidebar
        document.addEventListener('clearRulerFilters', () => {
            this.selectedSrmIndex = null;
            this.selectedClarityIndex = null;
            this.render();
            this.emitFilterChange();
        });
    }

    render() {
        this.target.innerHTML = `
            <div class="rulers-toolbar">
                <!-- SRM Timeline -->
                <div class="ruler-group">
                    <div class="ruler-title-wrapper">
                        <span class="ruler-main-title">
                            <span data-i18n="ruler.color_scale">${i18n.t('ruler.color_scale')}</span> 
                            <strong class="highlight-word" data-i18n="ruler.color">${i18n.t('ruler.color')}</strong> 
                            <span data-i18n="ruler.color_suffix">${i18n.t('ruler.color_suffix')}</span> 
                            <span class="acronym">(SRM)</span>
                        </span>
                    </div>
                    <div class="timeline-track">
                        <div class="track-line"></div>
                        <div class="nodes-container">
                            ${this.srmColors.map((item, index) => `
                                <div class="ruler-node srm-node ${this.selectedSrmIndex === index ? 'selected' : ''}" 
                                     style="background-color: ${item.color};" 
                                     data-label="${i18n.t(item.key)}" 
                                     data-value="${item.range}"
                                     data-index="${index}">
                                    <div class="tooltip">
                                        <strong>${item.range}</strong> ${i18n.t(item.key)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                
                <!-- Clarity Timeline -->
                <div class="ruler-group">
                    <div class="ruler-title-wrapper">
                        <span class="ruler-main-title">
                            <span data-i18n="ruler.clarity_scale">${i18n.t('ruler.clarity_scale')}</span> 
                            <strong class="highlight-word" data-i18n="ruler.clarity">${i18n.t('ruler.clarity')}</strong> 
                            <span data-i18n="ruler.clarity_suffix">${i18n.t('ruler.clarity_suffix')}</span> 
                            <span class="acronym">(FTU)</span>
                        </span>
                    </div>
                    <div class="timeline-track">
                        <div class="track-line"></div>
                         <div class="nodes-container">
                            ${this.clarityLevels.map((item, index) => `
                                <div class="ruler-node clarity-node ${this.selectedClarityIndex === index ? 'selected' : ''}"
                                     data-index="${index}">
                                    <div class="clarity-circle" style="backdrop-filter: blur(${item.blur}); -webkit-backdrop-filter: blur(${item.blur});"></div>
                                    <div class="tooltip">
                                        <strong>${item.ftu}</strong> ${i18n.t(item.key)}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
                </div>
            </div>

             <!-- Active Filters & Clear Button Container -->
            <div id="ruler-active-filters-container" class="ruler-active-filters-container" style="display: none; flex-direction: column; align-items: center; justify-content: center; width: 100%; margin-top: 1rem; gap: 0.5rem;">
                 <!-- Clear Filters Button -->
                <button id="clear-ruler-filters" class="sidebar-clear-btn" style="display: none; width: auto; padding: 0.5rem 1rem; margin: 0;">
                    <span class="clear-icon">✕</span> <span data-i18n="filters.clear">LIMPAR FILTROS</span>
                </button>
                
                <!-- Active Filters Badges -->
                <div id="active-ruler-badges" class="active-filters-badges" style="justify-content: center;"></div>
            </div>
        </div>
        `;

        this.attachEventListeners();
        this.updateActiveFiltersDisplay();
        this.checkClearButtonVisibility();
    }

    attachEventListeners() {
        // SRM nodes click
        const srmNodes = this.target.querySelectorAll('.srm-node');
        srmNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);

                // Toggle selection (click again to deselect)
                if (this.selectedSrmIndex === index) {
                    this.selectedSrmIndex = null;
                } else {
                    this.selectedSrmIndex = index;
                }

                this.render();
                this.emitFilterChange();
            });
        });

        // Clarity nodes click
        const clarityNodes = this.target.querySelectorAll('.clarity-node');
        clarityNodes.forEach(node => {
            node.addEventListener('click', (e) => {
                const index = parseInt(e.currentTarget.dataset.index);

                if (this.selectedClarityIndex === index) {
                    this.selectedClarityIndex = null;
                } else {
                    this.selectedClarityIndex = index;
                }

                this.render();
                this.emitFilterChange();
            });
        });

        // Clear filters button
        const clearBtn = this.target.querySelector('#clear-ruler-filters');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => {
                this.selectedSrmIndex = null;
                this.selectedClarityIndex = null;
                this.render();
                this.emitFilterChange();
            });
        }
    }

    updateActiveFiltersDisplay() {
        const container = this.target.querySelector('#active-ruler-badges');
        const mainContainer = this.target.querySelector('#ruler-active-filters-container');

        if (!container || !mainContainer) return;

        container.innerHTML = '';
        const badges = [];

        // Add Ruler Badges
        if (this.selectedSrmIndex !== null) {
            const srm = this.srmColors[this.selectedSrmIndex];
            const label = `${srm.range} (${i18n.t(srm.key)})`;
            badges.push(`<span class="filter-badge">Cor: ${label}</span>`);
        }

        if (this.selectedClarityIndex !== null) {
            const ftu = this.clarityLevels[this.selectedClarityIndex];
            const label = i18n.t(ftu.key);
            badges.push(`<span class="filter-badge">Claridade: ${label}</span>`);
        }

        if (badges.length > 0) {
            container.innerHTML = badges.join('');
            container.style.display = 'flex';
            mainContainer.style.display = 'flex';
        } else {
            container.style.display = 'none';
            mainContainer.style.display = 'none';
        }
    }

    checkClearButtonVisibility() {
        const clearBtn = this.target.querySelector('#clear-ruler-filters');
        if (clearBtn) {
            if (this.hasActiveFilters()) {
                clearBtn.style.display = 'flex';
            } else {
                clearBtn.style.display = 'none';
            }
        }
    }

    hasActiveFilters() {
        return this.selectedSrmIndex !== null || this.selectedClarityIndex !== null;
    }

    emitFilterChange() {
        let srmFilter = { min: 1, max: 100 };
        let ftuFilter = null; // Changed default to null
        let srmLabel = null;
        let ftuLabel = null;

        if (this.selectedSrmIndex !== null) {
            const srm = this.srmColors[this.selectedSrmIndex];
            srmFilter = { min: srm.srmMin, max: srm.srmMax };
            srmLabel = `${srm.range} (${i18n.t(srm.key)})`;
        }

        if (this.selectedClarityIndex !== null) {
            const ftu = this.clarityLevels[this.selectedClarityIndex];
            ftuFilter = { level: ftu.level };
            ftuLabel = i18n.t(ftu.key);
        }

        const event = new CustomEvent('rulerFilterChanged', {
            detail: {
                srm: srmFilter,
                ftu: ftuFilter,
                srmLabel: srmLabel,
                ftuLabel: ftuLabel
            }
        });
        document.dispatchEvent(event);
    }

    // Static helper to parse SRM range
    static parseSrmRange(rangeStr) {
        if (!rangeStr) return { min: 1, max: 100 };
        const cleaned = rangeStr.replace(/[+]/g, '').trim();
        const parts = cleaned.split(/[–\-]/);
        if (parts.length === 2) {
            return {
                min: parseInt(parts[0]) || 1,
                max: parseInt(parts[1]) || 100
            };
        } else if (parts.length === 1) {
            const val = parseInt(parts[0]) || 1;
            return { min: val, max: val };
        }
        return { min: 1, max: 100 };
    }

    static rangesOverlap(beerRange, filterRange) {
        return beerRange.min <= filterRange.max && beerRange.max >= filterRange.min;
    }
}
