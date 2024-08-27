// tabuada resultante do input do usuário

function tabuada (n) {
    let produto;
    for (let i = 0; i <= 10; i++) {
        produto = n * i;
        console.log(` ${operando} x ${i} = ${produto}`);
    }
}

let operando = Number(prompt("Qual tabuada você quer? (Exemplo: 2 | 3 | 5)"));
tabuada(operando);