import { i18n } from '../i18n/i18n.js';

export class Grid {
    constructor(targetId, data) {
        this.target = document.getElementById(targetId);
        this.data = data;

        // Listen for language changes
        window.addEventListener('languageChanged', () => this.render());
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

        return `
            <div class="beer-card" data-id="${beer.id}">
                <div class="card-header" style="background-color: ${beer.appearance?.colorHex || '#34495e'}">
                    <span class="beer-glass-icon">🍺</span>
                </div>
                <div class="card-body">
                    <h3>${displayName}</h3>
                </div>
            </div>
        `;
    }

    attachEvents() {
        this.target.querySelectorAll('.beer-card').forEach(card => {
            card.addEventListener('click', () => {
                const beerId = parseInt(card.dataset.id);
                const beer = this.data.find(b => b.id === beerId);
                if (beer) {
                    document.dispatchEvent(new CustomEvent('openModal', { detail: beer }));
                }
            });
        });
    }
}
