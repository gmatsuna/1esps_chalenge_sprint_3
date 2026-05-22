async function carregarMissoes() {

    try {

        const trilhasSelecionadas =
            JSON.parse(
                localStorage.getItem(
                    "trilhasSelecionadas"
                )
            ) || []

        const query = trilhasSelecionadas.join(',')

        const resposta = await fetch(`${API_BASE_URL}/missoes?trilhas=${query}`)

        const missoes = await resposta.json()

        const container = document.getElementById("missions-list")
        console.log(container)

        container.innerHTML = ""

        missoes.forEach((missao) => {

            container.innerHTML += `

                <a href="./detail.html?id=${missao.id}" class="mission-card">

                    <div class="mission-card__body">

                        <div class="mission-card__chips">

                            <span class="chip">
                                ${missao.tipo}
                            </span>

                            <span class="chip chip--${missao.classe}">
                                ${missao.categoria}
                            </span>

                        </div>

                        <h3 class="mission-card__title">
                            ${missao.titulo}
                        </h3>

                        <p class="mission-card__desc">
                            ${missao.descricao}
                        </p>

                    </div>

                    <div class="mission-card__rewards">

                        <span class="mission-card__xp">
                            +${missao.xp} XP
                        </span>

                        <span class="mission-card__pts">
                            +${missao.pontos} pts
                        </span>

                    </div>

                </a>
            `
        })

    } catch (erro) {

        console.error("Erro ao carregar missões:", erro)
    }
}

async function carregarUsuario() {

    try {

        const resposta =
            await fetch(
                `${API_BASE_URL}/usuario`
            )

        const usuario =
            await resposta.json()

        document.getElementById(
            'usuario-nome'
        ).textContent =
            `Olá, ${usuario.nome}`

        document.getElementById(
            'usuario-streak'
        ).innerHTML =
            `
                <i class="fa-solid fa-fire" aria-hidden="true"></i>
                ${usuario.streak} dias
            `

        document.getElementById(
            'usuario-nivel'
        ).textContent =
            `Nível ${usuario.nivel}`

        document.getElementById(
            'usuario-nivel'
        ).textContent =
            `Nível ${usuario.nivel}`

        const xpAtual =
            usuario.xp % 100

        const porcentagem =
            xpAtual

        document.getElementById(
            'barra-progresso'
        ).style.width =
            `${porcentagem}%`

    } catch (erro) {

        console.error(
            'Erro ao carregar usuário:',
            erro
        )
    }
}

document.addEventListener(
    "DOMContentLoaded",
    () => {
        carregarMissoes()
        carregarUsuario()
    }
)