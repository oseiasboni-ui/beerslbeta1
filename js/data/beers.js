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
    }
];
