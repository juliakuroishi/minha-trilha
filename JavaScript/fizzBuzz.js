// ****Desafio FizzBuzz****
// Objetivo: Escrever um programa que exiba números de 1 a 100 no console. 
//No entanto, para números divisíveis por 3, o programa deve exibir "Fizz" em vez do número, 
//e para números divisíveis por 5, o programa deve exibir "Buzz". 
//Para números que são divisíveis por ambos 3 e 5, o programa deve exibir "FizzBuzz".


for ( let i=1; i<=100; i++) {
    if ((i % 3 === 0) && (i % 5 === 0) ) {
        console.log("FizzBuzz"); }
    
    else if (i % 3 === 0) {
        console.log("Fizz");
      
    } else if (i % 5 === 0) {
        console.log( "Buzz");
        
    } else {console.log(i) }
   
}

