
export async function sendRequestAPI(cep) {

    const api = `https://viacep.com.br/ws/${cep}/json`;
    const response = await fetch(api)

    const data = await response.json();

    return data;
}   