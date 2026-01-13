import { top250Beers } from './data/top-250-beers.js';
import { getBeerInfo } from './data/beer-parent-companies.js';
import { popularityRanking } from './data/ranking.js';
import { i18n } from './i18n/i18n.js';
import { beerHistoriesEn } from './data/beer-histories-en.js';
import { translateRegion, translateOrigin } from './i18n/data-translations.js';

// Cache busting for data updates
const v = new Date().getTime();

let hoverTimeout = null;
let currentPopup = null;
let currentFilters = { country: 'all', parent: 'all', search: '', sort: 'alphabetical' };

function getUniqueValues() {
    const countries = new Set();
    const parents = new Set();

    top250Beers.forEach(beer => {
        const info = getBeerInfo(beer);
        if (info.origin) {
            // Extract country name without emoji
            const countryName = info.origin.replace(/[\u{1F1E0}-\u{1F1FF}][\u{1F1E0}-\u{1F1FF}]/gu, '').trim();
            countries.add(countryName);
        }
        if (info.parent) {
            parents.add(info.parent);
        }
    });

    return {
        countries: Array.from(countries).sort(),
        parents: Array.from(parents).sort()
    };
}

function populateFilters() {
    const { countries, parents } = getUniqueValues();

    const countrySelect = document.getElementById('country-filter');
    const parentSelect = document.getElementById('parent-filter');

    if (countrySelect) {
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country;
            option.textContent = translateOrigin(country, i18n.currentLang);
            countrySelect.appendChild(option);
        });

        countrySelect.addEventListener('change', (e) => {
            currentFilters.country = e.target.value;
            renderGrid();
        });
    }

    if (parentSelect) {
        parents.forEach(parent => {
            const option = document.createElement('option');
            option.value = parent;
            option.textContent = parent;
            parentSelect.appendChild(option);
        });

        parentSelect.addEventListener('change', (e) => {
            currentFilters.parent = e.target.value;
            renderGrid();
        });
    }

    // Clear filters button
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            currentFilters = { country: 'all', parent: 'all', search: '', sort: 'alphabetical' };
            if (countrySelect) countrySelect.value = 'all';
            if (parentSelect) parentSelect.value = 'all';
            const sortSelect = document.getElementById('sort-filter');
            if (sortSelect) sortSelect.value = 'alphabetical';
            const searchInput = document.getElementById('search-filter');
            if (searchInput) searchInput.value = '';
            renderGrid();
        });
    }

    // Sort selector
    const sortSelect = document.getElementById('sort-filter');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentFilters.sort = e.target.value;
            renderGrid();
        });
    }

    // Search input
    const searchInput = document.getElementById('search-filter');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            currentFilters.search = e.target.value.toLowerCase();
            renderGrid();
        });
    }
}

function getFilteredBeers() {
    return top250Beers.filter(beer => {
        const info = getBeerInfo(beer);

        // Search filter
        if (currentFilters.search) {
            const searchTerm = currentFilters.search.toLowerCase();
            const beerName = beer.toLowerCase();
            const parentName = (info.parent || '').toLowerCase();
            const originName = (info.origin || '').toLowerCase();

            if (!beerName.includes(searchTerm) &&
                !parentName.includes(searchTerm) &&
                !originName.includes(searchTerm)) {
                return false;
            }
        }

        // Country filter
        if (currentFilters.country !== 'all') {
            const countryName = (info.origin || '').replace(/[\u{1F1E0}-\u{1F1FF}][\u{1F1E0}-\u{1F1FF}]/gu, '').trim();
            if (countryName !== currentFilters.country) {
                return false;
            }
        }

        // Parent company filter
        if (currentFilters.parent !== 'all') {
            if (info.parent !== currentFilters.parent) {
                return false;
            }
        }

        return true;
    }).sort((a, b) => {
        if (currentFilters.sort === 'popularity') {
            // Find index in ranking list
            // Normalize for loose matching? The user list seems exact enough but let's be safe
            // Actually user list has things like "Snow" and our list has "Snow Beer"
            // Let's rely on loose matching if exact fails?
            // For now, strict match per the user's list.

            const indexA = popularityRanking.indexOf(a);
            const indexB = popularityRanking.indexOf(b);

            // Handle items not in ranking (put them at bottom)
            if (indexA === -1 && indexB === -1) return a.localeCompare(b, 'pt-BR');
            if (indexA === -1) return 1;
            if (indexB === -1) return -1;

            return indexA - indexB;
        } else {
            return a.localeCompare(b, 'pt-BR');
        }
    });
}

function renderGrid() {
    const mainContainer = document.querySelector('.top-brands-container');
    if (!mainContainer) return;

    // Check if grid already exists to avoid duplication
    let grid = document.getElementById('brands-grid-250');
    if (!grid) {
        grid = document.createElement('div');
        grid.id = 'brands-grid-250';
        grid.className = 'brands-grid-250';
        mainContainer.appendChild(grid);
    }

    const filteredBeers = getFilteredBeers();

    // Update count
    const countEl = document.getElementById('filter-count');
    if (countEl) {
        countEl.textContent = `${filteredBeers.length} ${i18n.t('brands.count_suffix')}`;
    }

    // Only beer name with hover handler for popup
    grid.innerHTML = filteredBeers.map(beer => {
        const info = getBeerInfo(beer);
        return `
            <div class="brand-item" data-beer="${beer}" style="border-left: 4px solid ${info.color};">
                <span class="brand-name">${beer}</span>
            </div>
        `;
    }).join('');

    // Show message if no results
    if (filteredBeers.length === 0) {
        grid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">${i18n.t('brands.no_results')}</div>`;
    }

    // Add hover handlers with 500ms delay
    grid.querySelectorAll('.brand-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const beerName = item.dataset.beer;

            // Clear any existing timeout
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
            }

            // Hide any existing popup
            hidePopup();

            // Set timeout for 500ms before showing popup
            hoverTimeout = setTimeout(() => {
                showPopup(beerName, item);
            }, 500);
        });

        item.addEventListener('mouseleave', (e) => {
            // Clear the timeout if mouse leaves before 500ms
            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }

            // Check if mouse moved to popup
            const relatedTarget = e.relatedTarget;
            if (relatedTarget && relatedTarget.closest('.beer-popup')) {
                return; // Don't hide if moving to popup
            }

            // Small delay before hiding to allow moving to popup
            setTimeout(() => {
                if (currentPopup && !currentPopup.matches(':hover') && !item.matches(':hover')) {
                    hidePopup();
                }
            }, 100);
        });
    });

    // Hide popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.brand-item') && !e.target.closest('.beer-popup')) {
            hidePopup();
        }
    });
}

function showPopup(beerName, targetElement) {
    const info = getBeerInfo(beerName);

    // Remove any existing popup
    hidePopup();

    // Determine history text based on language
    let historyText = info.history; // Default to existing (Portuguese)
    if (i18n.currentLang === 'en' && beerHistoriesEn[beerName]) {
        historyText = beerHistoriesEn[beerName];
    }

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'beer-popup';
    popup.innerHTML = `
        <div class="beer-popup-header" style="background: ${info.color};">
            <h3 class="beer-popup-title">${beerName}</h3>
        </div>
        <div class="beer-popup-body">
            <div class="beer-popup-info">
                <div class="popup-info-row">
                    <span class="popup-info-label">${i18n.t('popup.parent')}</span>
                    <span class="popup-info-value">${info.parent}</span>
                </div>
                <div class="popup-info-row">
                    <span class="popup-info-label">${i18n.t('popup.region')}</span>
                    <span class="popup-info-value">${translateRegion(info.region, i18n.currentLang)}</span>
                </div>
                <div class="popup-info-row">
                    <span class="popup-info-label">${i18n.t('popup.origin')}</span>
                    <span class="popup-info-value">${info.origin ? translateOrigin(info.origin, i18n.currentLang) : i18n.t('popup.unknown')}</span>
                </div>
                ${info.year || info.description ? `
                <div class="popup-founding-section">
                    <div class="popup-info-row no-border">
                        <span class="popup-info-label">${i18n.t('popup.founded')}</span>
                        <span class="popup-info-value">${info.year || ''}</span>
                    </div>
                    ${info.description ? `<div class="popup-founding-note">${info.description}</div>` : ''}
                </div>` : ''}
                ${historyText ? `
                <div class="popup-history">
                    <h4 class="popup-history-title">${i18n.t('popup.history')}</h4>
                    <p class="popup-history-text">${historyText}</p>
                </div>` : ''}
            </div>
        </div>
    `;

    // Add popup to target element
    targetElement.appendChild(popup);
    currentPopup = popup;

    // Trigger animation
    requestAnimationFrame(() => {
        popup.classList.add('active');
    });

    // Add hover handler to popup itself to keep it open
    popup.addEventListener('mouseenter', () => {
        if (hoverTimeout) {
            clearTimeout(hoverTimeout);
        }
    });

    popup.addEventListener('mouseleave', () => {
        hidePopup();
    });

    // Adjust position if popup goes off screen
    adjustPopupPosition(popup, targetElement);
}

function hidePopup() {
    if (currentPopup) {
        currentPopup.remove();
        currentPopup = null;
    }
}

function adjustPopupPosition(popup, targetElement) {
    // Reset styles to measure natural dimensions
    popup.style.top = '';
    popup.style.left = '';
    popup.style.right = '';
    popup.style.bottom = '';
    popup.style.transform = '';
    popup.style.marginTop = '';
    popup.style.marginBottom = '';
    popup.style.marginLeft = '';
    popup.style.marginRight = '';

    const popupRect = popup.getBoundingClientRect();
    const targetRect = targetElement.getBoundingClientRect();
    const viewport = { w: window.innerWidth, h: window.innerHeight };
    const margin = 10;

    // Dimensions
    const pW = popupRect.width;
    const pH = popupRect.height;

    // Determine preferred side based on screen position
    const targetCenter = targetRect.left + (targetRect.width / 2);
    const isLeftHalf = targetCenter < (viewport.w / 2);

    // Define candidates with strict space checks and CSS overrides
    const candidates = [
        {
            name: 'right',
            available: (targetRect.right + pW + margin) <= viewport.w,
            score: (viewport.w - (targetRect.right + pW)),
            apply: () => {
                popup.style.top = '50%';
                popup.style.bottom = 'auto'; // Explicit override
                popup.style.left = '100%';
                popup.style.right = 'auto'; // Explicit override
                popup.style.transform = 'translateY(-50%)';
                popup.style.marginLeft = '8px';
                popup.style.marginRight = '0';
            }
        },
        {
            name: 'left',
            available: (targetRect.left - pW - margin) >= 0,
            score: (targetRect.left - pW),
            apply: () => {
                popup.style.top = '50%';
                popup.style.bottom = 'auto'; // Explicit override
                popup.style.right = '100%';
                popup.style.left = 'auto';   // CRITICAL: Override CSS left: 50%
                popup.style.transform = 'translateY(-50%)';
                popup.style.marginRight = '8px';
                popup.style.marginLeft = '0';
            }
        },
        {
            name: 'bottom',
            available: (targetRect.bottom + pH + margin) <= viewport.h,
            score: (viewport.h - (targetRect.bottom + pH)),
            apply: () => {
                popup.style.top = '100%';
                popup.style.bottom = 'auto'; // Explicit override
                popup.style.left = '50%';
                popup.style.right = 'auto';
                popup.style.transform = 'translateX(-50%)';
                popup.style.marginTop = '8px';
                popup.style.marginBottom = '0';
            }
        },
        {
            name: 'top',
            available: (targetRect.top - pH - margin) >= 0,
            score: (targetRect.top - pH),
            apply: () => {
                popup.style.bottom = '100%';
                popup.style.top = 'auto'; // CRITICAL: Override CSS top: 100%
                popup.style.left = '50%';
                popup.style.right = 'auto';
                popup.style.transform = 'translateX(-50%)';
                popup.style.marginBottom = '8px';
                popup.style.marginTop = '0';
            }
        }
    ];

    // Priority Selection Logic
    const isVeryTop = targetRect.top < (viewport.h * 0.25);
    const isVeryBottom = targetRect.bottom > (viewport.h * 0.75);

    let chosen = null;

    // SCENARIO 1: Extreme Top - Force Bottom
    if (isVeryTop) {
        const bottomCand = candidates.find(c => c.name === 'bottom');
        if (bottomCand.available) chosen = bottomCand;
    }

    // SCENARIO 2: Extreme Bottom - Force Top
    if (isVeryBottom && !chosen) {
        const topCand = candidates.find(c => c.name === 'top');
        if (topCand.available) chosen = topCand;
    }

    // SCENARIO 3: Middle - Prefer Sides
    if (!chosen) {
        const preferredSide = isLeftHalf ? 'right' : 'left';
        const sideCand = candidates.find(c => c.name === preferredSide);
        if (sideCand && sideCand.available) {
            chosen = sideCand;
        } else {
            // Try opposite side
            const oppositeSide = isLeftHalf ? 'left' : 'right';
            const oppCand = candidates.find(c => c.name === oppositeSide);
            if (oppCand && oppCand.available) {
                chosen = oppCand;
            }
        }
    }

    // SCENARIO 4: Fallback
    if (!chosen) {
        // Find ANY available
        const anyAvailable = candidates.filter(c => c.available).sort((a, b) => b.score - a.score)[0];
        if (anyAvailable) {
            chosen = anyAvailable;
        } else {
            // Nothing strictly fits, pick largest score
            chosen = candidates.reduce((prev, current) => (prev.score > current.score) ? prev : current);
        }
    }

    // Apply Choice
    chosen.apply();

    // FINAL CLAMPING
    const finalRect = popup.getBoundingClientRect();

    // Horizontal Clamp
    if (finalRect.left < margin) {
        if (chosen.name === 'top' || chosen.name === 'bottom') {
            const shift = margin - finalRect.left;
            popup.style.transform = `translateX(calc(-50% + ${shift}px))`;
        } else {
            popup.style.left = margin + 'px';
            if (chosen.name === 'right') popup.style.transform = 'translateY(-50%)';
        }
    } else if (finalRect.right > viewport.w - margin) {
        if (chosen.name === 'top' || chosen.name === 'bottom') {
            const shift = finalRect.right - (viewport.w - margin);
            popup.style.transform = `translateX(calc(-50% - ${shift}px))`;
        }
    }

    // Vertical Clamp
    if (chosen.name === 'left' || chosen.name === 'right') {
        if (finalRect.top < margin) {
            const shift = margin - finalRect.top;
            popup.style.transform = `translateY(calc(-50% + ${shift}px))`;
        } else if (finalRect.bottom > viewport.h - margin) {
            const shift = finalRect.bottom - (viewport.h - margin);
            popup.style.transform = `translateY(calc(-50% - ${shift}px))`;
        }
    }
}

// Re-render on language change
window.addEventListener('languageChanged', (e) => {
    populateFilters();
    renderGrid();
});

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderGrid();
});
