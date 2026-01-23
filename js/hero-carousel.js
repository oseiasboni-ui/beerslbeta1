/**
 * Hero Carousel Script
 * Handles the dynamic text carousel in the hero section with multi-language support.
 */

const carouselPhrasesPT = [
    "Uma jornada onde a tradição encontra a inovação para criar sabores inesquecíveis.",
    "Desvende os segredos da fermentação, maturação e o equilíbrio perfeito dos ingredientes.",
    "Ciência, arte e paixão em cada gota.",
    "Navegue abaixo e conheça os detalhes que definem a qualidade da sua cerveja favorita."
];

const carouselPhrasesEN = [
    "A journey where tradition meets innovation to create unforgettable flavors.",
    "Unlock the secrets of fermentation, maturation, and the perfect balance of ingredients.",
    "Science, art, and passion in every drop.",
    "Scroll down and discover the details that define the quality of your favorite beer."
];

let carouselCurrentIndex = 0;
const carouselTextElement = document.getElementById("text-carousel");

function getCarouselPhrases() {
    const lang = localStorage.getItem('beersl-lang') || 'pt-BR';
    if (lang === 'en') return carouselPhrasesEN;
    // Add DE or other languages if needed, fallback to PT
    return carouselPhrasesPT;
}

function updateCarouselLanguage() {
    if (!carouselTextElement) return;

    // Update immediately to the current index in the new language
    const phrases = getCarouselPhrases();

    // Safety check: ensure index is within bounds (if arrays have different lengths)
    if (carouselCurrentIndex >= phrases.length) {
        carouselCurrentIndex = 0;
    }

    carouselTextElement.textContent = phrases[carouselCurrentIndex];
}

function changeCarouselText() {
    if (!carouselTextElement) return;

    // 1. Fade Out + Slide Down
    carouselTextElement.classList.add("fade-out");

    // 2. Wait for animation to finish (1s), then swap text
    setTimeout(() => {
        const phrases = getCarouselPhrases();
        carouselCurrentIndex = (carouselCurrentIndex + 1) % phrases.length;
        carouselTextElement.textContent = phrases[carouselCurrentIndex];

        // 3. Fade In + Slide Up
        carouselTextElement.classList.remove("fade-out");
    }, 1000);
}

// Expose update function individually
window.updateHeroCarouselLanguage = updateCarouselLanguage;

// Initialize
// Start interval
setInterval(changeCarouselText, 5000);

// Initial set (optional, as HTML has hardcoded first one, but good for consistency)
// We won't force it here to avoid flash, but rely on updateCarouselLanguage being called often or just wait for first interval.
// Actually, if the page loads and user is in EN, we might want to set it immediately.
document.addEventListener('DOMContentLoaded', () => {
    updateCarouselLanguage();
});
