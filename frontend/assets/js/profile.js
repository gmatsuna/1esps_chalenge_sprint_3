async function carregarPerfil() {

    try {

        const resposta =
            await fetch(
                'http://127.0.0.1:5000/usuario'
            )

        const usuario =
            await resposta.json()

        console.log(
            'Usuário:',
            usuario
        )

        document.getElementById(
            'profile-nome'
        ).textContent =
            usuario.nome

        document.getElementById(
            'profile-nivel'
        ).textContent =
            usuario.nivel

        document.getElementById(
            'profile-streak'
        ).textContent =
            `${usuario.streak} dias`

    } catch (erro) {

        console.error(
            'Erro ao carregar perfil:',
            erro
        )
    }
}

document.addEventListener(
    'DOMContentLoaded',
    carregarPerfil
)