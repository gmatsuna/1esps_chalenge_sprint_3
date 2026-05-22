async function carregarCarteira() {

    try {

        const resposta =
            await fetch(
                `${API_BASE_URL}/usuario`
            )

        const usuario =
            await resposta.json()

        console.log(
            'Usuário:',
            usuario
        )

        document.getElementById(
            'wallet-pontos'
        ).textContent =
            usuario.pontos

        document.getElementById(
            'wallet-xp'
        ).textContent =
            `${usuario.xp} XP`

    } catch (erro) {

        console.error(
            'Erro ao carregar carteira:',
            erro
        )
    }
}

document.addEventListener(
    'DOMContentLoaded',
    carregarCarteira
)