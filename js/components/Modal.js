import { i18n } from '../i18n/i18n.js';


export class Modal {
    constructor(targetId) {
        this.container = document.getElementById(targetId);
        this.renderShell();

        // Event delegation for closing
        this.container.addEventListener('click', (e) => {
            if (e.target === this.container || e.target.closest('.close-modal-btn')) {
                this.close();
            }
        });

        // Listen for open events
        document.addEventListener('openModal', (e) => {
            this.open(e.detail);
        });
    }

    renderShell() {
        this.container.innerHTML = `
            <div class="modal-content">
                <div class="modal-left" id="modal-left">
                    <!-- Dynamic Left Content -->
                </div>
                <div class="modal-right" id="modal-right">
                   <!-- Dynamic Right Content -->
                </div>
            </div>
        `;
    }

    async open(beer) {
        if (!beer) return;



        // Determine image URL
        const hasCustomImage = beer.image && !beer.image.includes('placeholder');
        const imageUrl = hasCustomImage ? beer.image : null;

        const leftContent = `
            <div class="modal-info-tag">${beer.category || 'Ale'}</div>
            
            ${imageUrl ? `
                <div style="text-align: center; margin: 2rem 0;">
                    <img src="${imageUrl}" alt="${beer.name}" 
                         style="max-width: 100%; max-height: 250px; border-radius: 12px; box-shadow: 0 4px 8px rgba(0,0,0,0.2);">
                </div>
            ` : `
                <div class="beer-detail-glass" style="background-color: ${beer.appearance?.colorHex || '#f1c40f'}"></div>
            `}
            

            
            <div style="margin-top: 2rem; text-align: center; font-size: 0.8rem; opacity: 0.7;">
                ${beer.id}/139
            </div>
        `;

        const rightContent = `
            <button class="close-modal-btn">x</button>
            
            <div class="beer-title-section">
                <span style="color: #e67e22; font-size: 0.8rem; font-weight: bold; text-transform: uppercase;">${beer.origin || ''}</span>
                <h2>${beer.name}</h2>
                <p class="aka">${beer.alias || ''}</p>
            </div>
            
            <div class="general-impression">
                <h4>${i18n.t('modal.general_impression').toUpperCase()}</h4>
                <p>${i18n.t(beer.description) || i18n.t('modal.no_description')}</p>
            </div>
            
            <div class="section-title">${i18n.t('modal.appearance').toUpperCase()}</div>
            <div class="specs-grid">
                 <div class="spec-item">
                    <h5>${i18n.t('modal.color').toUpperCase()}</h5>
                    <div style="width: 20px; height: 20px; background: ${beer.appearance?.colorHex || '#ccc'}; border-radius: 50%; margin: 0 auto 5px;"></div>
                    <span>${i18n.t(beer.appearance?.color) || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.clarity_label').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">✨</div>
                    <span>${i18n.t(beer.appearance?.clarity) || 'N/A'}</span>
                 </div>
                 <div class="spec-item">
                    <h5>${i18n.t('modal.foam').toUpperCase()}</h5>
                    <div style="font-size: 1.2rem;">☁️</div>
                    <span>${i18n.t(beer.appearance?.foam) || 'N/A'}</span>
                 </div>
            </div>

            <div class="section-title">${i18n.t('modal.sensory_profile').toUpperCase()}</div>
            <div class="sensory-bars">
                 ${this.renderSensoryBar(i18n.t('modal.malt'), beer.sensory?.malte || 0, 'malte')}
                 ${this.renderSensoryBar(i18n.t('modal.hops'), beer.sensory?.lupulo || 0, 'lupulo')}
                 ${this.renderSensoryBar(i18n.t('modal.yeast'), beer.sensory?.levedura || 0, 'levedura')}
            </div>

            <div class="section-title">${i18n.t('modal.mouthfeel').toUpperCase()}</div>
            <div class="specs-grid">
                  <div class="spec-item">
                    <h5>${i18n.t('modal.body').toUpperCase()}</h5>
                    <span>${i18n.t(beer.mouthfeel?.body) || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.carbonation').toUpperCase()}</h5>
                    <span>${i18n.t(beer.mouthfeel?.carbonation) || 'N/A'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>${i18n.t('modal.texture').toUpperCase()}</h5>
                    <span>${i18n.t(beer.mouthfeel?.texture) || 'N/A'}</span>
                 </div>
            </div>

            <div class="section-title">${i18n.t('modal.comparison').toUpperCase()}</div>
            <p style="color: #555; line-height: 1.6; margin-bottom: 2rem;">${i18n.t(beer.comparison) || i18n.t('modal.no_comparison')}</p>

            <div class="section-title">${i18n.t('modal.examples').toUpperCase()}</div>
            <div class="examples-list" style="margin-bottom: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
                ${(beer.examples || []).map(ex => `
                    <div class="example-tag" style="background: #f8f9fa; padding: 0.5rem 1rem; border-radius: 20px; border: 1px solid #e9ecef;">
                        <strong>${ex.brand}</strong> <span style="color: #7f8c8d;">${ex.name}</span>
                    </div>
                `).join('') || '<span style="color: #999;">-</span>'}
            </div>

            <div class="section-title">${i18n.t('modal.history').toUpperCase()}</div>
            <p style="color: #555; line-height: 1.6; margin-bottom: 2rem;">${i18n.t(beer.history) || i18n.t('modal.no_history')}</p>

            <div class="section-title">${i18n.t('modal.ingredients').toUpperCase()}</div>
            <div class="ingredients-list" style="margin-bottom: 2rem;">
                 <p><strong>${i18n.t('modal.malt')}:</strong> ${i18n.t(beer.ingredients?.malts) || '-'}</p>
                 <p><strong>${i18n.t('modal.hops')}:</strong> ${i18n.t(beer.ingredients?.hops) || '-'}</p>
                 <p><strong>${i18n.t('modal.yeast')}:</strong> ${i18n.t(beer.ingredients?.yeast) || '-'}</p>
            </div>

            <div class="section-title">${i18n.t('modal.vital_stats').toUpperCase()}</div>
            <div class="specs-grid">
                  <div class="spec-item">
                    <h5>IBU</h5>
                    <span>${beer.specs?.ibu || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>SRM</h5>
                    <span>${beer.specs?.srm || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>ABV</h5>
                    <span>${beer.specs?.abvRange || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>OG</h5>
                    <span>${beer.specs?.og || '-'}</span>
                 </div>
                  <div class="spec-item">
                    <h5>FG</h5>
                    <span>${beer.specs?.fg || '-'}</span>
                 </div>
            </div>
        `;

        document.getElementById('modal-left').innerHTML = leftContent;
        document.getElementById('modal-right').innerHTML = rightContent;



        this.container.classList.remove('hidden');
        requestAnimationFrame(() => {
            this.container.classList.add('active');
        });
    }



    close() {
        this.container.classList.remove('active');
        setTimeout(() => {
            this.container.classList.add('hidden');
        }, 300);
    }

    renderSensoryBar(label, value, type) {
        return `
            <div class="sensory-row">
                <span class="sensory-label">${label}</span>
                <div class="bar-container">
                    <div class="bar-fill ${type}" style="width: ${value}%"></div>
                </div>
                <span style="font-size: 0.75rem; color: #7f8c8d; width: 30px; text-align: right;">${value}%</span>
            </div>
        `;
    }
}
