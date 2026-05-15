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
        carregarHistorico()

    } catch (erro) {

        document.getElementById("mensagem").innerHTML = `
            <p class="text-red-600 font-semibold">
                Erro ao conectar com o servidor
            </p>
        `

        console.error(erro)
    }

    async function carregarHistorico() {

        try {

            const resposta = await fetch("http://127.0.0.1:5000/historico")

            const historico = await resposta.json()

            const container = document.getElementById("historico")

            container.innerHTML = ""

            historico.forEach((item) => {

                container.innerHTML += `

                    <div class="bg-gray-100 p-4 rounded-xl shadow">

                        <p><strong>👣 Passos:</strong> ${item.passos}</p>

                        <p><strong>🏋 Academia:</strong> ${item.academia ? "Sim" : "Não"}</p>

                        <p><strong>🥗 Alimentação:</strong> ${item.alimentacao ? "Sim" : "Não"}</p>

                        <p><strong>💧 Hidratação:</strong> ${item.hidratacao ? "Sim" : "Não"}</p>

                        <p><strong>😴 Sono:</strong> ${item.sono ? "Sim" : "Não"}</p>

                        <p class="text-blue-600 font-bold mt-2">
                            ⭐ Pontos: ${item.pontos}
                        </p>

                    </div>
                `
            })

        } catch (erro) {

            console.error("Erro ao carregar histórico", erro)
        }
    }

})

carregarHistorico()