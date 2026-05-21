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

document.addEventListener(
    'DOMContentLoaded',
    carregarConclusao
)