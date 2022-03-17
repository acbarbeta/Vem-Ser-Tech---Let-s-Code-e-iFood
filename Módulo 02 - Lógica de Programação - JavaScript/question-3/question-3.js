/**
 * O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). 
 * Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, 
 * calcular e escrever o custo final ao consumidor. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */ 

//Ana Clara Barbeta

function calcularValorFinal() {
    const percentualDistribuidor = 0.28;
    const percentualImpostos = 0.45;
    const custoFabrica = parseFloat(document.form.custoFabrica.value);

    console.log(custoFabrica);

    const valorDistribuidor = custoFabrica * percentualDistribuidor;
    console.log(valorDistribuidor);
    const valorImpostos = custoFabrica * percentualImpostos;
    console.log(valorImpostos);

    const valorFinal = custoFabrica + valorDistribuidor + valorImpostos;

    return document.form.resultado.value = valorFinal;

}