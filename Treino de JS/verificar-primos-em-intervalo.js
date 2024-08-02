// Desafio: Números Primos em um Intervalo

var inicio = Number(prompt("Insira um número: "));
var final = Number(prompt("Insira o outro número: "));
var primos = [];

function ePrimo(n) {
    if (n <= 1) { return false}; // caso 1: primo tem que ser maior  que 1
    if (n == 2) { return true}; // caso 2: n2 é primo
    if (n % 2 == 0) {                   // caso 3: depois do 2, nenhum numero par é primo
        return false;
    }
    for (let i = 3; i < n; i += 2) {  //caso 4: verificar se ele é divisível apenas por 1 e ele mesmo
        if ( n % i == 0) {
            return false;
        } 
        
        
    } return true
}

for (let i = inicio; i <= final; i++) {
    if (ePrimo(i)) { //se o numero for primo (true)
        primos.push(i);
    }
}

console.log(`Sua lista de números primos no intervalo de ${inicio} à ${final} é: ${primos}`);