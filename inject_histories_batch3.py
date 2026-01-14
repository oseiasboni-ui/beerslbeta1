import re

file_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define the updates map
updates = {
    # Batch 2 Re-attempts (Asian/Pacific)
    "333 Export": "Originalmente 'Beer 33' da França, tornou-se '333' após a reunificação do Vietnã. Famosa entre soldados americanos durante a guerra, hoje é uma lager de arroz onipresente, vendida em latas prateadas e vermelhas. O nome soma 9, número de sorte na cultura asiática.",
    "Kirin Ichiban": "Inovação japonesa pura. 'Ichiban Shibori' significa 'primeira prensagem'. Ao contrário de outras cervejas que usam a primeira e segunda prensagem do mosto, a Kirin usa apenas a primeira, a mais pura e saborosa, descartando os taninos amargos. O resultado é um sabor limpo e 'umami' sem igual.",
    "Sapporo": "A estrela do norte. Fundada em 1876 na ilha selvagem de Hokkaido pelo primeiro mestre cervejeiro japonês treinado na Alemanha, Seibei Nakagawa. Sua lata de aço esculpida ('Kappu') e a estrela polar no rótulo simbolizam o espírito pioneiro japonês.",
    "Asahi Super Dry": "A revolução 'Karakuchi'. Em 1987, Asahi quebrou o paradigma das cervejas japonesas (então doces e pesadas) ao lançar a primeira cerveja 'Dry' do mundo. Inspirada no saquê seco, com sabor cortante e final limpíssimo, transformou a Asahi de azarão em líder de mercado.",
    "Kamenitza": "A primeira cerveja da Bulgária, fundada em Plovdiv em 1881. Iniciada por suíços, seu nome refere-se à colina de sienito 'Kamenitsa' onde a fábrica foi cavada (e cujo gelo natural refrigerava a cerveja). É um marco histórico búlgaro.",
    "Ciuc": "A cerveja dos Cárpatos. Produzida em Miercurea Ciuc, uma das regiões mais frias da Romênia (o 'Polo Norte' romeno). A pureza da água mineral local e o clima frio são o segredo da sua qualidade, tornando-a a favorita dos amantes da natureza.",
    "Kloud": "A resposta coreana à cerveja sem diluição. Lançada em 2014 pela gigante Lotte, seu nome combina 'Korea' + 'Cloud' (pela espuma rica). Diferente das concorrentes locais que diluem o mosto, Kloud usa o método alemão 'Original Gravity', oferecendo um corpo mais rico.",
    "Tsingtao": "O legado germânico na China. Fundada em 1903 por colonos alemães em Qingdao. Sua receita original incluía água mineral da fonte Laoshan e levedura trazida da Alemanha. É a cerveja chinesa mais famosa globalmente, sobrevivendo a duas guerras mundiais e à Revolução Cultural.",
    "Snow Beer": "O gigante silencioso. Tecnicamente a marca de cerveja mais vendida do planeta (em volume), embora quase desconhecida fora da China. Conhecida como 'Xuehua' (Floco de Neve), é uma lager extremamente leve e barata, onipresente em todas as mesas da China moderna.",
    "Yanjing": "A cerveja oficial do Estado Chinês. Baseada em Pequim, é servida no Grande Salão do Povo. Foi uma das primeiras a usar água mineral natural de fontes profundas nas Montanhas Yan. É a única grande cervejaria estatal que não se aliou a parceiros estrangeiros.",
    "Pearl River Beer": "A pioneira do 'Draft' na China. A primeira marca a introduzir tecnologia de 'Pure Draught' no país em 1985, vinda de Guangzhou (rio das Pérolas) no sul. Representa a abertura econômica da China e a modernização do delta do Rio das Pérolas.",

    # Batch 3 (Africa / Middle East / Others)
    "Kilimanjaro": "A cerveja que leva o nome do teto da África. Produzida na Tanzânia com água das encostas da montanha lendária. É o orgulho nacional tanzaniano, famosa por patrocinar a liga local de futebol e por ser a recompensa refrescante para quem conquista o pico Uhuru.",
    "Castel Beer": "A cerveja pan-africana. Criada pelo grupo francês Castel, tornou-se a 'Coca-Cola das cervejas' na África Francófona, onipresente de Camarões a Madagascar. É a marca unificadora do continente, conhecida por sua garrafa de 65cl compartilhável e sabor consistente.",
    "Castle Lite": "Lançada na África do Sul em 1994, revolucionou o mercado como a primeira cerveja 'Lite' premium do continente. Inovou com indicadores de temperatura na lata que ficam azuis quando gelados. É sinônimo de frescor urbano e música contemporânea africana.",
    "Tusker": "O espírito do Quênia ('Jina Lako Ni Tusker?'). Fundada em 1922 em memória do fundador George Hurst, morto por um elefante macho (Tusker). Usa cevada 100% equatoriana e é um ícone da África Oriental, simbolizando a coragem e a herança britânica-africana.",
    "Sakara": "O ouro dos faraós. A cerveja original do Egito (onde a cerveja pode ter sido inventada!). A versão 'Gold' é a escolha padrão nos resorts do Mar Vermelho e cruzeiros do Nilo, oferecendo um refresco leve no calor do deserto desde 1897.",
    "Maccabee": "A cerveja premium original de Israel. Batizada em homenagem aos guerreiros macabeus da revolta de Hanukkah. Uma Pale Lager 100% malte que dominou o mercado de luxo local por décadas antes da revolução artesanal, conhecida por seu sabor europeu clássico.",
    "Petra": "A cerveja forte da Jordânia. Nomeada em homenagem à cidade rosa de Petra, uma das maravilhas do mundo. Com variants de alto teor alcoólico (8%, 10%), é popular não apenas pelo sabor, mas por sua potência, sendo um segredo local no Oriente Médio.",
    "Taybeh": "A resistência dourada. Fundada na vila cristã de Taybeh em 1994, é a primeira microcervejaria da Palestina. Produzida sob ocupação e restrições extremas, mas seguindo a Lei de Pureza Alemã. É um símbolo líquido de esperança e normalidade na Cisjordânia.",
    "Suntory Premium Malt's": "A perfeição obsessiva do Japão. Vencedora do Grand Gold no Monde Selection por três anos consecutivos. Feita com lúpulo aromático europeu e água mineral profunda, sua espuma 'Kamiawa' (cremosa como leite) é lendária, resultado de engenharia de precisão nipônica.",
    "Orion Draft": "A cerveja de Okinawa. Nascida na ilha tropical do Japão sob ocupação americana em 1957. É distinta das cervejas do continente: mais leve, fresca e feita para o clima quente e úmido. É o sabor das férias e da cultura única Ryukyu.",
    "Taiwan Beer": "O sabor de Formosa. Adiciona arroz local 'Ponlai' (Japonica) ao mosto, criando um sabor distinto e adocicado que define a culinária de rua de Taiwan. Passou de monopólio estatal a ícone nacional, famosa pelas versões com sabores de frutas tropicais (manga, abacaxi).",
    "Red Horse Beer": "O coice extra-forte das Filipinas. Com 6.9% de álcool, é a cerveja de alta potência mais famosa do país. Cultuada por sua força ('Ito ang Tama!'), é a escolha jovem e ousada, cercada de lendas urbanas sobre o 'garanhão sorridente' escondido no rótulo.",
    "San Miguel": "O titã filipino. A marca original fundada em Manila em 1890 (antes da espanhola). É uma das cervejas mais vendidas do mundo. Parte intrínseca da história das Filipinas, dominando o mercado local com um monopólio virtual e sendo o orgulho da indústria do sudeste asiático.",
    "Tooheys New": "A Lager de NSW. Desde 1931, é a favorita dos trabalhadores de New South Wales, Austrália. Conhecida pelo símbolo do veado, é a antítese da cerveja pretensiosa: honesta, fácil de beber e parceira inseparável dos churrascos e do Rugby League.",
    "Victoria Bitter": "A famosa 'VB'. 'For a hard earned thirst'. Originalmente uma cerveja de alta gravidade da era vitoriana (daí o nome), tornou-se a cerveja mais vendida da Austrália por décadas. Amada por seu sabor robusto e garrafa 'stubby' icônica, é o símbolo da masculinidade australiana tradicional.",
    "XXXX Gold": "A essência de Queensland. A cerveja mais vendida da Austrália por volume. Projetada para o clima escaldante do norte, tem teor alcoólico moderado (3.5%) para permitir sessões longas sob o sol. O 'Four X' é um ícone cultural que dizem significar que a cerveja é boa demais para ser escrita.",
    "Lion Red": "O rugido da Nova Zelândia. Nascida em 1907 como 'Lion Beer' em Auckland. Tornou-se 'Red' pela cor de suas latas e é a cerveja operária clássica do país. Patrocinadora histórica do rugby, é sinônimo de lealdade e tradição Kiwi."
}

# Process updates
count = 0
for key, history in updates.items():
    # Regex to find the key and ensure it doesn't already have history
    # Pattern: "Key": { ... }
    # We rely on the fact that we cleaned duplicates, so first match is THE match?
    # Actually, we should check if history is already there to avoid overwriting (though user said overwrite founding notes, history passed).
    
    # Simple strategy: Find "Key": { ... } and check if history exists.
    # If not, remove the closing brace and append history.
    
    pattern = r'("' + re.escape(key) + r'":\s*\{)([^}]+)(\})'
    
    def replace_fn(match):
        prefix = match.group(1)
        content = match.group(2)
        suffix = match.group(3)
        
        if "history:" in content:
            return match.group(0) # Already has history, skip
        
        # Add history
        # Ensure comma if needed
        new_content = content.rstrip()
        if not new_content.endswith(','):
            new_content += ","
            
        new_content += f' history: "{history}" '
        return f"{prefix}{new_content}{suffix}"
        
    new_text, subs = re.subn(pattern, replace_fn, content, count=1)
    if subs > 0:
        content = new_text
        count += 1
    else:
        print(f"Could not find or update: {key}")

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Updated {count} brands with new history.")
