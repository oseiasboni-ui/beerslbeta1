export const beers = [
    {
        id: 'altbier',
        name: 'Altbier',
        origin: '🇩🇪',
        family: 'beer.altbier.family',
        tag: 'beer.altbier.tag',
        abv: '4.8%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.altbier.description',
        category: 'Pale Ale',
        appearance: {
            color: 'beer.altbier.appearance.color',
            colorHex: '#A85E14',
            clarity: 'beer.altbier.appearance.clarity',
            foam: 'beer.altbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.altbier.mouthfeel.body',
            carbonation: 'beer.altbier.mouthfeel.carbonation',
            texture: 'beer.altbier.mouthfeel.texture',
            finish: 'beer.altbier.mouthfeel.finish'
        },
        history: 'beer.altbier.history',
        comparison: 'beer.altbier.comparison',
        ingredients: {
            malts: 'beer.altbier.ingredients.malts',
            hops: 'beer.altbier.ingredients.hops',
            yeast: 'beer.altbier.ingredients.yeast',
            adjuncts: 'beer.altbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.5%',
            ibu: '25–50',
            srm: '11–17',
            og: '1.044–1.052',
            fg: '1.008–1.014'
        },
        variations: ['Düsseldorfer Altbier', 'Sticke Alt'],
        examples: [
            { brand: 'Uerige', name: 'Alt' },
            { brand: 'Füchschen', name: 'Alt' },
            { brand: 'Schumacher', name: 'Alt' },
            { brand: 'Schlüssel', name: 'Alt' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Becher (200ml)',
            validity: '3–6 meses'
        },
        pairing: ['Sauerbraten', 'Bratwurst', 'Queijos suaves']
    },
    {
        id: 'american-light-lager',
        name: 'American Light Lager',
        origin: '🇺🇸',
        family: 'beer.american-light-lager.family',
        tag: 'beer.american-light-lager.tag',
        abv: '3.5%',
        rating: 2.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-light-lager.description',
        category: 'Light Lager',
        appearance: {
            color: 'beer.american-light-lager.appearance.color',
            colorHex: '#F6F5E3', // Very pale straw
            clarity: 'beer.american-light-lager.appearance.clarity',
            foam: 'beer.american-light-lager.appearance.foam'
        },
        sensory: {
            malte: 10,
            lupulo: 5,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.american-light-lager.mouthfeel.body',
            carbonation: 'beer.american-light-lager.mouthfeel.carbonation',
            texture: 'beer.american-light-lager.mouthfeel.texture',
            finish: 'beer.american-light-lager.mouthfeel.finish'
        },
        history: 'beer.american-light-lager.history',
        comparison: 'beer.american-light-lager.comparison',
        ingredients: {
            malts: 'beer.american-light-lager.ingredients.malts',
            hops: 'beer.american-light-lager.ingredients.hops',
            yeast: 'beer.american-light-lager.ingredients.yeast',
            adjuncts: 'beer.american-light-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.8–4.2%',
            ibu: '8–12',
            srm: '2–3',
            og: '1.028–1.040',
            fg: '0.998–1.008'
        },
        variations: ['Lite Beer', 'Diet Beer'],
        examples: [
            { brand: 'Bud Light', name: 'Bud Light' },
            { brand: 'Coors Light', name: 'Coors Light' },
            { brand: 'Miller', name: 'Lite' }
        ],
        service: {
            temperature: '0–4°C',
            glass: 'Pilsner Glass',
            validity: '3–6 meses'
        },
        pairing: ['Saladas', 'Peixes delicados', 'Comidas picantes (para limpar)']
    },
    {
        id: 'american-lager',
        name: 'American Lager',
        origin: '🇺🇸',
        family: 'beer.american-lager.family',
        tag: 'beer.american-lager.tag',
        abv: '5.0%',
        rating: 3.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-lager.description',
        category: 'Standard Lager',
        appearance: {
            color: 'beer.american-lager.appearance.color',
            colorHex: '#F3E5AB', // Pale yellow
            clarity: 'beer.american-lager.appearance.clarity',
            foam: 'beer.american-lager.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 10,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.american-lager.mouthfeel.body',
            carbonation: 'beer.american-lager.mouthfeel.carbonation',
            texture: 'beer.american-lager.mouthfeel.texture',
            finish: 'beer.american-lager.mouthfeel.finish'
        },
        history: 'beer.american-lager.history',
        comparison: 'beer.american-lager.comparison',
        ingredients: {
            malts: 'beer.american-lager.ingredients.malts',
            hops: 'beer.american-lager.ingredients.hops',
            yeast: 'beer.american-lager.ingredients.yeast',
            adjuncts: 'beer.american-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.3%',
            ibu: '8–18',
            srm: '2–4',
            og: '1.040–1.050',
            fg: '1.004–1.010'
        },
        variations: ['Premium Lager'],
        examples: [
            { brand: 'Budweiser', name: 'Original' },
            { brand: 'Pabst', name: 'Blue Ribbon' },
            { brand: 'Coors', name: 'Banquet' }
        ],
        service: {
            temperature: '0–4°C',
            glass: 'Lager Glass / Shaker',
            validity: '4–6 meses'
        },
        pairing: ['Hambúrguer', 'Pizza', 'Churrasco americano', 'Pipoca']
    },
    {
        id: 'cream-ale',
        name: 'Cream Ale',
        origin: '🇺🇸',
        family: 'beer.cream-ale.family',
        tag: 'beer.cream-ale.tag',
        abv: '5.2%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.cream-ale.description',
        category: 'Hybrid / Cream Ale',
        appearance: {
            color: 'beer.cream-ale.appearance.color',
            colorHex: '#F0E68C', // Pale gold
            clarity: 'beer.cream-ale.appearance.clarity',
            foam: 'beer.cream-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 20,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.cream-ale.mouthfeel.body',
            carbonation: 'beer.cream-ale.mouthfeel.carbonation',
            texture: 'beer.cream-ale.mouthfeel.texture',
            finish: 'beer.cream-ale.mouthfeel.finish'
        },
        history: 'beer.cream-ale.history',
        comparison: 'beer.cream-ale.comparison',
        ingredients: {
            malts: 'beer.cream-ale.ingredients.malts',
            hops: 'beer.cream-ale.ingredients.hops',
            yeast: 'beer.cream-ale.ingredients.yeast',
            adjuncts: 'beer.cream-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.6%',
            ibu: '8–20',
            srm: '2–5',
            og: '1.042–1.055',
            fg: '1.006–1.012'
        },
        variations: ['Pre-Prohibition Cream Ale'],
        examples: [
            { brand: 'Genesee', name: 'Cream Ale' },
            { brand: 'New Glarus', name: 'Spotted Cow' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pint Glass',
            validity: '3–5 meses'
        },
        pairing: ['Frango frito', 'Comida mexicana leve', 'Saladas com molho']
    },
    {
        id: 'american-wheat-beer',
        name: 'American Wheat Beer',
        origin: '🇺🇸',
        family: 'beer.american-wheat-beer.family',
        tag: 'beer.american-wheat-beer.tag',
        abv: '5.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-wheat-beer.description',
        category: 'American Ale / Wheat',
        appearance: {
            color: 'beer.american-wheat-beer.appearance.color',
            colorHex: '#FFD700', // Gold
            clarity: 'beer.american-wheat-beer.appearance.clarity',
            foam: 'beer.american-wheat-beer.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.american-wheat-beer.mouthfeel.body',
            carbonation: 'beer.american-wheat-beer.mouthfeel.carbonation',
            texture: 'beer.american-wheat-beer.mouthfeel.texture',
            finish: 'beer.american-wheat-beer.mouthfeel.finish'
        },
        history: 'beer.american-wheat-beer.history',
        comparison: 'beer.american-wheat-beer.comparison',
        ingredients: {
            malts: 'beer.american-wheat-beer.ingredients.malts',
            hops: 'beer.american-wheat-beer.ingredients.hops',
            yeast: 'beer.american-wheat-beer.ingredients.yeast',
            adjuncts: 'beer.american-wheat-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–5.5%',
            ibu: '15–30',
            srm: '3–6',
            og: '1.040–1.055',
            fg: '1.008–1.013'
        },
        variations: ['Hoppy Wheat'],
        examples: [
            { brand: 'Bell\'s', name: 'Oberon' },
            { brand: 'Goose Island', name: '312 Urban Wheat' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Weizen Glass',
            validity: '3–4 meses'
        },
        pairing: ['Frutos do mar', 'Saladas de frutas', 'Sushi', 'Queijo de cabra']
    },
    {
        id: 'international-pale-lager',
        name: 'International Pale Lager',
        origin: '🌍',
        family: 'beer.international-pale-lager.family',
        tag: 'beer.international-pale-lager.tag',
        abv: '5.0%',
        rating: 2.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-pale-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-pale-lager.appearance.color',
            colorHex: '#F6E668', // Pale gold
            clarity: 'beer.international-pale-lager.appearance.clarity',
            foam: 'beer.international-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-pale-lager.mouthfeel.body',
            carbonation: 'beer.international-pale-lager.mouthfeel.carbonation',
            texture: 'beer.international-pale-lager.mouthfeel.texture',
            finish: 'beer.international-pale-lager.mouthfeel.finish'
        },
        history: 'beer.international-pale-lager.history',
        comparison: 'beer.international-pale-lager.comparison',
        ingredients: {
            malts: 'beer.international-pale-lager.ingredients.malts',
            hops: 'beer.international-pale-lager.ingredients.hops',
            yeast: 'beer.international-pale-lager.ingredients.yeast',
            adjuncts: 'beer.international-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.0%',
            ibu: '18–25',
            srm: '2–6',
            og: '1.042–1.050',
            fg: '1.008–1.012'
        },
        variations: ['Premium Import Lager'],
        examples: [
            { brand: 'Heineken', name: 'Original' },
            { brand: 'Stella Artois', name: 'Premium Lager' },
            { brand: 'Beck\'s', name: 'Pilsner' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner Glass',
            validity: '6–9 meses'
        },
        pairing: ['Pizza', 'Tacos', 'Espaguete com almondegas', 'Queijo Gouda']
    },
    {
        id: 'international-amber-lager',
        name: 'International Amber Lager',
        origin: '🌍',
        family: 'beer.international-amber-lager.family',
        tag: 'beer.international-amber-lager.tag',
        abv: '5.2%',
        rating: 3.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-amber-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-amber-lager.appearance.color',
            colorHex: '#D99238', // Amber/Caramel
            clarity: 'beer.international-amber-lager.appearance.clarity',
            foam: 'beer.international-amber-lager.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-amber-lager.mouthfeel.body',
            carbonation: 'beer.international-amber-lager.mouthfeel.carbonation',
            texture: 'beer.international-amber-lager.mouthfeel.texture',
            finish: 'beer.international-amber-lager.mouthfeel.finish'
        },
        history: 'beer.international-amber-lager.history',
        comparison: 'beer.international-amber-lager.comparison',
        ingredients: {
            malts: 'beer.international-amber-lager.ingredients.malts',
            hops: 'beer.international-amber-lager.ingredients.hops',
            yeast: 'beer.international-amber-lager.ingredients.yeast',
            adjuncts: 'beer.international-amber-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.0%',
            ibu: '8–25',
            srm: '6–14',
            og: '1.042–1.055',
            fg: '1.008–1.014'
        },
        variations: ['Red Lager'],
        examples: [
            { brand: 'Brooklyn', name: 'Lager' },
            { brand: 'Dos Equis', name: 'Amber' },
            { brand: 'Samuel Adams', name: 'Boston Lager' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Lager Glass / Stein',
            validity: '4–6 meses'
        },
        pairing: ['Hambúrguer na brasa', 'Chili com carne', 'Frango assado']
    },
    {
        id: 'international-dark-lager',
        name: 'International Dark Lager',
        origin: '🌍',
        family: 'beer.international-dark-lager.family',
        tag: 'beer.international-dark-lager.tag',
        abv: '5.0%',
        rating: 3.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.international-dark-lager.description',
        category: 'International Lager',
        appearance: {
            color: 'beer.international-dark-lager.appearance.color',
            colorHex: '#3E1C0A', // Dark Brown
            clarity: 'beer.international-dark-lager.appearance.clarity',
            foam: 'beer.international-dark-lager.appearance.foam'
        },
        sensory: {
            malte: 45,
            lupulo: 10,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.international-dark-lager.mouthfeel.body',
            carbonation: 'beer.international-dark-lager.mouthfeel.carbonation',
            texture: 'beer.international-dark-lager.mouthfeel.texture',
            finish: 'beer.international-dark-lager.mouthfeel.finish'
        },
        history: 'beer.international-dark-lager.history',
        comparison: 'beer.international-dark-lager.comparison',
        ingredients: {
            malts: 'beer.international-dark-lager.ingredients.malts',
            hops: 'beer.international-dark-lager.ingredients.hops',
            yeast: 'beer.international-dark-lager.ingredients.yeast',
            adjuncts: 'beer.international-dark-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–6.0%',
            ibu: '8–20',
            srm: '14–22',
            og: '1.044–1.056',
            fg: '1.008–1.012'
        },
        variations: ['Black Lager (International)'],
        examples: [
            { brand: 'Heineken', name: 'Dark' },
            { brand: 'Baltika', name: '#4 Original' },
            { brand: 'Shiner', name: 'Bock' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Lager Glass',
            validity: '4–6 meses'
        },
        pairing: ['Salsichas', 'Ensopados', 'Costelinha de porco']
    },
    {
        id: 'czech-pale-lager',
        name: 'Czech Pale Lager',
        origin: '🇨🇿',
        family: 'beer.czech-pale-lager.family',
        tag: 'beer.czech-pale-lager.tag',
        abv: '3.8%',
        rating: 3.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-pale-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-pale-lager.appearance.color',
            colorHex: '#F9D858', // Light gold
            clarity: 'beer.czech-pale-lager.appearance.clarity',
            foam: 'beer.czech-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 40,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-pale-lager.mouthfeel.body',
            carbonation: 'beer.czech-pale-lager.mouthfeel.carbonation',
            texture: 'beer.czech-pale-lager.mouthfeel.texture',
            finish: 'beer.czech-pale-lager.mouthfeel.finish'
        },
        history: 'beer.czech-pale-lager.history',
        comparison: 'beer.czech-pale-lager.comparison',
        ingredients: {
            malts: 'beer.czech-pale-lager.ingredients.malts',
            hops: 'beer.czech-pale-lager.ingredients.hops',
            yeast: 'beer.czech-pale-lager.ingredients.yeast',
            adjuncts: 'beer.czech-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.0–4.1%',
            ibu: '20–35',
            srm: '3–6',
            og: '1.028–1.044',
            fg: '1.008–1.014'
        },
        variations: ['Světlé Výčepní Pivo'],
        examples: [
            { brand: 'Únětické pivo', name: '10°' },
            { brand: 'Budweiser Budvar', name: 'Original 10°' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Mug (Caneca)',
            validity: '3–4 meses'
        },
        pairing: ['Petiscos de boteco', 'Picles', 'Queijos leves']
    },
    {
        id: 'czech-premium-pale-lager',
        name: 'Czech Premium Pale Lager',
        origin: '🇨🇿',
        family: 'beer.czech-premium-pale-lager.family',
        tag: 'beer.czech-premium-pale-lager.tag',
        abv: '5.0%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-premium-pale-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-premium-pale-lager.appearance.color',
            colorHex: '#F3BE27', // Deep gold
            clarity: 'beer.czech-premium-pale-lager.appearance.clarity',
            foam: 'beer.czech-premium-pale-lager.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 60,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-premium-pale-lager.mouthfeel.body',
            carbonation: 'beer.czech-premium-pale-lager.mouthfeel.carbonation',
            texture: 'beer.czech-premium-pale-lager.mouthfeel.texture',
            finish: 'beer.czech-premium-pale-lager.mouthfeel.finish'
        },
        history: 'beer.czech-premium-pale-lager.history',
        comparison: 'beer.czech-premium-pale-lager.comparison',
        ingredients: {
            malts: 'beer.czech-premium-pale-lager.ingredients.malts',
            hops: 'beer.czech-premium-pale-lager.ingredients.hops',
            yeast: 'beer.czech-premium-pale-lager.ingredients.yeast',
            adjuncts: 'beer.czech-premium-pale-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.8%',
            ibu: '30–45',
            srm: '3.5–6',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Pilsner Urquell Style'],
        examples: [
            { brand: 'Pilsner Urquell', name: 'Original' },
            { brand: 'Budweiser Budvar', name: 'Lager' },
            { brand: 'Gambrinus', name: 'Premium' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Mug (Caneca) / Pilsner',
            validity: '3–5 meses'
        },
        pairing: ['Goulash', 'Schnitzel', 'Pratos picantes']
    },
    {
        id: 'czech-amber-lager',
        name: 'Czech Amber Lager',
        origin: '🇨🇿',
        family: 'beer.czech-amber-lager.family',
        tag: 'beer.czech-amber-lager.tag',
        abv: '4.9%',
        rating: 3.9,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-amber-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-amber-lager.appearance.color',
            colorHex: '#C6742D', // Deep amber/copper
            clarity: 'beer.czech-amber-lager.appearance.clarity',
            foam: 'beer.czech-amber-lager.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 35,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-amber-lager.mouthfeel.body',
            carbonation: 'beer.czech-amber-lager.mouthfeel.carbonation',
            texture: 'beer.czech-amber-lager.mouthfeel.texture',
            finish: 'beer.czech-amber-lager.mouthfeel.finish'
        },
        history: 'beer.czech-amber-lager.history',
        comparison: 'beer.czech-amber-lager.comparison',
        ingredients: {
            malts: 'beer.czech-amber-lager.ingredients.malts',
            hops: 'beer.czech-amber-lager.ingredients.hops',
            yeast: 'beer.czech-amber-lager.ingredients.yeast',
            adjuncts: 'beer.czech-amber-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.8%',
            ibu: '20–35',
            srm: '10–16',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Polotmavé Pivo'],
        examples: [
            { brand: 'Bernard', name: 'Jantarový Ležák' },
            { brand: 'Primátor', name: 'Polotmavý 13°' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug (Caneca)',
            validity: '3–5 meses'
        },
        pairing: ['Frango assado', 'Hambúrguer de lombo', 'Queijos semiduros']
    },
    {
        id: 'czech-dark-lager',
        name: 'Czech Dark Lager',
        origin: '🇨🇿',
        family: 'beer.czech-dark-lager.family',
        tag: 'beer.czech-dark-lager.tag',
        abv: '5.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.czech-dark-lager.description',
        category: 'Czech Lager',
        appearance: {
            color: 'beer.czech-dark-lager.appearance.color',
            colorHex: '#361E14', // Very dark/black
            clarity: 'beer.czech-dark-lager.appearance.clarity',
            foam: 'beer.czech-dark-lager.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 25,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.czech-dark-lager.mouthfeel.body',
            carbonation: 'beer.czech-dark-lager.mouthfeel.carbonation',
            texture: 'beer.czech-dark-lager.mouthfeel.texture',
            finish: 'beer.czech-dark-lager.mouthfeel.finish'
        },
        history: 'beer.czech-dark-lager.history',
        comparison: 'beer.czech-dark-lager.comparison',
        ingredients: {
            malts: 'beer.czech-dark-lager.ingredients.malts',
            hops: 'beer.czech-dark-lager.ingredients.hops',
            yeast: 'beer.czech-dark-lager.ingredients.yeast',
            adjuncts: 'beer.czech-dark-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.8%',
            ibu: '18–34',
            srm: '14–35',
            og: '1.044–1.060',
            fg: '1.013–1.017'
        },
        variations: ['Tmavé Pivo', 'Černé Pivo'],
        examples: [
            { brand: 'U Fleků', name: 'Flekovský Tmavý Ležák' },
            { brand: 'Kozel', name: 'Černý' },
            { brand: 'Budweiser Budvar', name: 'Dark' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug (Caneca)',
            validity: '4–6 meses'
        },
        pairing: ['Carne de porco assada', 'Pato', 'Sobremesas de chocolate']
    },
    {
        id: 'munich-helles',
        name: 'Munich Helles',
        origin: '🇩🇪',
        family: 'beer.munich-helles.family',
        tag: 'beer.munich-helles.tag',
        abv: '5.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.munich-helles.description',
        category: 'German Lager / Helles',
        appearance: {
            color: 'beer.munich-helles.appearance.color',
            colorHex: '#EDCD44', // Medium yellow/gold
            clarity: 'beer.munich-helles.appearance.clarity',
            foam: 'beer.munich-helles.appearance.foam'
        },
        sensory: {
            malte: 55,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.munich-helles.mouthfeel.body',
            carbonation: 'beer.munich-helles.mouthfeel.carbonation',
            texture: 'beer.munich-helles.mouthfeel.texture',
            finish: 'beer.munich-helles.mouthfeel.finish'
        },
        history: 'beer.munich-helles.history',
        comparison: 'beer.munich-helles.comparison',
        ingredients: {
            malts: 'beer.munich-helles.ingredients.malts',
            hops: 'beer.munich-helles.ingredients.hops',
            yeast: 'beer.munich-helles.ingredients.yeast',
            adjuncts: 'beer.munich-helles.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.7–5.4%',
            ibu: '16–22',
            srm: '3–5',
            og: '1.044–1.048',
            fg: '1.006–1.012'
        },
        variations: ['Helles Exportbier'],
        examples: [
            { brand: 'Augustiner', name: 'Lagerbier Hell' },
            { brand: 'Spaten', name: 'Premium Lager' },
            { brand: 'Weihenstephaner', name: 'Original' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Willi Becher / Masskrug',
            validity: '3–6 meses'
        },
        pairing: ['Pretzel', 'Weisswurst', 'Frutos do mar leves']
    },
    {
        id: 'festbier',
        name: 'Festbier',
        origin: '🇩🇪',
        family: 'beer.festbier.family',
        tag: 'beer.festbier.tag',
        abv: '6.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.festbier.description',
        category: 'German Lager / Festbier',
        appearance: {
            color: 'beer.festbier.appearance.color',
            colorHex: '#E5B13A', // Deep gold
            clarity: 'beer.festbier.appearance.clarity',
            foam: 'beer.festbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 25,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.festbier.mouthfeel.body',
            carbonation: 'beer.festbier.mouthfeel.carbonation',
            texture: 'beer.festbier.mouthfeel.texture',
            finish: 'beer.festbier.mouthfeel.finish'
        },
        history: 'beer.festbier.history',
        comparison: 'beer.festbier.comparison',
        ingredients: {
            malts: 'beer.festbier.ingredients.malts',
            hops: 'beer.festbier.ingredients.hops',
            yeast: 'beer.festbier.ingredients.yeast',
            adjuncts: 'beer.festbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.8–6.3%',
            ibu: '18–25',
            srm: '4–7',
            og: '1.054–1.057',
            fg: '1.010–1.012'
        },
        variations: ['Wiesn'],
        examples: [
            { brand: 'Paulaner', name: 'Oktoberfest Bier' },
            { brand: 'Hofbräu', name: 'Oktoberfestbier' },
            { brand: 'Augustiner', name: 'Oktoberfestbier' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Masskrug (Canecão)',
            validity: '4–6 meses'
        },
        pairing: ['Frango assado (Hendl)', 'Pretzel gigante', 'Joelho de porco']
    },
    {
        id: 'helles-bock',
        name: 'Helles Bock',
        origin: '🇩🇪',
        family: 'beer.helles-bock.family',
        tag: 'beer.helles-bock.tag',
        abv: '6.8%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.helles-bock.description',
        category: 'German Lager / Bock',
        appearance: {
            color: 'beer.helles-bock.appearance.color',
            colorHex: '#D6AE58', // Deep gold to light amber
            clarity: 'beer.helles-bock.appearance.clarity',
            foam: 'beer.helles-bock.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.helles-bock.mouthfeel.body',
            carbonation: 'beer.helles-bock.mouthfeel.carbonation',
            texture: 'beer.helles-bock.mouthfeel.texture',
            finish: 'beer.helles-bock.mouthfeel.finish'
        },
        history: 'beer.helles-bock.history',
        comparison: 'beer.helles-bock.comparison',
        ingredients: {
            malts: 'beer.helles-bock.ingredients.malts',
            hops: 'beer.helles-bock.ingredients.hops',
            yeast: 'beer.helles-bock.ingredients.yeast',
            adjuncts: 'beer.helles-bock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–7.4%',
            ibu: '23–35',
            srm: '6–11',
            og: '1.064–1.072',
            fg: '1.011–1.018'
        },
        variations: ['Maibock'],
        examples: [
            { brand: 'Ayinger', name: 'Maibock' },
            { brand: 'Einbecker', name: 'Mai-Ur-Bock' },
            { brand: 'Hofbräu', name: 'Maibock' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Seidel / Pokal',
            validity: '1–2 anos (guarda)'
        },
        pairing: ['Comida condimentada', 'Queijo Suíço', 'Presunto defumado']
    },
    {
        id: 'german-leichtbier',
        name: 'German Leichtbier',
        origin: '🇩🇪',
        family: 'beer.german-leichtbier.family',
        tag: 'beer.german-leichtbier.tag',
        abv: '3.2%',
        rating: 3.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-leichtbier.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-leichtbier.appearance.color',
            colorHex: '#F6F5A2', // Pale straw
            clarity: 'beer.german-leichtbier.appearance.clarity',
            foam: 'beer.german-leichtbier.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 45,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-leichtbier.mouthfeel.body',
            carbonation: 'beer.german-leichtbier.mouthfeel.carbonation',
            texture: 'beer.german-leichtbier.mouthfeel.texture',
            finish: 'beer.german-leichtbier.mouthfeel.finish'
        },
        history: 'beer.german-leichtbier.history',
        comparison: 'beer.german-leichtbier.comparison',
        ingredients: {
            malts: 'beer.german-leichtbier.ingredients.malts',
            hops: 'beer.german-leichtbier.ingredients.hops',
            yeast: 'beer.german-leichtbier.ingredients.yeast',
            adjuncts: 'beer.german-leichtbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.4–3.6%',
            ibu: '15–28',
            srm: '1.5–4',
            og: '1.026–1.034',
            fg: '1.006–1.010'
        },
        variations: ['Diät-Pils'],
        examples: [
            { brand: 'Beck’s', name: 'Light' },
            { brand: 'Bitburger', name: 'Light' },
            { brand: 'Paulaner', name: 'Münchner Hell Leicht' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner',
            validity: '3–4 meses'
        },
        pairing: ['Saladas', 'Peixe grelhado', 'Pratos leves']
    },
    {
        id: 'kolsch',
        name: 'Kölsch',
        origin: '🇩🇪',
        family: 'beer.kolsch.family',
        tag: 'beer.kolsch.tag',
        abv: '4.8%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.kolsch.description',
        category: 'German Ale (Kölsch)',
        appearance: {
            color: 'beer.kolsch.appearance.color',
            colorHex: '#F0E68C', // Light gold
            clarity: 'beer.kolsch.appearance.clarity',
            foam: 'beer.kolsch.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.kolsch.mouthfeel.body',
            carbonation: 'beer.kolsch.mouthfeel.carbonation',
            texture: 'beer.kolsch.mouthfeel.texture',
            finish: 'beer.kolsch.mouthfeel.finish'
        },
        history: 'beer.kolsch.history',
        comparison: 'beer.kolsch.comparison',
        ingredients: {
            malts: 'beer.kolsch.ingredients.malts',
            hops: 'beer.kolsch.ingredients.hops',
            yeast: 'beer.kolsch.ingredients.yeast',
            adjuncts: 'beer.kolsch.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.2%',
            ibu: '18–30',
            srm: '3.5–5',
            og: '1.044–1.050',
            fg: '1.007–1.011'
        },
        variations: ['Wieß (unfiltered)'],
        examples: [
            { brand: 'Früh', name: 'Kölsch' },
            { brand: 'Gaffel', name: 'Kölsch' },
            { brand: 'Reissdorf', name: 'Kölsch' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Stange',
            validity: '3–4 meses'
        },
        pairing: ['Queijos suaves', 'Salsichas', 'Peixes delicados']
    },
    {
        id: 'german-helles-exportbier',
        name: 'German Helles Exportbier',
        origin: '🇩🇪',
        family: 'beer.german-helles-exportbier.family',
        tag: 'beer.german-helles-exportbier.tag',
        abv: '5.5%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-helles-exportbier.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-helles-exportbier.appearance.color',
            colorHex: '#EBC75E', // Deep gold
            clarity: 'beer.german-helles-exportbier.appearance.clarity',
            foam: 'beer.german-helles-exportbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 40,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-helles-exportbier.mouthfeel.body',
            carbonation: 'beer.german-helles-exportbier.mouthfeel.carbonation',
            texture: 'beer.german-helles-exportbier.mouthfeel.texture',
            finish: 'beer.german-helles-exportbier.mouthfeel.finish'
        },
        history: 'beer.german-helles-exportbier.history',
        comparison: 'beer.german-helles-exportbier.comparison',
        ingredients: {
            malts: 'beer.german-helles-exportbier.ingredients.malts',
            hops: 'beer.german-helles-exportbier.ingredients.hops',
            yeast: 'beer.german-helles-exportbier.ingredients.yeast',
            adjuncts: 'beer.german-helles-exportbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–6.0%',
            ibu: '20–30',
            srm: '4–6',
            og: '1.050–1.058',
            fg: '1.008–1.015'
        },
        variations: ['Dortmunder Export'],
        examples: [
            { brand: 'DAB', name: 'Original' },
            { brand: 'Dortmunder Kronen', name: 'Export' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Willi Becher',
            validity: '4–6 meses'
        },
        pairing: ['Comida de pub', 'Hambúrgueres', 'Salsichas grelhadas']
    },
    {
        id: 'german-pils',
        name: 'German Pils',
        origin: '🇩🇪',
        family: 'beer.german-pils.family',
        tag: 'beer.german-pils.tag',
        abv: '4.8%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.german-pils.description',
        category: 'German Lager',
        appearance: {
            color: 'beer.german-pils.appearance.color',
            colorHex: '#F8F4C4', // Straw to light gold
            clarity: 'beer.german-pils.appearance.clarity',
            foam: 'beer.german-pils.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 70,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.german-pils.mouthfeel.body',
            carbonation: 'beer.german-pils.mouthfeel.carbonation',
            texture: 'beer.german-pils.mouthfeel.texture',
            finish: 'beer.german-pils.mouthfeel.finish'
        },
        history: 'beer.german-pils.history',
        comparison: 'beer.german-pils.comparison',
        ingredients: {
            malts: 'beer.german-pils.ingredients.malts',
            hops: 'beer.german-pils.ingredients.hops',
            yeast: 'beer.german-pils.ingredients.yeast',
            adjuncts: 'beer.german-pils.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.2%',
            ibu: '22–40',
            srm: '2–4',
            og: '1.044–1.050',
            fg: '1.008–1.013'
        },
        variations: ['Pilsener'],
        examples: [
            { brand: 'Bitburger', name: 'Premium Pils' },
            { brand: 'Warsteiner', name: 'Premium Verum' },
            { brand: 'Trumer', name: 'Pils' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner (Tulipa)',
            validity: '3–5 meses'
        },
        pairing: ['Frutos do mar', 'Queijo de cabra', 'Comida japonesa']
    },
    {
        id: 'marzen',
        name: 'Märzen',
        origin: '🇩🇪',
        family: 'beer.marzen.family',
        tag: 'beer.marzen.tag',
        abv: '5.9%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.marzen.description',
        category: 'German Lager / Amber',
        appearance: {
            color: 'beer.marzen.appearance.color',
            colorHex: '#D98235', // Amber-orange
            clarity: 'beer.marzen.appearance.clarity',
            foam: 'beer.marzen.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 25,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.marzen.mouthfeel.body',
            carbonation: 'beer.marzen.mouthfeel.carbonation',
            texture: 'beer.marzen.mouthfeel.texture',
            finish: 'beer.marzen.mouthfeel.finish'
        },
        history: 'beer.marzen.history',
        comparison: 'beer.marzen.comparison',
        ingredients: {
            malts: 'beer.marzen.ingredients.malts',
            hops: 'beer.marzen.ingredients.hops',
            yeast: 'beer.marzen.ingredients.yeast',
            adjuncts: 'beer.marzen.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.6–6.3%',
            ibu: '18–24',
            srm: '8–17',
            og: '1.054–1.060',
            fg: '1.010–1.014'
        },
        variations: ['Oktoberfest (Historical)'],
        examples: [
            { brand: 'Paulaner', name: 'Oktoberfest' },
            { brand: 'Ayinger', name: 'Oktober Fest-Märzen' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Masskrug (Canecão)',
            validity: '6 meses - 1 ano'
        },
        pairing: ['Salsichas grelhadas', 'Frango assado', 'Pretzel']
    },
    {
        id: 'rauchbier',
        name: 'Rauchbier',
        origin: '🇩🇪',
        family: 'beer.rauchbier.family',
        tag: 'beer.rauchbier.tag',
        abv: '5.3%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.rauchbier.description',
        category: 'German Lager / Smoked',
        appearance: {
            color: 'beer.rauchbier.appearance.color',
            colorHex: '#6F3C1F', // Dark amber/brown
            clarity: 'beer.rauchbier.appearance.clarity',
            foam: 'beer.rauchbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 20,
            levedura: 5,
            smoke: 80 // Custom sensory for smoke
        },
        mouthfeel: {
            body: 'beer.rauchbier.mouthfeel.body',
            carbonation: 'beer.rauchbier.mouthfeel.carbonation',
            texture: 'beer.rauchbier.mouthfeel.texture',
            finish: 'beer.rauchbier.mouthfeel.finish'
        },
        history: 'beer.rauchbier.history',
        comparison: 'beer.rauchbier.comparison',
        ingredients: {
            malts: 'beer.rauchbier.ingredients.malts',
            hops: 'beer.rauchbier.ingredients.hops',
            yeast: 'beer.rauchbier.ingredients.yeast',
            adjuncts: 'beer.rauchbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–6.0%',
            ibu: '20–30',
            srm: '12–22',
            og: '1.050–1.057',
            fg: '1.012–1.016'
        },
        variations: ['Bamberg Rauchbier'],
        examples: [
            { brand: 'Schlenkerla', name: 'Märzen' },
            { brand: 'Spezial', name: 'Rauchbier Märzen' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Willi Becher / Mug',
            validity: '6 meses - 1 ano'
        },
        pairing: ['Churrasco', 'Bacon', 'Feijoada']
    },
    {
        id: 'dunkles-bock',
        name: 'Dunkles Bock',
        origin: '🇩🇪',
        family: 'beer.dunkles-bock.family',
        tag: 'beer.dunkles-bock.tag',
        abv: '6.5%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dunkles-bock.description',
        category: 'German Lager / Bock',
        appearance: {
            color: 'beer.dunkles-bock.appearance.color',
            colorHex: '#4A2511', // Dark copper/brown
            clarity: 'beer.dunkles-bock.appearance.clarity',
            foam: 'beer.dunkles-bock.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 20,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.dunkles-bock.mouthfeel.body',
            carbonation: 'beer.dunkles-bock.mouthfeel.carbonation',
            texture: 'beer.dunkles-bock.mouthfeel.texture',
            finish: 'beer.dunkles-bock.mouthfeel.finish'
        },
        history: 'beer.dunkles-bock.history',
        comparison: 'beer.dunkles-bock.comparison',
        ingredients: {
            malts: 'beer.dunkles-bock.ingredients.malts',
            hops: 'beer.dunkles-bock.ingredients.hops',
            yeast: 'beer.dunkles-bock.ingredients.yeast',
            adjuncts: 'beer.dunkles-bock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–7.2%',
            ibu: '20–27',
            srm: '14–22',
            og: '1.064–1.072',
            fg: '1.013–1.019'
        },
        variations: ['Traditional Bock'],
        examples: [
            { brand: 'Einbecker', name: 'Ur-Bock Dunkel' },
            { brand: 'Kneitinger', name: 'Bock' }
        ],
        service: {
            temperature: '8–10°C',
            glass: 'Pokal',
            validity: '1–3 anos (guarda)'
        },
        pairing: ['Carne de caça', 'Queijos curados', 'Sobremesas de chocolate']
    },
    {
        id: 'vienna-lager',
        name: 'Vienna Lager',
        origin: '🇦🇹',
        family: 'beer.vienna-lager.family',
        tag: 'beer.vienna-lager.tag',
        abv: '5.2%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.vienna-lager.description',
        category: 'Amber Lager',
        appearance: {
            color: 'beer.vienna-lager.appearance.color',
            colorHex: '#C36835', // Reddish amber
            clarity: 'beer.vienna-lager.appearance.clarity',
            foam: 'beer.vienna-lager.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 30,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.vienna-lager.mouthfeel.body',
            carbonation: 'beer.vienna-lager.mouthfeel.carbonation',
            texture: 'beer.vienna-lager.mouthfeel.texture',
            finish: 'beer.vienna-lager.mouthfeel.finish'
        },
        history: 'beer.vienna-lager.history',
        comparison: 'beer.vienna-lager.comparison',
        ingredients: {
            malts: 'beer.vienna-lager.ingredients.malts',
            hops: 'beer.vienna-lager.ingredients.hops',
            yeast: 'beer.vienna-lager.ingredients.yeast',
            adjuncts: 'beer.vienna-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.7–5.5%',
            ibu: '18–30',
            srm: '9–15',
            og: '1.048–1.055',
            fg: '1.010–1.014'
        },
        variations: ['Mexican Vienna Lager (historical derivative)'],
        examples: [
            { brand: 'Schell’s', name: 'Firebrick' },
            { brand: 'Brooklyn', name: 'Lager' },
            { brand: 'Negra Modelo', name: 'Modeling Vienna (commercial)' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Flute / Mug',
            validity: '3–6 meses'
        },
        pairing: ['Frango grelhado', 'Salsichas Bratwurst', 'Queijo Emmental']
    },
    {
        id: 'munich-dunkel',
        name: 'Munich Dunkel',
        origin: '🇩🇪',
        family: 'beer.munich-dunkel.family',
        tag: 'beer.munich-dunkel.tag',
        abv: '5.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.munich-dunkel.description',
        category: 'German Lager / Dunkel',
        appearance: {
            color: 'beer.munich-dunkel.appearance.color',
            colorHex: '#582A16', // Deep copper to dark brown
            clarity: 'beer.munich-dunkel.appearance.clarity',
            foam: 'beer.munich-dunkel.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.munich-dunkel.mouthfeel.body',
            carbonation: 'beer.munich-dunkel.mouthfeel.carbonation',
            texture: 'beer.munich-dunkel.mouthfeel.texture',
            finish: 'beer.munich-dunkel.mouthfeel.finish'
        },
        history: 'beer.munich-dunkel.history',
        comparison: 'beer.munich-dunkel.comparison',
        ingredients: {
            malts: 'beer.munich-dunkel.ingredients.malts',
            hops: 'beer.munich-dunkel.ingredients.hops',
            yeast: 'beer.munich-dunkel.ingredients.yeast',
            adjuncts: 'beer.munich-dunkel.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–5.6%',
            ibu: '18–28',
            srm: '17–28',
            og: '1.048–1.056',
            fg: '1.010–1.016'
        },
        variations: ['Franconian Dunkel'],
        examples: [
            { brand: 'Ayinger', name: 'Altbairisch Dunkel' },
            { brand: 'Spaten', name: 'Dunkel' },
            { brand: 'Hofbräu', name: 'Dunkel' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Mug / Willi Becher',
            validity: '4–6 meses'
        },
        pairing: ['Salsichas', 'Costela de porco', 'Bolo alemão']
    },
    {
        id: 'schwarzbier',
        name: 'Schwarzbier',
        origin: '🇩🇪',
        family: 'beer.schwarzbier.family',
        tag: 'beer.schwarzbier.tag',
        abv: '4.9%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.schwarzbier.description',
        category: 'German Lager / Dark',
        appearance: {
            color: 'beer.schwarzbier.appearance.color',
            colorHex: '#2E1A12', // Very dark/black
            clarity: 'beer.schwarzbier.appearance.clarity',
            foam: 'beer.schwarzbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 30,
            levedura: 10,
            roast: 10
        },
        mouthfeel: {
            body: 'beer.schwarzbier.mouthfeel.body',
            carbonation: 'beer.schwarzbier.mouthfeel.carbonation',
            texture: 'beer.schwarzbier.mouthfeel.texture',
            finish: 'beer.schwarzbier.mouthfeel.finish'
        },
        history: 'beer.schwarzbier.history',
        comparison: 'beer.schwarzbier.comparison',
        ingredients: {
            malts: 'beer.schwarzbier.ingredients.malts',
            hops: 'beer.schwarzbier.ingredients.hops',
            yeast: 'beer.schwarzbier.ingredients.yeast',
            adjuncts: 'beer.schwarzbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.4–5.4%',
            ibu: '20–35',
            srm: '19–30',
            og: '1.046–1.052',
            fg: '1.010–1.016'
        },
        variations: ['Köstritzer Style'],
        examples: [
            { brand: 'Köstritzer', name: 'Schwarzbier' },
            { brand: 'Kulmbacher', name: 'Mönchshof Schwarzbier' }
        ],
        service: {
            temperature: '6–8°C',
            glass: 'Pokal / Pilsner',
            validity: '4–6 meses'
        },
        pairing: ['Churrasco', 'Cogumelos', 'Queijo Munster']
    },
    {
        id: 'doppelbock',
        name: 'Doppelbock',
        origin: '🇩🇪',
        family: 'beer.doppelbock.family',
        tag: 'beer.doppelbock.tag',
        abv: '7.5%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.doppelbock.description',
        category: 'German Lager / Strong',
        appearance: {
            color: 'beer.doppelbock.appearance.color',
            colorHex: '#421C02', // Dark copper to dark brown
            clarity: 'beer.doppelbock.appearance.clarity',
            foam: 'beer.doppelbock.appearance.foam'
        },
        sensory: {
            malte: 80,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.doppelbock.mouthfeel.body',
            carbonation: 'beer.doppelbock.mouthfeel.carbonation',
            texture: 'beer.doppelbock.mouthfeel.texture',
            finish: 'beer.doppelbock.mouthfeel.finish'
        },
        history: 'beer.doppelbock.history',
        comparison: 'beer.doppelbock.comparison',
        ingredients: {
            malts: 'beer.doppelbock.ingredients.malts',
            hops: 'beer.doppelbock.ingredients.hops',
            yeast: 'beer.doppelbock.ingredients.yeast',
            adjuncts: 'beer.doppelbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.0–10.0%+',
            ibu: '16–26',
            srm: '6–25',
            og: '1.072–1.112',
            fg: '1.016–1.024'
        },
        variations: ['Pale (Helles) Doppelbock', 'Dark Doppelbock'],
        examples: [
            { brand: 'Paulaner', name: 'Salvator' },
            { brand: 'Ayinger', name: 'Celebrator' },
            { brand: 'Spaten', name: 'Optimator' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Pokal / Snifter',
            validity: '2–5 anos (guarda)'
        },
        pairing: ['Pato assado', 'Queijo Limburger', 'Torta de chocolate']
    },
    {
        id: 'eisbock',
        name: 'Eisbock',
        origin: '🇩🇪',
        family: 'beer.eisbock.family',
        tag: 'beer.eisbock.tag',
        abv: '10.0%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.eisbock.description',
        category: 'German Lager / Strong',
        appearance: {
            color: 'beer.eisbock.appearance.color',
            colorHex: '#3D150B', // Deep copper to dark brown
            clarity: 'beer.eisbock.appearance.clarity',
            foam: 'beer.eisbock.appearance.foam'
        },
        sensory: {
            malte: 90,
            lupulo: 10,
            levedura: 0,
            alcohol: 90 // Custom sensory for alcohol warmth
        },
        mouthfeel: {
            body: 'beer.eisbock.mouthfeel.body',
            carbonation: 'beer.eisbock.mouthfeel.carbonation',
            texture: 'beer.eisbock.mouthfeel.texture',
            finish: 'beer.eisbock.mouthfeel.finish'
        },
        history: 'beer.eisbock.history',
        comparison: 'beer.eisbock.comparison',
        ingredients: {
            malts: 'beer.eisbock.ingredients.malts',
            hops: 'beer.eisbock.ingredients.hops',
            yeast: 'beer.eisbock.ingredients.yeast',
            adjuncts: 'beer.eisbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '9.0–14.0%+',
            ibu: '25–35',
            srm: '18–30',
            og: '1.078–1.120+',
            fg: 'N/A (concentrada)'
        },
        variations: ['Schneider Aventinus Eisbock (Wheat base)'],
        examples: [
            { brand: 'Kulmbacher', name: 'Eisbock' }
        ],
        service: {
            temperature: '10–14°C',
            glass: 'Snifter',
            validity: '5+ anos (guarda)'
        },
        pairing: ['Queijo azul maduro', 'Sobremesa de trufa', 'Digestivo']
    },
    {
        id: 'baltic-porter',
        name: 'Baltic Porter',
        origin: 'Baltic', // Region
        family: 'beer.baltic-porter.family',
        tag: 'beer.baltic-porter.tag',
        abv: '8.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.baltic-porter.description',
        category: 'Porters / Strong Lager',
        appearance: {
            color: 'beer.baltic-porter.appearance.color',
            colorHex: '#251610', // Dark reddish copper to opaque dark brown
            clarity: 'beer.baltic-porter.appearance.clarity',
            foam: 'beer.baltic-porter.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 25,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.baltic-porter.mouthfeel.body',
            carbonation: 'beer.baltic-porter.mouthfeel.carbonation',
            texture: 'beer.baltic-porter.mouthfeel.texture',
            finish: 'beer.baltic-porter.mouthfeel.finish'
        },
        history: 'beer.baltic-porter.history',
        comparison: 'beer.baltic-porter.comparison',
        ingredients: {
            malts: 'beer.baltic-porter.ingredients.malts',
            hops: 'beer.baltic-porter.ingredients.hops',
            yeast: 'beer.baltic-porter.ingredients.yeast',
            adjuncts: 'beer.baltic-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.5–9.5%',
            ibu: '20–40',
            srm: '17–30',
            og: '1.060–1.090',
            fg: '1.016–1.024'
        },
        variations: ['Traditional Top-Fermented (Rare)', 'Bottom-Fermented (Common)'],
        examples: [
            { brand: 'Zywiec', name: 'Porter' },
            { brand: 'Sinebrychoff', name: 'Porter' },
            { brand: 'Baltika', name: '#6 Porter' }
        ],
        service: {
            temperature: '10–12°C',
            glass: 'Snifter / Pokal',
            validity: '2–4 anos (guarda)'
        },
        pairing: ['Bife grelhado', 'Queijo defumado', 'Tiramisu']
    },
    {
        id: 'weissbier',
        name: 'Weissbier',
        origin: '🇩🇪',
        family: 'beer.weissbier.family',
        tag: 'beer.weissbier.tag',
        abv: '5.2%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.weissbier.description',
        category: 'German Wheat',
        appearance: {
            color: 'beer.weissbier.appearance.color',
            colorHex: '#F4C430', // Pale straw to gold
            clarity: 'beer.weissbier.appearance.clarity',
            foam: 'beer.weissbier.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 10,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.weissbier.mouthfeel.body',
            carbonation: 'beer.weissbier.mouthfeel.carbonation',
            texture: 'beer.weissbier.mouthfeel.texture',
            finish: 'beer.weissbier.mouthfeel.finish'
        },
        history: 'beer.weissbier.history',
        comparison: 'beer.weissbier.comparison',
        ingredients: {
            malts: 'beer.weissbier.ingredients.malts',
            hops: 'beer.weissbier.ingredients.hops',
            yeast: 'beer.weissbier.ingredients.yeast',
            adjuncts: 'beer.weissbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.6%',
            ibu: '8–15',
            srm: '2–6',
            og: '1.044–1.052',
            fg: '1.010–1.014'
        },
        variations: ['Hefeweizen', 'Kristallweizen (filtered)'],
        examples: [
            { brand: 'Weihenstephaner', name: 'Hefeweissbier' },
            { brand: 'Schneider', name: 'Weisse Original' },
            { brand: 'Paulaner', name: 'Hefe-Weißbier' }
        ],
        service: {
            temperature: '6–8°C',
            glass: 'Weizen',
            validity: '3–6 meses'
        },
        pairing: ['Salsicha Weisswurst', 'Saladas leves', 'Pretzel']
    },
    {
        id: 'dunkles-weissbier',
        name: 'Dunkles Weissbier',
        origin: '🇩🇪',
        family: 'beer.dunkles-weissbier.family',
        tag: 'beer.dunkles-weissbier.tag',
        abv: '5.3%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dunkles-weissbier.description',
        category: 'German Wheat',
        appearance: {
            color: 'beer.dunkles-weissbier.appearance.color',
            colorHex: '#6F3C1B', // Light copper to mahogany brown
            clarity: 'beer.dunkles-weissbier.appearance.clarity',
            foam: 'beer.dunkles-weissbier.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 10,
            levedura: 70
        },
        mouthfeel: {
            body: 'beer.dunkles-weissbier.mouthfeel.body',
            carbonation: 'beer.dunkles-weissbier.mouthfeel.carbonation',
            texture: 'beer.dunkles-weissbier.mouthfeel.texture',
            finish: 'beer.dunkles-weissbier.mouthfeel.finish'
        },
        history: 'beer.dunkles-weissbier.history',
        comparison: 'beer.dunkles-weissbier.comparison',
        ingredients: {
            malts: 'beer.dunkles-weissbier.ingredients.malts',
            hops: 'beer.dunkles-weissbier.ingredients.hops',
            yeast: 'beer.dunkles-weissbier.ingredients.yeast',
            adjuncts: 'beer.dunkles-weissbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–5.6%',
            ibu: '10–18',
            srm: '14–23',
            og: '1.044–1.056',
            fg: '1.010–1.014'
        },
        variations: ['Ur-Weisse'],
        examples: [
            { brand: 'Erdinger', name: 'Dunkel' },
            { brand: 'Franziskaner', name: 'Hefe-Weisse Dunkel' },
            { brand: 'Ayinger', name: 'Ur-Weisse' }
        ],
        service: {
            temperature: '7–9°C',
            glass: 'Weizen',
            validity: '4–6 meses'
        },
        pairing: ['Pato assado', 'Sobremesas de banana', 'Queijo Gouda']
    },
    {
        id: 'weizenbock',
        name: 'Weizenbock',
        origin: '🇩🇪',
        family: 'beer.weizenbock.family',
        tag: 'beer.weizenbock.tag',
        abv: '7.7%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.weizenbock.description',
        category: 'German Wheat / Strong',
        appearance: {
            color: 'beer.weizenbock.appearance.color',
            colorHex: '#5D2B15', // Dark amber to dark ruby-brown
            clarity: 'beer.weizenbock.appearance.clarity',
            foam: 'beer.weizenbock.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 15,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.weizenbock.mouthfeel.body',
            carbonation: 'beer.weizenbock.mouthfeel.carbonation',
            texture: 'beer.weizenbock.mouthfeel.texture',
            finish: 'beer.weizenbock.mouthfeel.finish'
        },
        history: 'beer.weizenbock.history',
        comparison: 'beer.weizenbock.comparison',
        ingredients: {
            malts: 'beer.weizenbock.ingredients.malts',
            hops: 'beer.weizenbock.ingredients.hops',
            yeast: 'beer.weizenbock.ingredients.yeast',
            adjuncts: 'beer.weizenbock.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.5–9.0%',
            ibu: '15–30',
            srm: '6–25',
            og: '1.064–1.090',
            fg: '1.015–1.022'
        },
        variations: ['Pale Weizenbock', 'Dark Weizenbock'],
        examples: [
            { brand: 'Schneider', name: 'Aventinus (TAP6)' },
            { brand: 'Weihenstephaner', name: 'Vitus' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Weizen',
            validity: '1–4 anos (guarda)'
        },
        pairing: ['Carne de veado', 'Torta de frutas', 'Queijo Brie']
    },
    {
        id: 'ordinary-bitter',
        name: 'Ordinary Bitter',
        origin: '🇬🇧',
        family: 'beer.ordinary-bitter.family',
        tag: 'beer.ordinary-bitter.tag',
        abv: '3.6%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.ordinary-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.ordinary-bitter.appearance.color',
            colorHex: '#E5A034', // Gold to light amber
            clarity: 'beer.ordinary-bitter.appearance.clarity',
            foam: 'beer.ordinary-bitter.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 60,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.ordinary-bitter.mouthfeel.body',
            carbonation: 'beer.ordinary-bitter.mouthfeel.carbonation',
            texture: 'beer.ordinary-bitter.mouthfeel.texture',
            finish: 'beer.ordinary-bitter.mouthfeel.finish'
        },
        history: 'beer.ordinary-bitter.history',
        comparison: 'beer.ordinary-bitter.comparison',
        ingredients: {
            malts: 'beer.ordinary-bitter.ingredients.malts',
            hops: 'beer.ordinary-bitter.ingredients.hops',
            yeast: 'beer.ordinary-bitter.ingredients.yeast',
            adjuncts: 'beer.ordinary-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.2–3.8%',
            ibu: '25–35',
            srm: '8–14',
            og: '1.030–1.039',
            fg: '1.007–1.011'
        },
        variations: ['Golden Ale (Modern adaptation)'],
        examples: [
            { brand: 'Fuller’s', name: 'Chiswick Bitter' },
            { brand: 'Greene King', name: 'IPA' },
            { brand: 'Brain’s', name: 'Bitter' }
        ],
        service: {
            temperature: '10–13°C (Cask) / 7–10°C',
            glass: 'Pint (Nonic)',
            validity: '3–4 meses'
        },
        pairing: ['Fish and Chips', 'Queijo Cheddar suave', 'Amendoim']
    },
    {
        id: 'best-bitter',
        name: 'Best Bitter',
        origin: '🇬🇧',
        family: 'beer.best-bitter.family',
        tag: 'beer.best-bitter.tag',
        abv: '4.4%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.best-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.best-bitter.appearance.color',
            colorHex: '#CD7F32', // Amber to copper
            clarity: 'beer.best-bitter.appearance.clarity',
            foam: 'beer.best-bitter.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.best-bitter.mouthfeel.body',
            carbonation: 'beer.best-bitter.mouthfeel.carbonation',
            texture: 'beer.best-bitter.mouthfeel.texture',
            finish: 'beer.best-bitter.mouthfeel.finish'
        },
        history: 'beer.best-bitter.history',
        comparison: 'beer.best-bitter.comparison',
        ingredients: {
            malts: 'beer.best-bitter.ingredients.malts',
            hops: 'beer.best-bitter.ingredients.hops',
            yeast: 'beer.best-bitter.ingredients.yeast',
            adjuncts: 'beer.best-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–4.6%',
            ibu: '25–40',
            srm: '8–16',
            og: '1.040–1.048',
            fg: '1.008–1.012'
        },
        variations: ['Special Bitter'],
        examples: [
            { brand: 'Fuller’s', name: 'London Pride' },
            { brand: 'Timothy Taylor’s', name: 'Landlord' },
            { brand: 'Adnams', name: 'Southwold Bitter' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '3–5 meses'
        },
        pairing: ['Frango assado', 'Queijo Lancashire', 'Sanduíche de presunto']
    },
    {
        id: 'strong-bitter',
        name: 'Strong Bitter',
        origin: '🇬🇧',
        family: 'beer.strong-bitter.family',
        tag: 'beer.strong-bitter.tag',
        abv: '5.6%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.strong-bitter.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.strong-bitter.appearance.color',
            colorHex: '#B85C22', // Deep amber to copper
            clarity: 'beer.strong-bitter.appearance.clarity',
            foam: 'beer.strong-bitter.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.strong-bitter.mouthfeel.body',
            carbonation: 'beer.strong-bitter.mouthfeel.carbonation',
            texture: 'beer.strong-bitter.mouthfeel.texture',
            finish: 'beer.strong-bitter.mouthfeel.finish'
        },
        history: 'beer.strong-bitter.history',
        comparison: 'beer.strong-bitter.comparison',
        ingredients: {
            malts: 'beer.strong-bitter.ingredients.malts',
            hops: 'beer.strong-bitter.ingredients.hops',
            yeast: 'beer.strong-bitter.ingredients.yeast',
            adjuncts: 'beer.strong-bitter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.2%',
            ibu: '30–50',
            srm: '8–18',
            og: '1.048–1.060',
            fg: '1.010–1.016'
        },
        variations: ['Extra Special Bitter (ESB)'],
        examples: [
            { brand: 'Fuller’s', name: 'ESB' },
            { brand: 'Shepherd Neame', name: 'Bishop’s Finger' },
            { brand: 'Bass', name: 'Ale' }
        ],
        service: {
            temperature: '11–13°C',
            glass: 'Pint (Nonic)',
            validity: '4–6 meses'
        },
        pairing: ['Cordeiro assado', 'Queijo Stilton', 'Pudim de caramelo']
    },
    {
        id: 'british-golden-ale',
        name: 'British Golden Ale',
        origin: '🇬🇧',
        family: 'beer.british-golden-ale.family',
        tag: 'beer.british-golden-ale.tag',
        abv: '4.6%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.british-golden-ale.description',
        category: 'Pale Commonwealth Beer',
        appearance: {
            color: 'beer.british-golden-ale.appearance.color',
            colorHex: '#F5C04A', // Straw to golden
            clarity: 'beer.british-golden-ale.appearance.clarity',
            foam: 'beer.british-golden-ale.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 65,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.british-golden-ale.mouthfeel.body',
            carbonation: 'beer.british-golden-ale.mouthfeel.carbonation',
            texture: 'beer.british-golden-ale.mouthfeel.texture',
            finish: 'beer.british-golden-ale.mouthfeel.finish'
        },
        history: 'beer.british-golden-ale.history',
        comparison: 'beer.british-golden-ale.comparison',
        ingredients: {
            malts: 'beer.british-golden-ale.ingredients.malts',
            hops: 'beer.british-golden-ale.ingredients.hops',
            yeast: 'beer.british-golden-ale.ingredients.yeast',
            adjuncts: 'beer.british-golden-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–5.0%',
            ibu: '20–45',
            srm: '2–6',
            og: '1.038–1.053',
            fg: '1.006–1.012'
        },
        variations: ['Summer Ale'],
        examples: [
            { brand: 'Hop Back', name: 'Summer Lightning' },
            { brand: 'Fuller’s', name: 'Discovery' },
            { brand: 'Crouch Vale', name: 'Brewers Gold' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint',
            validity: '3–4 meses'
        },
        pairing: ['Salada Caesar', 'Frango grelhado', 'Lemon Tart']
    },
    {
        id: 'australian-sparkling-ale',
        name: 'Australian Sparkling Ale',
        origin: '🇦🇺',
        family: 'beer.australian-sparkling-ale.family',
        tag: 'beer.australian-sparkling-ale.tag',
        abv: '5.8%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.australian-sparkling-ale.description',
        category: 'Pale Commonwealth Beer',
        appearance: {
            color: 'beer.australian-sparkling-ale.appearance.color',
            colorHex: '#EBB44D', // Deep yellow to light amber
            clarity: 'beer.australian-sparkling-ale.appearance.clarity',
            foam: 'beer.australian-sparkling-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 50,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.australian-sparkling-ale.mouthfeel.body',
            carbonation: 'beer.australian-sparkling-ale.mouthfeel.carbonation',
            texture: 'beer.australian-sparkling-ale.mouthfeel.texture',
            finish: 'beer.australian-sparkling-ale.mouthfeel.finish'
        },
        history: 'beer.australian-sparkling-ale.history',
        comparison: 'beer.australian-sparkling-ale.comparison',
        ingredients: {
            malts: 'beer.australian-sparkling-ale.ingredients.malts',
            hops: 'beer.australian-sparkling-ale.ingredients.hops',
            yeast: 'beer.australian-sparkling-ale.ingredients.yeast',
            adjuncts: 'beer.australian-sparkling-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '20–35',
            srm: '4–7',
            og: '1.038–1.050',
            fg: '1.004–1.006'
        },
        variations: [],
        examples: [
            { brand: 'Coopers', name: 'Sparkling Ale' },
            { brand: 'Coopers', name: 'Original Pale Ale' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pokal ou Lager',
            validity: '6 meses'
        },
        pairing: ['Churrasco', 'Fish and Chips', 'Torta de carne']
    },
    {
        id: 'english-ipa',
        name: 'English IPA',
        origin: '🇬🇧',
        family: 'beer.english-ipa.family',
        tag: 'beer.english-ipa.tag',
        abv: '6.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.english-ipa.description',
        category: 'British Ale',
        appearance: {
            color: 'beer.english-ipa.appearance.color',
            colorHex: '#D68A3A', // Golden to deep amber
            clarity: 'beer.english-ipa.appearance.clarity',
            foam: 'beer.english-ipa.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 70,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.english-ipa.mouthfeel.body',
            carbonation: 'beer.english-ipa.mouthfeel.carbonation',
            texture: 'beer.english-ipa.mouthfeel.texture',
            finish: 'beer.english-ipa.mouthfeel.finish'
        },
        history: 'beer.english-ipa.history',
        comparison: 'beer.english-ipa.comparison',
        ingredients: {
            malts: 'beer.english-ipa.ingredients.malts',
            hops: 'beer.english-ipa.ingredients.hops',
            yeast: 'beer.english-ipa.ingredients.yeast',
            adjuncts: 'beer.english-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–7.5%',
            ibu: '40–60',
            srm: '6–14',
            og: '1.050–1.070',
            fg: '1.010–1.015'
        },
        variations: [],
        examples: [
            { brand: 'Meantime', name: 'India Pale Ale' },
            { brand: 'Fuller’s', name: 'Bengal Lancer' },
            { brand: 'Samuel Smith’s', name: 'India Ale' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '4–6 meses'
        },
        pairing: ['Curry indiano', 'Queijo Cheddar envelhecido', 'Gengibre cristalizado']
    },
    {
        id: 'dark-mild',
        name: 'Dark Mild',
        origin: '🇬🇧',
        family: 'beer.dark-mild.family',
        tag: 'beer.dark-mild.tag',
        abv: '3.6%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.dark-mild.description',
        category: 'Brown British Beer',
        appearance: {
            color: 'beer.dark-mild.appearance.color',
            colorHex: '#4E2A14', // Copper to dark brown
            clarity: 'beer.dark-mild.appearance.clarity',
            foam: 'beer.dark-mild.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 15,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.dark-mild.mouthfeel.body',
            carbonation: 'beer.dark-mild.mouthfeel.carbonation',
            texture: 'beer.dark-mild.mouthfeel.texture',
            finish: 'beer.dark-mild.mouthfeel.finish'
        },
        history: 'beer.dark-mild.history',
        comparison: 'beer.dark-mild.comparison',
        ingredients: {
            malts: 'beer.dark-mild.ingredients.malts',
            hops: 'beer.dark-mild.ingredients.hops',
            yeast: 'beer.dark-mild.ingredients.yeast',
            adjuncts: 'beer.dark-mild.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.0–3.8%',
            ibu: '10–25',
            srm: '12–25',
            og: '1.030–1.038',
            fg: '1.008–1.013'
        },
        variations: ['Pale Mild (Rare)'],
        examples: [
            { brand: 'Banks\'s', name: 'Mild' },
            { brand: 'Timothy Taylor\'s', name: 'Dark Mild' },
            { brand: 'Moorhouse’s', name: 'Black Cat' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '2–3 meses'
        },
        pairing: ['Cogumelos assados', 'Queijo Cheshire', 'Bolo de frutas']
    },
    {
        id: 'british-brown-ale',
        name: 'British Brown Ale',
        origin: '🇬🇧',
        family: 'beer.british-brown-ale.family',
        tag: 'beer.british-brown-ale.tag',
        abv: '4.8%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.british-brown-ale.description',
        category: 'Brown British Beer',
        appearance: {
            color: 'beer.british-brown-ale.appearance.color',
            colorHex: '#5B3423', // Dark amber to dark reddish-brown
            clarity: 'beer.british-brown-ale.appearance.clarity',
            foam: 'beer.british-brown-ale.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 25,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.british-brown-ale.mouthfeel.body',
            carbonation: 'beer.british-brown-ale.mouthfeel.carbonation',
            texture: 'beer.british-brown-ale.mouthfeel.texture',
            finish: 'beer.british-brown-ale.mouthfeel.finish'
        },
        history: 'beer.british-brown-ale.history',
        comparison: 'beer.british-brown-ale.comparison',
        ingredients: {
            malts: 'beer.british-brown-ale.ingredients.malts',
            hops: 'beer.british-brown-ale.ingredients.hops',
            yeast: 'beer.british-brown-ale.ingredients.yeast',
            adjuncts: 'beer.british-brown-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.4%',
            ibu: '20–30',
            srm: '12–22',
            og: '1.040–1.052',
            fg: '1.008–1.013'
        },
        variations: ['Northern English Brown', 'Southern English Brown (Historical reference)'],
        examples: [
            { brand: 'Newcastle', name: 'Brown Ale' },
            { brand: 'Samuel Smith’s', name: 'Nut Brown Ale' },
            { brand: 'Wychwood', name: 'Hobgoblin' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '3–6 meses'
        },
        pairing: ['Amêndoas torradas', 'Costela de porco', 'Brownie']
    },
    {
        id: 'english-porter',
        name: 'English Porter',
        origin: '🇬🇧',
        family: 'beer.english-porter.family',
        tag: 'beer.english-porter.tag',
        abv: '4.8%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.english-porter.description',
        category: 'Brown British Beer / Porter',
        appearance: {
            color: 'beer.english-porter.appearance.color',
            colorHex: '#3B2317', // Light to dark brown
            clarity: 'beer.english-porter.appearance.clarity',
            foam: 'beer.english-porter.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.english-porter.mouthfeel.body',
            carbonation: 'beer.english-porter.mouthfeel.carbonation',
            texture: 'beer.english-porter.mouthfeel.texture',
            finish: 'beer.english-porter.mouthfeel.finish'
        },
        history: 'beer.english-porter.history',
        comparison: 'beer.english-porter.comparison',
        ingredients: {
            malts: 'beer.english-porter.ingredients.malts',
            hops: 'beer.english-porter.ingredients.hops',
            yeast: 'beer.english-porter.ingredients.yeast',
            adjuncts: 'beer.english-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–5.4%',
            ibu: '18–35',
            srm: '20–30',
            og: '1.040–1.052',
            fg: '1.008–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Fuller’s', name: 'London Porter' },
            { brand: 'Samuel Smith’s', name: 'Taddy Porter' },
            { brand: 'St. Peter’s', name: 'Old-Style Porter' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Nonic)',
            validity: '6–12 meses'
        },
        pairing: ['Bife defumado', 'Queijo Gruyère', 'Bolo de chocolate']
    },
    {
        id: 'scottish-light',
        name: 'Scottish Light',
        origin: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        family: 'beer.scottish-light.family',
        tag: 'beer.scottish-light.tag',
        abv: '2.9%',
        rating: 3.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.scottish-light.description',
        category: 'Scottish Ale',
        appearance: {
            color: 'beer.scottish-light.appearance.color',
            colorHex: '#8D4004', // Deep copper to dark brown
            clarity: 'beer.scottish-light.appearance.clarity',
            foam: 'beer.scottish-light.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 10,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.scottish-light.mouthfeel.body',
            carbonation: 'beer.scottish-light.mouthfeel.carbonation',
            texture: 'beer.scottish-light.mouthfeel.texture',
            finish: 'beer.scottish-light.mouthfeel.finish'
        },
        history: 'beer.scottish-light.history',
        comparison: 'beer.scottish-light.comparison',
        ingredients: {
            malts: 'beer.scottish-light.ingredients.malts',
            hops: 'beer.scottish-light.ingredients.hops',
            yeast: 'beer.scottish-light.ingredients.yeast',
            adjuncts: 'beer.scottish-light.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.5–3.3%',
            ibu: '10–20',
            srm: '17–22',
            og: '1.030–1.035',
            fg: '1.010–1.013'
        },
        variations: ['60 Shilling (60/-)'],
        examples: [
            { brand: 'Belhaven', name: '60/-' },
            { brand: 'McEwan’s', name: '60/-' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Thistle ou Pint',
            validity: '3 meses'
        },
        pairing: ['Sanduíche leve', 'Sopa de legumes', 'Shortbread']
    },
    {
        id: 'scottish-heavy',
        name: 'Scottish Heavy',
        origin: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        family: 'beer.scottish-heavy.family',
        tag: 'beer.scottish-heavy.tag',
        abv: '3.6%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.scottish-heavy.description',
        category: 'Scottish Ale',
        appearance: {
            color: 'beer.scottish-heavy.appearance.color',
            colorHex: '#6F3724', // Pale copper to brown
            clarity: 'beer.scottish-heavy.appearance.clarity',
            foam: 'beer.scottish-heavy.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 10,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.scottish-heavy.mouthfeel.body',
            carbonation: 'beer.scottish-heavy.mouthfeel.carbonation',
            texture: 'beer.scottish-heavy.mouthfeel.texture',
            finish: 'beer.scottish-heavy.mouthfeel.finish'
        },
        history: 'beer.scottish-heavy.history',
        comparison: 'beer.scottish-heavy.comparison',
        ingredients: {
            malts: 'beer.scottish-heavy.ingredients.malts',
            hops: 'beer.scottish-heavy.ingredients.hops',
            yeast: 'beer.scottish-heavy.ingredients.yeast',
            adjuncts: 'beer.scottish-heavy.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.3–3.9%',
            ibu: '15–25',
            srm: '12–20',
            og: '1.035–1.040',
            fg: '1.010–1.013'
        },
        variations: ['70 Shilling (70/-)'],
        examples: [
            { brand: 'Tennent’s', name: 'Special Ale' },
            { brand: 'Orkney', name: 'Raven Ale' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Thistle ou Pint',
            validity: '4 meses'
        },
        pairing: ['Haggis', 'Cordeiro ensopado', 'Pudim de caramelo']
    },
    {
        id: 'scottish-export',
        name: 'Scottish Export',
        origin: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        family: 'beer.scottish-export.family',
        tag: 'beer.scottish-export.tag',
        abv: '4.5%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.scottish-export.description',
        category: 'Scottish Ale',
        appearance: {
            color: 'beer.scottish-export.appearance.color',
            colorHex: '#5D2B15', // Pale copper to brown
            clarity: 'beer.scottish-export.appearance.clarity',
            foam: 'beer.scottish-export.appearance.foam'
        },
        sensory: {
            malte: 80,
            lupulo: 15,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.scottish-export.mouthfeel.body',
            carbonation: 'beer.scottish-export.mouthfeel.carbonation',
            texture: 'beer.scottish-export.mouthfeel.texture',
            finish: 'beer.scottish-export.mouthfeel.finish'
        },
        history: 'beer.scottish-export.history',
        comparison: 'beer.scottish-export.comparison',
        ingredients: {
            malts: 'beer.scottish-export.ingredients.malts',
            hops: 'beer.scottish-export.ingredients.hops',
            yeast: 'beer.scottish-export.ingredients.yeast',
            adjuncts: 'beer.scottish-export.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.9–5.0%',
            ibu: '15–25',
            srm: '12–20',
            og: '1.040–1.050',
            fg: '1.010–1.014'
        },
        variations: ['80 Shilling (80/-)'],
        examples: [
            { brand: 'Belhaven', name: 'Scottish Ale' },
            { brand: 'Broughton', name: 'Exciseman’s 80/-' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Thistle ou Pint',
            validity: '4–6 meses'
        },
        pairing: ['Carne assada', 'Hambúrguer com bacon', 'Queijo defumado']
    },
    {
        id: 'irish-red-ale',
        name: 'Irish Red Ale',
        origin: '🇮🇪',
        family: 'beer.irish-red-ale.family',
        tag: 'beer.irish-red-ale.tag',
        abv: '4.4%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.irish-red-ale.description',
        category: 'Irish Beer',
        appearance: {
            color: 'beer.irish-red-ale.appearance.color',
            colorHex: '#B94E25', // Amber to reddish-copper
            clarity: 'beer.irish-red-ale.appearance.clarity',
            foam: 'beer.irish-red-ale.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 25,
            levedura: 25
        },
        mouthfeel: {
            body: 'beer.irish-red-ale.mouthfeel.body',
            carbonation: 'beer.irish-red-ale.mouthfeel.carbonation',
            texture: 'beer.irish-red-ale.mouthfeel.texture',
            finish: 'beer.irish-red-ale.mouthfeel.finish'
        },
        history: 'beer.irish-red-ale.history',
        comparison: 'beer.irish-red-ale.comparison',
        ingredients: {
            malts: 'beer.irish-red-ale.ingredients.malts',
            hops: 'beer.irish-red-ale.ingredients.hops',
            yeast: 'beer.irish-red-ale.ingredients.yeast',
            adjuncts: 'beer.irish-red-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–5.0%',
            ibu: '18–28',
            srm: '9–14',
            og: '1.036–1.046',
            fg: '1.008–1.012'
        },
        variations: [],
        examples: [
            { brand: 'Smithwick’s', name: 'Red Ale' },
            { brand: 'Kilkenny', name: 'Irish Beer' },
            { brand: 'Murphy’s', name: 'Irish Red' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint',
            validity: '3–5 meses'
        },
        pairing: ['Rosbife', 'Queijo Cheddar', 'Torta de frango']
    },
    {
        id: 'irish-stout',
        name: 'Irish Stout',
        origin: '🇮🇪',
        family: 'beer.irish-stout.family',
        tag: 'beer.irish-stout.tag',
        abv: '4.2%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.irish-stout.description',
        category: 'Irish Beer / Stout',
        appearance: {
            color: 'beer.irish-stout.appearance.color',
            colorHex: '#000000', // Jet black
            clarity: 'beer.irish-stout.appearance.clarity',
            foam: 'beer.irish-stout.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.irish-stout.mouthfeel.body',
            carbonation: 'beer.irish-stout.mouthfeel.carbonation',
            texture: 'beer.irish-stout.mouthfeel.texture',
            finish: 'beer.irish-stout.mouthfeel.finish'
        },
        history: 'beer.irish-stout.history',
        comparison: 'beer.irish-stout.comparison',
        ingredients: {
            malts: 'beer.irish-stout.ingredients.malts',
            hops: 'beer.irish-stout.ingredients.hops',
            yeast: 'beer.irish-stout.ingredients.yeast',
            adjuncts: 'beer.irish-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–4.5%',
            ibu: '25–45',
            srm: '25–40+',
            og: '1.036–1.044',
            fg: '1.007–1.011'
        },
        variations: ['Dry Stout'],
        examples: [
            { brand: 'Guinness', name: 'Draught' },
            { brand: 'Murphy’s', name: 'Irish Stout' },
            { brand: 'Beamish', name: 'Irish Stout' }
        ],
        service: {
            temperature: '6–8°C',
            glass: 'Pint (Tulipa)',
            validity: '6 meses'
        },
        pairing: ['Ostras', 'Bife e batata', 'Mousse de chocolate']
    },
    {
        id: 'irish-extra-stout',
        name: 'Irish Extra Stout',
        origin: '🇮🇪',
        family: 'beer.irish-extra-stout.family',
        tag: 'beer.irish-extra-stout.tag',
        abv: '6.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.irish-extra-stout.description',
        category: 'Irish Beer / Stout',
        appearance: {
            color: 'beer.irish-extra-stout.appearance.color',
            colorHex: '#000000', // Jet black
            clarity: 'beer.irish-extra-stout.appearance.clarity',
            foam: 'beer.irish-extra-stout.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 25,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.irish-extra-stout.mouthfeel.body',
            carbonation: 'beer.irish-extra-stout.mouthfeel.carbonation',
            texture: 'beer.irish-extra-stout.mouthfeel.texture',
            finish: 'beer.irish-extra-stout.mouthfeel.finish'
        },
        history: 'beer.irish-extra-stout.history',
        comparison: 'beer.irish-extra-stout.comparison',
        ingredients: {
            malts: 'beer.irish-extra-stout.ingredients.malts',
            hops: 'beer.irish-extra-stout.ingredients.hops',
            yeast: 'beer.irish-extra-stout.ingredients.yeast',
            adjuncts: 'beer.irish-extra-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–6.5%',
            ibu: '35–50',
            srm: '30–40+',
            og: '1.052–1.062',
            fg: '1.010–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Guinness', name: 'Extra Stout' },
            { brand: 'Sheaf', name: 'Stout' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint (Tulipa)',
            validity: 'Mínimo 1 ano (guarda)'
        },
        pairing: ['Bife com cerveja preta', 'Queijos fortes', 'Trufa de chocolate']
    },
    {
        id: 'sweet-stout',
        name: 'Sweet Stout',
        origin: '🇬🇧',
        family: 'beer.sweet-stout.family',
        tag: 'beer.sweet-stout.tag',
        abv: '5.0%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.sweet-stout.description',
        category: 'British Stout',
        appearance: {
            color: 'beer.sweet-stout.appearance.color',
            colorHex: '#000000', // Very dark brown to black
            clarity: 'beer.sweet-stout.appearance.clarity',
            foam: 'beer.sweet-stout.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 15,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.sweet-stout.mouthfeel.body',
            carbonation: 'beer.sweet-stout.mouthfeel.carbonation',
            texture: 'beer.sweet-stout.mouthfeel.texture',
            finish: 'beer.sweet-stout.mouthfeel.finish'
        },
        history: 'beer.sweet-stout.history',
        comparison: 'beer.sweet-stout.comparison',
        ingredients: {
            malts: 'beer.sweet-stout.ingredients.malts',
            hops: 'beer.sweet-stout.ingredients.hops',
            yeast: 'beer.sweet-stout.ingredients.yeast',
            adjuncts: 'beer.sweet-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–6.0%',
            ibu: '20–40',
            srm: '30–40',
            og: '1.044–1.060',
            fg: '1.012–1.024'
        },
        variations: ['Milk Stout', 'Cream Stout'],
        examples: [
            { brand: 'Mackeson', name: 'XXX Stout' },
            { brand: 'Sam Smith', name: 'Organic Chocolate Stout' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '6–9 meses'
        },
        pairing: ['Sobremesas com chocolate', 'Queijo Brie', 'Pudim']
    },
    {
        id: 'oatmeal-stout',
        name: 'Oatmeal Stout',
        origin: '🇬🇧',
        family: 'beer.oatmeal-stout.family',
        tag: 'beer.oatmeal-stout.tag',
        abv: '5.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.oatmeal-stout.description',
        category: 'British Stout',
        appearance: {
            color: 'beer.oatmeal-stout.appearance.color',
            colorHex: '#1A1110', // Medium brown to black
            clarity: 'beer.oatmeal-stout.appearance.clarity',
            foam: 'beer.oatmeal-stout.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.oatmeal-stout.mouthfeel.body',
            carbonation: 'beer.oatmeal-stout.mouthfeel.carbonation',
            texture: 'beer.oatmeal-stout.mouthfeel.texture',
            finish: 'beer.oatmeal-stout.mouthfeel.finish'
        },
        history: 'beer.oatmeal-stout.history',
        comparison: 'beer.oatmeal-stout.comparison',
        ingredients: {
            malts: 'beer.oatmeal-stout.ingredients.malts',
            hops: 'beer.oatmeal-stout.ingredients.hops',
            yeast: 'beer.oatmeal-stout.ingredients.yeast',
            adjuncts: 'beer.oatmeal-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–5.9%',
            ibu: '25–40',
            srm: '22–40',
            og: '1.048–1.065',
            fg: '1.010–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Sam Smith', name: 'Oatmeal Stout' },
            { brand: 'Anderson Valley', name: 'Barney Flats' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '6–9 meses'
        },
        pairing: ['Cookies de aveia', 'Queijo Cheddar envelhecido', 'Carne assada']
    },
    {
        id: 'tropical-stout',
        name: 'Tropical Stout',
        origin: '🇯🇲',
        family: 'beer.tropical-stout.family',
        tag: 'beer.tropical-stout.tag',
        abv: '7.0%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.tropical-stout.description',
        category: 'Strong Stout',
        appearance: {
            color: 'beer.tropical-stout.appearance.color',
            colorHex: '#000000', // Very deep brown to black
            clarity: 'beer.tropical-stout.appearance.clarity',
            foam: 'beer.tropical-stout.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 15,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.tropical-stout.mouthfeel.body',
            carbonation: 'beer.tropical-stout.mouthfeel.carbonation',
            texture: 'beer.tropical-stout.mouthfeel.texture',
            finish: 'beer.tropical-stout.mouthfeel.finish'
        },
        history: 'beer.tropical-stout.history',
        comparison: 'beer.tropical-stout.comparison',
        ingredients: {
            malts: 'beer.tropical-stout.ingredients.malts',
            hops: 'beer.tropical-stout.ingredients.hops',
            yeast: 'beer.tropical-stout.ingredients.yeast',
            adjuncts: 'beer.tropical-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–8.0%',
            ibu: '30–50',
            srm: '30–40',
            og: '1.056–1.075',
            fg: '1.010–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Dragon', name: 'Stout' },
            { brand: 'Lion', name: 'Stout' },
            { brand: 'Royal', name: 'Extra Stout' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint ou Snifter',
            validity: '1 ano+'
        },
        pairing: ['Churrasco', 'Bolo de frutas', 'Comida caribenha picante']
    },
    {
        id: 'foreign-extra-stout',
        name: 'Foreign Extra Stout',
        origin: '🇬🇧',
        family: 'beer.foreign-extra-stout.family',
        tag: 'beer.foreign-extra-stout.tag',
        abv: '7.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.foreign-extra-stout.description',
        category: 'Strong Stout',
        appearance: {
            color: 'beer.foreign-extra-stout.appearance.color',
            colorHex: '#000000', // Very deep brown to black
            clarity: 'beer.foreign-extra-stout.appearance.clarity',
            foam: 'beer.foreign-extra-stout.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 30,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.foreign-extra-stout.mouthfeel.body',
            carbonation: 'beer.foreign-extra-stout.mouthfeel.carbonation',
            texture: 'beer.foreign-extra-stout.mouthfeel.texture',
            finish: 'beer.foreign-extra-stout.mouthfeel.finish'
        },
        history: 'beer.foreign-extra-stout.history',
        comparison: 'beer.foreign-extra-stout.comparison',
        ingredients: {
            malts: 'beer.foreign-extra-stout.ingredients.malts',
            hops: 'beer.foreign-extra-stout.ingredients.hops',
            yeast: 'beer.foreign-extra-stout.ingredients.yeast',
            adjuncts: 'beer.foreign-extra-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–8.0%',
            ibu: '50–70',
            srm: '30–40',
            og: '1.056–1.075',
            fg: '1.010–1.018'
        },
        variations: ['Export Stout'],
        examples: [
            { brand: 'Guinness', name: 'Foreign Extra Stout' },
            { brand: 'Coopers', name: 'Best Extra Stout' }
        ],
        service: {
            temperature: '12–14°C',
            glass: 'Snifter ou Pint',
            validity: '2 anos+ (guarda)'
        },
        pairing: ['Ostras fortes', 'Queijo azul', 'Chocolate amargo 80%']
    },
    {
        id: 'british-strong-ale',
        name: 'British Strong Ale',
        origin: '🇬🇧',
        family: 'beer.british-strong-ale.family',
        tag: 'beer.british-strong-ale.tag',
        abv: '6.5%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.british-strong-ale.description',
        category: 'British Strong Ale',
        appearance: {
            color: 'beer.british-strong-ale.appearance.color',
            colorHex: '#9B361E', // Deep gold to dark reddish-brown
            clarity: 'beer.british-strong-ale.appearance.clarity',
            foam: 'beer.british-strong-ale.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.british-strong-ale.mouthfeel.body',
            carbonation: 'beer.british-strong-ale.mouthfeel.carbonation',
            texture: 'beer.british-strong-ale.mouthfeel.texture',
            finish: 'beer.british-strong-ale.mouthfeel.finish'
        },
        history: 'beer.british-strong-ale.history',
        comparison: 'beer.british-strong-ale.comparison',
        ingredients: {
            malts: 'beer.british-strong-ale.ingredients.malts',
            hops: 'beer.british-strong-ale.ingredients.hops',
            yeast: 'beer.british-strong-ale.ingredients.yeast',
            adjuncts: 'beer.british-strong-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–8.0%',
            ibu: '30–60',
            srm: '8–22',
            og: '1.055–1.080',
            fg: '1.015–1.022'
        },
        variations: [],
        examples: [
            { brand: 'Fuller’s', name: '1845' },
            { brand: 'Young’s', name: 'Special London Ale' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Snifter ou Pint',
            validity: '1–2 anos'
        },
        pairing: ['Assado de domingo', 'Queijo Stilton', 'Torta de nozes']
    },
    {
        id: 'old-ale',
        name: 'Old Ale',
        origin: '🇬🇧',
        family: 'beer.old-ale.family',
        tag: 'beer.old-ale.tag',
        abv: '7.5%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.old-ale.description',
        category: 'British Strong Ale',
        appearance: {
            color: 'beer.old-ale.appearance.color',
            colorHex: '#522014', // Light amber to very dark reddish-brown
            clarity: 'beer.old-ale.appearance.clarity',
            foam: 'beer.old-ale.appearance.foam'
        },
        sensory: {
            malte: 80,
            lupulo: 10,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.old-ale.mouthfeel.body',
            carbonation: 'beer.old-ale.mouthfeel.carbonation',
            texture: 'beer.old-ale.mouthfeel.texture',
            finish: 'beer.old-ale.mouthfeel.finish'
        },
        history: 'beer.old-ale.history',
        comparison: 'beer.old-ale.comparison',
        ingredients: {
            malts: 'beer.old-ale.ingredients.malts',
            hops: 'beer.old-ale.ingredients.hops',
            yeast: 'beer.old-ale.ingredients.yeast',
            adjuncts: 'beer.old-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–9.0%',
            ibu: '30–60',
            srm: '10–22',
            og: '1.055–1.088',
            fg: '1.015–1.022'
        },
        variations: ['Winter Warmer'],
        examples: [
            { brand: 'Theakston', name: 'Old Peculier' },
            { brand: 'Greene King', name: 'Strong Suffolk' }
        ],
        service: {
            temperature: '12–14°C',
            glass: 'Snifter',
            validity: '5 anos+ (envelhecimento)'
        },
        pairing: ['Cordeiro', 'Queijos azuis', 'Pão de gengibre']
    },
    {
        id: 'wee-heavy',
        name: 'Wee Heavy',
        origin: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
        family: 'beer.wee-heavy.family',
        tag: 'beer.wee-heavy.tag',
        abv: '8.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.wee-heavy.description',
        category: 'Scottish Strong Ale',
        appearance: {
            color: 'beer.wee-heavy.appearance.color',
            colorHex: '#6F3724', // Light copper to dark brown
            clarity: 'beer.wee-heavy.appearance.clarity',
            foam: 'beer.wee-heavy.appearance.foam'
        },
        sensory: {
            malte: 85,
            lupulo: 5,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.wee-heavy.mouthfeel.body',
            carbonation: 'beer.wee-heavy.mouthfeel.carbonation',
            texture: 'beer.wee-heavy.mouthfeel.texture',
            finish: 'beer.wee-heavy.mouthfeel.finish'
        },
        history: 'beer.wee-heavy.history',
        comparison: 'beer.wee-heavy.comparison',
        ingredients: {
            malts: 'beer.wee-heavy.ingredients.malts',
            hops: 'beer.wee-heavy.ingredients.hops',
            yeast: 'beer.wee-heavy.ingredients.yeast',
            adjuncts: 'beer.wee-heavy.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.5–10.0%',
            ibu: '17–35',
            srm: '14–25',
            og: '1.070–1.130',
            fg: '1.018–1.040'
        },
        variations: ['Strong Scotch Ale'],
        examples: [
            { brand: 'Traquair', name: 'House Ale' },
            { brand: 'Orkney', name: 'Skull Splitter' }
        ],
        service: {
            temperature: '12–14°C',
            glass: 'Thistle',
            validity: '3 anos+ (guarda)'
        },
        pairing: ['Sobremesas de caramelo', 'Queijo defumado', 'Shortbread']
    },
    {
        id: 'english-barley-wine',
        name: 'English Barley Wine',
        origin: '🇬🇧',
        family: 'beer.english-barley-wine.family',
        tag: 'beer.english-barley-wine.tag',
        abv: '10.0%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.english-barley-wine.description',
        category: 'Strong Ale',
        appearance: {
            color: 'beer.english-barley-wine.appearance.color',
            colorHex: '#90461F', // Rich gold to dark brown
            clarity: 'beer.english-barley-wine.appearance.clarity',
            foam: 'beer.english-barley-wine.appearance.foam'
        },
        sensory: {
            malte: 85,
            lupulo: 15,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.english-barley-wine.mouthfeel.body',
            carbonation: 'beer.english-barley-wine.mouthfeel.carbonation',
            texture: 'beer.english-barley-wine.mouthfeel.texture',
            finish: 'beer.english-barley-wine.mouthfeel.finish'
        },
        history: 'beer.english-barley-wine.history',
        comparison: 'beer.english-barley-wine.comparison',
        ingredients: {
            malts: 'beer.english-barley-wine.ingredients.malts',
            hops: 'beer.english-barley-wine.ingredients.hops',
            yeast: 'beer.english-barley-wine.ingredients.yeast',
            adjuncts: 'beer.english-barley-wine.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '35–70',
            srm: '8–22',
            og: '1.080–1.120',
            fg: '1.018–1.030'
        },
        variations: [],
        examples: [
            { brand: 'Thomas Hardy’s', name: 'Ale' },
            { brand: 'J.W. Lees', name: 'Harvest Ale' },
            { brand: 'Fuller’s', name: 'Golden Pride' }
        ],
        service: {
            temperature: '12–14°C',
            glass: 'Snifter',
            validity: '10 anos+ (longeva)'
        },
        pairing: ['Queijo Stilton', 'Nozes', 'Charuto']
    },
    {
        id: 'blonde-ale',
        name: 'Blonde Ale',
        origin: '🇺🇸',
        family: 'beer.blonde-ale.family',
        tag: 'beer.blonde-ale.tag',
        abv: '4.5%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.blonde-ale.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.blonde-ale.appearance.color',
            colorHex: '#F3D337', // Light yellow to deep gold
            clarity: 'beer.blonde-ale.appearance.clarity',
            foam: 'beer.blonde-ale.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 30,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.blonde-ale.mouthfeel.body',
            carbonation: 'beer.blonde-ale.mouthfeel.carbonation',
            texture: 'beer.blonde-ale.mouthfeel.texture',
            finish: 'beer.blonde-ale.mouthfeel.finish'
        },
        history: 'beer.blonde-ale.history',
        comparison: 'beer.blonde-ale.comparison',
        ingredients: {
            malts: 'beer.blonde-ale.ingredients.malts',
            hops: 'beer.blonde-ale.ingredients.hops',
            yeast: 'beer.blonde-ale.ingredients.yeast',
            adjuncts: 'beer.blonde-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–5.5%',
            ibu: '15–28',
            srm: '3–6',
            og: '1.038–1.054',
            fg: '1.008–1.013'
        },
        variations: [],
        examples: [
            { brand: 'Victory', name: 'Summer Love' },
            { brand: 'Kona', name: 'Big Wave' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Tulipa ou Pint',
            validity: '3–4 meses'
        },
        pairing: ['Frango grelhado', 'Saladas', 'Peixe leve']
    },
    {
        id: 'american-pale-ale',
        name: 'American Pale Ale',
        origin: '🇺🇸',
        family: 'beer.american-pale-ale.family',
        tag: 'beer.american-pale-ale.tag',
        abv: '5.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-pale-ale.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.american-pale-ale.appearance.color',
            colorHex: '#FBB117', // Pale golden to amber
            clarity: 'beer.american-pale-ale.appearance.clarity',
            foam: 'beer.american-pale-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 60,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-pale-ale.mouthfeel.body',
            carbonation: 'beer.american-pale-ale.mouthfeel.carbonation',
            texture: 'beer.american-pale-ale.mouthfeel.texture',
            finish: 'beer.american-pale-ale.mouthfeel.finish'
        },
        history: 'beer.american-pale-ale.history',
        comparison: 'beer.american-pale-ale.comparison',
        ingredients: {
            malts: 'beer.american-pale-ale.ingredients.malts',
            hops: 'beer.american-pale-ale.ingredients.hops',
            yeast: 'beer.american-pale-ale.ingredients.yeast',
            adjuncts: 'beer.american-pale-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.2%',
            ibu: '30–50',
            srm: '5–10',
            og: '1.045–1.060',
            fg: '1.010–1.015'
        },
        variations: [],
        examples: [
            { brand: 'Sierra Nevada', name: 'Pale Ale' },
            { brand: 'Toppling Goliath', name: 'Pseudo Sue' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint (Shaker)',
            validity: '4–6 meses'
        },
        pairing: ['Hambúrguer', 'Queijo Cheddar', 'Torta de limão']
    },
    {
        id: 'american-amber-ale',
        name: 'American Amber Ale',
        origin: '🇺🇸',
        family: 'beer.american-amber-ale.family',
        tag: 'beer.american-amber-ale.tag',
        abv: '5.5%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-amber-ale.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.american-amber-ale.appearance.color',
            colorHex: '#C36829', // Amber to coppery-brown
            clarity: 'beer.american-amber-ale.appearance.clarity',
            foam: 'beer.american-amber-ale.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 50,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-amber-ale.mouthfeel.body',
            carbonation: 'beer.american-amber-ale.mouthfeel.carbonation',
            texture: 'beer.american-amber-ale.mouthfeel.texture',
            finish: 'beer.american-amber-ale.mouthfeel.finish'
        },
        history: 'beer.american-amber-ale.history',
        comparison: 'beer.american-amber-ale.comparison',
        ingredients: {
            malts: 'beer.american-amber-ale.ingredients.malts',
            hops: 'beer.american-amber-ale.ingredients.hops',
            yeast: 'beer.american-amber-ale.ingredients.yeast',
            adjuncts: 'beer.american-amber-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.2%',
            ibu: '25–40',
            srm: '10–17',
            og: '1.045–1.060',
            fg: '1.010–1.015'
        },
        variations: ['Red Ale (West Coast)'],
        examples: [
            { brand: 'Anderson Valley', name: 'Boont Amber' },
            { brand: 'Tröegs', name: 'HopBack Amber' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint (Shaker)',
            validity: '4–6 meses'
        },
        pairing: ['Queijo Port Salut', 'Frango assado', 'Cozido de carne']
    },
    {
        id: 'california-common',
        name: 'California Common',
        origin: '🇺🇸',
        family: 'beer.california-common.family',
        tag: 'beer.california-common.tag',
        abv: '5.0%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.california-common.description',
        category: 'Hybrid / Steam Beer',
        appearance: {
            color: 'beer.california-common.appearance.color',
            colorHex: '#C56230', // Medium amber to light copper
            clarity: 'beer.california-common.appearance.clarity',
            foam: 'beer.california-common.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 45,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.california-common.mouthfeel.body',
            carbonation: 'beer.california-common.mouthfeel.carbonation',
            texture: 'beer.california-common.mouthfeel.texture',
            finish: 'beer.california-common.mouthfeel.finish'
        },
        history: 'beer.california-common.history',
        comparison: 'beer.california-common.comparison',
        ingredients: {
            malts: 'beer.california-common.ingredients.malts',
            hops: 'beer.california-common.ingredients.hops',
            yeast: 'beer.california-common.ingredients.yeast',
            adjuncts: 'beer.california-common.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–5.5%',
            ibu: '30–45',
            srm: '10–14',
            og: '1.048–1.054',
            fg: '1.011–1.014'
        },
        variations: ['Steam Beer'],
        examples: [
            { brand: 'Anchor', name: 'Steam Beer' },
            { brand: 'Steamworks', name: 'Steam Engine' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint',
            validity: '3–5 meses'
        },
        pairing: ['Churrasco', 'Cozido de coco', 'Culinária cajun']
    },
    {
        id: 'american-brown-ale',
        name: 'American Brown Ale',
        origin: '🇺🇸',
        family: 'beer.american-brown-ale.family',
        tag: 'beer.american-brown-ale.tag',
        abv: '5.5%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-brown-ale.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.american-brown-ale.appearance.color',
            colorHex: '#4E2D22', // Dark brown
            clarity: 'beer.american-brown-ale.appearance.clarity',
            foam: 'beer.american-brown-ale.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 40,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-brown-ale.mouthfeel.body',
            carbonation: 'beer.american-brown-ale.mouthfeel.carbonation',
            texture: 'beer.american-brown-ale.mouthfeel.texture',
            finish: 'beer.american-brown-ale.mouthfeel.finish'
        },
        history: 'beer.american-brown-ale.history',
        comparison: 'beer.american-brown-ale.comparison',
        ingredients: {
            malts: 'beer.american-brown-ale.ingredients.malts',
            hops: 'beer.american-brown-ale.ingredients.hops',
            yeast: 'beer.american-brown-ale.ingredients.yeast',
            adjuncts: 'beer.american-brown-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.3–6.2%',
            ibu: '20–30',
            srm: '18–35',
            og: '1.045–1.060',
            fg: '1.010–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Cigar City', name: 'Maduro Brown Ale' },
            { brand: 'Brooklyn', name: 'Brown Ale' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '4–6 meses'
        },
        pairing: ['Carne de porco assada', 'Amêndoas', 'Queijo Gouda envelhecido']
    },
    {
        id: 'american-porter',
        name: 'American Porter',
        origin: '🇺🇸',
        family: 'beer.american-porter.family',
        tag: 'beer.american-porter.tag',
        abv: '5.5%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-porter.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.american-porter.appearance.color',
            colorHex: '#3B2418', // Medium to very dark brown
            clarity: 'beer.american-porter.appearance.clarity',
            foam: 'beer.american-porter.appearance.foam'
        },
        sensory: {
            malte: 55,
            lupulo: 45,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-porter.mouthfeel.body',
            carbonation: 'beer.american-porter.mouthfeel.carbonation',
            texture: 'beer.american-porter.mouthfeel.texture',
            finish: 'beer.american-porter.mouthfeel.finish'
        },
        history: 'beer.american-porter.history',
        comparison: 'beer.american-porter.comparison',
        ingredients: {
            malts: 'beer.american-porter.ingredients.malts',
            hops: 'beer.american-porter.ingredients.hops',
            yeast: 'beer.american-porter.ingredients.yeast',
            adjuncts: 'beer.american-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–6.5%',
            ibu: '25–50',
            srm: '22–40',
            og: '1.050–1.070',
            fg: '1.012–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Deschutes', name: 'Black Butte Porter' },
            { brand: 'Great Lakes', name: 'Edmund Fitzgerald' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '6–9 meses'
        },
        pairing: ['Costelas defumadas', 'Gruyère', 'Brownies']
    },
    {
        id: 'american-stout',
        name: 'American Stout',
        origin: '🇺🇸',
        family: 'beer.american-stout.family',
        tag: 'beer.american-stout.tag',
        abv: '6.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-stout.description',
        category: 'American Ale / Stout',
        appearance: {
            color: 'beer.american-stout.appearance.color',
            colorHex: '#000000', // Jet black
            clarity: 'beer.american-stout.appearance.clarity',
            foam: 'beer.american-stout.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 50,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-stout.mouthfeel.body',
            carbonation: 'beer.american-stout.mouthfeel.carbonation',
            texture: 'beer.american-stout.mouthfeel.texture',
            finish: 'beer.american-stout.mouthfeel.finish'
        },
        history: 'beer.american-stout.history',
        comparison: 'beer.american-stout.comparison',
        ingredients: {
            malts: 'beer.american-stout.ingredients.malts',
            hops: 'beer.american-stout.ingredients.hops',
            yeast: 'beer.american-stout.ingredients.yeast',
            adjuncts: 'beer.american-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–7.0%',
            ibu: '35–75',
            srm: '30–40',
            og: '1.050–1.075',
            fg: '1.010–1.022'
        },
        variations: [],
        examples: [
            { brand: 'Obsidian', name: 'Stout' },
            { brand: 'Sierra Nevada', name: 'Stout' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint',
            validity: '1 ano+'
        },
        pairing: ['Carnes grelhadas', 'Ostras', 'Chocolate amargo']
    },
    {
        id: 'imperial-stout',
        name: 'Imperial Stout',
        origin: '🇺🇸',
        family: 'beer.imperial-stout.family',
        tag: 'beer.imperial-stout.tag',
        abv: '10.0%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.imperial-stout.description',
        category: 'Strong Stout',
        appearance: {
            color: 'beer.imperial-stout.appearance.color',
            colorHex: '#000000', // Jet black, opaque
            clarity: 'beer.imperial-stout.appearance.clarity',
            foam: 'beer.imperial-stout.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 30,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.imperial-stout.mouthfeel.body',
            carbonation: 'beer.imperial-stout.mouthfeel.carbonation',
            texture: 'beer.imperial-stout.mouthfeel.texture',
            finish: 'beer.imperial-stout.mouthfeel.finish'
        },
        history: 'beer.imperial-stout.history',
        comparison: 'beer.imperial-stout.comparison',
        ingredients: {
            malts: 'beer.imperial-stout.ingredients.malts',
            hops: 'beer.imperial-stout.ingredients.hops',
            yeast: 'beer.imperial-stout.ingredients.yeast',
            adjuncts: 'beer.imperial-stout.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '50–90',
            srm: '30–40',
            og: '1.075–1.115',
            fg: '1.018–1.030'
        },
        variations: ['Russian Imperial Stout', 'American Imperial Stout'],
        examples: [
            { brand: 'North Coast', name: 'Old Rasputin' },
            { brand: 'Samuel Smith', name: 'Imperial Stout' }
        ],
        service: {
            temperature: '12–14°C',
            glass: 'Snifter',
            validity: 'Muitos anos (guarda)'
        },
        pairing: ['Foie gras', 'Trufas de chocolate', 'Queijo Stilton']
    },
    {
        id: 'american-ipa',
        name: 'American IPA',
        origin: '🇺🇸',
        family: 'beer.american-ipa.family',
        tag: 'beer.american-ipa.tag',
        abv: '6.5%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-ipa.description',
        category: 'American IPA',
        appearance: {
            color: 'beer.american-ipa.appearance.color',
            colorHex: '#F6C101', // Medium gold to light reddish-amber
            clarity: 'beer.american-ipa.appearance.clarity',
            foam: 'beer.american-ipa.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 80,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.american-ipa.mouthfeel.body',
            carbonation: 'beer.american-ipa.mouthfeel.carbonation',
            texture: 'beer.american-ipa.mouthfeel.texture',
            finish: 'beer.american-ipa.mouthfeel.finish'
        },
        history: 'beer.american-ipa.history',
        comparison: 'beer.american-ipa.comparison',
        ingredients: {
            malts: 'beer.american-ipa.ingredients.malts',
            hops: 'beer.american-ipa.ingredients.hops',
            yeast: 'beer.american-ipa.ingredients.yeast',
            adjuncts: 'beer.american-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–7.5%',
            ibu: '40–70',
            srm: '6–14',
            og: '1.056–1.070',
            fg: '1.008–1.014'
        },
        variations: ['West Coast IPA'],
        examples: [
            { brand: 'Bell’s', name: 'Two Hearted Ale' },
            { brand: 'Russian River', name: 'Blind Pig' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint (Shaker) ou IPA Glass',
            validity: '3–4 meses'
        },
        pairing: ['Comida Tailandesa', 'Curry indiano', 'Gorgonzola']
    },
    {
        id: 'hazy-ipa',
        name: 'Hazy IPA',
        origin: '🇺🇸',
        family: 'beer.hazy-ipa.family',
        tag: 'beer.hazy-ipa.tag',
        abv: '7.0%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.hazy-ipa.description',
        category: 'American IPA',
        appearance: {
            color: 'beer.hazy-ipa.appearance.color',
            colorHex: '#FFC83F', // Straw to very light amber, opaque
            clarity: 'beer.hazy-ipa.appearance.clarity',
            foam: 'beer.hazy-ipa.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 75,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.hazy-ipa.mouthfeel.body',
            carbonation: 'beer.hazy-ipa.mouthfeel.carbonation',
            texture: 'beer.hazy-ipa.mouthfeel.texture',
            finish: 'beer.hazy-ipa.mouthfeel.finish'
        },
        history: 'beer.hazy-ipa.history',
        comparison: 'beer.hazy-ipa.comparison',
        ingredients: {
            malts: 'beer.hazy-ipa.ingredients.malts',
            hops: 'beer.hazy-ipa.ingredients.hops',
            yeast: 'beer.hazy-ipa.ingredients.yeast',
            adjuncts: 'beer.hazy-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–9.0%',
            ibu: '25–70',
            srm: '3–7',
            og: '1.060–1.085',
            fg: '1.010–1.015'
        },
        variations: ['New England IPA (NEIPA)', 'Juicy IPA'],
        examples: [
            { brand: 'Tree House', name: 'Julius' },
            { brand: 'The Alchemist', name: 'Heady Topper' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'IPA Glass',
            validity: '2–3 meses (beber fresco)'
        },
        pairing: ['Tacos de peixe', 'Salada de frutas', 'Queijo de cabra']
    },
    {
        id: 'black-ipa',
        name: 'Black IPA',
        origin: '🇺🇸',
        family: 'beer.black-ipa.family',
        tag: 'beer.black-ipa.tag',
        abv: '6.5%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.black-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.black-ipa.appearance.color',
            colorHex: '#382418', // Dark brown to black
            clarity: 'beer.black-ipa.appearance.clarity',
            foam: 'beer.black-ipa.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 60,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.black-ipa.mouthfeel.body',
            carbonation: 'beer.black-ipa.mouthfeel.carbonation',
            texture: 'beer.black-ipa.mouthfeel.texture',
            finish: 'beer.black-ipa.mouthfeel.finish'
        },
        history: 'beer.black-ipa.history',
        comparison: 'beer.black-ipa.comparison',
        ingredients: {
            malts: 'beer.black-ipa.ingredients.malts',
            hops: 'beer.black-ipa.ingredients.hops',
            yeast: 'beer.black-ipa.ingredients.yeast',
            adjuncts: 'beer.black-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–9.0%',
            ibu: '50–90',
            srm: '25–40',
            og: '1.050–1.085',
            fg: '1.010–1.018'
        },
        variations: ['Cascadian Dark Ale'],
        examples: [
            { brand: 'Stone', name: 'Sublimely Self-Righteous' },
            { brand: 'Firestone Walker', name: 'Wookey Jack' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'IPA Glass ou Pint',
            validity: '3–4 meses'
        },
        pairing: ['Costelas barbecue', 'Queijo Azul', 'Hambúrguer de cogumelos']
    },
    {
        id: 'red-ipa',
        name: 'Red IPA',
        origin: '🇺🇸',
        family: 'beer.red-ipa.family',
        tag: 'beer.red-ipa.tag',
        abv: '6.5%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.red-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.red-ipa.appearance.color',
            colorHex: '#C94F36', // Light reddish-amber to dark reddish-copper
            clarity: 'beer.red-ipa.appearance.clarity',
            foam: 'beer.red-ipa.appearance.foam'
        },
        sensory: {
            malte: 45,
            lupulo: 55,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.red-ipa.mouthfeel.body',
            carbonation: 'beer.red-ipa.mouthfeel.carbonation',
            texture: 'beer.red-ipa.mouthfeel.texture',
            finish: 'beer.red-ipa.mouthfeel.finish'
        },
        history: 'beer.red-ipa.history',
        comparison: 'beer.red-ipa.comparison',
        ingredients: {
            malts: 'beer.red-ipa.ingredients.malts',
            hops: 'beer.red-ipa.ingredients.hops',
            yeast: 'beer.red-ipa.ingredients.yeast',
            adjuncts: 'beer.red-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–7.5%',
            ibu: '40–70',
            srm: '11–17',
            og: '1.056–1.070',
            fg: '1.008–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Sierra Nevada', name: 'Flipside Red IPA' },
            { brand: 'Green Flash', name: 'Hop Head Red' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'IPA Glass ou Pint',
            validity: '3–4 meses'
        },
        pairing: ['Peito de frango grelhado', 'Queijo Cheddar Forte', 'Pizza de pepperoni']
    },
    {
        id: 'rye-ipa',
        name: 'Rye IPA',
        origin: '🇺🇸',
        family: 'beer.rye-ipa.family',
        tag: 'beer.rye-ipa.tag',
        abv: '6.5%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.rye-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.rye-ipa.appearance.color',
            colorHex: '#EBB05E', // Medium gold to light reddish-amber
            clarity: 'beer.rye-ipa.appearance.clarity',
            foam: 'beer.rye-ipa.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 60,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.rye-ipa.mouthfeel.body',
            carbonation: 'beer.rye-ipa.mouthfeel.carbonation',
            texture: 'beer.rye-ipa.mouthfeel.texture',
            finish: 'beer.rye-ipa.mouthfeel.finish'
        },
        history: 'beer.rye-ipa.history',
        comparison: 'beer.rye-ipa.comparison',
        ingredients: {
            malts: 'beer.rye-ipa.ingredients.malts',
            hops: 'beer.rye-ipa.ingredients.hops',
            yeast: 'beer.rye-ipa.ingredients.yeast',
            adjuncts: 'beer.rye-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–8.0%',
            ibu: '50–75',
            srm: '6–14',
            og: '1.056–1.075',
            fg: '1.008–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Bear Republic', name: 'Hop Rod Rye' },
            { brand: 'Sierra Nevada', name: 'Ruthless Rye' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint (Shaker)',
            validity: '4–6 meses'
        },
        pairing: ['Sanduíche de Pastrami', 'Queijos de casca lavada', 'Salsichas alemãs']
    },
    {
        id: 'white-ipa',
        name: 'White IPA',
        origin: '🇺🇸',
        family: 'beer.white-ipa.family',
        tag: 'beer.white-ipa.tag',
        abv: '6.2%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.white-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.white-ipa.appearance.color',
            colorHex: '#F9E498', // Pale to deep golden
            clarity: 'beer.white-ipa.appearance.clarity',
            foam: 'beer.white-ipa.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 50,
            levedura: 25
        },
        mouthfeel: {
            body: 'beer.white-ipa.mouthfeel.body',
            carbonation: 'beer.white-ipa.mouthfeel.carbonation',
            texture: 'beer.white-ipa.mouthfeel.texture',
            finish: 'beer.white-ipa.mouthfeel.finish'
        },
        history: 'beer.white-ipa.history',
        comparison: 'beer.white-ipa.comparison',
        ingredients: {
            malts: 'beer.white-ipa.ingredients.malts',
            hops: 'beer.white-ipa.ingredients.hops',
            yeast: 'beer.white-ipa.ingredients.yeast',
            adjuncts: 'beer.white-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–7.0%',
            ibu: '40–70',
            srm: '5–8',
            og: '1.056–1.065',
            fg: '1.010–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Deschutes', name: 'Chainbreaker' },
            { brand: 'Harpoon', name: 'The Long Thaw' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Tulipa ou Pint',
            validity: '3–4 meses'
        },
        pairing: ['Frutos do mar', 'Saladas com vinagrete', 'Mexilhões']
    },
    {
        id: 'belgian-ipa',
        name: 'Belgian IPA',
        origin: '🇧🇪',
        family: 'beer.belgian-ipa.family',
        tag: 'beer.belgian-ipa.tag',
        abv: '7.5%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.belgian-ipa.appearance.color',
            colorHex: '#EAA95A', // Light golden to amber
            clarity: 'beer.belgian-ipa.appearance.clarity',
            foam: 'beer.belgian-ipa.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 50,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.belgian-ipa.mouthfeel.body',
            carbonation: 'beer.belgian-ipa.mouthfeel.carbonation',
            texture: 'beer.belgian-ipa.mouthfeel.texture',
            finish: 'beer.belgian-ipa.mouthfeel.finish'
        },
        history: 'beer.belgian-ipa.history',
        comparison: 'beer.belgian-ipa.comparison',
        ingredients: {
            malts: 'beer.belgian-ipa.ingredients.malts',
            hops: 'beer.belgian-ipa.ingredients.hops',
            yeast: 'beer.belgian-ipa.ingredients.yeast',
            adjuncts: 'beer.belgian-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.2–9.5%',
            ibu: '50–90',
            srm: '5–8',
            og: '1.058–1.080',
            fg: '1.008–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Duvel', name: 'Tripel Hop' },
            { brand: 'Stone', name: 'Cali-Belgique' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Tulipa',
            validity: '1–2 anos'
        },
        pairing: ['Comida indiana cremosa', 'Queijo Brie', 'Carne branca assada']
    },
    {
        id: 'brut-ipa',
        name: 'Brut IPA',
        origin: '🇺🇸',
        family: 'beer.brut-ipa.family',
        tag: 'beer.brut-ipa.tag',
        abv: '7.0%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.brut-ipa.description',
        category: 'Specialty IPA',
        appearance: {
            color: 'beer.brut-ipa.appearance.color',
            colorHex: '#FFF8C7', // Very pale straw
            clarity: 'beer.brut-ipa.appearance.clarity',
            foam: 'beer.brut-ipa.appearance.foam'
        },
        sensory: {
            malte: 10,
            lupulo: 85,
            levedura: 5
        },
        mouthfeel: {
            body: 'beer.brut-ipa.mouthfeel.body',
            carbonation: 'beer.brut-ipa.mouthfeel.carbonation',
            texture: 'beer.brut-ipa.mouthfeel.texture',
            finish: 'beer.brut-ipa.mouthfeel.finish'
        },
        history: 'beer.brut-ipa.history',
        comparison: 'beer.brut-ipa.comparison',
        ingredients: {
            malts: 'beer.brut-ipa.ingredients.malts',
            hops: 'beer.brut-ipa.ingredients.hops',
            yeast: 'beer.brut-ipa.ingredients.yeast',
            adjuncts: 'beer.brut-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–7.5%',
            ibu: '20–50',
            srm: '2–4',
            og: '1.045–1.060',
            fg: '0.990–1.004'
        },
        variations: [],
        examples: [
            { brand: 'Drake’s', name: 'Brightside Extra Brut' },
            { brand: 'Ommegang', name: 'Brut IPA' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Taça Flute',
            validity: '3 meses (beber fresco)'
        },
        pairing: ['Salada Caesar', 'Camarão', 'Sushi']
    },
    {
        id: 'double-ipa',
        name: 'Double IPA',
        origin: '🇺🇸',
        family: 'beer.double-ipa.family',
        tag: 'beer.double-ipa.tag',
        abv: '8.5%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.double-ipa.description',
        category: 'American IPA',
        appearance: {
            color: 'beer.double-ipa.appearance.color',
            colorHex: '#E59E49', // Gold to light orange-copper
            clarity: 'beer.double-ipa.appearance.clarity',
            foam: 'beer.double-ipa.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 90,
            levedura: 0
        },
        mouthfeel: {
            body: 'beer.double-ipa.mouthfeel.body',
            carbonation: 'beer.double-ipa.mouthfeel.carbonation',
            texture: 'beer.double-ipa.mouthfeel.texture',
            finish: 'beer.double-ipa.mouthfeel.finish'
        },
        history: 'beer.double-ipa.history',
        comparison: 'beer.double-ipa.comparison',
        ingredients: {
            malts: 'beer.double-ipa.ingredients.malts',
            hops: 'beer.double-ipa.ingredients.hops',
            yeast: 'beer.double-ipa.ingredients.yeast',
            adjuncts: 'beer.double-ipa.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.5–10.0%',
            ibu: '60–100',
            srm: '6–14',
            og: '1.065–1.085',
            fg: '1.008–1.018'
        },
        variations: ['Imperial IPA'],
        examples: [
            { brand: 'Russian River', name: 'Pliny the Elder' },
            { brand: 'Bell’s', name: 'Hopslam' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'IPA Glass ou Snifter',
            validity: '3–4 meses'
        },
        pairing: ['Bolo de cenoura', 'Queijo Azul', 'Costelinha de porco']
    },
    {
        id: 'american-strong-ale',
        name: 'American Strong Ale',
        origin: '🇺🇸',
        family: 'beer.american-strong-ale.family',
        tag: 'beer.american-strong-ale.tag',
        abv: '8.0%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-strong-ale.description',
        category: 'American Ale',
        appearance: {
            color: 'beer.american-strong-ale.appearance.color',
            colorHex: '#BF6B3E', // Medium amber to deep copper
            clarity: 'beer.american-strong-ale.appearance.clarity',
            foam: 'beer.american-strong-ale.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 60,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.american-strong-ale.mouthfeel.body',
            carbonation: 'beer.american-strong-ale.mouthfeel.carbonation',
            texture: 'beer.american-strong-ale.mouthfeel.texture',
            finish: 'beer.american-strong-ale.mouthfeel.finish'
        },
        history: 'beer.american-strong-ale.history',
        comparison: 'beer.american-strong-ale.comparison',
        ingredients: {
            malts: 'beer.american-strong-ale.ingredients.malts',
            hops: 'beer.american-strong-ale.ingredients.hops',
            yeast: 'beer.american-strong-ale.ingredients.yeast',
            adjuncts: 'beer.american-strong-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.3–10.0%',
            ibu: '50–100',
            srm: '7–18',
            og: '1.062–1.090',
            fg: '1.014–1.024'
        },
        variations: [],
        examples: [
            { brand: 'Stone', name: 'Arrogant Bastard Ale' },
            { brand: 'Great Lakes', name: 'Nosferatu' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Snifter ou Tulipa',
            validity: '1–5 anos (guarda)'
        },
        pairing: ['Pratos condimentados', 'Queijos fortes', 'Sobremesas com caramelo']
    },
    {
        id: 'american-barleywine',
        name: 'American Barleywine',
        origin: '🇺🇸',
        family: 'beer.american-barleywine.family',
        tag: 'beer.american-barleywine.tag',
        abv: '10.0%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.american-barleywine.description',
        category: 'Strong Ale',
        appearance: {
            color: 'beer.american-barleywine.appearance.color',
            colorHex: '#9E4720', // Light amber to medium copper
            clarity: 'beer.american-barleywine.appearance.clarity',
            foam: 'beer.american-barleywine.appearance.foam'
        },
        sensory: {
            malte: 90,
            lupulo: 75,
            levedura: 30
        },
        mouthfeel: {
            body: 'beer.american-barleywine.mouthfeel.body',
            carbonation: 'beer.american-barleywine.mouthfeel.carbonation',
            texture: 'beer.american-barleywine.mouthfeel.texture',
            finish: 'beer.american-barleywine.mouthfeel.finish'
        },
        history: 'beer.american-barleywine.history',
        comparison: 'beer.american-barleywine.comparison',
        ingredients: {
            malts: 'beer.american-barleywine.ingredients.malts',
            hops: 'beer.american-barleywine.ingredients.hops',
            yeast: 'beer.american-barleywine.ingredients.yeast',
            adjuncts: 'beer.american-barleywine.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '60–100',
            srm: '9–18',
            og: '1.080–1.120',
            fg: '1.016–1.030'
        },
        variations: [],
        examples: [
            { brand: 'Sierra Nevada', name: 'Bigfoot' },
            { brand: 'Anchor', name: 'Old Foghorn' }
        ],
        service: {
            temperature: '12–15°C',
            glass: 'Snifter',
            validity: '5–10 anos (guarda)'
        },
        pairing: ['Queijo Stilton', 'Nozes', 'Sobremesas ricas']
    },
    {
        id: 'wheatwine',
        name: 'Wheatwine',
        origin: '🇺🇸',
        family: 'beer.wheatwine.family',
        tag: 'beer.wheatwine.tag',
        abv: '9.5%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.wheatwine.description',
        category: 'Strong Ale',
        appearance: {
            color: 'beer.wheatwine.appearance.color',
            colorHex: '#DFAF4C', // Gold to deep amber
            clarity: 'beer.wheatwine.appearance.clarity',
            foam: 'beer.wheatwine.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 40,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.wheatwine.mouthfeel.body',
            carbonation: 'beer.wheatwine.mouthfeel.carbonation',
            texture: 'beer.wheatwine.mouthfeel.texture',
            finish: 'beer.wheatwine.mouthfeel.finish'
        },
        history: 'beer.wheatwine.history',
        comparison: 'beer.wheatwine.comparison',
        ingredients: {
            malts: 'beer.wheatwine.ingredients.malts',
            hops: 'beer.wheatwine.ingredients.hops',
            yeast: 'beer.wheatwine.ingredients.yeast',
            adjuncts: 'beer.wheatwine.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '30–60',
            srm: '6–14',
            og: '1.080–1.120',
            fg: '1.016–1.030'
        },
        variations: [],
        examples: [
            { brand: 'Rubicon', name: 'Winter Wheat Wine' },
            { brand: 'The Bruery', name: 'White Oak' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Snifter',
            validity: '1–5 anos'
        },
        pairing: ['Pastelaria fina', 'Frutas secas', 'Creme brûlée']
    },
    {
        id: 'berliner-weisse',
        name: 'Berliner Weisse',
        origin: '🇩🇪',
        family: 'beer.berliner-weisse.family',
        tag: 'beer.berliner-weisse.tag',
        abv: '3.0%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.berliner-weisse.description',
        category: 'Sour Ale',
        appearance: {
            color: 'beer.berliner-weisse.appearance.color',
            colorHex: '#F6F3CB', // Very pale straw
            clarity: 'beer.berliner-weisse.appearance.clarity',
            foam: 'beer.berliner-weisse.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 0,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.berliner-weisse.mouthfeel.body',
            carbonation: 'beer.berliner-weisse.mouthfeel.carbonation',
            texture: 'beer.berliner-weisse.mouthfeel.texture',
            finish: 'beer.berliner-weisse.mouthfeel.finish'
        },
        history: 'beer.berliner-weisse.history',
        comparison: 'beer.berliner-weisse.comparison',
        ingredients: {
            malts: 'beer.berliner-weisse.ingredients.malts',
            hops: 'beer.berliner-weisse.ingredients.hops',
            yeast: 'beer.berliner-weisse.ingredients.yeast',
            adjuncts: 'beer.berliner-weisse.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.8–3.8%',
            ibu: '3–8',
            srm: '2–3',
            og: '1.028–1.032',
            fg: '1.003–1.006'
        },
        variations: ['Com xarope (Himbeer/Waldmeister)', 'Florida Weisse (frutada)'],
        examples: [
            { brand: 'Berliner Kindl', name: 'Weisse' },
            { brand: 'Bayerischer Bahnhof', name: 'Berliner Style Weisse' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Cálice (Goblet)',
            validity: '6–12 meses'
        },
        pairing: ['Cheesecake', 'Saladas leves', 'Aperitivos salgados']
    },
    {
        id: 'flanders-red-ale',
        name: 'Flanders Red Ale',
        origin: '🇧🇪',
        family: 'beer.flanders-red-ale.family',
        tag: 'beer.flanders-red-ale.tag',
        abv: '5.5%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.flanders-red-ale.description',
        category: 'Sour Ale',
        appearance: {
            color: 'beer.flanders-red-ale.appearance.color',
            colorHex: '#7B2A2F', // Deep red/burgundy
            clarity: 'beer.flanders-red-ale.appearance.clarity',
            foam: 'beer.flanders-red-ale.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 10,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.flanders-red-ale.mouthfeel.body',
            carbonation: 'beer.flanders-red-ale.mouthfeel.carbonation',
            texture: 'beer.flanders-red-ale.mouthfeel.texture',
            finish: 'beer.flanders-red-ale.mouthfeel.finish'
        },
        history: 'beer.flanders-red-ale.history',
        comparison: 'beer.flanders-red-ale.comparison',
        ingredients: {
            malts: 'beer.flanders-red-ale.ingredients.malts',
            hops: 'beer.flanders-red-ale.ingredients.hops',
            yeast: 'beer.flanders-red-ale.ingredients.yeast',
            adjuncts: 'beer.flanders-red-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.6–6.5%',
            ibu: '10–25',
            srm: '10–17',
            og: '1.048–1.057',
            fg: '1.002–1.012'
        },
        variations: [],
        examples: [
            { brand: 'Rodenbach', name: 'Grand Cru' },
            { brand: 'Duchesse de Bourgogne', name: 'Verhaeghe' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Tulipa ou Snifter',
            validity: '2–5 anos (guarda)'
        },
        pairing: ['Bife com molho béarnaise', 'Queijo de Cabra', 'Torta de frutas vermelhas']
    },
    {
        id: 'oud-bruin',
        name: 'Oud Bruin',
        origin: '🇧🇪',
        family: 'beer.oud-bruin.family',
        tag: 'beer.oud-bruin.tag',
        abv: '6.0%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.oud-bruin.description',
        category: 'Sour Ale',
        appearance: {
            color: 'beer.oud-bruin.appearance.color',
            colorHex: '#5A3A29', // Dark reddish-brown
            clarity: 'beer.oud-bruin.appearance.clarity',
            foam: 'beer.oud-bruin.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 15,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.oud-bruin.mouthfeel.body',
            carbonation: 'beer.oud-bruin.mouthfeel.carbonation',
            texture: 'beer.oud-bruin.mouthfeel.texture',
            finish: 'beer.oud-bruin.mouthfeel.finish'
        },
        history: 'beer.oud-bruin.history',
        comparison: 'beer.oud-bruin.comparison',
        ingredients: {
            malts: 'beer.oud-bruin.ingredients.malts',
            hops: 'beer.oud-bruin.ingredients.hops',
            yeast: 'beer.oud-bruin.ingredients.yeast',
            adjuncts: 'beer.oud-bruin.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–8.0%',
            ibu: '20–25',
            srm: '15–22',
            og: '1.040–1.074',
            fg: '1.008–1.012'
        },
        variations: [],
        examples: [
            { brand: 'Liefmans', name: 'Goudenband' },
            { brand: 'VanderGhinste', name: 'Roodbruin' }
        ],
        service: {
            temperature: '10–12°C',
            glass: 'Tulipa',
            validity: '2–5 anos'
        },
        pairing: ['Carne de porco assada', 'Queijo Muenster', 'Crème Brûlée']
    },
    {
        id: 'lambic',
        name: 'Lambic',
        origin: '🇧🇪',
        family: 'beer.lambic.family',
        tag: 'beer.lambic.tag',
        abv: '5.5%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.lambic.description',
        category: 'Wild Ale',
        appearance: {
            color: 'beer.lambic.appearance.color',
            colorHex: '#F2C94C', // Pale to deep golden
            clarity: 'beer.lambic.appearance.clarity',
            foam: 'beer.lambic.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 0,
            levedura: 100
        },
        mouthfeel: {
            body: 'beer.lambic.mouthfeel.body',
            carbonation: 'beer.lambic.mouthfeel.carbonation',
            texture: 'beer.lambic.mouthfeel.texture',
            finish: 'beer.lambic.mouthfeel.finish'
        },
        history: 'beer.lambic.history',
        comparison: 'beer.lambic.comparison',
        ingredients: {
            malts: 'beer.lambic.ingredients.malts',
            hops: 'beer.lambic.ingredients.hops',
            yeast: 'beer.lambic.ingredients.yeast',
            adjuncts: 'beer.lambic.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–6.5%',
            ibu: '0–10',
            srm: '3–6',
            og: '1.040–1.054',
            fg: '1.001–1.010'
        },
        variations: ['Faro (adocicada)'],
        examples: [
            { brand: 'Cantillon', name: 'Grand Cru Bruocsella' },
            { brand: 'Boon', name: 'Lambic' }
        ],
        service: {
            temperature: '10–12°C',
            glass: 'Tumbler ou Tulipa',
            validity: '3–10 anos (depende)'
        },
        pairing: ['Mexilhões', 'Queijo Brie jovem', 'Omeletes']
    },
    {
        id: 'gueuze',
        name: 'Gueuze',
        origin: '🇧🇪',
        family: 'beer.gueuze.family',
        tag: 'beer.gueuze.tag',
        abv: '6.5%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.gueuze.description',
        category: 'Wild Ale',
        appearance: {
            color: 'beer.gueuze.appearance.color',
            colorHex: '#EBB05E', // Golden
            clarity: 'beer.gueuze.appearance.clarity',
            foam: 'beer.gueuze.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 5,
            levedura: 100
        },
        mouthfeel: {
            body: 'beer.gueuze.mouthfeel.body',
            carbonation: 'beer.gueuze.mouthfeel.carbonation',
            texture: 'beer.gueuze.mouthfeel.texture',
            finish: 'beer.gueuze.mouthfeel.finish'
        },
        history: 'beer.gueuze.history',
        comparison: 'beer.gueuze.comparison',
        ingredients: {
            malts: 'beer.gueuze.ingredients.malts',
            hops: 'beer.gueuze.ingredients.hops',
            yeast: 'beer.gueuze.ingredients.yeast',
            adjuncts: 'beer.gueuze.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–8.0%',
            ibu: '0–10',
            srm: '5–6',
            og: '1.040–1.054',
            fg: '1.000–1.006'
        },
        variations: [],
        examples: [
            { brand: 'Cantillon', name: 'Gueuze' },
            { brand: '3 Fonteinen', name: 'Oude Geuze' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Taça Flute ou Tulipa',
            validity: '10–20 anos (envelhece bem)'
        },
        pairing: ['Ostras', 'Mexilhões fritos', 'Waffles sem doce']
    },
    {
        id: 'fruit-lambic',
        name: 'Fruit Lambic',
        origin: '🇧🇪',
        family: 'beer.fruit-lambic.family',
        tag: 'beer.fruit-lambic.tag',
        abv: '6.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.fruit-lambic.description',
        category: 'Wild Ale',
        appearance: {
            color: 'beer.fruit-lambic.appearance.color',
            colorHex: '#D13239', // Depends on fruit (e.g. Raspberry red)
            clarity: 'beer.fruit-lambic.appearance.clarity',
            foam: 'beer.fruit-lambic.appearance.foam'
        },
        sensory: {
            malte: 20,
            lupulo: 5,
            levedura: 95
        },
        mouthfeel: {
            body: 'beer.fruit-lambic.mouthfeel.body',
            carbonation: 'beer.fruit-lambic.mouthfeel.carbonation',
            texture: 'beer.fruit-lambic.mouthfeel.texture',
            finish: 'beer.fruit-lambic.mouthfeel.finish'
        },
        history: 'beer.fruit-lambic.history',
        comparison: 'beer.fruit-lambic.comparison',
        ingredients: {
            malts: 'beer.fruit-lambic.ingredients.malts',
            hops: 'beer.fruit-lambic.ingredients.hops',
            yeast: 'beer.fruit-lambic.ingredients.yeast',
            adjuncts: 'beer.fruit-lambic.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–7.0%',
            ibu: '0–10',
            srm: '3–7',
            og: '1.040–1.060',
            fg: '1.000–1.010'
        },
        variations: ['Kriek (Cereja)', 'Framboise (Framboesa)', 'Pêche (Pêssego)'],
        examples: [
            { brand: 'Cantillon', name: 'Kriek' },
            { brand: '3 Fonteinen', name: 'Schaerbeekse Kriek' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Taça Flute',
            validity: '2–10 anos'
        },
        pairing: ['Salada de frutas', 'Cheesecake', 'Chocolate amargo']
    },
    {
        id: 'gose',
        name: 'Gose',
        origin: '🇩🇪',
        family: 'beer.gose.family',
        tag: 'beer.gose.tag',
        abv: '4.5%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.gose.description',
        category: 'Sour Ale',
        appearance: {
            color: 'beer.gose.appearance.color',
            colorHex: '#F6E58D', // Yellow/Gold
            clarity: 'beer.gose.appearance.clarity',
            foam: 'beer.gose.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 0,
            levedura: 70
        },
        mouthfeel: {
            body: 'beer.gose.mouthfeel.body',
            carbonation: 'beer.gose.mouthfeel.carbonation',
            texture: 'beer.gose.mouthfeel.texture',
            finish: 'beer.gose.mouthfeel.finish'
        },
        history: 'beer.gose.history',
        comparison: 'beer.gose.comparison',
        ingredients: {
            malts: 'beer.gose.ingredients.malts',
            hops: 'beer.gose.ingredients.hops',
            yeast: 'beer.gose.ingredients.yeast',
            adjuncts: 'beer.gose.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.2–4.8%',
            ibu: '5–12',
            srm: '3–4',
            og: '1.036–1.056',
            fg: '1.006–1.010'
        },
        variations: ['Gose com frutas', 'Imperial Gose'],
        examples: [
            { brand: 'Bayerischer Bahnhof', name: 'Leipziger Gose' },
            { brand: 'Westbrook', name: 'Gose' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Copo Stange ou Pint',
            validity: '6 meses (fresco)'
        },
        pairing: ['Omelete de ervas', 'Saladas frescas', 'Peixe grelhado']
    },
    {
        id: 'witbier',
        name: 'Witbier',
        origin: '🇧🇪',
        family: 'beer.witbier.family',
        tag: 'beer.witbier.tag',
        abv: '5.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.witbier.description',
        category: 'Belgian Wheat Beer',
        appearance: {
            color: 'beer.witbier.appearance.color',
            colorHex: '#F8F4A8',
            clarity: 'beer.witbier.appearance.clarity',
            foam: 'beer.witbier.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 10,
            levedura: 70
        },
        mouthfeel: {
            body: 'beer.witbier.mouthfeel.body',
            carbonation: 'beer.witbier.mouthfeel.carbonation',
            texture: 'beer.witbier.mouthfeel.texture',
            finish: 'beer.witbier.mouthfeel.finish'
        },
        history: 'beer.witbier.history',
        comparison: 'beer.witbier.comparison',
        ingredients: {
            malts: 'beer.witbier.ingredients.malts',
            hops: 'beer.witbier.ingredients.hops',
            yeast: 'beer.witbier.ingredients.yeast',
            adjuncts: 'beer.witbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–5.5%',
            ibu: '8–20',
            srm: '2–4',
            og: '1.044–1.052',
            fg: '1.008–1.012'
        },
        variations: ['Grand Cru Witbier'],
        examples: [
            { brand: 'Hoegaarden', name: 'Wit' },
            { brand: 'St. Bernardus', name: 'Wit' },
            { brand: 'Allagash', name: 'White' },
            { brand: 'Celis', name: 'White' }
        ],
        service: {
            temperature: '3–6°C',
            glass: 'Tumbler / Goblet',
            validity: '3–6 meses'
        },
        pairing: ['Mexilhões ao vapor', 'Saladas frescas', 'Queijo de cabra', 'Peixes leves']
    },
    {
        id: 'belgian-pale-ale',
        name: 'Belgian Pale Ale',
        origin: '🇧🇪',
        family: 'beer.belgian-pale-ale.family',
        tag: 'beer.belgian-pale-ale.tag',
        abv: '5.2%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-pale-ale.description',
        category: 'Belgian Ale',
        appearance: {
            color: 'beer.belgian-pale-ale.appearance.color',
            colorHex: '#C67A38',
            clarity: 'beer.belgian-pale-ale.appearance.clarity',
            foam: 'beer.belgian-pale-ale.appearance.foam'
        },
        sensory: {
            malte: 55,
            lupulo: 35,
            levedura: 45
        },
        mouthfeel: {
            body: 'beer.belgian-pale-ale.mouthfeel.body',
            carbonation: 'beer.belgian-pale-ale.mouthfeel.carbonation',
            texture: 'beer.belgian-pale-ale.mouthfeel.texture',
            finish: 'beer.belgian-pale-ale.mouthfeel.finish'
        },
        history: 'beer.belgian-pale-ale.history',
        comparison: 'beer.belgian-pale-ale.comparison',
        ingredients: {
            malts: 'beer.belgian-pale-ale.ingredients.malts',
            hops: 'beer.belgian-pale-ale.ingredients.hops',
            yeast: 'beer.belgian-pale-ale.ingredients.yeast',
            adjuncts: 'beer.belgian-pale-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–5.5%',
            ibu: '20–30',
            srm: '8–14',
            og: '1.048–1.054',
            fg: '1.010–1.014'
        },
        variations: ['Speciale Belge'],
        examples: [
            { brand: 'De Koninck', name: 'Bolleke' },
            { brand: 'Palm', name: 'Speciale' },
            { brand: 'Dobble Palm', name: 'Amber' },
            { brand: 'Op-Ale', name: 'Original' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Tulipa / Bolleke',
            validity: '6–12 meses'
        },
        pairing: ['Frango assado', 'Batata frita belga', 'Queijos semiduros', 'Salsicha grelhada']
    },
    {
        id: 'biere-de-garde',
        name: 'Bière de Garde',
        origin: '🇫🇷',
        family: 'beer.biere-de-garde.family',
        tag: 'beer.biere-de-garde.tag',
        abv: '7.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.biere-de-garde.description',
        category: 'French Farmhouse Ale',
        appearance: {
            color: 'beer.biere-de-garde.appearance.color',
            colorHex: '#BF7836',
            clarity: 'beer.biere-de-garde.appearance.clarity',
            foam: 'beer.biere-de-garde.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 35
        },
        mouthfeel: {
            body: 'beer.biere-de-garde.mouthfeel.body',
            carbonation: 'beer.biere-de-garde.mouthfeel.carbonation',
            texture: 'beer.biere-de-garde.mouthfeel.texture',
            finish: 'beer.biere-de-garde.mouthfeel.finish'
        },
        history: 'beer.biere-de-garde.history',
        comparison: 'beer.biere-de-garde.comparison',
        ingredients: {
            malts: 'beer.biere-de-garde.ingredients.malts',
            hops: 'beer.biere-de-garde.ingredients.hops',
            yeast: 'beer.biere-de-garde.ingredients.yeast',
            adjuncts: 'beer.biere-de-garde.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–8.5%',
            ibu: '18–28',
            srm: '6–19',
            og: '1.060–1.080',
            fg: '1.008–1.016'
        },
        variations: ['Blonde', 'Ambrée', 'Brune'],
        examples: [
            { brand: 'Jenlain', name: 'Ambrée' },
            { brand: 'Ch\'Ti', name: 'Blonde' },
            { brand: '3 Monts', name: 'Flanders Golden Ale' },
            { brand: 'La Choulette', name: 'Bière des Sans Culottes' }
        ],
        service: {
            temperature: '10–14°C',
            glass: 'Tulipa / Taça de Vinho',
            validity: '1–3 anos'
        },
        pairing: ['Coelho estufado', 'Queijo Maroilles', 'Carneiro assado', 'Terrine de pato']
    },
    {
        id: 'belgian-blond-ale',
        name: 'Belgian Blond Ale',
        origin: '🇧🇪',
        family: 'beer.belgian-blond-ale.family',
        tag: 'beer.belgian-blond-ale.tag',
        abv: '6.5%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-blond-ale.description',
        category: 'Belgian Ale',
        appearance: {
            color: 'beer.belgian-blond-ale.appearance.color',
            colorHex: '#F4C430',
            clarity: 'beer.belgian-blond-ale.appearance.clarity',
            foam: 'beer.belgian-blond-ale.appearance.foam'
        },
        sensory: {
            malte: 45,
            lupulo: 25,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.belgian-blond-ale.mouthfeel.body',
            carbonation: 'beer.belgian-blond-ale.mouthfeel.carbonation',
            texture: 'beer.belgian-blond-ale.mouthfeel.texture',
            finish: 'beer.belgian-blond-ale.mouthfeel.finish'
        },
        history: 'beer.belgian-blond-ale.history',
        comparison: 'beer.belgian-blond-ale.comparison',
        ingredients: {
            malts: 'beer.belgian-blond-ale.ingredients.malts',
            hops: 'beer.belgian-blond-ale.ingredients.hops',
            yeast: 'beer.belgian-blond-ale.ingredients.yeast',
            adjuncts: 'beer.belgian-blond-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–7.5%',
            ibu: '15–30',
            srm: '4–6',
            og: '1.062–1.075',
            fg: '1.008–1.018'
        },
        variations: ['Abbey Blonde'],
        examples: [
            { brand: 'Leffe', name: 'Blonde' },
            { brand: 'Affligem', name: 'Blonde' },
            { brand: 'Grimbergen', name: 'Blonde' },
            { brand: 'Val-Dieu', name: 'Blonde' }
        ],
        service: {
            temperature: '6–10°C',
            glass: 'Tulipa / Goblet',
            validity: '1–2 anos'
        },
        pairing: ['Frango grelhado', 'Queijo Brie', 'Massas cremosas', 'Peixe ao molho branco']
    },
    {
        id: 'saison',
        name: 'Saison',
        origin: '🇧🇪',
        family: 'beer.saison.family',
        tag: 'beer.saison.tag',
        abv: '6.5%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.saison.description',
        category: 'Belgian Farmhouse Ale',
        appearance: {
            color: 'beer.saison.appearance.color',
            colorHex: '#F3A346',
            clarity: 'beer.saison.appearance.clarity',
            foam: 'beer.saison.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 45,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.saison.mouthfeel.body',
            carbonation: 'beer.saison.mouthfeel.carbonation',
            texture: 'beer.saison.mouthfeel.texture',
            finish: 'beer.saison.mouthfeel.finish'
        },
        history: 'beer.saison.history',
        comparison: 'beer.saison.comparison',
        ingredients: {
            malts: 'beer.saison.ingredients.malts',
            hops: 'beer.saison.ingredients.hops',
            yeast: 'beer.saison.ingredients.yeast',
            adjuncts: 'beer.saison.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–7.0%',
            ibu: '20–35',
            srm: '5–14',
            og: '1.048–1.065',
            fg: '1.002–1.008'
        },
        variations: ['Table Saison', 'Super Saison', 'Dark Saison'],
        examples: [
            { brand: 'Saison Dupont', name: 'Vieille Provision' },
            { brand: 'Fantôme', name: 'Saison' },
            { brand: 'Brasserie de Blaugies', name: 'Saison d\'Epeautre' },
            { brand: 'St. Feuillien', name: 'Saison' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Tulipa / Goblet',
            validity: '1–3 anos'
        },
        pairing: ['Salmão defumado', 'Aspargos grelhados', 'Queijo de cabra fresco', 'Frutos do mar']
    },
    {
        id: 'belgian-golden-strong-ale',
        name: 'Belgian Golden Strong Ale',
        origin: '🇧🇪',
        family: 'beer.belgian-golden-strong-ale.family',
        tag: 'beer.belgian-golden-strong-ale.tag',
        abv: '8.5%',
        rating: 4.7,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-golden-strong-ale.description',
        category: 'Belgian Strong Ale',
        appearance: {
            color: 'beer.belgian-golden-strong-ale.appearance.color',
            colorHex: '#F6E58D',
            clarity: 'beer.belgian-golden-strong-ale.appearance.clarity',
            foam: 'beer.belgian-golden-strong-ale.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 35,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.belgian-golden-strong-ale.mouthfeel.body',
            carbonation: 'beer.belgian-golden-strong-ale.mouthfeel.carbonation',
            texture: 'beer.belgian-golden-strong-ale.mouthfeel.texture',
            finish: 'beer.belgian-golden-strong-ale.mouthfeel.finish'
        },
        history: 'beer.belgian-golden-strong-ale.history',
        comparison: 'beer.belgian-golden-strong-ale.comparison',
        ingredients: {
            malts: 'beer.belgian-golden-strong-ale.ingredients.malts',
            hops: 'beer.belgian-golden-strong-ale.ingredients.hops',
            yeast: 'beer.belgian-golden-strong-ale.ingredients.yeast',
            adjuncts: 'beer.belgian-golden-strong-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.5–10.5%',
            ibu: '22–35',
            srm: '3–6',
            og: '1.070–1.095',
            fg: '1.005–1.016'
        },
        variations: ['Belgian Tripel-style Golden'],
        examples: [
            { brand: 'Duvel', name: 'Original' },
            { brand: 'Delirium Tremens', name: '' },
            { brand: 'Piraat', name: '' },
            { brand: 'Brigand', name: '' }
        ],
        service: {
            temperature: '6–10°C',
            glass: 'Tulipa / Taça Duvel',
            validity: '2–5 anos'
        },
        pairing: ['Lagosta', 'Queijos fortes (Roquefort)', 'Sobremesas de limão', 'Chocolate branco']
    },
    {
        id: 'belgian-single',
        name: 'Belgian Single',
        origin: '🇧🇪',
        family: 'beer.belgian-single.family',
        tag: 'beer.belgian-single.tag',
        abv: '5.0%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-single.description',
        category: 'Trappist Ale',
        appearance: {
            color: 'beer.belgian-single.appearance.color',
            colorHex: '#F9E076', // Pale yellow to medium gold
            clarity: 'beer.belgian-single.appearance.clarity',
            foam: 'beer.belgian-single.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 40,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.belgian-single.mouthfeel.body',
            carbonation: 'beer.belgian-single.mouthfeel.carbonation',
            texture: 'beer.belgian-single.mouthfeel.texture',
            finish: 'beer.belgian-single.mouthfeel.finish'
        },
        history: 'beer.belgian-single.history',
        comparison: 'beer.belgian-single.comparison',
        ingredients: {
            malts: 'beer.belgian-single.ingredients.malts',
            hops: 'beer.belgian-single.ingredients.hops',
            yeast: 'beer.belgian-single.ingredients.yeast',
            adjuncts: 'beer.belgian-single.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–6.0%',
            ibu: '25–45',
            srm: '3–5',
            og: '1.044–1.054',
            fg: '1.004–1.010'
        },
        variations: ['Patersbier', 'Enkel'],
        examples: [
            { brand: 'Westmalle', name: 'Extra' },
            { brand: 'St. Bernardus', name: 'Extra 4' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Cálice (Goblet)',
            validity: '3–6 meses'
        },
        pairing: ['Saladas leves', 'Queijo de cabra fresco', 'Frutos do mar']
    },
    {
        id: 'belgian-dubbel',
        name: 'Belgian Dubbel',
        origin: '🇧🇪',
        family: 'beer.belgian-dubbel.family',
        tag: 'beer.belgian-dubbel.tag',
        abv: '7.0%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-dubbel.description',
        category: 'Trappist Ale',
        appearance: {
            color: 'beer.belgian-dubbel.appearance.color',
            colorHex: '#9E4723', // Dark amber to copper
            clarity: 'beer.belgian-dubbel.appearance.clarity',
            foam: 'beer.belgian-dubbel.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 20,
            levedura: 50
        },
        mouthfeel: {
            body: 'beer.belgian-dubbel.mouthfeel.body',
            carbonation: 'beer.belgian-dubbel.mouthfeel.carbonation',
            texture: 'beer.belgian-dubbel.mouthfeel.texture',
            finish: 'beer.belgian-dubbel.mouthfeel.finish'
        },
        history: 'beer.belgian-dubbel.history',
        comparison: 'beer.belgian-dubbel.comparison',
        ingredients: {
            malts: 'beer.belgian-dubbel.ingredients.malts',
            hops: 'beer.belgian-dubbel.ingredients.hops',
            yeast: 'beer.belgian-dubbel.ingredients.yeast',
            adjuncts: 'beer.belgian-dubbel.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–7.6%',
            ibu: '15–25',
            srm: '10–17',
            og: '1.062–1.075',
            fg: '1.008–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Westmalle', name: 'Dubbel' },
            { brand: 'Chimay', name: 'Red (Première)' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Cálice (Goblet)',
            validity: '2–5 anos'
        },
        pairing: ['Ensopado de carne', 'Queijo Washed-Rind', 'Chocolate ao leite']
    },
    {
        id: 'belgian-tripel',
        name: 'Belgian Tripel',
        origin: '🇧🇪',
        family: 'beer.belgian-tripel.family',
        tag: 'beer.belgian-tripel.tag',
        abv: '8.5%',
        rating: 4.8,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-tripel.description',
        category: 'Trappist Ale',
        appearance: {
            color: 'beer.belgian-tripel.appearance.color',
            colorHex: '#F4C430', // Deep yellow to pale amber
            clarity: 'beer.belgian-tripel.appearance.clarity',
            foam: 'beer.belgian-tripel.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 70
        },
        mouthfeel: {
            body: 'beer.belgian-tripel.mouthfeel.body',
            carbonation: 'beer.belgian-tripel.mouthfeel.carbonation',
            texture: 'beer.belgian-tripel.mouthfeel.texture',
            finish: 'beer.belgian-tripel.mouthfeel.finish'
        },
        history: 'beer.belgian-tripel.history',
        comparison: 'beer.belgian-tripel.comparison',
        ingredients: {
            malts: 'beer.belgian-tripel.ingredients.malts',
            hops: 'beer.belgian-tripel.ingredients.hops',
            yeast: 'beer.belgian-tripel.ingredients.yeast',
            adjuncts: 'beer.belgian-tripel.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.5–9.5%',
            ibu: '20–40',
            srm: '4.5–7',
            og: '1.075–1.085',
            fg: '1.008–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Westmalle', name: 'Tripel' },
            { brand: 'Chimay', name: 'White (Cinq Cents)' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Cálice (Goblet)',
            validity: '2–5 anos'
        },
        pairing: ['Espargos', 'Manjericão', 'Queijo Tripel']
    },
    {
        id: 'belgian-dark-strong-ale',
        name: 'Belgian Dark Strong Ale',
        origin: '🇧🇪',
        family: 'beer.belgian-dark-strong-ale.family',
        tag: 'beer.belgian-dark-strong-ale.tag',
        abv: '10.0%',
        rating: 4.9,
        image: 'assets/beer-placeholder.png',
        description: 'beer.belgian-dark-strong-ale.description',
        category: 'Trappist Ale',
        appearance: {
            color: 'beer.belgian-dark-strong-ale.appearance.color',
            colorHex: '#4B3621', // Deep amber to deep copper-brown
            clarity: 'beer.belgian-dark-strong-ale.appearance.clarity',
            foam: 'beer.belgian-dark-strong-ale.appearance.foam'
        },
        sensory: {
            malte: 60,
            lupulo: 20,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.belgian-dark-strong-ale.mouthfeel.body',
            carbonation: 'beer.belgian-dark-strong-ale.mouthfeel.carbonation',
            texture: 'beer.belgian-dark-strong-ale.mouthfeel.texture',
            finish: 'beer.belgian-dark-strong-ale.mouthfeel.finish'
        },
        history: 'beer.belgian-dark-strong-ale.history',
        comparison: 'beer.belgian-dark-strong-ale.comparison',
        ingredients: {
            malts: 'beer.belgian-dark-strong-ale.ingredients.malts',
            hops: 'beer.belgian-dark-strong-ale.ingredients.hops',
            yeast: 'beer.belgian-dark-strong-ale.ingredients.yeast',
            adjuncts: 'beer.belgian-dark-strong-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '20–35',
            srm: '12–22',
            og: '1.075–1.110',
            fg: '1.010–1.024'
        },
        variations: ['Quadrupel'],
        examples: [
            { brand: 'Westvleteren', name: '12' },
            { brand: 'Rochefort', name: '10' }
        ],
        service: {
            temperature: '12–16°C',
            glass: 'Cálice (Goblet)',
            validity: '5–20 anos (guarda)'
        },
        pairing: ['Churrasco', 'Queijo Azul Forte', 'Chocolate Amargo']
    },
    {
        id: 'kellerbier',
        name: 'Kellerbier',
        origin: '🇩🇪',
        family: 'beer.kellerbier.family',
        tag: 'beer.kellerbier.tag',
        abv: '5.3%',
        rating: 4.5,
        image: 'assets/beer-placeholder.png',
        description: 'beer.kellerbier.description',
        category: 'Pale Bitter European Beer / Lager',
        appearance: {
            color: 'beer.kellerbier.appearance.color',
            colorHex: '#C5962B',
            clarity: 'beer.kellerbier.appearance.clarity',
            foam: 'beer.kellerbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 45,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.kellerbier.mouthfeel.body',
            carbonation: 'beer.kellerbier.mouthfeel.carbonation',
            texture: 'beer.kellerbier.mouthfeel.texture',
            finish: 'beer.kellerbier.mouthfeel.finish'
        },
        history: 'beer.kellerbier.history',
        comparison: 'beer.kellerbier.comparison',
        ingredients: {
            malts: 'beer.kellerbier.ingredients.malts',
            hops: 'beer.kellerbier.ingredients.hops',
            yeast: 'beer.kellerbier.ingredients.yeast',
            adjuncts: 'beer.kellerbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.7–5.4%',
            ibu: '25–40',
            srm: '3–17',
            og: '1.045–1.051',
            fg: '1.008–1.012'
        },
        variations: ['Pale Kellerbier', 'Amber Kellerbier'],
        examples: [
            { brand: 'Paulaner', name: 'Zwickl' },
            { brand: 'Ayinger', name: 'Kellerbier' },
            { brand: 'Weihenstephaner', name: '1516' },
            { brand: 'Mahr\'s', name: 'Ungespundet-Hefetrüb' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Caneca de Cerâmica (Steinkrug)',
            validity: '3–6 meses (fresco)'
        },
        pairing: ['Salsichas alemãs', 'Pretzel', 'Queijos semiduros']
    },
    {
        id: 'kentucky-common',
        name: 'Kentucky Common',
        origin: '🇺🇸',
        family: 'beer.kentucky-common.family',
        tag: 'beer.kentucky-common.tag',
        abv: '4.8%',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.kentucky-common.description',
        category: 'American Historical Beer',
        appearance: {
            color: 'beer.kentucky-common.appearance.color',
            colorHex: '#8B4513',
            clarity: 'beer.kentucky-common.appearance.clarity',
            foam: 'beer.kentucky-common.appearance.foam'
        },
        sensory: {
            malte: 55,
            lupulo: 25,
            levedura: 20
        },
        mouthfeel: {
            body: 'beer.kentucky-common.mouthfeel.body',
            carbonation: 'beer.kentucky-common.mouthfeel.carbonation',
            texture: 'beer.kentucky-common.mouthfeel.texture',
            finish: 'beer.kentucky-common.mouthfeel.finish'
        },
        history: 'beer.kentucky-common.history',
        comparison: 'beer.kentucky-common.comparison',
        ingredients: {
            malts: 'beer.kentucky-common.ingredients.malts',
            hops: 'beer.kentucky-common.ingredients.hops',
            yeast: 'beer.kentucky-common.ingredients.yeast',
            adjuncts: 'beer.kentucky-common.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–5.5%',
            ibu: '15–30',
            srm: '11–20',
            og: '1.044–1.055',
            fg: '1.010–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Urban Chestnut', name: 'Forest Park' },
            { brand: 'Fall City', name: 'Kentucky Common' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Pint',
            validity: '3–6 meses'
        },
        pairing: ['Costeletas de porco', 'Frango frito', 'Queijo Cheddar']
    },
    {
        id: 'lichtenhainer',
        name: 'Lichtenhainer',
        origin: '🇩🇪',
        family: 'beer.lichtenhainer.family',
        tag: 'beer.lichtenhainer.tag',
        abv: '4.0%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.lichtenhainer.description',
        category: 'Smoked Soured Beer',
        appearance: {
            color: 'beer.lichtenhainer.appearance.color',
            colorHex: '#E6C665',
            clarity: 'beer.lichtenhainer.appearance.clarity',
            foam: 'beer.lichtenhainer.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 10,
            levedura: 85
        },
        mouthfeel: {
            body: 'beer.lichtenhainer.mouthfeel.body',
            carbonation: 'beer.lichtenhainer.mouthfeel.carbonation',
            texture: 'beer.lichtenhainer.mouthfeel.texture',
            finish: 'beer.lichtenhainer.mouthfeel.finish'
        },
        history: 'beer.lichtenhainer.history',
        comparison: 'beer.lichtenhainer.comparison',
        ingredients: {
            malts: 'beer.lichtenhainer.ingredients.malts',
            hops: 'beer.lichtenhainer.ingredients.hops',
            yeast: 'beer.lichtenhainer.ingredients.yeast',
            adjuncts: 'beer.lichtenhainer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.5–4.7%',
            ibu: '5–12',
            srm: '3–6',
            og: '1.032–1.040',
            fg: '1.004–1.008'
        },
        variations: [],
        examples: [
            { brand: 'Live Oak', name: 'Lichtenhainer' },
            { brand: 'Wöllnitzer', name: 'Weissbier' }
        ],
        service: {
            temperature: '6–9°C',
            glass: 'Copo Stange / Weizen',
            validity: '6–12 meses'
        },
        pairing: ['Salsichas defumadas', 'Chucrute', 'Queijo de cabra']
    },
    {
        id: 'london-brown-ale',
        name: 'London Brown Ale',
        origin: '🇬🇧',
        family: 'beer.london-brown-ale.family',
        tag: 'beer.london-brown-ale.tag',
        abv: '3.3%',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.london-brown-ale.description',
        category: 'Historical Brown Beer',
        appearance: {
            color: 'beer.london-brown-ale.appearance.color',
            colorHex: '#4E2A14',
            clarity: 'beer.london-brown-ale.appearance.clarity',
            foam: 'beer.london-brown-ale.appearance.foam'
        },
        sensory: {
            malte: 75,
            lupulo: 15,
            levedura: 25
        },
        mouthfeel: {
            body: 'beer.london-brown-ale.mouthfeel.body',
            carbonation: 'beer.london-brown-ale.mouthfeel.carbonation',
            texture: 'beer.london-brown-ale.mouthfeel.texture',
            finish: 'beer.london-brown-ale.mouthfeel.finish'
        },
        history: 'beer.london-brown-ale.history',
        comparison: 'beer.london-brown-ale.comparison',
        ingredients: {
            malts: 'beer.london-brown-ale.ingredients.malts',
            hops: 'beer.london-brown-ale.ingredients.hops',
            yeast: 'beer.london-brown-ale.ingredients.yeast',
            adjuncts: 'beer.london-brown-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.8–3.6%',
            ibu: '15–20',
            srm: '22–35',
            og: '1.033–1.038',
            fg: '1.012–1.015'
        },
        variations: [],
        examples: [
            { brand: 'Manns', name: 'Brown Ale' },
            { brand: 'Harvey\'s', name: 'Bloomsbury Brown' }
        ],
        service: {
            temperature: '10–13°C',
            glass: 'Pint Inglês (Nonic)',
            validity: '6–12 meses'
        },
        pairing: ['Sobremesas de caramelo', 'Pudim', 'Queijo Stilton']
    },
    {
        id: 'piwo-grodziskie',
        name: 'Piwo Grodziskie',
        origin: '🇵🇱',
        family: 'beer.piwo-grodziskie.family',
        tag: 'beer.piwo-grodziskie.tag',
        abv: '3.0%',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.piwo-grodziskie.description',
        category: 'Smoked Wheat Beer',
        appearance: {
            color: 'beer.piwo-grodziskie.appearance.color',
            colorHex: '#EAE0A8',
            clarity: 'beer.piwo-grodziskie.appearance.clarity',
            foam: 'beer.piwo-grodziskie.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 30,
            levedura: 40
        },
        mouthfeel: {
            body: 'beer.piwo-grodziskie.mouthfeel.body',
            carbonation: 'beer.piwo-grodziskie.mouthfeel.carbonation',
            texture: 'beer.piwo-grodziskie.mouthfeel.texture',
            finish: 'beer.piwo-grodziskie.mouthfeel.finish'
        },
        history: 'beer.piwo-grodziskie.history',
        comparison: 'beer.piwo-grodziskie.comparison',
        ingredients: {
            malts: 'beer.piwo-grodziskie.ingredients.malts',
            hops: 'beer.piwo-grodziskie.ingredients.hops',
            yeast: 'beer.piwo-grodziskie.ingredients.yeast',
            adjuncts: 'beer.piwo-grodziskie.ingredients.adjuncts'
        },
        specs: {
            abvRange: '2.5–3.3%',
            ibu: '20–30',
            srm: '3–6',
            og: '1.028–1.032',
            fg: '1.006–1.012'
        },
        variations: [],
        examples: [
            { brand: 'Browar Grodzisk', name: 'Piwo z Grodziska' },
            { brand: 'Live Oak', name: 'Grodziskie' }
        ],
        service: {
            temperature: '5–8°C',
            glass: 'Copo Pokal / Taça',
            validity: '6–12 meses'
        },
        pairing: ['Peixe defumado', 'Queijos leves', 'Saladas']
    },
    {
        id: 'pre-prohibition-lager',
        name: 'Pre-Prohibition Lager',
        origin: '🇺🇸',
        family: 'beer.pre-prohibition-lager.family',
        tag: 'beer.pre-prohibition-lager.tag',
        abv: '5.5%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.pre-prohibition-lager.description',
        category: 'Historical American Lager',
        appearance: {
            color: 'beer.pre-prohibition-lager.appearance.color',
            colorHex: '#F2C84B',
            clarity: 'beer.pre-prohibition-lager.appearance.clarity',
            foam: 'beer.pre-prohibition-lager.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 40,
            levedura: 10
        },
        mouthfeel: {
            body: 'beer.pre-prohibition-lager.mouthfeel.body',
            carbonation: 'beer.pre-prohibition-lager.mouthfeel.carbonation',
            texture: 'beer.pre-prohibition-lager.mouthfeel.texture',
            finish: 'beer.pre-prohibition-lager.mouthfeel.finish'
        },
        history: 'beer.pre-prohibition-lager.history',
        comparison: 'beer.pre-prohibition-lager.comparison',
        ingredients: {
            malts: 'beer.pre-prohibition-lager.ingredients.malts',
            hops: 'beer.pre-prohibition-lager.ingredients.hops',
            yeast: 'beer.pre-prohibition-lager.ingredients.yeast',
            adjuncts: 'beer.pre-prohibition-lager.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '25–40',
            srm: '3–6',
            og: '1.044–1.060',
            fg: '1.010–1.015'
        },
        variations: [],
        examples: [
            { brand: 'Capital', name: 'Supper Club' },
            { brand: 'Schell\'s', name: 'Deer Brand' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Pilsner Flute',
            validity: '3–6 meses'
        },
        pairing: ['Hambúrguer Clássico', 'Pizza', 'Milho cozido']
    },
    {
        id: 'pre-prohibition-porter',
        name: 'Pre-Prohibition Porter',
        origin: '🇺🇸',
        family: 'beer.pre-prohibition-porter.family',
        tag: 'beer.pre-prohibition-porter.tag',
        abv: '5.8%',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.pre-prohibition-porter.description',
        category: 'Historical American Porter',
        appearance: {
            color: 'beer.pre-prohibition-porter.appearance.color',
            colorHex: '#3B2317',
            clarity: 'beer.pre-prohibition-porter.appearance.clarity',
            foam: 'beer.pre-prohibition-porter.appearance.foam'
        },
        sensory: {
            malte: 65,
            lupulo: 35,
            levedura: 15
        },
        mouthfeel: {
            body: 'beer.pre-prohibition-porter.mouthfeel.body',
            carbonation: 'beer.pre-prohibition-porter.mouthfeel.carbonation',
            texture: 'beer.pre-prohibition-porter.mouthfeel.texture',
            finish: 'beer.pre-prohibition-porter.mouthfeel.finish'
        },
        history: 'beer.pre-prohibition-porter.history',
        comparison: 'beer.pre-prohibition-porter.comparison',
        ingredients: {
            malts: 'beer.pre-prohibition-porter.ingredients.malts',
            hops: 'beer.pre-prohibition-porter.ingredients.hops',
            yeast: 'beer.pre-prohibition-porter.ingredients.yeast',
            adjuncts: 'beer.pre-prohibition-porter.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '20–30',
            srm: '18–30',
            og: '1.046–1.060',
            fg: '1.010–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Yuengling', name: 'Porter' },
            { brand: 'Stegmaier', name: 'Porter' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Pint',
            validity: '6–12 meses'
        },
        pairing: ['Churrasco americano', 'Feijão cozido', 'Brownie']
    },
    {
        id: 'roggenbier',
        name: 'Roggenbier',
        origin: '🇩🇪',
        family: 'beer.roggenbier.family',
        tag: 'beer.roggenbier.tag',
        abv: '5.0%',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.roggenbier.description',
        category: 'Historical Rye Beer',
        appearance: {
            color: 'beer.roggenbier.appearance.color',
            colorHex: '#A0522D',
            clarity: 'beer.roggenbier.appearance.clarity',
            foam: 'beer.roggenbier.appearance.foam'
        },
        sensory: {
            malte: 50,
            lupulo: 15,
            levedura: 60
        },
        mouthfeel: {
            body: 'beer.roggenbier.mouthfeel.body',
            carbonation: 'beer.roggenbier.mouthfeel.carbonation',
            texture: 'beer.roggenbier.mouthfeel.texture',
            finish: 'beer.roggenbier.mouthfeel.finish'
        },
        history: 'beer.roggenbier.history',
        comparison: 'beer.roggenbier.comparison',
        ingredients: {
            malts: 'beer.roggenbier.ingredients.malts',
            hops: 'beer.roggenbier.ingredients.hops',
            yeast: 'beer.roggenbier.ingredients.yeast',
            adjuncts: 'beer.roggenbier.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–6.0%',
            ibu: '10–20',
            srm: '14–19',
            og: '1.046–1.056',
            fg: '1.010–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Thurn und Taxis', name: 'Roggen' },
            { brand: 'Paulaner', name: 'Roggen (historical)' }
        ],
        service: {
            temperature: '6–9°C',
            glass: 'Weizen Glass',
            validity: '3–6 meses'
        },
        pairing: ['Pão de centeio', 'Presunto defumado', 'Bratwurst']
    },
    {
        id: 'sahti',
        name: 'Sahti',
        origin: '🇫🇮',
        family: 'beer.sahti.family',
        tag: 'beer.sahti.tag',
        abv: '8.0%',
        rating: 4.6,
        image: 'assets/beer-placeholder.png',
        description: 'beer.sahti.description',
        category: 'Traditional Farmhouse Ale',
        appearance: {
            color: 'beer.sahti.appearance.color',
            colorHex: '#D2691E',
            clarity: 'beer.sahti.appearance.clarity',
            foam: 'beer.sahti.appearance.foam'
        },
        sensory: {
            malte: 70,
            lupulo: 5,
            levedura: 65
        },
        mouthfeel: {
            body: 'beer.sahti.mouthfeel.body',
            carbonation: 'beer.sahti.mouthfeel.carbonation',
            texture: 'beer.sahti.mouthfeel.texture',
            finish: 'beer.sahti.mouthfeel.finish'
        },
        history: 'beer.sahti.history',
        comparison: 'beer.sahti.comparison',
        ingredients: {
            malts: 'beer.sahti.ingredients.malts',
            hops: 'beer.sahti.ingredients.hops',
            yeast: 'beer.sahti.ingredients.yeast',
            adjuncts: 'beer.sahti.ingredients.adjuncts'
        },
        specs: {
            abvRange: '7.0–11.0%',
            ibu: '0–15',
            srm: '4–22',
            og: '1.060–1.090',
            fg: '1.016–1.040'
        },
        variations: [],
        examples: [
            { brand: 'Lammin', name: 'Sahti' },
            { brand: 'Finlandia', name: 'Sahti' }
        ],
        service: {
            temperature: '8–12°C',
            glass: 'Caneca ou Copo de Madeira (Kuksa)',
            validity: '1 mês (beber fresco)'
        },
        pairing: ['Comida finlandesa', 'Queijo azul', 'Carne de caça']
    },
    {
        id: 'brett-beer',
        name: 'Brett Beer',
        origin: '🌎',
        family: 'beer.brett-beer.family',
        tag: 'beer.brett-beer.tag',
        abv: 'Variable',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.brett-beer.description',
        category: 'American Wild Ale',
        appearance: {
            color: 'beer.brett-beer.appearance.color',
            colorHex: '#DAA520',
            clarity: 'beer.brett-beer.appearance.clarity',
            foam: 'beer.brett-beer.appearance.foam'
        },
        sensory: {
            malte: 30,
            lupulo: 20,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.brett-beer.mouthfeel.body',
            carbonation: 'beer.brett-beer.mouthfeel.carbonation',
            texture: 'beer.brett-beer.mouthfeel.texture',
            finish: 'beer.brett-beer.mouthfeel.finish'
        },
        history: 'beer.brett-beer.history',
        comparison: 'beer.brett-beer.comparison',
        ingredients: {
            malts: 'beer.brett-beer.ingredients.malts',
            hops: 'beer.brett-beer.ingredients.hops',
            yeast: 'beer.brett-beer.ingredients.yeast',
            adjuncts: 'beer.brett-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: 'Variable',
            ibu: 'Variable',
            srm: 'Variable',
            og: 'Variable',
            fg: 'Variable'
        },
        variations: ['100% Brett', 'Mixed-Culture Brett'],
        examples: [
            { brand: 'Boulevard', name: 'Saison Brett' },
            { brand: 'Hill Farmstead', name: 'Arthur' },
            { brand: 'Russian River', name: 'Sanctification' },
            { brand: 'Logsdon', name: 'Seizoen Bretta' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Taça Tulipa',
            validity: 'Variable'
        },
        pairing: ['Queijos funky', 'Frutos do mar', 'Pratos cítricos']
    },
    {
        id: 'mixed-fermentation-sour-beer',
        name: 'Mixed-Fermentation Sour Beer',
        origin: '🌎',
        family: 'beer.mixed-fermentation-sour-beer.family',
        tag: 'beer.mixed-fermentation-sour-beer.tag',
        abv: 'Variable',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.mixed-fermentation-sour-beer.description',
        category: 'American Wild Ale',
        appearance: {
            color: 'beer.mixed-fermentation-sour-beer.appearance.color',
            colorHex: '#FFC0CB',
            clarity: 'beer.mixed-fermentation-sour-beer.appearance.clarity',
            foam: 'beer.mixed-fermentation-sour-beer.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 10,
            levedura: 95
        },
        mouthfeel: {
            body: 'beer.mixed-fermentation-sour-beer.mouthfeel.body',
            carbonation: 'beer.mixed-fermentation-sour-beer.mouthfeel.carbonation',
            texture: 'beer.mixed-fermentation-sour-beer.mouthfeel.texture',
            finish: 'beer.mixed-fermentation-sour-beer.mouthfeel.finish'
        },
        history: 'beer.mixed-fermentation-sour-beer.history',
        comparison: 'beer.mixed-fermentation-sour-beer.comparison',
        ingredients: {
            malts: 'beer.mixed-fermentation-sour-beer.ingredients.malts',
            hops: 'beer.mixed-fermentation-sour-beer.ingredients.hops',
            yeast: 'beer.mixed-fermentation-sour-beer.ingredients.yeast',
            adjuncts: 'beer.mixed-fermentation-sour-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–8.0%',
            ibu: '8–15',
            srm: '15–30',
            og: '1.050–1.065',
            fg: '1.002–1.012'
        }, // Rodenbach Grand Cru profile
        variations: [],
        examples: [
            { brand: 'Rodenbach', name: 'Grand Cru' },
            { brand: 'Duchesse', name: 'de Bourgogne' },
            { brand: 'New Belgium', name: 'La Folie' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Taça Tulipa',
            validity: 'Variable'
        },
        pairing: ['Queijos de cabra', 'Ceviche', 'Mexilhões']
    },
    {
        id: 'wild-specialty-beer',
        name: 'Wild Specialty Beer',
        origin: '🌎',
        family: 'beer.wild-specialty-beer.family',
        tag: 'beer.wild-specialty-beer.tag',
        abv: 'Variable',
        rating: 4.3,
        image: 'assets/beer-placeholder.png',
        description: 'beer.wild-specialty-beer.description',
        category: 'American Wild Ale',
        appearance: {
            color: 'beer.wild-specialty-beer.appearance.color',
            colorHex: '#800080',
            clarity: 'beer.wild-specialty-beer.appearance.clarity',
            foam: 'beer.wild-specialty-beer.appearance.foam'
        },
        sensory: {
            malte: 25,
            lupulo: 10,
            levedura: 90
        },
        mouthfeel: {
            body: 'beer.wild-specialty-beer.mouthfeel.body',
            carbonation: 'beer.wild-specialty-beer.mouthfeel.carbonation',
            texture: 'beer.wild-specialty-beer.mouthfeel.texture',
            finish: 'beer.wild-specialty-beer.mouthfeel.finish'
        },
        history: 'beer.wild-specialty-beer.history',
        comparison: 'beer.wild-specialty-beer.comparison',
        ingredients: {
            malts: 'beer.wild-specialty-beer.ingredients.malts',
            hops: 'beer.wild-specialty-beer.ingredients.hops',
            yeast: 'beer.wild-specialty-beer.ingredients.yeast',
            adjuncts: 'beer.wild-specialty-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–6.0%',
            ibu: '0–10',
            srm: 'Variable',
            og: '1.045–1.055',
            fg: '1.000–1.010'
        }, // Cantillon Rose de Gambrinus profile
        variations: [],
        examples: [
            { brand: 'Cantillon', name: 'Rosé de Gambrinus' },
            { brand: 'Jester King', name: 'Atrial Rubicite' },
            { brand: 'Cascade', name: 'Kriek' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Taça Tulipa',
            validity: 'Variable'
        },
        pairing: ['Sobremesas de frutas', 'Pato', 'Queijos fortes']
    },
    {
        id: 'straight-sour-beer',
        name: 'Straight Sour Beer',
        origin: '🌎',
        family: 'beer.straight-sour-beer.family',
        tag: 'beer.straight-sour-beer.tag',
        abv: 'Variable',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.straight-sour-beer.description',
        category: 'American Wild Ale',
        appearance: {
            color: 'beer.straight-sour-beer.appearance.color',
            colorHex: '#FFFFE0',
            clarity: 'beer.straight-sour-beer.appearance.clarity',
            foam: 'beer.straight-sour-beer.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 5,
            levedura: 80
        },
        mouthfeel: {
            body: 'beer.straight-sour-beer.mouthfeel.body',
            carbonation: 'beer.straight-sour-beer.mouthfeel.carbonation',
            texture: 'beer.straight-sour-beer.mouthfeel.texture',
            finish: 'beer.straight-sour-beer.mouthfeel.finish'
        },
        history: 'beer.straight-sour-beer.history',
        comparison: 'beer.straight-sour-beer.comparison',
        ingredients: {
            malts: 'beer.straight-sour-beer.ingredients.malts',
            hops: 'beer.straight-sour-beer.ingredients.hops',
            yeast: 'beer.straight-sour-beer.ingredients.yeast',
            adjuncts: 'beer.straight-sour-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '3.8–7.0%',
            ibu: '3–10',
            srm: '2–5',
            og: '1.035–1.065',
            fg: '1.006–1.013'
        },
        variations: [],
        examples: [
            { brand: 'Westbrook', name: 'Gose' },
            { brand: 'Anderson Valley', name: 'The Kimmie, The Yink and The Holy Gose' },
            { brand: 'Rare Barrel', name: 'Map of the Sun' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Copo Tulipa',
            validity: 'Variable'
        },
        pairing: ['Saladas frescas', 'Queijo de cabra', 'Ceviche']
    },
    {
        id: 'fruit-beer',
        name: 'Fruit Beer',
        origin: '🌎',
        family: 'beer.fruit-beer.family',
        tag: 'beer.fruit-beer.tag',
        abv: 'Variable',
        rating: 4.0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.fruit-beer.description',
        category: 'Fruit Beer',
        appearance: {
            color: 'beer.fruit-beer.appearance.color',
            colorHex: '#FF69B4',
            clarity: 'beer.fruit-beer.appearance.clarity',
            foam: 'beer.fruit-beer.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 15,
            levedura: 45
        },
        mouthfeel: {
            body: 'beer.fruit-beer.mouthfeel.body',
            carbonation: 'beer.fruit-beer.mouthfeel.carbonation',
            texture: 'beer.fruit-beer.mouthfeel.texture',
            finish: 'beer.fruit-beer.mouthfeel.finish'
        },
        history: 'beer.fruit-beer.history',
        comparison: 'beer.fruit-beer.comparison',
        ingredients: {
            malts: 'beer.fruit-beer.ingredients.malts',
            hops: 'beer.fruit-beer.ingredients.hops',
            yeast: 'beer.fruit-beer.ingredients.yeast',
            adjuncts: 'beer.fruit-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–7.0%',
            ibu: '10–25',
            srm: 'Variable',
            og: '1.040–1.070',
            fg: '1.010–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Founders', name: 'Rubaeus' },
            { brand: "Bell's", name: 'Cherry Stout' },
            { brand: 'Dogfish Head', name: 'Aprihop' },
            { brand: 'New Glarus', name: 'Raspberry Tart' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Copo Flute ou Tulipa',
            validity: 'Variable'
        },
        pairing: ['Saladas de frutas', 'Cheesecake', 'Sorvetes']
    },
    {
        id: 'fruit-and-spice-beer',
        name: 'Fruit and Spice Beer',
        origin: '🌎',
        family: 'beer.fruit-and-spice-beer.family',
        tag: 'beer.fruit-and-spice-beer.tag',
        abv: 'Variable',
        rating: 4.1,
        image: 'assets/beer-placeholder.png',
        description: 'beer.fruit-and-spice-beer.description',
        category: 'Fruit Beer',
        appearance: {
            color: 'beer.fruit-and-spice-beer.appearance.color',
            colorHex: '#FF7F50',
            clarity: 'beer.fruit-and-spice-beer.appearance.clarity',
            foam: 'beer.fruit-and-spice-beer.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 15,
            levedura: 45
        },
        mouthfeel: {
            body: 'beer.fruit-and-spice-beer.mouthfeel.body',
            carbonation: 'beer.fruit-and-spice-beer.mouthfeel.carbonation',
            texture: 'beer.fruit-and-spice-beer.mouthfeel.texture',
            finish: 'beer.fruit-and-spice-beer.mouthfeel.finish'
        },
        history: 'beer.fruit-and-spice-beer.history',
        comparison: 'beer.fruit-and-spice-beer.comparison',
        ingredients: {
            malts: 'beer.fruit-and-spice-beer.ingredients.malts',
            hops: 'beer.fruit-and-spice-beer.ingredients.hops',
            yeast: 'beer.fruit-and-spice-beer.ingredients.yeast',
            adjuncts: 'beer.fruit-and-spice-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–10.0%',
            ibu: '5–40',
            srm: 'Variable',
            og: '1.040–1.090',
            fg: '1.005–1.020'
        },
        variations: [],
        examples: [
            { brand: 'Cigar City', name: 'Margarita Gose' },
            { brand: 'Dogfish Head', name: 'Festina Pêche' }
        ],
        service: {
            temperature: '4–7°C',
            glass: 'Copo Tulipa',
            validity: 'Variable'
        },
        pairing: ['Culinária tailandesa', 'Sobremesas condimentadas', 'Queijo Brie']
    },
    {
        id: 'specialty-fruit-beer',
        name: 'Specialty Fruit Beer',
        origin: '🌎',
        family: 'beer.specialty-fruit-beer.family',
        tag: 'beer.specialty-fruit-beer.tag',
        abv: 'Variable',
        rating: 4.2,
        image: 'assets/beer-placeholder.png',
        description: 'beer.specialty-fruit-beer.description',
        category: 'Fruit Beer',
        appearance: {
            color: 'beer.specialty-fruit-beer.appearance.color',
            colorHex: '#8B008B',
            clarity: 'beer.specialty-fruit-beer.appearance.clarity',
            foam: 'beer.specialty-fruit-beer.appearance.foam'
        },
        sensory: {
            malte: 40,
            lupulo: 10,
            levedura: 50
        },
        mouthfeel: {
            body: 'beer.specialty-fruit-beer.mouthfeel.body',
            carbonation: 'beer.specialty-fruit-beer.mouthfeel.carbonation',
            texture: 'beer.specialty-fruit-beer.mouthfeel.texture',
            finish: 'beer.specialty-fruit-beer.mouthfeel.finish'
        },
        history: 'beer.specialty-fruit-beer.history',
        comparison: 'beer.specialty-fruit-beer.comparison',
        ingredients: {
            malts: 'beer.specialty-fruit-beer.ingredients.malts',
            hops: 'beer.specialty-fruit-beer.ingredients.hops',
            yeast: 'beer.specialty-fruit-beer.ingredients.yeast',
            adjuncts: 'beer.specialty-fruit-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–8.0%',
            ibu: '5–30',
            srm: 'Variable',
            og: '1.045–1.080',
            fg: '1.010–1.025'
        },
        variations: [],
        examples: [
            { brand: 'The Bruery', name: 'Fruited Sour' },
            { brand: 'Funky Buddha', name: 'Maple Bacon Coffee Porter (with fruit?)' }
        ],
        service: {
            temperature: '7–10°C',
            glass: 'Taça Snifter',
            validity: 'Variable'
        },
        pairing: ['Sobremesas complexas', 'Chocolate amargo', 'Charutos']
    },
    {
        id: 'grape-ale',
        name: 'Grape Ale',
        origin: '🌎',
        family: 'beer.grape-ale.family',
        tag: 'beer.grape-ale.tag',
        abv: 'Variable',
        rating: 4.4,
        image: 'assets/beer-placeholder.png',
        description: 'beer.grape-ale.description',
        category: 'Fruit Beer',
        appearance: {
            color: 'beer.grape-ale.appearance.color',
            colorHex: '#800000',
            clarity: 'beer.grape-ale.appearance.clarity',
            foam: 'beer.grape-ale.appearance.foam'
        },
        sensory: {
            malte: 35,
            lupulo: 15,
            levedura: 50
        },
        mouthfeel: {
            body: 'beer.grape-ale.mouthfeel.body',
            carbonation: 'beer.grape-ale.mouthfeel.carbonation',
            texture: 'beer.grape-ale.mouthfeel.texture',
            finish: 'beer.grape-ale.mouthfeel.finish'
        },
        history: 'beer.grape-ale.history',
        comparison: 'beer.grape-ale.comparison',
        ingredients: {
            malts: 'beer.grape-ale.ingredients.malts',
            hops: 'beer.grape-ale.ingredients.hops',
            yeast: 'beer.grape-ale.ingredients.yeast',
            adjuncts: 'beer.grape-ale.ingredients.adjuncts'
        },
        specs: {
            abvRange: '6.0–11.0%',
            ibu: '10–30',
            srm: 'Gold to Ruby',
            og: '1.050–1.090',
            fg: '1.005–1.015'
        },
        variations: ['Italian Grape Ale'],
        examples: [
            { brand: 'Birrificio Montegioco', name: 'Open Mind' },
            { brand: 'Birrificio del Forte', name: 'Il Tralcio' },
            { brand: 'Firestone Walker', name: 'Feral Vinifera' },
            { brand: 'pFriem', name: 'Druif' }
        ],
        service: {
            temperature: '10–12°C',
            glass: 'Taça de Vinho',
            validity: '1–5 anos'
        },
        pairing: ['Queijos curados', 'Carne vermelha', 'Massas']
    },
    {
        id: 'autumn-seasonal-beer',
        name: 'Autumn Seasonal Beer',
        origin: '🌎', // Varies
        family: 'beer.autumn-seasonal-beer.family',
        tag: 'beer.autumn-seasonal-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.autumn-seasonal-beer.description',
        category: 'Spiced Beer',
        appearance: {
            color: 'beer.autumn-seasonal-beer.appearance.color',
            colorHex: '#C67728', // Amber/Copper generic
            clarity: 'beer.autumn-seasonal-beer.appearance.clarity',
            foam: 'beer.autumn-seasonal-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.autumn-seasonal-beer.sensory.aroma',
            flavor: 'beer.autumn-seasonal-beer.sensory.flavor',
            bitterness: 'beer.autumn-seasonal-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.autumn-seasonal-beer.mouthfeel.body',
            carbonation: 'beer.autumn-seasonal-beer.mouthfeel.carbonation',
            texture: 'beer.autumn-seasonal-beer.mouthfeel.texture',
            finish: 'beer.autumn-seasonal-beer.mouthfeel.finish'
        },
        history: 'beer.autumn-seasonal-beer.history',
        comparison: 'beer.autumn-seasonal-beer.comparison',
        ingredients: {
            malts: 'beer.autumn-seasonal-beer.ingredients.malts',
            hops: 'beer.autumn-seasonal-beer.ingredients.hops',
            yeast: 'beer.autumn-seasonal-beer.ingredients.yeast',
            adjuncts: 'beer.autumn-seasonal-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–9.5%',
            ibu: '20–40',
            srm: '7–20',
            og: '1.050–1.090',
            fg: '1.012–1.020'
        },
        variations: [],
        examples: [
            { brand: 'Schlafly', name: 'Pumpkin Ale' },
            { brand: 'Southern Tier', name: 'Pumking' },
            { brand: 'Cigar City', name: 'Good Gourd' }
        ],
        service: {
            temperature: "10-14°C",
            glassware: "Nonic/Tulip",
            validity: "Variable"
        },
        pairing: [
            "Roasted poultry",
            "Pumpkin pie",
            "Autumn vegetable stews"
        ]
    },
    {
        id: 'winter-seasonal-beer',
        name: 'Winter Seasonal Beer',
        origin: '🌎', // Varies
        family: 'beer.winter-seasonal-beer.family',
        tag: 'beer.winter-seasonal-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.winter-seasonal-beer.description',
        category: 'Spiced Beer',
        appearance: {
            color: 'beer.winter-seasonal-beer.appearance.color',
            colorHex: '#421C02', // Darker generic
            clarity: 'beer.winter-seasonal-beer.appearance.clarity',
            foam: 'beer.winter-seasonal-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.winter-seasonal-beer.sensory.aroma',
            flavor: 'beer.winter-seasonal-beer.sensory.flavor',
            bitterness: 'beer.winter-seasonal-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.winter-seasonal-beer.mouthfeel.body',
            carbonation: 'beer.winter-seasonal-beer.mouthfeel.carbonation',
            texture: 'beer.winter-seasonal-beer.mouthfeel.texture',
            finish: 'beer.winter-seasonal-beer.mouthfeel.finish'
        },
        history: 'beer.winter-seasonal-beer.history',
        comparison: 'beer.winter-seasonal-beer.comparison',
        ingredients: {
            malts: 'beer.winter-seasonal-beer.ingredients.malts',
            hops: 'beer.winter-seasonal-beer.ingredients.hops',
            yeast: 'beer.winter-seasonal-beer.ingredients.yeast',
            adjuncts: 'beer.winter-seasonal-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–10.0%',
            ibu: '20–50',
            srm: 'Variable',
            og: '1.055–1.100',
            fg: '1.015–1.030'
        },
        variations: [],
        examples: [
            { brand: 'Anchor', name: 'Christmas Ale' },
            { brand: 'Harpoon', name: 'Winter Warmer' },
            { brand: 'Great Lakes', name: 'Christmas Ale' },
            { brand: "Troeg's", name: 'The Mad Elf' }
        ],
        service: {
            temperature: "10-14°C",
            glassware: "Snifter/Tulip",
            validity: "Variable"
        },
        pairing: [
            "Gingerbread",
            "Roast beef",
            "Fruit cake"
        ]
    },
    {
        id: 'specialty-spice-beer',
        name: 'Specialty Spice Beer',
        origin: '🌎', // Varies
        family: 'beer.specialty-spice-beer.family',
        tag: 'beer.specialty-spice-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.specialty-spice-beer.description',
        category: 'Spiced Beer',
        appearance: {
            color: 'beer.specialty-spice-beer.appearance.color',
            colorHex: '#DAA520', // Generic gold/amber
            clarity: 'beer.specialty-spice-beer.appearance.clarity',
            foam: 'beer.specialty-spice-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.specialty-spice-beer.sensory.aroma',
            flavor: 'beer.specialty-spice-beer.sensory.flavor',
            bitterness: 'beer.specialty-spice-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.specialty-spice-beer.mouthfeel.body',
            carbonation: 'beer.specialty-spice-beer.mouthfeel.carbonation',
            texture: 'beer.specialty-spice-beer.mouthfeel.texture',
            finish: 'beer.specialty-spice-beer.mouthfeel.finish'
        },
        history: 'beer.specialty-spice-beer.history',
        comparison: 'beer.specialty-spice-beer.comparison',
        ingredients: {
            malts: 'beer.specialty-spice-beer.ingredients.malts',
            hops: 'beer.specialty-spice-beer.ingredients.hops',
            yeast: 'beer.specialty-spice-beer.ingredients.yeast',
            adjuncts: 'beer.specialty-spice-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.0–9.0%',
            ibu: '15–50',
            srm: 'Variable',
            og: '1.050–1.090',
            fg: '1.010–1.025'
        },
        variations: [],
        examples: [
            "Beers with maple maple syrup AND spices",
            "Unusual spice combinations"
        ],
        service: {
            temperature: "8-12°C",
            glassware: "Tulip",
            validity: "Variable"
        },
        pairing: [
            "Complex desserts",
            "Spiced meats"
        ]
    },
    {
        id: 'alternative-grain-beer',
        name: 'Alternative Grain Beer',
        origin: '🌎', // Varies
        family: 'beer.alternative-grain-beer.family',
        tag: 'beer.alternative-grain-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.alternative-grain-beer.description',
        category: 'Alternative Fermentables',
        appearance: {
            color: 'beer.alternative-grain-beer.appearance.color',
            colorHex: '#F5DEB3', // Generic wheat color
            clarity: 'beer.alternative-grain-beer.appearance.clarity',
            foam: 'beer.alternative-grain-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.alternative-grain-beer.sensory.aroma',
            flavor: 'beer.alternative-grain-beer.sensory.flavor',
            bitterness: 'beer.alternative-grain-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.alternative-grain-beer.mouthfeel.body',
            carbonation: 'beer.alternative-grain-beer.mouthfeel.carbonation',
            texture: 'beer.alternative-grain-beer.mouthfeel.texture',
            finish: 'beer.alternative-grain-beer.mouthfeel.finish'
        },
        history: 'beer.alternative-grain-beer.history',
        comparison: 'beer.alternative-grain-beer.comparison',
        ingredients: {
            malts: 'beer.alternative-grain-beer.ingredients.malts',
            hops: 'beer.alternative-grain-beer.ingredients.hops',
            yeast: 'beer.alternative-grain-beer.ingredients.yeast',
            adjuncts: 'beer.alternative-grain-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.0–7.0%',
            ibu: '15–35',
            srm: 'Variable',
            og: '1.040–1.070',
            fg: '1.006–1.016'
        },
        variations: [],
        examples: [
            { brand: "Green's", name: 'Discovery Amber' },
            { brand: 'Lakefront', name: 'New Grist' },
            { brand: 'New Planet', name: 'Pale Ale' },
            { brand: 'Rogue', name: 'Morimoto Soba Ale' }
        ],
        service: {
            temperature: "6-10°C",
            glassware: "Pint/Tulip",
            validity: "Variable"
        },
        pairing: [
            "Salads (if light)",
            "Grain-based dishes",
            "Sushi (rice lagers)"
        ]
    },
    {
        id: 'alternative-sugar-beer',
        name: 'Alternative Sugar Beer',
        origin: '🌎', // Varies
        family: 'beer.alternative-sugar-beer.family',
        tag: 'beer.alternative-sugar-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.alternative-sugar-beer.description',
        category: 'Alternative Fermentables',
        appearance: {
            color: 'beer.alternative-sugar-beer.appearance.color',
            colorHex: '#E2B062', // Honey-ish
            clarity: 'beer.alternative-sugar-beer.appearance.clarity',
            foam: 'beer.alternative-sugar-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.alternative-sugar-beer.sensory.aroma',
            flavor: 'beer.alternative-sugar-beer.sensory.flavor',
            bitterness: 'beer.alternative-sugar-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.alternative-sugar-beer.mouthfeel.body',
            carbonation: 'beer.alternative-sugar-beer.mouthfeel.carbonation',
            texture: 'beer.alternative-sugar-beer.mouthfeel.texture',
            finish: 'beer.alternative-sugar-beer.mouthfeel.finish'
        },
        history: 'beer.alternative-sugar-beer.history',
        comparison: 'beer.alternative-sugar-beer.comparison',
        ingredients: {
            malts: 'beer.alternative-sugar-beer.ingredients.malts',
            hops: 'beer.alternative-sugar-beer.ingredients.hops',
            yeast: 'beer.alternative-sugar-beer.ingredients.yeast',
            adjuncts: 'beer.alternative-sugar-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–8.0%',
            ibu: '15–40',
            srm: 'Variable',
            og: '1.045–1.075',
            fg: '1.008–1.020'
        },
        variations: [],
        examples: [
            "Honey beers",
            "Maple syrup beers"
        ],
        service: {
            temperature: "8-12°C",
            glassware: "Tulip",
            validity: "Variable"
        },
        pairing: [
            "Desserts",
            "Glazed meats",
            "Cheeses"
        ]
    },
    {
        id: 'classic-style-smoked-beer',
        name: 'Classic Style Smoked Beer',
        origin: '🌎', // Varies
        family: 'beer.classic-style-smoked-beer.family',
        tag: 'beer.classic-style-smoked-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.classic-style-smoked-beer.description',
        category: 'Smoked Beer',
        appearance: {
            color: 'beer.classic-style-smoked-beer.appearance.color',
            colorHex: '#8B4513', // SaddleBrown
            clarity: 'beer.classic-style-smoked-beer.appearance.clarity',
            foam: 'beer.classic-style-smoked-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.classic-style-smoked-beer.sensory.aroma',
            flavor: 'beer.classic-style-smoked-beer.sensory.flavor',
            bitterness: 'beer.classic-style-smoked-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.classic-style-smoked-beer.mouthfeel.body',
            carbonation: 'beer.classic-style-smoked-beer.mouthfeel.carbonation',
            texture: 'beer.classic-style-smoked-beer.mouthfeel.texture',
            finish: 'beer.classic-style-smoked-beer.mouthfeel.finish'
        },
        history: 'beer.classic-style-smoked-beer.history',
        comparison: 'beer.classic-style-smoked-beer.comparison',
        ingredients: {
            malts: 'beer.classic-style-smoked-beer.ingredients.malts',
            hops: 'beer.classic-style-smoked-beer.ingredients.hops',
            yeast: 'beer.classic-style-smoked-beer.ingredients.yeast',
            adjuncts: 'beer.classic-style-smoked-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.8–6.0%',
            ibu: '20–30',
            srm: '12–30',
            og: '1.050–1.057',
            fg: '1.012–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Schlenkerla', name: 'Märzen' },
            { brand: 'Spezial', name: 'Rauchbier Märzen' },
            { brand: 'Goldwater', name: 'Smoke on the Lager' }
        ],
        service: {
            temperature: "10-14°C",
            glassware: "Pint/Mug",
            validity: "Variable"
        },
        pairing: [
            "BBQ",
            "Smoked meats",
            "Sharp cheddar"
        ]
    },
    {
        id: 'specialty-smoked-beer',
        name: 'Specialty Smoked Beer',
        origin: '🌎', // Varies
        family: 'beer.specialty-smoked-beer.family',
        tag: 'beer.specialty-smoked-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.specialty-smoked-beer.description',
        category: 'Smoked Beer',
        appearance: {
            color: 'beer.specialty-smoked-beer.appearance.color',
            colorHex: '#3B2F2F', // Dark smoky
            clarity: 'beer.specialty-smoked-beer.appearance.clarity',
            foam: 'beer.specialty-smoked-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.specialty-smoked-beer.sensory.aroma',
            flavor: 'beer.specialty-smoked-beer.sensory.flavor',
            bitterness: 'beer.specialty-smoked-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.specialty-smoked-beer.mouthfeel.body',
            carbonation: 'beer.specialty-smoked-beer.mouthfeel.carbonation',
            texture: 'beer.specialty-smoked-beer.mouthfeel.texture',
            finish: 'beer.specialty-smoked-beer.mouthfeel.finish'
        },
        history: 'beer.specialty-smoked-beer.history',
        comparison: 'beer.specialty-smoked-beer.comparison',
        ingredients: {
            malts: 'beer.specialty-smoked-beer.ingredients.malts',
            hops: 'beer.specialty-smoked-beer.ingredients.hops',
            yeast: 'beer.specialty-smoked-beer.ingredients.yeast',
            adjuncts: 'beer.specialty-smoked-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '5.5–7.0%',
            ibu: '30–50',
            srm: '20–50',
            og: '1.055–1.070',
            fg: '1.012–1.018'
        },
        variations: [],
        examples: [
            { brand: 'Alaskan', name: 'Smoked Porter' },
            { brand: 'Stone', name: 'Smoked Porter' },
            { brand: 'Schlenkerla', name: 'Eiche' }
        ],
        service: {
            temperature: "10-14°C",
            glassware: "Snifter",
            validity: "Variable"
        },
        pairing: [
            "Roasted game",
            "Smoked cheese",
            "Dark chocolate"
        ]
    },
    {
        id: 'wood-aged-beer',
        name: 'Wood-Aged Beer',
        origin: '🌎', // Varies
        family: 'beer.wood-aged-beer.family',
        tag: 'beer.wood-aged-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.wood-aged-beer.description',
        category: 'Wood Beer',
        appearance: {
            color: 'beer.wood-aged-beer.appearance.color',
            colorHex: '#A0522D', // Sienna
            clarity: 'beer.wood-aged-beer.appearance.clarity',
            foam: 'beer.wood-aged-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.wood-aged-beer.sensory.aroma',
            flavor: 'beer.wood-aged-beer.sensory.flavor',
            bitterness: 'beer.wood-aged-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.wood-aged-beer.mouthfeel.body',
            carbonation: 'beer.wood-aged-beer.mouthfeel.carbonation',
            texture: 'beer.wood-aged-beer.mouthfeel.texture',
            finish: 'beer.wood-aged-beer.mouthfeel.finish'
        },
        history: 'beer.wood-aged-beer.history',
        comparison: 'beer.wood-aged-beer.comparison',
        ingredients: {
            malts: 'beer.wood-aged-beer.ingredients.malts',
            hops: 'beer.wood-aged-beer.ingredients.hops',
            yeast: 'beer.wood-aged-beer.ingredients.yeast',
            adjuncts: 'beer.wood-aged-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '4.5–5.5%',
            ibu: '25–35',
            srm: '10–25',
            og: '1.045–1.055',
            fg: '1.010–1.014'
        },
        variations: [],
        examples: [
            { brand: 'Firestone Walker', name: 'Double Barrel Ale' },
            { brand: 'Innis & Gunn', name: 'The Original' },
            { brand: 'Great Divide', name: 'Oak Aged Yeti' }
        ],
        service: {
            temperature: "10-14°C",
            glassware: "Snifter",
            validity: "Variable"
        },
        pairing: [
            "Grilled steaks",
            "Aged cheeses",
            "Toffee desserts"
        ]
    },
    {
        id: 'specialty-wood-aged-beer',
        name: 'Specialty Wood-Aged Beer',
        origin: '🌎', // Varies
        family: 'beer.specialty-wood-aged-beer.family',
        tag: 'beer.specialty-wood-aged-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.specialty-wood-aged-beer.description',
        category: 'Wood Beer',
        appearance: {
            color: 'beer.specialty-wood-aged-beer.appearance.color',
            colorHex: '#522916', // Dark Brown
            clarity: 'beer.specialty-wood-aged-beer.appearance.clarity',
            foam: 'beer.specialty-wood-aged-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.specialty-wood-aged-beer.sensory.aroma',
            flavor: 'beer.specialty-wood-aged-beer.sensory.flavor',
            bitterness: 'beer.specialty-wood-aged-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.specialty-wood-aged-beer.mouthfeel.body',
            carbonation: 'beer.specialty-wood-aged-beer.mouthfeel.carbonation',
            texture: 'beer.specialty-wood-aged-beer.mouthfeel.texture',
            finish: 'beer.specialty-wood-aged-beer.mouthfeel.finish'
        },
        history: 'beer.specialty-wood-aged-beer.history',
        comparison: 'beer.specialty-wood-aged-beer.comparison',
        ingredients: {
            malts: 'beer.specialty-wood-aged-beer.ingredients.malts',
            hops: 'beer.specialty-wood-aged-beer.ingredients.hops',
            yeast: 'beer.specialty-wood-aged-beer.ingredients.yeast',
            adjuncts: 'beer.specialty-wood-aged-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '11.0–15.0%',
            ibu: '50–70',
            srm: '40–80',
            og: '1.100–1.140',
            fg: '1.020–1.040'
        },
        variations: [],
        examples: [
            { brand: 'Goose Island', name: 'Bourbon County Stout' },
            { brand: 'Founders', name: 'KBS' },
            { brand: 'The Bruery', name: 'Black Tuesday' }
        ],
        service: {
            temperature: "12-16°C",
            glassware: "Snifter",
            validity: "Many years"
        },
        pairing: [
            "Dark chocolate truffles",
            "Cigar",
            "Rich stews"
        ]
    },
    {
        id: 'commercial-specialty-beer',
        name: 'Commercial Specialty Beer',
        origin: '🌎', // Varies
        family: 'beer.commercial-specialty-beer.family',
        tag: 'beer.commercial-specialty-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.commercial-specialty-beer.description',
        category: 'Specialty Beer',
        appearance: {
            color: 'beer.commercial-specialty-beer.appearance.color',
            colorHex: '#808080', // Variable
            clarity: 'beer.commercial-specialty-beer.appearance.clarity',
            foam: 'beer.commercial-specialty-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.commercial-specialty-beer.sensory.aroma',
            flavor: 'beer.commercial-specialty-beer.sensory.flavor',
            bitterness: 'beer.commercial-specialty-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.commercial-specialty-beer.mouthfeel.body',
            carbonation: 'beer.commercial-specialty-beer.mouthfeel.carbonation',
            texture: 'beer.commercial-specialty-beer.mouthfeel.texture',
            finish: 'beer.commercial-specialty-beer.mouthfeel.finish'
        },
        history: 'beer.commercial-specialty-beer.history',
        comparison: 'beer.commercial-specialty-beer.comparison',
        ingredients: {
            malts: 'beer.commercial-specialty-beer.ingredients.malts',
            hops: 'beer.commercial-specialty-beer.ingredients.hops',
            yeast: 'beer.commercial-specialty-beer.ingredients.yeast',
            adjuncts: 'beer.commercial-specialty-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: 'Variable',
            ibu: 'Variable',
            srm: 'Variable',
            og: 'Variable',
            fg: 'Variable'
        },
        variations: [],
        examples: [
            { brand: 'Samuel Adams', name: 'Utopias' },
            { brand: 'Dogfish Head', name: '120 Minute IPA' },
            { brand: 'Any', name: 'Clone Beer' }
        ],
        service: {
            temperature: "Variable",
            glassware: "Variable",
            validity: "Variable"
        },
        pairing: [
            "Variable",
            "Depends on specific beer"
        ]
    },
    {
        id: 'mixed-style-beer',
        name: 'Mixed-Style Beer',
        origin: '🌎', // Varies
        family: 'beer.mixed-style-beer.family',
        tag: 'beer.mixed-style-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.mixed-style-beer.description',
        category: 'Specialty Beer',
        appearance: {
            color: 'beer.mixed-style-beer.appearance.color',
            colorHex: '#A9A9A9', // Variable
            clarity: 'beer.mixed-style-beer.appearance.clarity',
            foam: 'beer.mixed-style-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.mixed-style-beer.sensory.aroma',
            flavor: 'beer.mixed-style-beer.sensory.flavor',
            bitterness: 'beer.mixed-style-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.mixed-style-beer.mouthfeel.body',
            carbonation: 'beer.mixed-style-beer.mouthfeel.carbonation',
            texture: 'beer.mixed-style-beer.mouthfeel.texture',
            finish: 'beer.mixed-style-beer.mouthfeel.finish'
        },
        history: 'beer.mixed-style-beer.history',
        comparison: 'beer.mixed-style-beer.comparison',
        ingredients: {
            malts: 'beer.mixed-style-beer.ingredients.malts',
            hops: 'beer.mixed-style-beer.ingredients.hops',
            yeast: 'beer.mixed-style-beer.ingredients.yeast',
            adjuncts: 'beer.mixed-style-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–8.5%',
            ibu: '60–80',
            srm: '35–50',
            og: '1.075–1.085',
            fg: '1.012–1.016'
        },
        variations: [],
        examples: [
            { brand: 'Firestone Walker', name: 'Wookey Jack' },
            { brand: 'Stone', name: 'Cali-Belgique' },
            { brand: 'Sierra Nevada', name: 'Flipside' }
        ],
        service: {
            temperature: "Variable",
            glassware: "Variable",
            validity: "Variable"
        },
        pairing: [
            "Variable",
            "Depends on mix"
        ]
    },
    {
        id: 'experimental-beer',
        name: 'Experimental Beer',
        origin: '🌎', // Varies
        family: 'beer.experimental-beer.family',
        tag: 'beer.experimental-beer.tag',
        abv: 'Variable',
        rating: 0,
        image: 'assets/beer-placeholder.png',
        description: 'beer.experimental-beer.description',
        category: 'Specialty Beer',
        appearance: {
            color: 'beer.experimental-beer.appearance.color',
            colorHex: '#FF00FF', // Wildcard
            clarity: 'beer.experimental-beer.appearance.clarity',
            foam: 'beer.experimental-beer.appearance.foam'
        },
        sensory: {
            aroma: 'beer.experimental-beer.sensory.aroma',
            flavor: 'beer.experimental-beer.sensory.flavor',
            bitterness: 'beer.experimental-beer.sensory.bitterness'
        },
        mouthfeel: {
            body: 'beer.experimental-beer.mouthfeel.body',
            carbonation: 'beer.experimental-beer.mouthfeel.carbonation',
            texture: 'beer.experimental-beer.mouthfeel.texture',
            finish: 'beer.experimental-beer.mouthfeel.finish'
        },
        history: 'beer.experimental-beer.history',
        comparison: 'beer.experimental-beer.comparison',
        ingredients: {
            malts: 'beer.experimental-beer.ingredients.malts',
            hops: 'beer.experimental-beer.ingredients.hops',
            yeast: 'beer.experimental-beer.ingredients.yeast',
            adjuncts: 'beer.experimental-beer.ingredients.adjuncts'
        },
        specs: {
            abvRange: '8.0–12.0%',
            ibu: '40–100',
            srm: '5–40',
            og: '1.080–1.120',
            fg: '1.010–1.030'
        },
        variations: [],
        examples: [
            { brand: 'Other Half', name: 'All Green Everything' },
            { brand: 'Angry Chair', name: 'Imperial German Chocolate Cupcake Stout' },
            { brand: 'Heineken', name: 'H41' }
        ],
        service: {
            temperature: "Variable",
            glassware: "Variable",
            validity: "Variable"
        },
        pairing: [
            "Experimental food",
            "Whatever works"
        ]
    }
];
