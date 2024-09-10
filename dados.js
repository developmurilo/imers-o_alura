let dados = [
    {
        titulo: "Superman",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Super-Homem.jpg/250px-Super-Homem.jpg",
        descricao: "O Superman é um alienígena de Krypton, enviado para a Terra antes da destruição de seu planeta. Criado como Clark Kent, ele possui superpoderes como força, velocidade e voo. Trabalhando como jornalista, ele utiliza suas habilidades para proteger a humanidade como o super-herói Superman, representando os valores de justiça e esperança.",
        link: "https://pt.wikipedia.org/wiki/Superman",
        tags: "kripton, kriptonita, força, clark kent, visao de raio-x, lex luthor cueca"
    },
    {
        titulo: "Homem de Ferro",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Invincible_Iron_Man_Vol_2_2.jpg/250px-Invincible_Iron_Man_Vol_2_2.jpg",
        descricao: "Bilionário, playboy e filantropo, Tony Stark é o Homem de Ferro. Ferido em uma emboscada, ele cria uma armadura de alta tecnologia para manter-se vivo e usa seus poderes para proteger o mundo. O Homem de Ferro representa a inovação, a inteligência e a responsabilidade.",
        link: "https://pt.wikipedia.org/wiki/Homem_de Ferro",
        tags: "armadura tecnologia inteligência bilionário stark industries vilões armadura iron man"
  
    },
    {
        titulo: "Batman",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/8/8d/Batman_por_Jim_Lee.jpg",
        descricao: "Após testemunhar o assassinato de seus pais, Bruce Wayne dedica sua vida a combater o crime em Gotham City. Treinado em diversas artes marciais e utilizando equipamentos de alta tecnologia, o Batman é um vigilante que inspira medo nos criminosos. Ele representa a justiça, a vingança e a determinação.",
        link: "https://pt.wikipedia.org/wiki/Batman",
        tags: "Gotham City, Coringa, Charada, Batcaverna, vigilante, detetive, trevas"
    },
    {
        titulo: "Mulher Maravilha",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/f/f6/Mulher-Maravilha.jpg",
        descricao: "Princesa das Amazonas, a Mulher Maravilha é uma guerreira imbuída de poderes sobre-humanos, como super força, velocidade e invulnerabilidade. Ela representa a justiça, a igualdade e a compaixão.",
        link: "https://pt.wikipedia.org/wiki/Mulher_Maravilha",
        tags: "Themyscira, Amazonas, laço da verdade, braceletes, deusa"
      },
      {
        titulo: "Flash",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/22/Flash_Pack.jpg",
        descricao: "O Flash é um super-herói com a habilidade de se mover em velocidades cósmicas. Ele usa seus poderes para proteger Central City e o universo dos perigos. O Flash representa a velocidade, a esperança e a positividade.",
        link: "https://pt.wikipedia.org/wiki/Flash_(DC_Comics)",
        tags: "Speed Force, força de aceleração, Central City, Wally West, Barry Allen, vibração"
      },
      {
        titulo: "Capitão América",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/b/bc/Steven_Rogers_%28Earth-616%29.jpg",
        descricao: "Um soldado americano aprimorado por um soro experimental, o Capitão América é o símbolo da liberdade e da justiça. Ele luta contra as forças do mal com seu escudo inquebrável. O Capitão América representa o patriotismo, a perseverança e a honra.",
        link: "https://pt.wikipedia.org/wiki/Capitão_América",
        tags: "Segunda Guerra Mundial, escudo, Hydra, Vingadores, líder"
      },
      {
        titulo: "Thor",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c0/Thor_%28Marvel_Comics%29.jpg",
        descricao: "Deus do trovão de Asgard, Thor possui força sobre-humana e o poder de controlar o clima. Ele utiliza seu martelo Mjolnir para proteger os Nove Reinos. Thor representa a força, a nobreza e a responsabilidade.",
        link: "https://pt.wikipedia.org/wiki/Thor_(Marvel_Comics)",
        tags: "Asgard, Mjolnir, Odin, Loki, trovão"
      },
      {
        titulo: "Chapolin Colorado",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/4/43/El_Chapolin_Colorado.jpg",
        descricao: "O super herói mais rápido que um raio, mais forte que um touro e mais ágil que uma lebre! O Chapolin Colorado é um herói mexicano que usa seus poderes para ajudar os mais fracos. Ele representa a esperança, a amizade e a alegria.",
        link: "https://pt.wikipedia.org/wiki/Chapolin_Colorado",
        tags: "comédia mexico chiquinha chiles comicos superpoderes chaves "
      },
      {
        titulo: "Homem-Aranha",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/5/52/Spider-Man.png",
        descricao: "Um adolescente picado por uma aranha radioativa, Peter Parker ganhou habilidades sobre-humanas como força, agilidade e a capacidade de aderir a superfícies. Como Homem-Aranha, ele protege Nova York com grande responsabilidade.",
        link: "https://pt.wikipedia.org/wiki/Homem-Aranha",
        tags: "aranha radioativa nova york titio ben adolescente responsabilidade teias de aranha vilões"
      },
      {
        titulo: "Mulher-Hulk",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/c/c6/Mulher-Hulk.jpg",
        descricao: "Prima de Bruce Banner, Jennifer Walters se transformou na Mulher-Hulk após uma transfusão de sangue. Com força sobre-humana e um fator de cura acelerado, ela é uma advogada que usa seus poderes para defender os injustiçados.",
        link: "https://pt.wikipedia.org/wiki/Mulher-Hulk",
        tags:" hulk huk ruk mulher forte verde prima do hulk"
      },
      {
        titulo: "Capitã Marvel",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/20/Captain_Marvel_Vol_9_3.jpg",
        descricao: "Uma piloto da Força Aérea que ganhou poderes cósmicos após um acidente, Carol Danvers se tornou a Capitã Marvel. Com força sobre-humana, capacidade de voar e manipulação de energia, ela protege a galáxia.",
        link: "https://pt.wikipedia.org/wiki/Carol_Danvers",
        tags: "poderes cosmicos força sobre-humana vingadores kree skrulls"
      },
      {
        titulo: "Silvio Santos, O Rei da TV",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Silvio_Santos_em_maio_de_2019.jpg/440px-Silvio_Santos_em_maio_de_2019.jpg", 
        descricao: "Silvio Santos, o lendário apresentador de TV brasileiro, agora é um super-herói! Usando seu incrível poder de persuasão e uma risada inconfundível, ele luta contra o tédio e o desânimo. Sempre com dinheiro voando de seus bolsos e um microfone mágico, ele encanta e salva o mundo com prêmios inesperados. A cada 'quem quer dinheiro?', ele acende a esperança nas pessoas. Sua superforça está na sua carisma e bom humor.",
        link: "https://pt.wikipedia.org/wiki/Silvio_Santos",
        tags: "SBT, quem quer dinheiro, alegria, carisma, apresentador, risada mágica, microfone"
    },
    {
        titulo: "Pantera Negra",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/9/9f/Black_Panther_T%27Challa.png",
        descricao: "T'Challa é o Pantera Negra, rei de Wakanda, uma nação tecnologicamente avançada na África. Como Pantera Negra, ele possui sentidos e habilidades aprimoradas devido à erva em forma de coração e sua armadura de vibranium. Ele luta para proteger seu povo e o mundo das ameaças com honra e dignidade.",
        link: "https://pt.wikipedia.org/wiki/Pantera_Negra_(Marvel_Comics)",
        tags: "Wakanda, vibranium, rei, superforça, tecnologia"
    },
    {
        titulo: "Hulk",
        imagem: "https://upload.wikimedia.org/wikipedia/en/5/59/Hulk_(comics_character).png",
        descricao: "Bruce Banner, um brilhante cientista, se transforma no poderoso Hulk, um gigante verde de força ilimitada. O Hulk é movido pela raiva e é praticamente indestrutível. Ele luta contra seus inimigos com uma força esmagadora, mas também tenta controlar sua raiva para proteger inocentes.",
        link: "https://pt.wikipedia.org/wiki/Hulk",
        tags: "superforça, Bruce Banner, raiva, indestrutível, gigante verde"
    },
    {
        titulo: "Feiticeira Escarlate",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/f/fe/Scarlet_Witch.jpg",
        descricao: "Wanda Maximoff, a Feiticeira Escarlate, é uma poderosa mutante com a habilidade de manipular a realidade e usar magia do caos. Ela é uma das heroínas mais poderosas do universo Marvel, lutando para proteger seus entes queridos e o mundo, mas também lutando para controlar seus poderes.",
        link: "https://pt.wikipedia.org/wiki/Feiticeira_Escarlate",
        tags: "magia, mutante, realidade, caos, poder cósmico"
    },
    {
        titulo: "Wolverine",
        imagem: "https://upload.wikimedia.org/wikipedia/en/4/49/Wolverine_%28Marvel_Character%29.jpg",
        descricao: "Logan, também conhecido como Wolverine, é um mutante com poderes de cura acelerada, sentidos aguçados e garras de adamantium que emergem de suas mãos. Ele é um guerreiro feroz e implacável, com um passado sombrio, mas luta incansavelmente para proteger os outros.",
        link: "https://pt.wikipedia.org/wiki/Wolverine_(Marvel_Comics)",
        tags: "garras, adamantium, mutante, regeneração, X-Men"
    },
    {
        titulo: "Homem-Formiga",
        imagem: "https://upload.wikimedia.org/wikipedia/en/c/cd/Ant-Man_%28Scott_Lang%29.png",
        descricao: "Scott Lang é o segundo Homem-Formiga, um herói com a capacidade de encolher ao tamanho de um inseto e aumentar sua força. Com sua roupa especial, ele consegue se comunicar com formigas e usar seu tamanho reduzido para infiltrar-se em áreas difíceis e derrotar inimigos poderosos.",
        link: "https://pt.wikipedia.org/wiki/Homem-Formiga",
        tags: "encolhimento, superforça, insetos, Scott Lang, tecnologia"
    },
    {
        titulo: "Doctor Strange",
        imagem: "https://upload.wikimedia.org/wikipedia/en/5/58/Doctor_Strange_Vol_4_2.png",
        descricao: "Stephen Strange, um ex-neurocirurgião, se torna o Feiticeiro Supremo da Terra, protegendo o planeta de ameaças místicas e interdimensionais. Ele usa seus vastos conhecimentos de magia e artefatos místicos como o Olho de Agamotto e o Manto da Levitação para lutar contra forças sobrenaturais.",
        link: "https://pt.wikipedia.org/wiki/Doutor_Estranho",
        tags: "magia, místico, Feiticeiro Supremo, interdimensional, Olho de Agamotto"
    },
    {
        titulo: "Deadpool",
        imagem: "https://upload.wikimedia.org/wikipedia/en/e/ed/Deadpool_%28Wade_Wilson%29.png",
        descricao: "Wade Wilson, também conhecido como Deadpool, é o mercenário mais insano e irreverente da Marvel. Com um fator de cura que o torna praticamente imortal e uma boca afiada cheia de piadas, ele luta contra vilões enquanto quebra a quarta parede e se diverte com seus adversários.",
        link: "https://pt.wikipedia.org/wiki/Deadpool",
        tags: "mercenário, regeneração, imortal, piadas, anti-herói, quarta parede"
    },
    {
        titulo: "Mulher Invisível",
        imagem: "https://upload.wikimedia.org/wikipedia/en/6/6a/Sue_Storm.png",
        descricao: "Susan Storm Richards é a Mulher Invisível, um dos membros fundadores do Quarteto Fantástico. Ela tem a habilidade de se tornar invisível e gerar campos de força poderosos. Susan usa seus poderes para proteger seus entes queridos e o planeta contra ameaças intergalácticas.",
        link: "https://pt.wikipedia.org/wiki/Mulher_Invis%C3%ADvel",
        tags: "invisibilidade, campos de força, Quarteto Fantástico, poderes cósmicos"
    },
    {
        titulo: "Aquaman",
        imagem: "https://upload.wikimedia.org/wikipedia/en/8/8d/Aquaman_DC_Comics.png",
        descricao: "Arthur Curry, o Aquaman, é o rei de Atlântida e o governante dos sete mares. Ele possui a habilidade de se comunicar com criaturas marinhas, além de superforça e resistência sobre-humanas. Ele luta para proteger tanto o mundo subaquático quanto o terrestre de ameaças.",
        link: "https://pt.wikipedia.org/wiki/Aquaman",
        tags: "Atlântida, superforça, comunicação marinha, tridente, oceano"
    }
];



