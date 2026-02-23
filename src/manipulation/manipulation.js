export function setCEP(data) {

    const elementoRua = document.querySelector(".rua");
    const elementoBairro = document.querySelector(".bairro");
    const elementoCidade = document.querySelector(".cidade");
    const elementoEstado = document.querySelector(".estado");

    if (elementoRua) {
        elementoRua.value = data.logradouro;
    }

    if (elementoBairro) {
        elementoBairro.value = data.bairro
    }

    if (elementoCidade) {
        elementoCidade.value = data.localidade
    }

    if (elementoEstado) {
        elementoEstado.value = data.uf
    }
}