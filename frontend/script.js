const form = document.getElementById("formRegistro")

form.addEventListener("submit", async (event) => {

    event.preventDefault()

    const dados = {
        passos: Number(document.getElementById("passos").value),
        academia: document.getElementById("academia").checked,
        alimentacao: document.getElementById("alimentacao").checked,
        hidratacao: document.getElementById("hidratacao").checked,
        sono: document.getElementById("sono").checked
    }

    try {

        const resposta = await fetch("http://127.0.0.1:5000/registrar", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(dados)
        })

        const resultado = await resposta.json()

        document.getElementById("mensagem").innerHTML = `
            <p class="text-green-600 font-semibold">
                ${resultado.mensagem}
            </p>
        `

        form.reset()

    } catch (erro) {

        document.getElementById("mensagem").innerHTML = `
            <p class="text-red-600 font-semibold">
                Erro ao conectar com o servidor
            </p>
        `

        console.error(erro)
    }

})