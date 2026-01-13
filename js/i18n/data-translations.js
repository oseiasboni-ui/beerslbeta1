export const regionMap = {
    "Europe": "Europa",
    "North America": "América do Norte",
    "South America": "América do Sul",
    "Asia": "Ásia",
    "Africa": "África",
    "Oceania": "Oceania",
    "Middle East": "Oriente Médio",
    "Caribbean": "Caribe",
    "Central America": "América Central",
    "Global": "Global" // Same
};

export const countryMap = {
    "USA": "EUA",
    "Germany": "Alemanha",
    "Belgium": "Bélgica",
    "Mexico": "México",
    "Netherlands": "Países Baixos",
    "Ireland": "Irlanda",
    "UK": "Reino Unido",
    "China": "China",
    "Japan": "Japão",
    "Czech Republic": "República Tcheca",
    "France": "França",
    "Italy": "Itália",
    "Brazil": "Brasil",
    "Australia": "Austrália",
    "Canada": "Canadá",
    "Spain": "Espanha",
    "Russia": "Rússia",
    "South Korea": "Coreia do Sul",
    "Poland": "Polônia",
    "Denmark": "Dinamarca",
    "Austria": "Áustria",
    "Thailand": "Tailândia",
    "Philippines": "Filipinas",
    "India": "Índia",
    "South Africa": "África do Sul",
    "Colombia": "Colômbia",
    "Argentina": "Argentina",
    "Vietnam": "Vietnã",
    "Turkey": "Turquia",
    "Jamaica": "Jamaica",
    "Singapore": "Cingapura",
    "Finland": "Finlândia",
    "Greece": "Grécia",
    "Portugal": "Portugal",
    "Indonesia": "Indonésia",
    "Peru": "Peru",
    "Kenya": "Quênia",
    "Nigeria": "Nigéria",
    "Venezuela": "Venezuela",
    "Chile": "Chile",
    "Taiwan": "Taiwan",
    "Ethiopia": "Etiópia",
    "Norway": "Noruega",
    "Israel": "Israel",
    "Tanzania": "Tanzânia",
    "Switzerland": "Suíça",
    "New Zealand": "Nova Zelândia",
    "Uganda": "Uganda",
    "Croatia": "Croácia",
    "Romania": "Romênia",
    "Bulgaria": "Bulgária",
    "Slovakia": "Eslováquia",
    "Hungary": "Hungria",
    "Sweden": "Suécia",
    "Ukraine": "Ucrânia",
    "Serbia": "Sérvia",
    "Latvia": "Letônia",
    "Estonia": "Estônia",
    "Lithuania": "Lituânia",
    "Iceland": "Islândia",
    "Malta": "Malta",
    "Cyprus": "Chipre",
    "Lebanon": "Líbano",
    "Jordan": "Jordânia",
    "Namibia": "Namíbia",
    "Scotland": "Escócia",
    "England": "Inglaterra",
    "Wales": "País de Gales",
    "North Korea": "Coreia do Norte",
    "Cambodia": "Camboja",
    "Laos": "Laos",
    "Myanmar": "Mianmar",
    "Egypt": "Egito",
    "Morocco": "Marrocos",
    "Senegal": "Senegal",
    "Tunisia": "Tunísia",
    "Barbados": "Barbados",
    "Bahamas": "Bahamas",
    "Trinidad and Tobago": "Trinidad e Tobago",
    "Dominican Republic": "República Dominicana",
    "Costa Rica": "Costa Rica",
    "Panama": "Panamá",
    "Puerto Rico": "Porto Rico",
    "Honduras": "Honduras",
    "El Salvador": "El Salvador",
    "Guatemala": "Guatemala",
    "Nicaragua": "Nicarágua",
    "Bolivia": "Bolívia",
    "Paraguay": "Paraguai",
    "Uruguay": "Uruguai",
    "Iran": "Irã",
    "Saudi Arabia": "Arábia Saudita",
    "Palestine": "Palestina",
    "North Macedonia": "Macedônia do Norte",
    "Bosnia and Herzegovina": "Bósnia e Herzegovina",
    "Unknown": "Desconhecido"
};

export function translateRegion(region, lang) {
    if (lang === 'pt-BR') {
        return regionMap[region] || region;
    }
    return region;
}

export function translateOrigin(origin, lang) {
    if (lang === 'pt-BR') {
        // Assume format "Name Flag" or just "Name"
        // Try to find the name in the map

        // 1. Check exact match
        if (countryMap[origin]) return countryMap[origin];

        // 2. Check if it ends with a flag (approximate check: non-ascii at end)
        // We'll split by space and try to match the prefix
        const parts = origin.split(' ');
        if (parts.length > 1) {
            // Try matching everything except the last part
            const nameCandidate = parts.slice(0, -1).join(' ');
            if (countryMap[nameCandidate]) {
                return countryMap[nameCandidate] + ' ' + parts[parts.length - 1];
            }
        }

        // 3. Fallback: return original
        return origin;
    }
    return origin;
}
