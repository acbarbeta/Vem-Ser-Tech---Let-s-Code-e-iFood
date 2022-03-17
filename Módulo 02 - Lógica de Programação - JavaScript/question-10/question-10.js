/**
 * Ler um valor N e imprimir todos os valores inteiros entre 1 (inclusive) e N (inclusive). Considere que o N será sempre maior que ZERO. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

// Ana Clara Barbeta

function imprimeNumerosInteiros() {
    const N = parseInt(document.form.numeroMaximo.value);

    if (N <= 0) {
        console.log("Por favor, insira um número válido")
    } else {
        for (let numeroInteiro = 1; numeroInteiro <= N; numeroInteiro++) {
            console.log(numeroInteiro);
        }
    } 
}