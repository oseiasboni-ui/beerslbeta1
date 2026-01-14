import re

file_path = '/Users/oseiassilvadossantos/Desktop/beersl/js/data/beer-parent-companies.js'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

updates = {
    # Fixes for previously failed ones
    "Samuel Adams": "A centelha da revolução. Jim Koch fez o primeiro lote em sua cozinha em 1984, usando uma receita de 1860. A Boston Lager desafiou o status quo das cervejas industriais, provando que os americanos desejavam sabor, corpo e complexidade.",
    "Samuel Adams Boston Lager": "A centelha da revolução. Jim Koch fez o primeiro lote em sua cozinha em 1984, usando uma receita de 1860. A Boston Lager desafiou o status quo das cervejas industriais, provando que os americanos desejavam sabor, corpo e complexidade.",
    "Yuengling": "A mais antiga da América, sobrevivendo desde 1829. Passou pela Guerra Civil e Lei Seca. Sua 'Traditional Lager' âmbar é um tesouro da Costa Leste, oferecendo sabor de caramelo tostado a preço justo, mantendo-se ferozmente independente e familiar.",
    "Peroni Nastro Azzurro": "A 'Fita Azul' italiana. Criada em 1963 para encarnar a 'Dolce Vita'. Não é apenas uma cerveja, é um acessório de moda. Seca, cítrica e incrivelmente elegante, foi desenhada para o clima mediterrâneo e para quem aprecia o estilo acima de tudo.",
    "Peroni": "A 'Fita Azul' italiana. Criada em 1963 para encarnar a 'Dolce Vita'. Não é apenas uma cerveja, é um acessório de moda. Seca, cítrica e incrivelmente elegante, foi desenhada para o clima mediterrâneo e para quem aprecia o estilo acima de tudo.",
    
    # Remaining Batch
    "Carlton Draught": "A cerveja de pub da Austrália. Famosa por ser servida fresca ('Brewery Fresh') e por seus comerciais lendários ('Big Ad'). É uma lager descomplicada que representa a cultura de beber com os 'mates' no bar local.",
    "Cisk": "O orgulho de Malta. Lançada em 1929, ganhou fama quando o fundador, Scicluna 'ic-Cisk' (o cheque), herdou a operação de um cliente falido. Sua Lager premiada é o sabor do verão mediterrâneo na ilha, inseparável das festas locais.",
    "Coopers": "O ícone da 'Pale Ale' australiana. Famosa e única por sua fermentação secundária na garrafa/lata, deixando um sedimento de levedura que deve ser 'rolado' antes de beber. Cervejaria familiar desde 1862 que resistiu a todas as ofertas de compra hostis.",
    "Hahn Premium": "A revolução tecnológica de Chuck Hahn. Lançada em 1988, focou em tecnologia de ponta para criar lagers de alta qualidade e baixa caloria ('Super Dry') sem sacrificar o sabor, definindo o mercado moderno de cervejas lifestyle na Austrália.",
    "Haywards 5000": "A cerveja forte da Índia. Conhecida por seu teor alcoólico elevado (acima de 7%), é a bebida do homem trabalhador indiano. Famosa pelo slogan icônico 'Haywards Hai', simboliza força, resistência e masculinidade robusta.",
    "Jelen": "O 'Cervo' (Jelen) da Sérvia. Produzida em Apatin desde 1756. Um símbolo de masculinidade e tradição nos Bálcãs, com seu rugido característico nos comerciais e cor dourada profunda.",
    "Kalik": "O som dos chocalhos ('Cowbells') do festival Junkanoo das Bahamas - 'Kalik, Kalik'. Lançada em 1988, tornou-se a cerveja nacional instantânea, capturando o espírito festivo e o ritmo das ilhas.",
    "Karlovačko": "O orgulho croata. Feita com cevada local, é a cerveja dos parques nacionais e do Mar Adriático. Sua cruz vermelha e branca no rótulo reflete o brasão de armas da Croácia e séculos de tradição cervejeira.",
    "Keystone": "A fundação suave. Lançada em 1989 no Colorado como uma alternativa mais leve. Tornou-se cultuada por suas latas de 'boca larga' que facilitavam o consumo rápido em festas universitárias.",
    "Kokanee": "A cerveja das geleiras da Colúmbia Britânica (BC). Seu mascote, o Sasquatch (Pé Grande), protege as montanhas de onde vem a água pura da cerveja. É o sabor da aventura selvagem canadense.",
    "Larue": "A essência exótica do Vietnã. Fundada por franceses em 1909 em Da Nang. Mantém seu rótulo vintage com o tigre, símbolo de sorte e prosperidade, sendo a escolha clássica da região central do país.",
    "Legend Extra Stout": "A Stout nigeriana. Uma das poucas stouts produzidas localmente que compete com a Guinness. Rica, escura e encorpada, é feita para o paladar africano que aprecia cervejas fortes e nutritivas.",
    "Madrí Excepcional": "A alma de Madrid, feita no Reino Unido? Uma colaboração moderna entre a cervejaria La Sagra (Espanha) e a Molson Coors. Capturou o espírito 'Chulapo' de Madrid e tornou-se um fenômeno de vendas instantâneo nos pubs britânicos.",
    "Meta Beer": "A lenda da Etiópia. Famosa por seu rótulo com o leão de Juba. É uma das cervejas mais antigas e respeitadas do país, conhecida por seu sabor maltado e suave, acompanhando perfeitamente a 'Injera' picante.",
    "Modelo Negra": "A nata da cerveja escura. Uma Munich Dunkel mexicana introduzida por imigrantes austríacos. Equilibra o malte torrado com leveza, sendo o par perfeito para a gastronomia mexicana.",
    "Noroc": "A cerveja do povo na Moldávia. Seu nome significa 'Sorte' ou 'Saúde!' (o brinde local). É uma cerveja simples, acessível e honesta, presente em todas as celebrações rurais e urbanas do país.",
    "OB Lager": "A veterana coreana. Oriental Brewery (OB) é um pilar da indústria desde 1933. Sua mascote 'OB Bear' é um ícone nostálgico. Conhecida por seu sabor de arroz limpo e seco.",
    "Obolon": "O gigante ucraniano. A maior cervejaria da Europa Oriental em capacidade única. Fundada para as Olimpíadas de 80, tornou-se o primeiro exportador de cerveja da Ucrânia independente, símbolo de capacidade industrial nacional.",
    "Okhota": "'A Caçada' (Okhota). Uma cerveja forte russa, feita para homens que apreciam atividades ao ar livre e sabores potentes. Com alto teor alcoólico, é a bebida para aquecer o corpo nas florestas da Sibéria.",
    "Olvi": "O espírito independente da Finlândia. Fundada em 1878 pelo mestre cervejeiro que queria oferecer uma alternativa sóbria à vodka excessiva. É a única grande cervejaria finlandesa que permaneceu independente de conglomerados globais.",
    "Paceña": "A cerveja mais alta do mundo. Produzida em La Paz, Bolívia, a 3600m de altitude! A baixa pressão atmosférica cria uma espuma única e densa. Feita com água pura do degelo dos Andes.",
    "Palm": "O orgulho belga de Brabante. Uma 'Spéciale Belge' Ale, estilo criado em 1904 para competir com as Pilsners. De cor âmbar e sabor maltado suave com notas de mel e fermento especial.",
    "Perła": "A pérola de Lublin, Polônia. Feita com o lúpulo local famoso mundialmente. É uma cerveja regional que ganhou status nacional por sua qualidade consistente e sabor herbal distinto.",
    "Presidente": "O sabor do Caribe. Ícone da República Dominicana desde 1935. Famosa por ser servida 'Vestida de Novia' (tão gelada que cobre-se de um véu branco de gelo). Símbolo de festa e orgulho latino.",
    "Primus": "Cerveja do Rei. Produzida na Bélgica pela Haacht (e licenciada na África central). Nomeada em homenagem a Jan Primus, duque de Brabante. É a pilsner de 'luta' que domina os bares da classe trabalhadora.",
    "Puntigamer": "A cerveja 'sociável' da Áustria. De Graz, Estíria. Seu rótulo azul e branco é onipresente em festivais folclóricos. Conhecida como 'bierige' (muito cervejeira), fácil de beber e centro da festa.",
    "Pure Blonde": "A pioneira 'Low Carb' da Austrália. Lançada em 2004 para o estilo de vida ativo e de praia. Prometeu e entregou: uma cerveja completa sem o inchaço, mudando o mercado australiano para sempre.",
    "Qingdao": "A grafia moderna de Tsingtao. O legado germânico na China, feita com água de Laoshan e arroz, criando o padrão da cerveja asiática leve e aromática.",
    "Royal Challenge Beer": "O espírito leal da Índia. Uma Strong Lager conhecida pelo slogan 'Brewed Stronger, Brewed Better'. É a escolha de quem busca potência e caráter em um mercado dominado por lagers leves.",
    "Safari Lager": "A essência selvagem da Tanzânia. Uma cerveja forte e encorpada, desenhada para o pôr do sol na savana. Seu sabor robusto combina com a carne de caça e churrascos locais (Nyama Choma).",
    "Saigon Export": "O dragão vermelho do Vietnã. A versão de exportação da Bia Saigon, mais encorpada e premium. Leva o sabor do arroz e malte vietnamita para o mundo.",
    "Sedrin": "Marca chinesa regional forte. Parte do gigante portfólio da InBev na China, focada em mercados locais específicos onde a lealdade à marca da cidade natal é alta.",
    "Serengeti Premium": "O leopardo da Tanzânia. Uma Lager Premium moderna, feita com 100% de malte e sem adição de açúcar, rara na África. Vencedora de ouro na Alemanha, provando a qualidade da cerveja africana.",
    "Sinebrychoff": "A mais antiga cervejaria nórdica (1819). Fundada por um comerciante russo em Helsinque. Sua Porter original ainda é feita com a receita do século 19 e é considerada uma das melhores Porters do mundo.",
    "Sleeman": "A história de contrabando do Canadá. A família Sleeman foi notória contrabandista durante a Lei Seca, inclusive para o Al Capone! A cervejaria renasceu nos anos 80 usando o livro de receitas 'secreto' da tia, abraçando seu passado fora da lei.",
    "Solera": "A inovação venezuelana. Famosa por suas variantes (Azul, Verde) e processos de fabricação premium. Em um mercado difícil, manteve a imagem de sofisticação e qualidade superior.",
    "St. George Beer": "O santo padroeiro da Etiópia. Cervejaria fundada em 1922, nomeada em homenagem a São Jorge, padroeiro do país. É a cerveja mais antiga da nação, entrelaçada com a história imperial e a identidade etíope moderna.",
    "Star Lager": "A estrela da Nigéria. Introduzida em 1949, foi a primeira cerveja produzida domesticamente. 'Shine Shine Bobo': seus anúncios coloridos e associação com música a tornaram parte do tecido cultural da África Ocidental.",
    "Superior": "A loira de Orizaba, México. Uma das marcas históricas da Moctezuma (1896). Conhecida por ser encorpada e dourada, foi por décadas a cerveja mais popular antes da ascensão da Corona.",
    "Taedonggang": "O orgulho da Coreia do Norte. Curiosamente, a cervejaria foi comprada inteira da Inglaterra (Ushers) e remontada em Pyongyang em 2002. Dizem ser surpreendentemente boa, uma Ale encorpada que supera muitas Lagers aguadas do sul.",
    "Terra": "O 'Tornado' verde da Coreia. Lançada em 2019, causou sensação com sua garrafa verde e carbonatação extra-forte 'real carbonic'. Feita com malte australiano puro, tornou-se rapidamente a favorita moderna de Seul.",
    "Timișoreana": "A lenda romena. Fundada em 1718 em Timișoara pelo Príncipe Eugênio de Saboia. É a cervejaria mais antiga da Romênia. Sua torre no rótulo simboliza três séculos de tradição ininterrupta.",
    "Tooheys Old": "A 'Black Ale' australiana. Uma dark ale que sobreviveu à onda das lagers claras. Com notas de chocolate e malte torrado, é o segredo dos velhos frequentadores de pubs que sabem o que é bom.",
    "Topvar": "O orgulho da Eslováquia. De Topoľčany. Uma cerveja que combina a suavidade da água local com a amargor nobre do lúpulo eslovaco, mantendo viva a tradição cervejeira da Europa Central.",
    "Trophy Lager": "O prêmio da Nigéria e Gana. Conhecida como 'Honourable'. Uma cerveja que celebra o sucesso e a conquista social na vibrante economia da África Ocidental.",
    "Tui": "A lenda da Nova Zelândia. Famosa por sua torre de cervejaria industrial na margem do rio Mangatainoka e pelas campanhas 'Yeah Right'. Tecnicamente uma Pale Ale, mas bebida como Lager, é um ícone kiwi de humor e simplicidade.",
    "Wusu": "A cerveja 'mortal' de Xinjiang, China. Apelidada de 'Wusu Vermelha Mortal' não pelo álcool, mas pela ressaca lendária e facilidade de beber. Feita no extremo oeste, é cultuada por viajantes da Rota da Seda moderna.",
    "Yarpivo": "O orgulho do Volga. De Yaroslavl, Rússia. Cresceu nos anos 90 para se tornar uma marca nacional, famosa por usar a 'Grande Mãe Volga' como fonte e inspiração. Símbolo do renascimento industrial russo.",
    "Zhaojin": "Ouro chinês. Uma marca regional forte na província de Shandong (berço da cerveja chinesa), competindo no segmento de massa com preço acessível e lealdade local.",
    "Zipfer": "Um copo de luz. De Alta Áustria. Famosa por usar lúpulo natural em cone (não pellets) e fermentação aberta. Sua garrafa distinta e sabor de lúpulo fresco a tornam única no mar de lagers padrão.",
    "Šariš": "O coração do leste eslovaco. A primeira marca a lançar cerveja em lata na Checoslováquia. Seu slogan 'Srdcom Východniar' (Oriental de Coração) celebra o orgulho e a hospitalidade da região de Šariš."
}

# Process updates
count = 0
for key, history in updates.items():
    # Regex to find the key and ensure it doesn't already have history
    pattern = r'("' + re.escape(key) + r'":\s*\{)([^}]+)(\})'
    
    def replace_fn(match):
        prefix = match.group(1)
        content = match.group(2)
        suffix = match.group(3)
        
        if "history:" in content:
             # Need to fix duplicate / bad key matches if any, but generally checking history presence is safe.
             # However, for previously failed ones (like Sam Adams), they might NOT have history.
             return match.group(0) 
        
        # Add history
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
        print(f"Skipped/Not Found: {key}")

# 2. Append Missing Brands if they don't exist
# Check for Snow Beer and Windhoek which were missing from file entirely
if '"Snow Beer":' not in content:
    print("Adding Snow Beer...")
    snow_entry = '    "Snow Beer": { parent: "China Resources", color: "#0ea5e9", region: "China", origin: "China 🇨🇳", year: 1993, history: "O gigante silencioso. Tecnicamente a marca de cerveja mais vendida do planeta (em volume), embora quase desconhecida fora da China. Conhecida como \'Xuehua\' (Floco de Neve), é uma lager extremamente leve e barata, onipresente em todas as mesas da China moderna." },\n'
    # Insert before last brace
    last_brace_idx = content.rfind('}')
    content = content[:last_brace_idx] + snow_entry + content[last_brace_idx:]

if '"Windhoek Lager":' not in content:
    print("Adding Windhoek Lager...")
    windhoek_entry = '    "Windhoek Lager": { parent: "Heineken", color: "#65a30d", region: "Africa", origin: "Namibia 🇳🇦", year: 1920, history: "A Lei de Pureza na África. Fundada em 1920 por imigrantes alemães na Namíbia. Orgulha-se de seguir estritamente a Reinheitsgebot de 1516, usando apenas malte, lúpulo e água, criando uma lager de classe mundial no deserto africano." },\n'
    last_brace_idx = content.rfind('}')
    content = content[:last_brace_idx] + windhoek_entry + content[last_brace_idx:]


with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print(f"Injection complete. Updated {count} existing brands.")
