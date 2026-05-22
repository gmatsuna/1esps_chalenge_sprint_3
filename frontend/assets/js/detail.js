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
        'missao-titulo'
    ).textContent =
        missao.titulo

    document.getElementById(
        'missao-descricao'
    ).textContent =
        missao.descricao

    document.getElementById(
        'missao-xp'
    ).textContent =
        `+${missao.xp} XP`

    document.getElementById(
        'missao-pontos'
    ).textContent =
        `+${missao.pontos} pontos`

    document.getElementById(
        'missao-categoria'
    ).textContent =
        missao.categoria

    const categoria =
    document.getElementById(
        'missao-categoria'
    )

    categoria.classList.add(
        `chip--${missao.classe}`
    )

    document.getElementById(
        'missao-tipo'
    ).textContent =
        missao.tipo
}

document.addEventListener(
    'DOMContentLoaded',
    () => {

        carregarDetalhesMissao()
        configurarConclusao()
        configurarFavorito()

    }
)

function configurarConclusao() {

    const botao =
        document.getElementById(
            'btn-concluir'
        )

    botao.addEventListener(
        'click',
        async () => {

            try {

                const parametros =
                    new URLSearchParams(
                        window.location.search
                    )

                const id =
                    parametros.get('id')

                const resposta =
                    await fetch(
                        'http://127.0.0.1:5000/concluir-missao',
                        {
                            method: 'POST',

                            headers: {
                                'Content-Type':
                                    'application/json'
                            },

                            body: JSON.stringify({
                                missao_id: Number(id)
                            })
                        }
                    )

                const resultado =
                    await resposta.json()


                if (resultado.erro) {

                    alert(resultado.erro)
                    return
                }

                localStorage.setItem(
                    'ultimaMissaoConcluida',
                    JSON.stringify({
                        titulo: resultado.titulo,
                        xp: resultado.xp_ganho,
                        pontos: resultado.pontos_ganhos,
                        trilha: resultado.trilha,
                        streak: resultado.streak
                    })
                )

                window.location.href =
                    './accomplished.html'

            } catch (erro) {

                console.error(
                    'Erro ao concluir missão:',
                    erro
                )
            }
        }
    )
}

function configurarFavorito() {

    const botao =
        document.getElementById(
            'btn-favoritar'
        )

    botao.addEventListener(
        'click',

        async () => {

            try {

                const parametros =
                    new URLSearchParams(
                        window.location.search
                    )

                const id =
                    parametros.get('id')

                const resposta =
                    await fetch(
                        'http://127.0.0.1:5000/favoritar-missao',
                        {
                            method: 'POST',

                            headers: {
                                'Content-Type':
                                    'application/json'
                            },

                            body: JSON.stringify({
                                missao_id: Number(id)
                            })
                        }
                    )

                const resultado =
                    await resposta.json()

                if (resultado.erro) {

                    alert(resultado.erro)
                    return
                }

                alert(
                    'Missão adicionada aos favoritos!'
                )

            } catch (erro) {

                console.error(
                    'Erro ao favoritar missão:',
                    erro
                )
            }
        }
    )
}