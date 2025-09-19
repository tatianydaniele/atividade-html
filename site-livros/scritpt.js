document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form-contato");
    const resposta = document.getElementById("resposta");

    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Impede recarregar a página
        const nome = document.getElementById("nome").value;
        resposta.textContent = `Obrigado pelo contato, ${nome}! 📖`;
    });
});
