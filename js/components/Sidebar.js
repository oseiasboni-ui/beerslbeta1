import { i18n } from '../i18n/i18n.js';

export class Sidebar {
    constructor(targetId) {
        this.target = document.getElementById(targetId);

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());
    }

    render() {
        this.target.innerHTML = `
            <div class="clear-filters-wrapper">
                <button id="clear-filters-btn" class="clear-filters-btn">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                     </svg>
                     <span data-i18n="sidebar.clear_filters">${i18n.t('sidebar.clear_filters')}</span>
                </button>
            </div>
            
            <div class="filter-group">
                <h3 data-i18n="sidebar.fermentation">${i18n.t('sidebar.fermentation')}</h3>
                <ul class="filter-list">
                    <li><label><input type="checkbox" value="ale"> <span data-i18n="sidebar.ale">${i18n.t('sidebar.ale')}</span></label></li>
                    <li><label><input type="checkbox" value="lager"> <span data-i18n="sidebar.lager">${i18n.t('sidebar.lager')}</span></label></li>
                    <li><label><input type="checkbox" value="hibrida"> <span data-i18n="sidebar.hybrid">${i18n.t('sidebar.hybrid')}</span></label></li>
                    <li><label><input type="checkbox" value="wild"> <span data-i18n="sidebar.wild">${i18n.t('sidebar.wild')}</span></label></li>
                </ul>
            </div>
            
            <div class="filter-group">
                <h3 data-i18n="sidebar.abv">${i18n.t('sidebar.abv')}</h3>
                <ul class="filter-list">
                    <li><label><input type="checkbox" value="session"> <span data-i18n="sidebar.session">${i18n.t('sidebar.session')}</span></label></li>
                    <li><label><input type="checkbox" value="standard"> <span data-i18n="sidebar.standard">${i18n.t('sidebar.standard')}</span></label></li>
                    <li><label><input type="checkbox" value="high"> <span data-i18n="sidebar.high">${i18n.t('sidebar.high')}</span></label></li>
                    <li><label><input type="checkbox" value="very-high"> <span data-i18n="sidebar.very_high">${i18n.t('sidebar.very_high')}</span></label></li>
                </ul>
            </div>
            
             <div class="filter-group">
                <h3 data-i18n="sidebar.ibu">${i18n.t('sidebar.ibu')}</h3>
                 <ul class="filter-list ibu-list">
                    <li><label><span class="ibu-indicator" style="background: #e8f5e9;"></span> <input type="checkbox" value="0-5"> 0 – 5</label></li>
                    <li><label><span class="ibu-indicator" style="background: #c8e6c9;"></span> <input type="checkbox" value="5-15"> 5 – 15</label></li>
                    <li><label><span class="ibu-indicator" style="background: #a5d6a7;"></span> <input type="checkbox" value="15-25"> 15 – 25</label></li>
                    <li><label><span class="ibu-indicator" style="background: #81c784;"></span> <input type="checkbox" value="25-40"> 25 – 40</label></li>
                    <li><label><span class="ibu-indicator" style="background: #66bb6a;"></span> <input type="checkbox" value="40-60"> 40 – 60</label></li>
                    <li><label><span class="ibu-indicator" style="background: #4caf50;"></span> <input type="checkbox" value="60-80"> 60 – 80</label></li>
                    <li><label><span class="ibu-indicator" style="background: #43a047;"></span> <input type="checkbox" value="80-120"> 80 – 120</label></li>
                    <li><label><span class="ibu-indicator" style="background: #2e7d32;"></span> <input type="checkbox" value="120+"> 120+</label></li>
                 </ul>
            </div>
        `;

        this.addEventListeners();
    }

    addEventListeners() {
        const clearBtn = this.target.querySelector('#clear-filters-btn');
        if (clearBtn) {
            clearBtn.addEventListener('click', () => this.clearAllFilters());
        }
    }

    clearAllFilters() {
        const checkboxes = this.target.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);

        // Dispatch event for other components to listen to
        window.dispatchEvent(new CustomEvent('filterChanged', { detail: { filters: {} } }));
    }
}
