/**
 *  Escreva um algoritmo que imprima a tabuada (de 1 a 10) para os números de 1 a 10. 
*/

// Ana Clara Barbeta

for (let primeiroFator = 1; primeiroFator <=10; primeiroFator++) {
    for (let segundoFator = 1; segundoFator <= 10; segundoFator++) {
        
        let produto = primeiroFator * segundoFator;

        console.log(primeiroFator, "X", segundoFator, "=", produto);
    }
}