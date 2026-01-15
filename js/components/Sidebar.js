import { i18n } from '../i18n/i18n.js';

export class Sidebar {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Track ruler state
        this.rulerState = {
            srmLabel: null,
            ftuLabel: null
        };

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Listen for ruler filter changes
        document.addEventListener('rulerFilterChanged', (e) => {
            if (e.detail) {
                this.rulerState.srmLabel = e.detail.srmLabel;
                this.rulerState.ftuLabel = e.detail.ftuLabel;
                // Re-emit checkbox filters to trigger update with current state including ruler
                this.emitCheckboxFilters();
                this.checkClearButtonVisibility(); // Fix: Update button visibility
            }
        });
    }

    render() {
        this.target.innerHTML = `
            <!-- Search Input -->
            <div class="sidebar-search-wrapper">
                <div class="sidebar-search-box">
                    <svg class="search-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input 
                        type="text" 
                        id="sidebar-search-input" 
                        placeholder="Pesquisar estilos de..." 
                        autocomplete="off"
                    >
                </div>
            </div>

            <!-- Clear Filters Button -->
            <button id="clear-filters-btn" class="sidebar-clear-btn" style="display: none;">
                <span class="clear-icon">✕</span> LIMPAR FILTROS
            </button>
            
            <!-- Active Filters Badges (Abbreviated) -->
            <div id="active-filters-badges" class="active-filters-badges"></div>

            <div class="sidebar-divider"></div>

            <!-- Fermentation Section -->
            <div class="filter-section fermentation-section">
                <div class="section-header">
                    <span class="header-pill">FERMENTAÇÃO</span>
                    <div class="header-line"></div>
                </div>
                <ul class="filter-options">
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="ale">
                            <span class="checkmark"></span>
                            <span class="label-text">Ale</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="lager">
                            <span class="checkmark"></span>
                            <span class="label-text">Lager</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="hibrida">
                            <span class="checkmark"></span>
                            <span class="label-text">Híbrida</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="wild">
                            <span class="checkmark"></span>
                            <span class="label-text">Selvagem</span>
                        </label>
                    </li>
                </ul>
            </div>

            <div class="sidebar-divider"></div>

            <!-- ABV Section -->
            <div class="filter-section abv-section">
                <div class="section-header">
                    <span class="header-pill">TEOR ALCOÓLICO (ABV)</span>
                    <div class="header-line"></div>
                </div>
                <ul class="filter-options">
                     <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="session">
                            <span class="checkmark"></span>
                            <span class="label-text">Baixo: < 4.0%</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="standard">
                            <span class="checkmark"></span>
                            <span class="label-text">Normal: 4.0% - 6.0%</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="high">
                            <span class="checkmark"></span>
                            <span class="label-text">Alto: 6.0% - 9.0%</span>
                        </label>
                    </li>
                    <li>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="very-high">
                            <span class="checkmark"></span>
                            <span class="label-text">Muito Alto: > 9.0%</span>
                        </label>
                    </li>
                </ul>
            </div>

             <div class="sidebar-divider"></div>

            <!-- IBU Section -->
            <div class="filter-section ibu-section">
                <div class="section-header">
                    <span class="header-pill">IBU (AMARGOR)</span>
                    <div class="header-line"></div>
                </div>
                <ul class="filter-options ibu-options">
                    <li>
                        <div class="ibu-dot" style="background-color: #dcedc8;"></div>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="0-5">
                            <span class="checkmark"></span>
                            <span class="label-text">0 – 5</span>
                        </label>
                    </li>
                    <li>
                        <div class="ibu-dot" style="background-color: #c5e1a5;"></div>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="5-15">
                            <span class="checkmark"></span>
                            <span class="label-text">5 – 15</span>
                        </label>
                    </li>
                    <li>
                        <div class="ibu-dot" style="background-color: #aed581;"></div>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="15-25">
                            <span class="checkmark"></span>
                            <span class="label-text">15 – 25</span>
                        </label>
                    </li>
                    <li>
                        <div class="ibu-dot" style="background-color: #9ccc65;"></div>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="25-40">
                            <span class="checkmark"></span>
                            <span class="label-text">25 – 40</span>
                        </label>
                    </li>
                    <li>
                        <div class="ibu-dot" style="background-color: #7cb342;"></div>
                        <label class="custom-checkbox">
                            <input type="checkbox" value="40-60">
                            <span class="checkmark"></span>
                            <span class="label-text">40 – 60</span>
                        </label>
                    </li>
                </ul>
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        // Search
        const searchInput = this.target.querySelector('#sidebar-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.trim();
                document.dispatchEvent(new CustomEvent('searchChanged', {
                    detail: { query: query }
                }));
                // Show clear button if query exists
                this.checkClearButtonVisibility();
            });
        }

        // Clear Filters Button
        const clearBtn = this.target.querySelector('#clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearAllFilters());
        }

        // Checkboxes
        const checkboxes = this.target.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', () => {
                this.emitCheckboxFilters();
                this.checkClearButtonVisibility();
            });
        });
    }

    emitCheckboxFilters() {
        const fermentationFilters = [];
        const abvFilters = [];
        const ibuFilters = [];

        // Get fermentation filters (1st section)
        this.target.querySelectorAll('.fermentation-section input[type="checkbox"]:checked').forEach(cb => {
            fermentationFilters.push(cb.value);
        });

        // Get ABV filters (2nd section)
        this.target.querySelectorAll('.abv-section input[type="checkbox"]:checked').forEach(cb => {
            abvFilters.push(cb.value);
        });

        // Get IBU filters (3rd section)
        this.target.querySelectorAll('.ibu-section input[type="checkbox"]:checked').forEach(cb => {
            ibuFilters.push(cb.value);
        });

        document.dispatchEvent(new CustomEvent('sidebarFilterChanged', {
            detail: {
                fermentation: fermentationFilters,
                abv: abvFilters,
                ibu: ibuFilters
            }
        }));

        // Update active filters display
        this.updateActiveFiltersDisplay(fermentationFilters, abvFilters, ibuFilters);
    }

    checkClearButtonVisibility() {
        const clearBtn = this.target.querySelector('#clear-filters-btn');
        const checkboxes = this.target.querySelectorAll('input[type="checkbox"]:checked');
        const searchInput = this.target.querySelector('#sidebar-search-input');
        const hasSearch = searchInput && searchInput.value.trim().length > 0;

        // Check ruler state relative to our knowledge
        const hasRulerFilters = this.rulerState.srmLabel || this.rulerState.ftuLabel;

        if (clearBtn) {
            if (checkboxes.length > 0 || hasSearch || hasRulerFilters) {
                clearBtn.style.display = 'flex';
            } else {
                clearBtn.style.display = 'none';
            }
        }
    }

    clearAllFilters() {
        const checkboxes = this.target.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);

        const searchInput = this.target.querySelector('#sidebar-search-input');
        if (searchInput) {
            searchInput.value = '';
            document.dispatchEvent(new CustomEvent('searchChanged', { detail: { query: '' } }));
        }

        // Reset ruler state
        this.rulerState = { srmLabel: null, ftuLabel: null };

        this.emitCheckboxFilters();
        this.checkClearButtonVisibility();

        // Clear badges container explicitly
        const badgeContainer = document.getElementById('active-filters-badges');
        if (badgeContainer) badgeContainer.innerHTML = '';

        // Also clear any other global filters if needed
        document.dispatchEvent(new CustomEvent('clearRulerFilters'));
        window.dispatchEvent(new CustomEvent('filterChanged', { detail: { filters: {} } }));
    }

    updateActiveFiltersDisplay(fermentation, abv, ibu) {
        const container = document.getElementById('active-filters-badges');

        if (!container) return;

        container.innerHTML = '';
        const badges = [];

        // Abbreviate and collect badges - logic simplified, styles in CSS (green text)
        fermentation.forEach(f => {
            const label = f.charAt(0).toUpperCase() + f.slice(1);
            badges.push(`<span class="filter-badge">Ferm: ${label}</span>`);
        });

        abv.forEach(f => {
            const labels = { 'session': '<4%', 'standard': '4-6%', 'high': '6-9%', 'very-high': '>9%' };
            badges.push(`<span class="filter-badge">ABV: ${labels[f] || f}</span>`);
        });

        ibu.forEach(f => {
            badges.push(`<span class="filter-badge">IBU: ${f}</span>`);
        });

        // Add Ruler Badges
        if (this.rulerState.srmLabel) {
            badges.push(`<span class="filter-badge">Cor: ${this.rulerState.srmLabel}</span>`);
        }
        if (this.rulerState.ftuLabel) {
            badges.push(`<span class="filter-badge">Claridade: ${this.rulerState.ftuLabel}</span>`);
        }

        if (badges.length > 0) {
            container.innerHTML = badges.join('');
            container.style.display = 'flex';
        } else {
            container.style.display = 'none';
        }
    }
}
