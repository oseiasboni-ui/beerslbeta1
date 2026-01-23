import { top250Beers } from './data/top-250-beers.js?v=40';
import { getBeerInfo } from './data/beer-parent-companies.js?v=40';
import { popularityRanking } from './data/ranking.js?v=40';
import { i18n } from './i18n/i18n.js';
import { beerHistoriesEn } from './data/beer-histories-en.js?v=40';
import { beerHistoriesDe } from './data/beer-histories-de.js?v=40';
import { translateRegion, translateOrigin } from './i18n/data-translations.js?v=40';

// Cache busting for data updates
const v = new Date().getTime();

let hoverTimeout = null;
let currentPopup = null;
let currentFilters = { country: 'all', parent: 'all', search: '', sort: 'alphabetical' };

function getUniqueValues() {
    const countryCount = {};
    const parentCount = {};

    top250Beers.forEach(beer => {
        const info = getBeerInfo(beer);
        if (info.origin) {
            // Extract country name without emoji
            const countryName = info.origin.replace(/[\u{1F1E0}-\u{1F1FF}][\u{1F1E0}-\u{1F1FF}]/gu, '').trim();
            countryCount[countryName] = (countryCount[countryName] || 0) + 1;
        }
        if (info.parent) {
            parentCount[info.parent] = (parentCount[info.parent] || 0) + 1;
        }
    });

    // Sort countries by count (descending) for popularity ordering
    const countriesSorted = Object.entries(countryCount)
        .sort((a, b) => b[1] - a[1])
        .map(([country, count]) => ({ name: country, count }));

    // Sort parents by count (descending) for popularity ordering
    const parentsSorted = Object.entries(parentCount)
        .sort((a, b) => b[1] - a[1])
        .map(([parent, count]) => ({ name: parent, count }));

    return {
        countries: countriesSorted,
        parents: parentsSorted
    };
}

function populateFilters() {
    const { countries, parents } = getUniqueValues();

    // Fix: Find filter groups even if original select is gone (replaced by custom dropdown)
    let countryFilterGroup = document.querySelector('#country-filter')?.closest('.filter-group');
    if (!countryFilterGroup) {
        countryFilterGroup = document.querySelector('#country-dropdown')?.closest('.filter-group');
    }

    let parentFilterGroup = document.querySelector('#parent-filter')?.closest('.filter-group');
    if (!parentFilterGroup) {
        parentFilterGroup = document.querySelector('#parent-dropdown')?.closest('.filter-group');
    }

    // Custom Country Dropdown with Search
    if (countryFilterGroup) {
        const oldSelect = document.getElementById('country-filter');
        if (oldSelect) oldSelect.remove();

        // Remove existing custom dropdown to force re-render with new language
        const existingDropdown = document.getElementById('country-dropdown');
        if (existingDropdown) existingDropdown.remove();

        // Create custom dropdown structure
        const dropdown = document.createElement('div');
        dropdown.className = 'custom-dropdown';
        dropdown.id = 'country-dropdown';
        dropdown.innerHTML = `
            <div class="dropdown-selected" id="country-selected">
                <span class="dropdown-selected-text">${i18n.t('filters.country_all') || 'Todos os Países'}</span>
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
            <div class="dropdown-menu" id="country-menu">
                <div class="dropdown-search-wrapper">
                    <input type="text" class="dropdown-search" id="country-search" placeholder="" autocomplete="off">
                </div>
                <div class="dropdown-list" id="country-list">
                    <div class="dropdown-item selected" data-value="all">${i18n.t('filters.country_all') || 'Todos os Países'}</div>
                    ${countries.map(c => `
                        <div class="dropdown-item" data-value="${c.name}">
                            <span class="country-name">${translateOrigin(c.name, i18n.currentLang)}</span>
                            <span class="country-count">${c.count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        countryFilterGroup.appendChild(dropdown);

        // Dropdown toggle logic
        const selected = dropdown.querySelector('#country-selected');
        const menu = dropdown.querySelector('#country-menu');
        const searchInput = dropdown.querySelector('#country-search');
        const list = dropdown.querySelector('#country-list');

        selected.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            if (dropdown.classList.contains('open')) {
                searchInput.focus();
            }
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        // Search functionality
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            list.querySelectorAll('.dropdown-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });

        // Item selection
        list.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                list.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                const value = item.dataset.value;
                currentFilters.country = value;
                selected.querySelector('.dropdown-selected-text').textContent =
                    value === 'all'
                        ? (i18n.t('filters.country_all') || 'Todos os Países')
                        : item.querySelector('.country-name')?.textContent || item.textContent;
                dropdown.classList.remove('open');
                searchInput.value = '';
                list.querySelectorAll('.dropdown-item').forEach(i => i.style.display = '');
                renderGrid();
            });
        });
    }

    // Custom Parent Company Dropdown with Search
    if (parentFilterGroup) {
        const oldSelect = document.getElementById('parent-filter');
        if (oldSelect) oldSelect.remove();

        // Remove existing custom dropdown to force re-render with new language
        const existingDropdown = document.getElementById('parent-dropdown');
        if (existingDropdown) existingDropdown.remove();

        const dropdown = document.createElement('div');
        dropdown.className = 'custom-dropdown';
        dropdown.id = 'parent-dropdown';
        dropdown.innerHTML = `
            <div class="dropdown-selected" id="parent-selected">
                <span class="dropdown-selected-text">${i18n.t('filters.parent_all') || 'Todas as Empresas'}</span>
                <svg class="dropdown-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 9l6 6 6-6"/>
                </svg>
            </div>
            <div class="dropdown-menu" id="parent-menu">
                <div class="dropdown-search-wrapper">
                    <input type="text" class="dropdown-search" id="parent-search" placeholder="" autocomplete="off">
                </div>
                <div class="dropdown-list" id="parent-list">
                    <div class="dropdown-item selected" data-value="all">${i18n.t('filters.parent_all') || 'Todas as Empresas'}</div>
                    ${parents.map(p => `
                        <div class="dropdown-item" data-value="${p.name}">
                            <span class="country-name">${p.name}</span>
                            <span class="country-count">${p.count}</span>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        parentFilterGroup.appendChild(dropdown);

        const selected = dropdown.querySelector('#parent-selected');
        const searchInput = dropdown.querySelector('#parent-search');
        const list = dropdown.querySelector('#parent-list');

        selected.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdown.classList.toggle('open');
            if (dropdown.classList.contains('open')) {
                searchInput.focus();
            }
        });

        document.addEventListener('click', (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('open');
            }
        });

        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();
            list.querySelectorAll('.dropdown-item').forEach(item => {
                const text = item.textContent.toLowerCase();
                item.style.display = text.includes(query) ? '' : 'none';
            });
        });

        list.querySelectorAll('.dropdown-item').forEach(item => {
            item.addEventListener('click', () => {
                list.querySelectorAll('.dropdown-item').forEach(i => i.classList.remove('selected'));
                item.classList.add('selected');
                const value = item.dataset.value;
                currentFilters.parent = value;
                selected.querySelector('.dropdown-selected-text').textContent =
                    value === 'all'
                        ? (i18n.t('filters.parent_all') || 'Todas as Empresas')
                        : item.querySelector('.country-name')?.textContent || item.textContent;
                dropdown.classList.remove('open');
                searchInput.value = '';
                list.querySelectorAll('.dropdown-item').forEach(i => i.style.display = '');
                renderGrid();
            });
        });
    }

    // Clear filters button
    const clearBtn = document.getElementById('clear-filters');
    if (clearBtn) {
        clearBtn.addEventListener('click', () => {
            currentFilters = { country: 'all', parent: 'all', search: '', sort: 'alphabetical' };
            // Reset custom country dropdown
            const countryDropdown = document.getElementById('country-dropdown');
            if (countryDropdown) {
                const selectedText = countryDropdown.querySelector('.dropdown-selected-text');
                if (selectedText) selectedText.textContent = i18n.t('filters.country_all') || 'Todos os Países';
                countryDropdown.querySelectorAll('.dropdown-item').forEach(i => {
                    i.classList.remove('selected');
                    if (i.dataset.value === 'all') i.classList.add('selected');
                });
            }
            // Reset custom parent dropdown
            const parentDropdown = document.getElementById('parent-dropdown');
            if (parentDropdown) {
                const selectedText = parentDropdown.querySelector('.dropdown-selected-text');
                if (selectedText) selectedText.textContent = i18n.t('filters.parent_all') || 'Todas as Empresas';
                parentDropdown.querySelectorAll('.dropdown-item').forEach(i => {
                    i.classList.remove('selected');
                    if (i.dataset.value === 'all') i.classList.add('selected');
                });
            }
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
        const storedImage = localStorage.getItem(`brand-image-${beer}`);
        const hasImage = !!storedImage;

        return `
            <div class="brand-item ${hasImage ? 'has-image' : ''}" data-beer="${beer}" style="border-left: 4px solid ${info.color};">
                <button class="edit-image-btn" title="Upload Image" data-beer="${beer.replace(/'/g, "\\'")}">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"></path><circle cx="12" cy="13" r="4"></circle></svg>
                </button>
                ${hasImage ? `<img src="${storedImage}" alt="${beer}" class="brand-image-preview">` : ''}
                <span class="brand-name">${beer}</span>
            </div>
        `;
    }).join('');

    // Show message if no results
    if (filteredBeers.length === 0) {
        grid.innerHTML = `<div class="no-results" style="grid-column: 1/-1; text-align: center; padding: 2rem; color: #6b7280;">${i18n.t('brands.no_results')}</div>`;
    }



    // Hide popup when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.brand-item') &&
            !e.target.closest('.beer-popup') &&
            !e.target.closest('.upload-modal') &&
            !e.target.closest('.cropper-container')) {
            hidePopup();
        }
    });


}

// Global state for upload
let currentUploadBeer = null;
let cropper = null;

// New robust event delegation system
function initializeInteractions() {
    const mainContainer = document.querySelector('.top-brands-container');

    if (mainContainer) {
        // 1. Hover Delegation (Popup)
        mainContainer.addEventListener('mouseover', (e) => {
            const item = e.target.closest('.brand-item');
            if (!item) return;

            const beerName = item.dataset.beer;

            if (hoverTimeout) clearTimeout(hoverTimeout);
            hidePopup();

            hoverTimeout = setTimeout(() => {
                showPopup(beerName, item);
            }, 500);
        });

        mainContainer.addEventListener('mouseout', (e) => {
            const item = e.target.closest('.brand-item');
            if (!item) return;

            if (hoverTimeout) {
                clearTimeout(hoverTimeout);
                hoverTimeout = null;
            }

            const relatedTarget = e.relatedTarget;
            if (relatedTarget && relatedTarget.closest('.beer-popup')) {
                return;
            }

            setTimeout(() => {
                if (currentPopup && !currentPopup.matches(':hover') && !item.matches(':hover')) {
                    hidePopup();
                }
            }, 100);
        });

        // 2. Click Delegation (Upload)
        mainContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.edit-image-btn');
            if (btn) {
                // Get beer name from parent .brand-item to avoid escaping issues
                const brandItem = btn.closest('.brand-item');
                const beerName = brandItem ? brandItem.dataset.beer : btn.dataset.beer;
                currentUploadBeer = beerName;

                const fileInput = document.getElementById('brand-image-input');
                if (fileInput) fileInput.click();
            }
        });
    }

    // 3. File Input Change Logic
    const fileInput = document.getElementById('brand-image-input');
    const modal = document.getElementById('upload-modal');
    const imageElement = document.getElementById('image-to-crop');

    if (fileInput && modal && imageElement) {
        fileInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    imageElement.src = e.target.result;
                    modal.classList.add('open');
                    if (cropper) cropper.destroy();

                    imageElement.onload = function () {
                        cropper = new Cropper(imageElement, {
                            aspectRatio: 1,
                            viewMode: 1,
                            autoCropArea: 0.8
                        });
                    };
                };
                reader.readAsDataURL(file);
            }
            fileInput.value = '';
        });
    }
}

// Initialize global handlers once
// Initialize global handlers immediately (script is defer/module so DOM is ready)
initializeInteractions();
const modal = document.getElementById('upload-modal');
const btnSave = document.getElementById('btn-save');
const btnDiscard = document.getElementById('btn-discard');
const btnRotate = document.getElementById('btn-rotate');

if (btnSave) {
    btnSave.addEventListener('click', () => {
        if (cropper && currentUploadBeer) {
            const canvas = cropper.getCroppedCanvas({
                width: 300,
                height: 300
            });

            const dataUrl = canvas.toDataURL('image/jpeg', 0.8);

            // Save to localStorage
            localStorage.setItem(`brand-image-${currentUploadBeer}`, dataUrl);

            // Update grid
            renderGrid();

            // Close modal
            modal.classList.remove('open');
            cropper.destroy();
            cropper = null;
        }
    });
}

if (btnDiscard) {
    btnDiscard.addEventListener('click', () => {
        modal.classList.remove('open');
        if (cropper) {
            cropper.destroy();
            cropper = null;
        }
    });
}

if (btnRotate) {
    btnRotate.addEventListener('click', () => {
        if (cropper) {
            cropper.rotate(90);
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
    } else if (i18n.currentLang === 'de' && beerHistoriesDe[beerName]) {
        historyText = beerHistoriesDe[beerName];
    }

    // Create popup
    const popup = document.createElement('div');
    popup.className = 'beer-popup';
    // Add arrow element inside to style it with JS color if needed, or stick to CSS
    // For now we use CSS pseudo element, but we need to know the position.

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
    popup.dataset.position = chosen.name;

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
    console.log('Language changed to:', e.detail.lang);
    populateFilters();
    renderGrid();
    // Also translate static elements
    i18n.translatePage();
});

document.addEventListener('DOMContentLoaded', () => {
    populateFilters();
    renderGrid();
});

/* Hero Carousel Logic */
function initHeroCarousel() {
    const slides = document.querySelectorAll('.hero-slide');
    const dots = document.querySelectorAll('.hero-dot');

    if (slides.length === 0) return;

    let currentSlide = 0;
    const intervalTime = 30000; // 30 seconds
    let slideInterval;

    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        if (slides[index]) {
            slides[index].classList.add('active');
        }
        if (dots[index]) {
            dots[index].classList.add('active');
        }
        currentSlide = index;
    }

    function nextSlide() {
        let next = (currentSlide + 1) % slides.length;
        showSlide(next);
    }

    // Start auto rotation
    function startRotation() {
        if (slideInterval) clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, intervalTime);
    }

    startRotation();

    // Dots click event
    dots.forEach(dot => {
        dot.addEventListener('click', () => {
            const index = parseInt(dot.dataset.index);
            showSlide(index);
            startRotation(); // Reset timer
        });
    });
}

// Initialise carousel when DOM is ready
document.addEventListener('DOMContentLoaded', initHeroCarousel);
