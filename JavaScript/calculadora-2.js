// ao inves de usar SWITCH, esta calculadora vai usar CONST
// seu nome é calculadora-2 pois é uma versão posterior a calculadoraSimples
let a;
let b;

const operacoes = {
    soma: (a, b) => a + b,
    subtracao: (a, b) => a - b,
    multiplicacao: (a, b) => a * b,
    divisao: (a, b) => a / b,
}

function calcular(operacao, a, b) {
    return operacoes[operacao](a, b);
}

console.log(calcular("multiplicacao", 2, 5));