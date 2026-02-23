export function authenticate() {
    try {
        const cpf = document.querySelector(".cpf").value;
        const email = document.querySelector(".email").value;
        const telefone = document.querySelector(".telefone").value;

        authenticateCPF(cpf);
        authenticateEmail(email);
        authenticateTelefone(telefone);

        alert("Sucesso: Todos os dados são válidos!");
    } catch (error) {
        alert("Falha em autenticar dados: " + error.message);
    }
}

function authenticateCPF(valor) {
    if (valor.length !== 11) {
        throw new Error("CPF deve ter 11 dígitos.");
    }
}

function authenticateEmail(valor) {
    if (!valor.includes("@")) {
        throw new Error("E-mail inválido.");
    }
}

function authenticateTelefone(valor) {
    if (valor.length !== 11) {
        throw new Error("Telefone deve ter 11 dígitos (DDD + número).");
    }
}