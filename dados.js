let dados = [
    {
        titulo: "Superman",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/thumb/b/be/Super-Homem.jpg/250px-Super-Homem.jpg",
        descricao: "O Superman é um alienígena de Krypton, enviado para a Terra antes da destruição de seu planeta. Criado como Clark Kent, ele possui superpoderes como força, velocidade e voo. Trabalhando como jornalista, ele utiliza suas habilidades para proteger a humanidade como o super-herói Superman, representando os valores de justiça e esperança.",
        link: "https://pt.wikipedia.org/wiki/Superman",
        tags: "kripton kriptonita força clark kent visao de raio-x lex luthor  "
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
        tags: "comédia mexico chiquinha chiles comicos superpoderes"
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
        titulo: "Visão",
        imagem: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/New_York_Comic_Con_2015_-_The_Vision_%2821916157810%29.jpg/375px-New_York_Comic_Con_2015_-_The_Vision_%2821916157810%29.jpg",
        descricao: "Criado por Ultron, a Visão é um androide com densidade variável e capacidade de voar. Ele é membro dos Vingadores e busca entender a humanidade.",
        link: "https://pt.wikipedia.org/wiki/Visão_(Marvel_Comics)",
        tags: "androide vingadores ultron densidade variável inteligência artificial"
      },
      {
        titulo: "Capitã Marvel",
        imagem: "https://upload.wikimedia.org/wikipedia/pt/2/20/Captain_Marvel_Vol_9_3.jpg",
        descricao: "Uma piloto da Força Aérea que ganhou poderes cósmicos após um acidente, Carol Danvers se tornou a Capitã Marvel. Com força sobre-humana, capacidade de voar e manipulação de energia, ela protege a galáxia.",
        link: "https://pt.wikipedia.org/wiki/Carol_Danvers",
        tags: "poderes cosmicos força sobre-humana vingadores kree skrulls"
      }
];



