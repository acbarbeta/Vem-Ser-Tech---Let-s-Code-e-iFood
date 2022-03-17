/**
 * Faça um algoritmo que leia três notas de um aluno, calcule e escreva a média final deste aluno.
 * Considerar que a média é ponderada e que o peso das notas é 2, 3 e 5. Fórmula para o cálculo da média final é: 
 * 
 *      mediaFinal = ((n1 * 2) + (n2 * 3) + (n3 * 5))/10
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

// Ana Clara Barbeta


function calcularMedia() {
    const primeiraNota = parseFloat(document.form.primeiraNota.value);
    const segundaNota = parseFloat(document.form.segundaNota.value);
    const terceiraNota = parseFloat(document.form.terceiraNota.value);

    console.log(primeiraNota);
    console.log(segundaNota);
    console.log(terceiraNota);

    const mediaFinal = ((primeiraNota * 2) + (segundaNota * 3) + (terceiraNota * 5))/10;

    return document.form.resultado.value = mediaFinal;
}