
function pesquisar() {
    console.log('clicou')

    let section = document.getElementById("resultados-pesquisa")

let resultados = ""

for (let dado of dados) {

    resultados += `<div class="item-resultado">
                    <h2>
                        <a href="https://www.youtube.com/watch?v=gX-B3HMlMfY" target="_blank">${dado.titulo}</a>
                    </h2>
                    <img src="${dado.imagem}" class="heroi" alt="Superman">
                    <p class="descricao-meta">${dado.descrição}</p>
                    <a href="${dado.link}" target="_blank">Mais imformações</a>
                </div>
                 `
}
 
section.innerHTML = resultados
}

