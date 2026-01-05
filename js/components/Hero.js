import { i18n } from '../i18n/i18n.js';

export class Hero {
    constructor(targetId) {
        this.target = document.getElementById(targetId);
        this.timers = [];
    }

    render() {
        if (!this.target) return;

        this.target.innerHTML = `
            <div class="hero-image-container">
                <img src="img/hero.png" alt="BeerSL Hero" class="hero-img">
                
                <!-- Animated Text Overlays -->
                <span class="hero-text-overlay hero-word-1" id="hero-word-1"></span>
                <span class="hero-text-overlay hero-word-2" id="hero-word-2"></span>
                <span class="hero-text-overlay hero-word-3" id="hero-word-3"></span>
                
                <!-- Brand Overlay -->
                <span class="hero-text-overlay hero-beersl" id="hero-beersl">BEERSL</span>
            </div>
        `;

        // Listen for language changes to update text/restart loop
        window.addEventListener('languageChanged', () => {
            this.restartAnimation();
        });

        this.startAnimation();
    }

    updateText() {
        // Update content safely
        const w1 = this.target.querySelector('#hero-word-1');
        const w2 = this.target.querySelector('#hero-word-2');
        const w3 = this.target.querySelector('#hero-word-3');

        if (w1) w1.textContent = i18n.t('hero.word1') || "ADVERTISE";
        if (w2) w2.textContent = i18n.t('hero.word2') || "WITH";
        if (w3) w3.textContent = i18n.t('hero.word3') || "US";
    }

    restartAnimation() {
        this.stopAnimation();
        this.startAnimation();
    }

    stopAnimation() {
        this.timers.forEach(t => clearTimeout(t));
        this.timers = [];

        // Remove visible classes
        const els = this.target.querySelectorAll('.hero-text-overlay');
        els.forEach(el => el.classList.remove('visible'));
    }

    startAnimation() {
        this.updateText();

        const w1 = this.target.querySelector('#hero-word-1');
        const w2 = this.target.querySelector('#hero-word-2');
        const w3 = this.target.querySelector('#hero-word-3');
        const brand = this.target.querySelector('#hero-beersl');

        if (!w1 || !w2 || !w3 || !brand) return;

        // Sequence Timeline (seconds):
        // 0: Word 1 Fade In
        // 1: Word 2 Fade In
        // 2: Word 3 Fade In
        // 6: Start Fade Out (All Words) -> Wait 4s after last fade in (2+4=6)
        // 7: BEERSL Fade In (1s fade time)
        // 37: BEERSL Fade Out (30s visible)
        // 38: Restart

        // 1. Fade In Sequence
        this.addTimer(() => w1.classList.add('visible'), 0);
        this.addTimer(() => w2.classList.add('visible'), 1000);
        this.addTimer(() => w3.classList.add('visible'), 2000);

        // 2. Fade Out Sequence (Visible for 4s after last word appears)
        // Last word appears at T=2s + 1s transition = 3s. Pause 4s -> T=7s start fade out.
        this.addTimer(() => {
            w1.classList.remove('visible');
            w2.classList.remove('visible');
            w3.classList.remove('visible');
        }, 7000);

        // 3. Brand Sequence
        // Fade out takes 1s (7s -> 8s)
        this.addTimer(() => brand.classList.add('visible'), 8000);

        // 4. End Brand Sequence
        // Visible for 30s (8s -> 38s)
        this.addTimer(() => brand.classList.remove('visible'), 38000);

        // 5. Restart Loop
        // Fade out takes 1s (38s -> 39s)
        this.addTimer(() => this.startAnimation(), 39000);
    }

    addTimer(fn, delay) {
        const t = setTimeout(fn, delay);
        this.timers.push(t);
    }
}
