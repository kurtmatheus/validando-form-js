export default function ehMaiorIdade(campo) {
    const dataNasc = new Date(campo.value);
    if(!validaIdade(dataNasc)){
        campo.setCustomValidity('Cliente precisa ser Maior de 18 Anos.')
    };
}

function validaIdade(data) {
    const dataAtual = new Date();
    const dataMais18 = new Date(data.getUTCFullYear() + 18, data.getUTCMonth(), data.getUTCDay());

    return dataMais18 <= dataAtual;
}