/**
 * Escreva um algoritimo que leia um vetor Q de 20 posições (aceitar somente números positivos). 
 * Escrever a seguir o valor do maior elemento de Q e a respectiva posição que ele ocupa no vetor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

// Ana Clara Barbeta

let maiorNumero = 0;
let indiceMaior = 0;
let Q = []

while (Q.length < 20) {
    let numero = parseInt(prompt("Insira um número inteiro"));

    if (numero >= 0) {
        Q.push(numero);
    }

    if (numero > maiorNumero) {
        maiorNumero = numero;
        indiceMaior = Q.length - 1;
    }
}

console.log(Q);
console.log(maiorNumero);
console.log(indiceMaior);

alert("Maior número: " + maiorNumero + "\nPosição do maior número: " + indiceMaior);
