export const themes = [
    { id: 'original', name: 'Original', color: '#e67e22' }
];

export const themeManager = {
    init() {
        const savedTheme = localStorage.getItem('beersl-theme');
        if (savedTheme) {
            this.setTheme(savedTheme);
        }
    },

    setTheme(themeId) {
        if (themeId === 'original') {
            document.documentElement.removeAttribute('data-theme');
        } else {
            document.documentElement.setAttribute('data-theme', themeId);
        }
        localStorage.setItem('beersl-theme', themeId);

        // Update active state in UI if it exists
        this.updateActiveState(themeId);
    },

    updateActiveState(activeId) {
        document.querySelectorAll('.theme-btn').forEach(btn => {
            const btnTheme = btn.getAttribute('data-theme-id');
            if (btnTheme === activeId) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    },

    renderThemeMenu(containerSelector) {
        const container = document.querySelector(containerSelector);
        if (!container) return;

        const currentTheme = localStorage.getItem('beersl-theme') || 'original';

        container.innerHTML = `
            <div class="theme-menu">
                <p class="sidebar-lang-label" style="margin-top: 1rem;">Temas</p>
                <div class="theme-grid" style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 8px;">
                    ${themes.map(theme => `
                        <button 
                            class="theme-btn ${theme.id === currentTheme ? 'active' : ''}" 
                            data-theme-id="${theme.id}"
                            style="
                                display: flex; 
                                align-items: center; 
                                gap: 6px; 
                                padding: 6px; 
                                border: 1px solid #ddd; 
                                border-radius: 6px; 
                                background: white; 
                                cursor: pointer;
                                font-size: 0.75rem;
                                color: #333;
                                text-align: left;
                            "
                            onclick="window.setAppTheme('${theme.id}')"
                        >
                            <span style="
                                display: block; 
                                width: 12px; 
                                height: 12px; 
                                background-color: ${theme.color}; 
                                border-radius: 50%; 
                                border: 1px solid rgba(0,0,0,0.1);
                            "></span>
                            <span style="white-space: nowrap; overflow: hidden; text-overflow: ellipsis; max-width: 90px;">${theme.name.split(' ')[0]}</span>
                        </button>
                    `).join('')}
                </div>
            </div>
        `;

        // Expose global helper for inline onclick
        window.setAppTheme = (id) => this.setTheme(id);
    }
};

// Auto-init on load
themeManager.init();
