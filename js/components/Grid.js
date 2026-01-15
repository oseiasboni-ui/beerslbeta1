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

    getContrastColor(hexColor) {
        if (!hexColor) return { text: '#ffffff', badge: 'rgba(255,255,255,0.2)' };

        const hex = hexColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);

        // Calculate relative luminance (perceived brightness)
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

        // If bright, return dark text. If dark, return white text.
        // Threshold of 128 is standard, but 140 is safer for "readable"
        const isLight = yiq >= 140;

        return {
            text: isLight ? '#1a1a1a' : '#ffffff',
            badge: isLight ? 'rgba(0,0,0,0.1)' : 'rgba(255,255,255,0.2)',
            flagBorder: isLight ? '1px solid rgba(0,0,0,0.1)' : 'none'
        };
    }

    createCard(beer) {
        // Try to get translation for beer name, fallback to original name
        const translationKey = `beer.${beer.id}`;
        const translatedName = i18n.t(translationKey);
        const displayName = translatedName !== translationKey ? translatedName : beer.name;

        // Check if beer has a custom uploaded image
        const hasCustomImage = beer.image && !beer.image.includes('placeholder');
        const imageUrl = hasCustomImage ? beer.image : null;

        // Get fermentation type (Ale, Lager, Hybrid, Wild) from category
        const getFermentationType = (category) => {
            if (!category) return 'Ale';
            const cat = category.toLowerCase();
            if (cat.includes('lager') || cat.includes('pilsner') || cat.includes('bock')) return 'Lager';
            if (cat.includes('hybrid') || cat.includes('steam') || cat.includes('kölsch')) return 'Hybrid';
            if (cat.includes('wild') || cat.includes('sour') || cat.includes('lambic')) return 'Wild';
            return 'Ale';
        };
        const fermentationType = getFermentationType(beer.category);

        const bgColor = beer.appearance?.colorHex || '#34495e';
        const styles = this.getContrastColor(bgColor);

        return `
                <div class="beer-card" data-id="${beer.id}">
                    <div class="card-header" style="background-color: #ffffff;">
                        ${imageUrl ? `
                            <img src="${imageUrl}" alt="${displayName}" class="card-beer-image" style="width: 100%; height: 100%; object-fit: cover;">
                    ` : `
                        <span class="beer-glass-icon">🍺</span>
                    `}
                </div>
                <div class="card-body" style="background-color: ${bgColor}">
                    <div class="card-body-header">
                        <h3 style="color: ${styles.text}; text-shadow: none;">${displayName}</h3>
                        <span class="card-origin-flag" style="border: ${styles.flagBorder}">${beer.origin || '🌍'}</span>
                    </div>
                    <div class="family" style="color: ${styles.text}; opacity: 0.9;">${i18n.t('sidebar.' + fermentationType.toLowerCase())}</div>
                    <div class="card-stats">
                        <span class="stat-badge" style="background: ${styles.badge}; color: ${styles.text};">ABV: ${beer.abv || '?'}</span>
                        <span class="stat-badge" style="background: ${styles.badge}; color: ${styles.text};">IBU: ${beer.specs?.ibu || '?'}</span>
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
