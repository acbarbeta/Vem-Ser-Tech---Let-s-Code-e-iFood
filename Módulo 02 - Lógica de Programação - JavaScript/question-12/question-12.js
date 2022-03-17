/**
 * Escreva um algoritmo que permita a leitura dos nomes de 10 pessoas e armaze os nomes lidos em um vetor. 
 * Após isto, o algoritmo deve permitir a leitura de mais 1 nome qualquer de pessoa e depois escrever a mensagem ACHEI, 
 * se o nome estiver entre os 10 nomes lidos anteriormente (guardados no vetor), ou NÃO ACHEI caso contrário.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

// Ana Clara Barbeta

let listaNomes =[];

for (let numero = 1; numero <= 10; numero ++) {

    listaNomes.push(prompt("Insira um nome"));
}

console.log(listaNomes);

let buscaNome = prompt("Insira um novo nome");

console.log(listaNomes.indexOf(buscaNome));

if (listaNomes.indexOf(buscaNome) > -1) {
    alert("ACHEI");
} else {
    alert("NÃO ACHEI");
}
