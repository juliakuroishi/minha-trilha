// funcao de contaegm regressiva

let numero = Number(prompt("Insira um número menos que 60:"))

function contagemRegressiva(numero) {
    for (let i = numero; i > 0; i--) {
        console.log(i);
    }
};

contagemRegressiva(numero);