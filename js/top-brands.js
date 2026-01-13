import { top250Beers } from './data/top-250-beers.js';
import { getBeerInfo } from './data/beer-parent-companies.js';

// Cache busting for data updates
const v = new Date().getTime();

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

    // Only beer name with click handler for modal
    grid.innerHTML = top250Beers.map(beer => {
        const info = getBeerInfo(beer);
        return `
            <div class="brand-item" data-beer="${beer}" style="border-left: 4px solid ${info.color};">
                <span class="brand-name">${beer}</span>
            </div>
        `;
    }).join('');

    // Add click handlers
    grid.querySelectorAll('.brand-item').forEach(item => {
        item.addEventListener('click', () => {
            const beerName = item.dataset.beer;
            showModal(beerName);
        });
    });
}

function showModal(beerName) {
    const info = getBeerInfo(beerName);

    // Create modal if not exists
    let modal = document.getElementById('beer-modal');
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'beer-modal';
        modal.className = 'beer-modal-overlay';
        document.body.appendChild(modal);
    }

    modal.innerHTML = `
        <div class="beer-modal-content">
            <button class="beer-modal-close">&times;</button>
            <div class="beer-modal-header" style="background: ${info.color};">
                <h2 class="beer-modal-title">${beerName}</h2>
            </div>
            <div class="beer-modal-body">
                <div class="beer-modal-info">
                    <div class="info-row">
                        <span class="info-label">Parent Company / Owner</span>
                        <span class="info-value">${info.parent}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Current HQ / Main Region</span>
                        <span class="info-value">${info.region}</span>
                    </div>
                    <div class="info-row">
                        <span class="info-label">Country of Origin (Birthplace)</span>
                        <span class="info-value">${info.origin}</span>
                    </div>
                </div>
            </div>
        </div>
    `;

    modal.classList.add('active');

    // Close handlers
    modal.querySelector('.beer-modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
    });
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Force module reload if needed, but import updates usually handle it
    renderGrid();
});
