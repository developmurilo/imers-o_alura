function pesquisar() {
    // Obtém o elemento da seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    // Captura o valor do campo de pesquisa, removendo espaços extras e convertendo para minúsculas
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Inicializa variáveis de título, descrição e tags
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Variável para verificar se algum resultado foi encontrado
    let encontrouResultado = false;

    // Se o campo de pesquisa estiver vazio, exibe a mensagem "Nada Encontrado"
    if (campoPesquisa === "") {
        section.innerHTML = "<p style='color: white;'> Nada Encontrado, tente novamente </p>";
        return;
    }

    // Percorre cada item no array de dados
    for (let dado of dados) {
        // Converte título, descrição e tags para minúsculas para a comparação
        titulo = dado.titulo.toLowerCase();
        descricao = dado.descricao.toLowerCase();
        tags = dado.tags.toLowerCase();

        // Verifica se o termo pesquisado está no título, descrição ou tags
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Se encontrado, monta o HTML com os resultados
            resultados += `<div class="item-resultado">
                <h2>
                    <a href="#">${dado.titulo}</a>
                </h2>
                <img src="${dado.imagem}" class="heroi" alt="${dado.titulo}">
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`;

            // Marca que pelo menos um resultado foi encontrado
            encontrouResultado = true;
        }
    }

    // Se nenhum resultado foi encontrado, exibe a mensagem "Nada Encontrado"
    if (!encontrouResultado) {
        section.innerHTML = "<p style='color: white;'> Nada Encontrado, tente novamente </p>";
    } else {
        // Caso contrário, exibe os resultados encontrados
        section.innerHTML = resultados;
    }
}
