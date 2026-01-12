import { i18n } from '../i18n/i18n.js';

export class Grid {
    constructor(targetId, data) {
        this.target = document.getElementById(targetId);
        this.data = data;

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());

        // Listen for beer updates (e.g. from Modal upload)
        document.addEventListener('beerUpdated', (e) => {
            const updatedBeer = e.detail;
            const index = this.data.findIndex(b => b.id === updatedBeer.id);
            if (index !== -1) {
                this.data[index] = updatedBeer;
                this.render();
            }
        });
    }

    render() {
        this.target.innerHTML = this.data.map(beer => this.createCard(beer)).join('');
        this.attachEvents();
    }

    update(newData) {
        this.data = newData;
        this.render();
    }

    createCard(beer) {
        // Try to get translation for beer name, fallback to original name
        const translationKey = `beer.${beer.id}`;
        const translatedName = i18n.t(translationKey);
        const displayName = translatedName !== translationKey ? translatedName : beer.name;

        // Check if beer has a custom uploaded image
        const hasCustomImage = beer.image && !beer.image.includes('placeholder');
        const imageUrl = hasCustomImage ? beer.image : null;

        return `
                <div class="beer-card" data-id="${beer.id}">
                    <div class="card-header" style="background-color: ${beer.appearance?.colorHex || '#34495e'}">
                        <span class="origin-flag">${beer.origin || '🌍'}</span>
                        ${imageUrl ? `
                            <img src="${imageUrl}" alt="${displayName}" class="card-beer-image" style="width: 100%; height: 100%; object-fit: cover;">
                    ` : `
                        <span class="beer-glass-icon">🍺</span>
                    `}
                </div>
                <div class="card-body">
                    <h3>${displayName}</h3>
                    <div class="family">${beer.family || beer.category || 'Ale'}</div>
                    <div class="card-stats">
                        <span class="stat-badge">ABV: ${beer.abv || '?'}</span>
                        <span class="stat-badge">IBU: ${beer.specs?.ibu || '?'}</span>
                    </div>
                </div>
            </div>
        `;
    }

    attachEvents() {
        this.target.querySelectorAll('.beer-card').forEach(card => {
            card.addEventListener('click', () => {
                const beerId = card.dataset.id;
                const beer = this.data.find(b => b.id === beerId);
                if (beer) {
                    document.dispatchEvent(new CustomEvent('openModal', { detail: beer }));
                }
            });
        });
    }
}
