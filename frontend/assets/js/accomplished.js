function carregarConclusao() {

    const dados =
        JSON.parse(
            localStorage.getItem(
                'ultimaMissaoConcluida'
            )
        )

    if (!dados) {

        return
    }

    document.getElementById(
        'titulo-conclusao'
    ).textContent =
        `${dados.titulo} concluída!`

    document.getElementById(
        'xp-conclusao'
    ).textContent =
        `+${dados.xp} XP`

    document.getElementById(
        'trilha-conclusao'
    ).textContent =
        `na trilha ${dados.trilha}`

    document.getElementById(
        'pontos-conclusao'
    ).textContent =
        `+${dados.pontos} Pontos`

    document.getElementById(
        'streak-conclusao'
    ).textContent =
        `${dados.streak} Dias se cuidando`
}

function dispararConfetti() {

    confetti({

        particleCount: 150,

        spread: 100,

        origin: {
            y: 0.6
        }
    })

    setTimeout(() => {

        confetti({

            particleCount: 100,

            angle: 60,

            spread: 80,

            origin: {
                x: 0
            }
        })

        confetti({

            particleCount: 100,

            angle: 120,

            spread: 80,

            origin: {
                x: 1
            }
        })

    }, 400)
}

document.addEventListener(
    'DOMContentLoaded',
    () => {

        carregarConclusao()

        dispararConfetti()
    }
)