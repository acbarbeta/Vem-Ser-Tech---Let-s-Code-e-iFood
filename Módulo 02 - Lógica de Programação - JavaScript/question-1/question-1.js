/**
 * Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular e escrever a área do retângulo.
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */


/* Ana Clara Barbeta */

function calcularArea() {
    const base = parseFloat(document.form.base.value);
    const altura = parseFloat(document.form.altura.value);

    console.log(base);
    console.log(altura);

    const area = base * altura;
    console.log(area);

    return document.form.resultado.value = area;
}


