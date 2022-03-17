/**
 *  As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. 
 * Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.  
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

// Ana Clara Barbeta

function calcularPrecoFinal() {
    const numeroMacas = parseInt(document.form.numeroMacas.value);
    console.log(numeroMacas);

    const precoMenos = 1.30;

    if (numeroMacas < 12) {
        const precoFinal = precoMenos * numeroMacas;
        return document.form.resultado.value = precoFinal;
    } else if (numeroMacas >= 12) {
        return document.form.resultado.value = numeroMacas;
    } else {
        return document.form.resultado.value = "Insira uma quantidade válida";

    }
}