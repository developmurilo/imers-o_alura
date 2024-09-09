
function pesquisar() {
    

    let section = document.getElementById("resultados-pesquisa")

    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim();

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

 if (campoPesquisa === "" || !dados.título.includes(campoPesquisa)|| !dads.descricao.includes(campoPesquisa) || !dados.tags.includes(campoPesquisa){
        section.innerHTML = "<p style='color: white;'> Nada Encontrado, tente novamente<p>"
        return
    }
for (let dado of dados) {
    titulo = dado.titulo.toLowerCase()
    descricao = dado.descricao.toLowerCase()
    tags = dado.tags.toLocaleLowerCase()

    if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){

        resultados += `<div class="item-resultado">
        <h2>
            <a href="#">${titulo}</a>
        </h2>
        <img src="${dado.imagem}" class="heroi" alt="Superman">
        <p class="descricao-meta">${descricao}</p>
        <a href="${dado.link}" target="_blank">Mais informações</a>
    </div>
     `;

    }


}
 
section.innerHTML = resultados
}
