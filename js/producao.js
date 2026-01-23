/**
 * Production Page Interactive Features
 * Quiz and Recipe Calculator - Improved Version
 */

// =============================================
// QUIZ SYSTEM
// =============================================
const quizQuestionsPT = [
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
    }
];

const quizQuestionsEN = [
    {
        question: "What is the main function of mashing?",
        options: ["Adding hops", "Converting starch to sugar", "Cooling wort", "Fermenting"],
        correct: 1
    },
    {
        question: "What does IBU stand for?",
        options: ["Beer Unit", "Bitterness Units", "Brewing Update", "Base Unit"],
        correct: 1
    },
    {
        question: "Main difference between Ale and Lager?",
        options: ["Color", "Yeast type", "Hops", "Malt"],
        correct: 1
    },
    {
        question: "Ale fermentation lasts?",
        options: ["1-2 days", "2-3 weeks", "3-4 months", "1 year"],
        correct: 1
    },
    {
        question: "What is dry hopping?",
        options: ["Dying hops", "Post-fermentation hopping", "Powdered hops", "Long boil"],
        correct: 1
    },
    {
        question: "Which grain is the base of most beers?",
        options: ["Wheat", "Barley", "Corn", "Rice"],
        correct: 1
    },
    {
        question: "What do hops provide to beer?",
        options: ["Alcohol", "Color", "Bitterness/Aroma", "Carbonation"],
        correct: 2
    },
    {
        question: "Natural carbonation comes from?",
        options: ["Boiling", "Fermentation", "Mashing", "Milling"],
        correct: 1
    },
    {
        question: "What is the German Purity Law?",
        options: ["Reinheitsgebot", "Oktoberfest", "Prost", "Hefe"],
        correct: 0
    },
    {
        question: "IPA means?",
        options: ["Imperial Pale Ale", "India Pale Ale", "International Premium Ale", "Irish Pale Ale"],
        correct: 1
    },
    {
        question: "Stout is known for being?",
        options: ["Light", "Dark/Roasted", "Sour", "Very alcoholic"],
        correct: 1
    },
    {
        question: "Serving temperature for Lager?",
        options: ["0-4°C", "10-12°C", "Room temp", "Frozen"],
        correct: 0
    },
    {
        question: "What is wort?",
        options: ["Finished beer", "Sugary liquid before fermentation", "Hop residue", "Malt type"],
        correct: 1
    },
    {
        question: "Yeast converts sugar into?",
        options: ["Alcohol & CO2", "Water & Malt", "Hops & Cream", "Protein & Fat"],
        correct: 0
    },
    {
        question: "Water makes up how much of beer?",
        options: ["10-20%", "40-50%", "90-95%", "100%"],
        correct: 2
    },
    {
        question: "What is a 'gyle'?",
        options: ["Cleaning tool", "Batch of beer", "Type of glass", "Famous brand"],
        correct: 1
    },
    {
        question: "Session Beer has...",
        options: ["High alcohol", "Low alcohol (<5%)", "High hops", "No gas"],
        correct: 1
    },
    {
        question: "Weizen glass is for?",
        options: ["IPA", "Wheat beer", "Stout", "Pilsner"],
        correct: 1
    },
    {
        question: "What is Trub?",
        options: ["Unwanted sediment", "Best part of beer", "Hop type", "Liquid yeast"],
        correct: 0
    },
    {
        question: "Which country created Pilsner?",
        options: ["Germany", "Belgium", "Czech Republic", "USA"],
        correct: 2
    }
];

const quizQuestionsDE = [
    {
        question: "Was ist die Hauptfunktion des Maischens?",
        options: ["Hopfen hinzufügen", "Stärke in Zucker umwandeln", "Würze kühlen", "Fermentieren"],
        correct: 1
    },
    {
        question: "Was bedeutet IBU?",
        options: ["Beer Unit", "Bitterness Units", "Brewing Update", "Base Unit"],
        correct: 1
    },
    {
        question: "Unterschied zwischen Ale und Lager?",
        options: ["Farbe", "Hefetyp", "Hopfen", "Malz"],
        correct: 1
    },
    {
        question: "Ale-Gärung dauert?",
        options: ["1-2 Tage", "2-3 Wochen", "3-4 Monate", "1 Jahr"],
        correct: 1
    },
    {
        question: "Was ist Dry Hopping?",
        options: ["Hopfen trocknen", "Hopfung nach Gärung", "Hopfenpulver", "Langes Kochen"],
        correct: 1
    },
    {
        question: "Welches Getreide ist die Basis der meisten Biere?",
        options: ["Weizen", "Gerste", "Mais", "Reis"],
        correct: 1
    },
    {
        question: "Was verleiht Hopfen dem Bier?",
        options: ["Alkohol", "Farbe", "Bitterkeit/Aroma", "Karbonisierung"],
        correct: 2
    },
    {
        question: "Natürliche Kohlensäure kommt von?",
        options: ["Kochen", "Gärung", "Maischen", "Schroten"],
        correct: 1
    },
    {
        question: "Was ist das deutsche Reinheitsgebot?",
        options: ["Reinheitsgebot", "Oktoberfest", "Prost", "Hefe"],
        correct: 0
    },
    {
        question: "IPA bedeutet?",
        options: ["Imperial Pale Ale", "India Pale Ale", "International Premium Ale", "Irish Pale Ale"],
        correct: 1
    },
    {
        question: "Stout ist bekannt dafür, ... zu sein?",
        options: ["Hell", "Dunkel/Geröstet", "Sauer", "Sehr alkoholisch"],
        correct: 1
    },
    {
        question: "Serviertemperatur für Lager?",
        options: ["0-4°C", "10-12°C", "Zimmertemperatur", "Gefroren"],
        correct: 0
    },
    {
        question: "Was ist Würze?",
        options: ["Fertiges Bier", "Zuckerflüssigkeit vor Gärung", "Hopfenrest", "Malztyp"],
        correct: 1
    },
    {
        question: "Hefe wandelt Zucker um in?",
        options: ["Alkohol & CO2", "Wasser & Malz", "Hopfen & Sahne", "Protein & Fett"],
        correct: 0
    },
    {
        question: "Wie viel Wasser enthält Bier?",
        options: ["10-20%", "40-50%", "90-95%", "100%"],
        correct: 2
    },
    {
        question: "Was ist ein 'Sud'?",
        options: ["Reinigungswerkzeug", "Charge Bier", "Glastyp", "Berühmte Marke"],
        correct: 1
    },
    {
        question: "Session Beer hat...",
        options: ["Viel Alkohol", "Wenig Alkohol (<5%)", "Viel Hopfen", "Kein Gas"],
        correct: 1
    },
    {
        question: "Weizenglas ist für?",
        options: ["IPA", "Weizenbier", "Stout", "Pilsner"],
        correct: 1
    },
    {
        question: "Was ist Trub?",
        options: ["Unerwünschtes Sediment", "Bester Teil des Bieres", "Hopfentyp", "Flüssighefe"],
        correct: 0
    },
    {
        question: "Welches Land erfand das Pilsner?",
        options: ["Deutschland", "Belgien", "Tschechische Republik", "USA"],
        correct: 2
    }
];

function getQuizQuestions() {
    const lang = localStorage.getItem('beersl-lang') || 'pt-BR';
    if (lang === 'en') return quizQuestionsEN;
    if (lang === 'de') return quizQuestionsDE;
    return quizQuestionsPT;
}

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

// Expose to global scope for language switching
window.updateQuizLanguage = startQuiz;

function showQuestion() {
    const questions = getQuizQuestions();

    if (currentQuestion >= questions.length) {
        showScore();
        return;
    }

    const q = questions[currentQuestion];
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

    const questions = getQuizQuestions();
    const q = questions[currentQuestion];
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
    const questions = getQuizQuestions();
    const contentEl = document.getElementById('quiz-mini-content');
    const scoreEl = document.getElementById('quiz-score');
    const numberEl = document.getElementById('score-number');

    if (contentEl) contentEl.style.display = 'none';
    if (scoreEl) scoreEl.style.display = 'block';
    if (numberEl) numberEl.textContent = `${score}/${questions.length}`;
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
    const maltKg = (pointsNeeded / (extractYield * efficiency * batchSize)).toFixed(1);

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

    update('result-time', `~${totalWeeks} semanas`);
}

// Sticky Header "Unstick" Logic
// When the footer becomes visible, we hide the sticky header to prevent overlap/clutter
document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');
    const footer = document.getElementById('main-footer');

    if (header && footer) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Footer is visible, hide header
                    header.style.transform = 'translateY(-100%)';
                } else {
                    // Footer is not visible, show header
                    header.style.transform = 'translateY(0)';
                }
            });
        }, {
            root: null, // viewport
            threshold: 0.1 // trigger when 10% of footer is visible
        });

        observer.observe(footer);
    }
});
