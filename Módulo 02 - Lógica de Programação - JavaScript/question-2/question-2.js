/**
 * Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

//Ana Clara Barbeta

function calcularNovoSalario() {
    const salarioAtual = parseFloat(document.form.salarioAtual.value);
    const reajuste = parseFloat(document.form.reajuste.value);

    console.log(salarioAtual);
    console.log(reajuste);

    const novoSalario = salarioAtual * (1 + (reajuste/100));
    console.log(novoSalario);

    return document.form.resultado.value = novoSalario;
}