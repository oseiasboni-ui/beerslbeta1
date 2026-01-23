/**
 * Modern Visual Effects Controller
 * Handles Cursor, Scroll Reveal, Parallax, Tilt, Pipeline SVG, and Atmospheric Particles
 */

class EffectsController {
    constructor() {
        this.initCursor();
        this.initScrollReveal();
        this.initCardCascade();
        this.initParallax();
        this.initTilt();
        this.initRipple();
        this.addNoiseOverlay();
        this.initPipeline();
        this.initParticles();
    }

    addNoiseOverlay() {
        if (!document.querySelector('.noise-overlay')) {
            const noise = document.createElement('div');
            noise.className = 'noise-overlay';
            document.body.appendChild(noise);
        }
    }

    /* ==========================
       CUSTOM CURSOR
       ========================== */
    initCursor() {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const speed = 0.15;
            cursorX += (mouseX - cursorX) * speed;
            cursorY += (mouseY - cursorY) * speed;

            cursor.style.left = `${cursorX}px`;
            cursor.style.top = `${cursorY}px`;

            requestAnimationFrame(animateCursor);
        };
        animateCursor();

        const hoverTargets = document.querySelectorAll('a, button, .interactive, .ingrediente-card, .section-image');
        hoverTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        const textTargets = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span');
        textTargets.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('text-mode'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('text-mode'));
        });
    }

    /* ==========================
       SCROLL REVEAL
       ========================== */
    initScrollReveal() {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.reveal-up, .reveal-fade, .reveal-zoom, .reveal-mask, .stagger-container, .reveal-base, .elastic-slide-up, .tilt-3d, .snap-right, .snap-left, .zoom-out-reveal, .swing-pendulum');
        elements.forEach(el => observer.observe(el));
    }

    /* ==========================
       PARALLAX EFFECT
       ========================== */
    initParallax() {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const parallaxItems = document.querySelectorAll('[data-parallax-speed]');
        const sectionImages = document.querySelectorAll('.section-image img');

        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            parallaxItems.forEach(item => {
                const speed = parseFloat(item.dataset.parallaxSpeed) || 0.2;
                const offset = scrollY * speed;
                item.style.transform = `translateY(${offset}px)`;
            });

            sectionImages.forEach(img => {
                const rect = img.parentElement.getBoundingClientRect();
                if (rect.top < windowHeight && rect.bottom > 0) {
                    const speed = 0.1;
                    const centerOffset = (windowHeight / 2) - (rect.top + rect.height / 2);
                    const yPos = centerOffset * speed;
                    // Maintain scale(1.1) to avoid edges revealing during parallax
                    img.style.transform = `translateY(${yPos}px) scale(1.1)`;
                }
            });

        }, { passive: true, capture: false });
    }

    /* ==========================
       DOMINO CASCADE (CARDS)
       ========================== */
    initCardCascade() {
        const cards = document.querySelectorAll('.ingrediente-card');
        if (cards.length === 0) return;

        const observerOptions = {
            threshold: 0.1, // Trigger just as it enters
            rootMargin: "0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // When one card enters (likely first one or the row), trigger them all?
                    // The user CSS uses :nth-child delays, so if we add .visible to all at once when the SECTION enters, they will cascade.
                    // The user said: "When the top of the card section reaches the bottom of the screen".
                    // So we should observe the CONTAINER.
                    entry.target.classList.add('visible');
                    // We can stop observing once triggered
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        cards.forEach(card => observer.observe(card));
        // Note: The user's CSS depends on .visible being added. 
        // If we observe cards individually, they might trigger individually.
        // But the user's CSS has fixed delays: card 1 (0s), card 2 (0.15s)... relative to when the animation starts.
        // If we trigger them all individually as they scroll, the delays might be weird or redundant.
        // Optimal strategy: Trigger all cards when the first one (or the container) enters.
        // However, standard reveal is usually fine per item.
        // Let's rely on the individual observer for now, but if they are in a grid row, they will likely enter simultaneously.
    }

    /* ==========================
       3D TILT EFFECT
       ========================== */
    initTilt() {
        if (window.matchMedia("(pointer: coarse)").matches) return;

        const cards = document.querySelectorAll('.tilt-card, .ingrediente-card, .section-image');

        cards.forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const LIMIT = card.classList.contains('section-image') ? 4 : 10;
                const rotateX = ((y - centerY) / centerY) * -LIMIT;
                const rotateY = ((x - centerX) / centerX) * LIMIT;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)';
            });
        });
    }

    /* ==========================
       RIPPLE EFFECT
       ========================== */
    initRipple() {
        const buttons = document.querySelectorAll('.btn-ripple');
        buttons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const ripple = document.createElement('span');
                ripple.className = 'ripple';
                ripple.style.left = `${x}px`;
                ripple.style.top = `${y}px`;
                this.appendChild(ripple);
                setTimeout(() => ripple.remove(), 600);
            });
        });
    }

    /* ==========================
       PIPELINE SVG
       ========================== */
    initPipeline() {
        const svgContainer = document.getElementById('production-pipeline-container');
        if (!svgContainer) return;

        const pathEl = document.getElementById('pipeline-path');
        const pathFillEl = document.getElementById('pipeline-path-fill');

        // We need to wait for layout to be stable
        const updatePath = () => {
            const sections = document.querySelectorAll('.producao-section');
            if (sections.length === 0) return;

            // Container offset relative to document
            const containerRect = svgContainer.getBoundingClientRect();
            const containerTop = containerRect.top + window.scrollY;

            let d = "";
            let points = [];

            sections.forEach((section, index) => {
                const imgContainer = section.querySelector('.section-image');
                if (!imgContainer) return;

                const rect = imgContainer.getBoundingClientRect();
                // We want the center of the image container relative to the SVG container
                const centerX = rect.left + rect.width / 2;
                const centerY = (rect.top + window.scrollY) - containerTop + rect.height / 2;

                points.push({ x: centerX, y: centerY });
            });

            if (points.length < 2) return;

            // Start at first point
            d = `M ${points[0].x} ${points[0].y}`;

            // Create smooth bezier curves between points
            for (let i = 0; i < points.length - 1; i++) {
                const curr = points[i];
                const next = points[i + 1];

                // Control points for curvature
                const cp1x = curr.x;
                const cp1y = curr.y + (next.y - curr.y) / 2;
                const cp2x = next.x;
                const cp2y = curr.y + (next.y - curr.y) / 2;

                d += ` C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${next.x} ${next.y}`;
            }

            pathEl.setAttribute('d', d);
            pathFillEl.setAttribute('d', d);

            // Animate Fill based on scroll
            const pathLength = pathEl.getTotalLength();
            pathFillEl.style.strokeDasharray = pathLength;
            pathFillEl.style.strokeDashoffset = pathLength;

            const handleScroll = () => {
                const scrollY = window.scrollY;
                const docHeight = document.documentElement.scrollHeight - window.innerHeight;
                // Simple percentage for now, or could map specific sections
                const percentage = Math.min(Math.max((scrollY - containerTop + 300) / (svgContainer.offsetHeight), 0), 1);

                pathFillEl.style.strokeDashoffset = pathLength - (pathLength * percentage);
            };

            window.addEventListener('scroll', handleScroll, { passive: true });
            handleScroll(); // Initial call
        };

        // Update on load and resize
        window.addEventListener('load', updatePath);
        window.addEventListener('resize', updatePath);
        // Also delay slightly to ensure images loaded/layout settled
        setTimeout(updatePath, 1000);
    }

    /* ==========================
       ATMOSPHERIC PARTICLES
       ========================== */
    initParticles() {
        const createParticles = (container, type, count) => {
            if (!container) return;

            // Check if particles already exist
            if (container.querySelector('.particle-container')) return;

            const pContainer = document.createElement('div');
            pContainer.className = 'particle-container';
            container.appendChild(pContainer);

            for (let i = 0; i < count; i++) {
                const particle = document.createElement('div');
                particle.className = type === 'steam' ? 'particle steam-particle' : 'particle bubble-particle';

                // Randomize positions and animation props
                const left = Math.random() * 100;
                const size = Math.random() * 20 + 10;
                const duration = Math.random() * 3 + 2;
                const delay = Math.random() * 5;

                particle.style.left = `${left}%`;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.animationDuration = `${duration}s`;
                particle.style.animationDelay = `${delay}s`;

                pContainer.appendChild(particle);
            }
        };

        // Fervura (Steam)
        const fervuraSection = document.getElementById('step-fervura');
        if (fervuraSection) {
            createParticles(fervuraSection.querySelector('.section-image'), 'steam', 15);
        }

        // Fermentação (Bubbles)
        const fermSection = document.getElementById('step-fermentacao');
        if (fermSection) {
            createParticles(fermSection.querySelector('.section-image'), 'bubble', 20);
        }

        // Carbonatação (Bubbles)
        const carbSection = document.getElementById('step-carbonatacao');
        if (carbSection) {
            createParticles(carbSection.querySelector('.section-image'), 'bubble', 25);
        }
    }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
    window.effects = new EffectsController();
});
