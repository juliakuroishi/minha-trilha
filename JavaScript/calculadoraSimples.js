var numero1 = Number(prompt("Digite um número: "));
var numero2 = Number(prompt("Digite outro número: "));
var operacao = prompt("Selecione uma operação: + | - | / | * | ** ");
var resultado;

switch (operacao) {
    case '+':
        resultado = numero1 + numero2;
        break;
    case '-':
        resultado = numero1 - numero2;
        break;
    case '/':
        resultado = numero1 / numero2;
        break;
    case '*':
        resultado = numero1 * numero2;
        break;
    case '**':
        resultado = numero1 ** numero2;
        break;

}

console.log(`O resultado de ${numero1} ${operacao} ${numero2} é: ${resultado}`)
