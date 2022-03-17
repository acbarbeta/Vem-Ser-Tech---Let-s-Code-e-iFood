/**
 * Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo). 
 *  
 * Obs: Utilize a interface html para receber os dados do usuário
*/

//Ana Clara Barbeta

function positivoOuNegativo() {
    const numero = parseInt(document.form.inputNumero.value);
    console.log(numero);

    if (numero >= 0) {
        return document.form.resultado.value = "Positivo";
    } else if (numero < 0) {
        return document.form.resultado.value = "Negativo";
    } else {
        return document.form.resultado.value = "Por favor, informe um número";
    }
}