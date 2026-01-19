/**
 * Production Page Interactive Features
 * Quiz and Recipe Calculator - Improved Version
 */

// =============================================
// QUIZ SYSTEM
// =============================================
const quizQuestions = [
    {
        question: "Qual é a principal função da mosturação?",
        options: ["Adicionar lúpulo", "Converter amido em açúcar", "Resfriar mosto", "Fermentar"],
        correct: 1
    },
    {
        question: "O que significa IBU?",
        options: ["Beer Unit", "Bitterness Units", "Brewing Update", "Base Unit"],
        correct: 1
    },
    {
        question: "Diferença entre Ale e Lager?",
        options: ["Cor", "Tipo de levedura", "Lúpulo", "Malte"],
        correct: 1
    },
    {
        question: "Fermentação de Ale dura?",
        options: ["1-2 dias", "2-3 semanas", "3-4 meses", "1 ano"],
        correct: 1
    },
    {
        question: "O que é dry hopping?",
        options: ["Secar lúpulo", "Lúpulo pós-fermentação", "Lúpulo em pó", "Fervura longa"],
        correct: 1
    },
    // Novas perguntas
    {
        question: "Qual cereal é a base da maioria das cervejas?",
        options: ["Trigo", "Cevada", "Milho", "Arroz"],
        correct: 1
    },
    {
        question: "O que o lúpulo confere à cerveja?",
        options: ["Álcool", "Cor", "Amargor/Aroma", "Gás"],
        correct: 2
    },
    {
        question: "Gás natural da cerveja vem de?",
        options: ["Fervura", "Fermentação", "Mosturação", "Moagem"],
        correct: 1
    },
    {
        question: "Qual a lei da pureza alemã?",
        options: ["Reinheitsgebot", "Oktoberfest", "Prost", "Hefe"],
        correct: 0
    },
    {
        question: "IPA significa?",
        options: ["Imperial Pale Ale", "India Pale Ale", "International Premium Ale", "Irish Pale Ale"],
        correct: 1
    },
    {
        question: "Stout é conhecida por ser?",
        options: ["Clara", "Escura/Torrada", "Azeda", "Muito alcoólica"],
        correct: 1
    },
    {
        question: "Qual temperatura serve Lager?",
        options: ["0-4°C", "10-12°C", "Temp ambiente", "Congelada"],
        correct: 0
    },
    {
        question: "O que é mosto?",
        options: ["Cerveja pronta", "Líquido açucarado antes de fermentar", "Resíduo de lúpulo", "Tipo de malte"],
        correct: 1
    },
    {
        question: "Levedura transforma açúcar em?",
        options: ["Álcool e CO2", "Água e Malte", "Lúpulo e Creme", "Proteína e Gordura"],
        correct: 0
    },
    {
        question: "Água representa quanto da cerveja?",
        options: ["10-20%", "40-50%", "90-95%", "100%"],
        correct: 2
    },
    {
        question: "O que é 'gyle'?",
        options: ["Ferramenta de limpeza", "Lote de cerveja", "Tipo de copo", "Marca famosa"],
        correct: 1
    },
    {
        question: "Session Beer tem...",
        options: ["Muito álcool", "Pouco álcool (<5%)", "Muito lúpulo", "Nenhum gás"],
        correct: 1
    },
    {
        question: "Copo Weizen serve para?",
        options: ["IPA", "Trigo", "Stout", "Pilsen"],
        correct: 1
    },
    {
        question: "Trub é?",
        options: ["Sedimento indesejado", "Melhor parte da cerveja", "Tipo de lúpulo", "Fermento líquido"],
        correct: 0
    },
    {
        question: "Qual país criou a Pilsner?",
        options: ["Alemanha", "Bélgica", "República Tcheca", "EUA"],
        correct: 2
    },
    {
        question: "Trapista é feita por?",
        options: ["Monges", "Fábricas gigantes", "Robôs", "Fazendeiros"],
        correct: 0
    },
    {
        question: "Qual destes é 'adjunto'?",
        options: ["Cevada", "Água", "Milho", "Lúpulo"],
        correct: 2
    },
    {
        question: "Sour beers são?",
        options: ["Doces", "Amargas", "Azedas", "Salgadas"],
        correct: 2
    },
    {
        question: "Growler serve para?",
        options: ["Transportar chopp", "Ferver mosto", "Moer grãos", "Servir aperitivo"],
        correct: 0
    },
    {
        question: "Colarinho serve para?",
        options: ["Estética apenas", "Preservar aroma/temp", "Atrapalhar", "Diluir o álcool"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    answered = false;

    const scoreEl = document.getElementById('quiz-score');
    const contentEl = document.getElementById('quiz-mini-content');
    const nextBtn = document.getElementById('quiz-next');

    if (scoreEl) scoreEl.style.display = 'none';
    if (contentEl) contentEl.style.display = 'block';
    if (nextBtn) nextBtn.style.display = 'none';

    showQuestion();
}

function showQuestion() {
    if (currentQuestion >= quizQuestions.length) {
        showScore();
        return;
    }

    const q = quizQuestions[currentQuestion];
    const questionEl = document.getElementById('quiz-question');
    const optionsEl = document.getElementById('quiz-options');

    if (questionEl) {
        questionEl.textContent = `${currentQuestion + 1}. ${q.question}`;
    }

    if (optionsEl) {
        optionsEl.innerHTML = '';
        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'quiz-option';
            btn.textContent = option;
            btn.onclick = () => selectOption(index);
            optionsEl.appendChild(btn);
        });
    }

    answered = false;
}

function selectOption(index) {
    if (answered) return;
    answered = true;

    const q = quizQuestions[currentQuestion];
    const options = document.querySelectorAll('.quiz-option');

    options.forEach((opt, i) => {
        if (i === q.correct) {
            opt.classList.add('correct');
        } else if (i === index && i !== q.correct) {
            opt.classList.add('wrong');
        }
        opt.style.pointerEvents = 'none';
    });

    if (index === q.correct) {
        score++;
    }

    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) nextBtn.style.display = 'block';
}

function showScore() {
    const contentEl = document.getElementById('quiz-mini-content');
    const scoreEl = document.getElementById('quiz-score');
    const numberEl = document.getElementById('score-number');

    if (contentEl) contentEl.style.display = 'none';
    if (scoreEl) scoreEl.style.display = 'block';
    if (numberEl) numberEl.textContent = `${score}/${quizQuestions.length}`;
}

// Quiz event listeners
document.addEventListener('DOMContentLoaded', () => {
    const nextBtn = document.getElementById('quiz-next');
    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentQuestion++;
            nextBtn.style.display = 'none';
            showQuestion();
        });
    }

    startQuiz();
    calculateRecipe();
});

// =============================================
// RECIPE CALCULATOR - Complete Beer Calculator
// =============================================
function calculateRecipe() {
    // Get input values
    const batchSizeEl = document.getElementById('batch-size');
    const targetABVEl = document.getElementById('target-abv');
    const targetIBUEl = document.getElementById('target-ibu');

    const batchSize = batchSizeEl ? parseFloat(batchSizeEl.value) || 20 : 20;
    const targetABV = targetABVEl ? parseFloat(targetABVEl.value) || 5 : 5;
    const targetIBU = targetIBUEl ? parseFloat(targetIBUEl.value) || 30 : 30;

    // ====== BREWING FORMULAS ======

    // OG (Original Gravity) estimation based on ABV
    // Formula: ABV ≈ (OG - FG) × 131.25
    // Assuming 75% attenuation: FG ≈ OG - (OG-1)*0.75
    // Simplified: OG ≈ 1 + (ABV / 131.25) / 0.75
    const ogPoints = (targetABV / 131.25) / 0.75 * 1000;
    const og = (1 + ogPoints / 1000).toFixed(3);

    // Malt calculation
    // Points needed = (OG - 1) * 1000 * Volume
    // Efficiency ~70%, Extract yield ~36 points/kg/L
    const pointsNeeded = ogPoints * batchSize;
    const efficiency = 0.70;
    const extractYield = 36; // points per kg per liter
    const maltKg = (pointsNeeded / (extractYield * efficiency)).toFixed(1);

    // Hops calculation (Tinseth formula simplified)
    // IBU = (AA% * Grams * Utilization) / (Volume * 1.34)
    // Assuming 10% AA hops and ~25% utilization for 60min boil
    const hopAA = 10; // 10% alpha acid
    const utilization = 0.25; // 25% for 60 min boil
    const hopsG = Math.round((targetIBU * batchSize * 1.34) / (hopAA * utilization));

    // Yeast calculation
    // Ales: ~0.75 million cells/mL/°P
    // 1 packet ≈ 100 billion cells, good for ~20L at OG 1.050
    const yeastPackets = Math.max(1, Math.ceil((batchSize / 20) * (ogPoints / 50)));

    // Water calculation
    // Total water = Batch size + Grain absorption (1L/kg) + Evaporation (~10%)
    const grainAbsorption = parseFloat(maltKg) * 1; // 1L per kg grain
    const evaporationLoss = batchSize * 0.1; // 10% evaporation during boil
    const waterLiters = Math.round(batchSize + grainAbsorption + evaporationLoss + 2); // +2L safety margin

    // Fermentation temperature (Ale standard)
    const fermTempLow = targetABV > 6 ? 16 : 18;
    const fermTempHigh = targetABV > 6 ? 18 : 20;

    // Time estimation
    // Primary: 7-14 days, Secondary/conditioning: 7-14 days
    const primaryDays = targetABV > 7 ? 14 : 10;
    const totalWeeks = Math.ceil((primaryDays + 10) / 7);

    // ====== UPDATE UI ======
    const update = (id, value) => {
        const el = document.getElementById(id);
        if (el) el.textContent = value;
    };

    update('result-malt', `${maltKg} kg`);
    update('result-hops', `${hopsG} g`);
    update('result-yeast', `${yeastPackets} pacote${yeastPackets > 1 ? 's' : ''}`);
    update('result-water', `${waterLiters} L`);
    update('result-og', og);
    update('result-temp', `${fermTempLow}-${fermTempHigh}°C`);
    update('result-time', `~${totalWeeks} semanas`);
}

// =============================================
// SCROLL REVEAL ANIMATION SYSTEM
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    // Select all elements that need revealing
    const revealElements = document.querySelectorAll('.reveal-base, .ingrediente-card');

    // Create an intersection observer
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the revealed class to trigger CSS animation
                entry.target.classList.add('revealed');

                // For ingredient cards, add 'visible' (per legacy CSS)
                if (entry.target.classList.contains('ingrediente-card')) {
                    entry.target.classList.add('visible');
                }

                // Stop observing once revealed (optional, keeps it efficient)
                observer.unobserve(entry.target);
            }
        });
    }, {
        root: null, // viewport
        threshold: 0.15, // trigger when 15% visible
        rootMargin: "0px 0px -50px 0px" // offset slightly
    });

    // Observe each element
    revealElements.forEach(el => revealObserver.observe(el));

    // Handle Parallax for Hero Text if sticking
    const heroText = document.querySelector('.hero-dynamic-text');
    if (heroText) {
        setTimeout(() => {
            heroText.style.opacity = '1';
            heroText.style.transform = 'translateY(0)';
        }, 500);
    }
});
