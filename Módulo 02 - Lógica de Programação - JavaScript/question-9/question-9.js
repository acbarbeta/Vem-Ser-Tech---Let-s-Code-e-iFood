/**
 * A jornada de trabalho semanal de um funcionário é de 40 horas. O funcionário que trabalhar mais de 40 horas receberá hora extra, 
 * cujo cálculo é o valor da hora regular com um acréscimo de 50%. Escreva um algoritmo que leia o número de horas trabalhadas em um mês, 
 * o salário por hora e escreva o salário total do funcionário, que deverá ser acrescido das horas extras, caso tenham sido trabalhadas 
 * (considere que o mês possua 4 semanas exatas).   
 * 
 * Obs: Utilize a interface html para receber os dados do usuário
 */

// Ana Clara Barbeta

function calcularSalario() {
    const acrescimo = 1.50; // 100% + 50%
    const salarioPorHora = parseFloat(document.form.valorSalario.value);
    const horasTrabalhadas = parseFloat(document.form.horasTrabalhadas.value);

    let salarioFinal;
    let horasExtras;
    if (horasTrabalhadas <= 160) { // 40 * 4 = 160 -> número de horas permitidas sem hora extra
        salarioFinal = horasTrabalhadas * salarioPorHora;
    } else {
        horasExtras = horasTrabalhadas - 160;
        salarioFinal = (160 * salarioPorHora) + (horasExtras * (salarioPorHora * acrescimo));
    }

    return document.form.resultado.value = salarioFinal;
    
}