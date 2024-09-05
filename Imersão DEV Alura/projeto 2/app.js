function pesquisar(){
    let resposta = document.getElementById("resposta");

    let frases = ""
    for (let dado of dados){
        frases += `
            <div>
                <h2>${dado.humor}</h2>
                <p>${dado.citacao}</p>
                <p>${dado.referencia}</p>
            </div>
        `;
    }

    resposta.innerHTML = frases;

}