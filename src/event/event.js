import { sendRequestAPI } from "../api/requestAPI.js";
import { setCEP } from "../manipulation/manipulation.js";

export function sendRequest() {

    const campoCEP = document.querySelector(".cep");

    if (!campoCEP) {
        console.error("ERRO: O elemento com classe '.cep' não foi encontrado no HTML!");
        return;
    }

    console.log("Sucesso: O campo CEP foi encontrado e o monitoramento começou!");

    campoCEP.addEventListener('focusout', async () => {

        console.log("Usuário saiu do campo.", campoCEP.value);
        
        const valor = campoCEP.value.replace(/\D/g, ''); 

        if (valor.length === 8) {
            console.log("Iniciando busca para o CEP:", valor);
            try {
                setCEP(await sendRequestAPI(valor));
            } catch (error) {
                console.error("Erro na API:", error);
            }
        }
    }); 
}