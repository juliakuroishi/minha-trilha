// o desafio é receber uma frase e retornar a quantidade de vogais presentes

function contadorDeVogais(frase) {
    const vogais = 'aeiou';
    let contador = 0;

    frase = frase.toLowerCase();
    letras = frase.split('');
    for( let i=0; i < letras.length ;i++) {
        if (vogais.includes(letras[i])) { 
            contador++;
        };   
    };
    return contador
}

console.log(contadorDeVogais("Hello, World!")); 
console.log(contadorDeVogais("arara")); 