/**
 * Ler dois valores (considere que não serão lidos valores iguais) e escrever o maior deles. 
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
*/

// Ana Clara Barbeta

function determinarMaiorValor() {
    const primeiroNumero = parseFloat(document.form.primeiroNumero.value);
    const segundoNumero = parseFloat(document.form.segundoNumero.value);
    console.log(primeiroNumero);
    console.log(segundoNumero);

    if (primeiroNumero === segundoNumero) {
        return document.form.resultado.value = "Insira números diferentes";
    } else if (primeiroNumero > segundoNumero) {
        return document.form.resultado.value = primeiroNumero;
    } else {
        return document.form.resultado.value = segundoNumero;
    }
}