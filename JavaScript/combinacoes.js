// quero formar um time de x pessoas a partir de uma quantidade total de pessoas 
// ---- quantas combinações são possíveis

let pessoas = Number(prompt("Há quantas pessoas no grupo? "))
let time = Number(prompt("E quantas você precisa pro seu time? "))

function fatorial(n) {
    let fatorial = 1
        while (n > 1) {
            fatorial = n * fatorial
            n--
        }
    
    return fatorial
}

function combinações(m, p) {
    if (p > m) {
        console.log("O número do time não pode ser maior que o número de pessoas.");
        return;
    }

    let mp = fatorial(m - p);
    let fatorialM = fatorial(m);
    let fatorialP = fatorial(p);

    let combinacao = fatorialM / (fatorialP * mp);
    
    return combinacao;
}

let resultado = combinações(pessoas, time);
console.log(resultado)

