
// verificar se a frase é um palindromo:

function verificarPalindromo(frase) {
    // primeito "limpar" a frase
    frase = frase.toLowerCase().replace(/[^a-z0-9]/g, '');

    // inverter a frase
    let fraseInversa = frase.split('').reverse().join('');

    //verificar a frase com a frase invertida
    if (fraseInversa == frase) {
        console.log(`frase: ${frase}`)
        return true
    } else {
        console.log(`frase: ${frase} // frase invertida: ${fraseInversa}`)
        return false
    }
}

verificarPalindromo("A man a plan a canal Panama");
