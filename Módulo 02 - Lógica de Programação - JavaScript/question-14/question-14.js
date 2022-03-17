/**
 * Faça um algoritmo para ler 20 números e armazenar em um vetor. Após a leitura total dos 20 números, 
 * o algoritmo deve escrever esses 20 números lidos na ordem inversa. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

let listaNumeros = [];

while (listaNumeros.length < 20) {
    listaNumeros.push(parseInt(prompt("Insira um número inteiro")));
}

//console.log(listaNumeros);



for (let indice = 19; indice >=0; indice--) {
    console.log(listaNumeros[indice]);
}