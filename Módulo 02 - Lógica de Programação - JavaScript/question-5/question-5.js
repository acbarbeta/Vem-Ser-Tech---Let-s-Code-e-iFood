/**
 * Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10, caso contrário escrever NÃO É MAIOR QUE 10! 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

// Ana Clara Barbeta

function maiorOuMenor() {
    const numero = parseInt(document.form.inputNumero.value);
    console.log(numero);

    if (numero > 10) {
        return document.form.resultado.value = "É MAIOR QUE 10!";
    } else if (numero <= 10) {
        return document.form.resultado.value = "NÃO É MAIOR QUE 10!";
    } else {
        return document.form.resultado.value = "Insira um número";
    }
}