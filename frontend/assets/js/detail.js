async function carregarDetalhesMissao() {

    try {

        const parametros =
            new URLSearchParams(
                window.location.search
            )

        const id =
            parametros.get('id')

        console.log(
            'ID da missão:',
            id
        )

        const resposta =
            await fetch(
                `http://127.0.0.1:5000/missao/${id}`
            )

        const missao =
            await resposta.json()

        console.log(
            'Missão recebida:',
            missao
        )

        renderizarMissao(
            missao
        )

    } catch (erro) {

        console.error(
            'Erro ao carregar missão:',
            erro
        )
    }
}

function renderizarMissao(missao) {

    document.getElementById(
        'titulo-missao'
    ).textContent =
        missao.titulo

    document.getElementById(
        'descricao-missao'
    ).textContent =
        missao.descricao

    document.getElementById(
        'xp-missao'
    ).textContent =
        `+${missao.xp} XP`

    document.getElementById(
        'pontos-missao'
    ).textContent =
        `+${missao.pontos} pontos`

    document.getElementById(
        'categoria-missao'
    ).textContent =
        missao.categoria

    const categoria =
    document.getElementById(
        'categoria-missao'
    )

    categoria.classList.add(
        `chip--${missao.classe}`
    )

    document.getElementById(
        'tipo-missao'
    ).textContent =
        missao.tipo
}

document.addEventListener(
    'DOMContentLoaded',
    () => {

        carregarDetalhesMissao()

    }
)
