export default function ehUmCPF(campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)) {
        campo.setCustomValidity('CPF Inválido.')
    } 
}

function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
        '00000000000',
        '11111111111',
        '22222222222',
        '33333333333',
        '44444444444',
        '55555555555',
        '66666666666',
        '77777777777',
        '88888888888',
        '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf) {
    let soma = 0;
    let multi = 10;

    for(let i = 0; i < 9; i++) {
        soma += cpf[i] * multi;
        multi--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[9];
}

function validaSegundoDigito(cpf) {
    let soma = 0;
    let multi = 11;

    for(let i = 0; i < 10; i++) {
        soma += cpf[i] * multi;
        multi--;
    }

    soma = (soma * 10) % 11;

    if(soma == 10 || soma == 11) {
        soma = 0;
    }

    return soma != cpf[10];
}