async function carregarFavoritos() {

    try {

        const resposta =
            await fetch(
                'http://127.0.0.1:5000/favoritos'
            )

        const favoritos =
            await resposta.json()

        const container =
            document.getElementById(
                'favorites-list'
            )

        container.innerHTML = ''

        if (favoritos.length === 0) {

            container.innerHTML = `

                <div class="
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-md
                    text-center
                    col-span-full
                ">

                    <h2 class="
                        text-xl
                        font-bold
                        text-slate-700
                        mb-2
                    ">
                        Nenhuma missão favorita
                    </h2>

                    <p class="text-slate-500">
                        Favorite uma missão para vê-la aqui.
                    </p>

                </div>
            `

            return
        }

        favoritos.forEach(

            (missao) => {

                container.innerHTML += `

                    <div class="
                        bg-white
                        rounded-2xl
                        shadow-md
                        p-5
                        flex
                        flex-col
                        gap-4
                    ">

                        <div>

                            <span class="
                                text-xs
                                font-semibold
                                text-emerald-600
                            ">
                                ${missao.trilha}
                            </span>

                            <h2 class="
                                text-xl
                                font-bold
                                text-slate-800
                                mt-1
                            ">
                                ${missao.titulo}
                            </h2>

                            <p class="
                                text-slate-500
                                text-sm
                                mt-2
                            ">
                                ${missao.descricao}
                            </p>

                        </div>

                        <div class="
                            flex
                            justify-between
                            items-center
                        ">

                            <div class="
                                flex
                                gap-4
                                text-sm
                                font-semibold
                            ">

                                <span class="
                                    text-yellow-500
                                ">
                                    ⭐ ${missao.xp} XP
                                </span>

                                <span class="
                                    text-emerald-600
                                ">
                                    💰 ${missao.pontos} pts
                                </span>

                            </div>

                            <div class="flex gap-2">

                                <a
                                    href="./detail.html?id=${missao.id}"
                                    class="
                                        bg-emerald-500
                                        hover:bg-emerald-600
                                        text-white
                                        px-4
                                        py-2
                                        rounded-xl
                                        transition
                                    "
                                >
                                    Ver
                                </a>

                                <button
                                    onclick="trocarFavorito(${missao.id})"
                                    class="
                                        bg-yellow-500
                                        hover:bg-yellow-600
                                        text-white
                                        px-4
                                        py-2
                                        rounded-xl
                                        transition
                                    "
                                >
                                    Trocar
                                </button>

                                <button
                                    onclick="removerFavorito(${missao.id})"
                                    class="
                                        bg-red-500
                                        hover:bg-red-600
                                        text-white
                                        px-4
                                        py-2
                                        rounded-xl
                                        transition
                                    "
                                >
                                    Remover
                                </button>

                            </div>

                        </div>

                    </div>
                `
            }
        )

    } catch (erro) {

        console.error(
            'Erro ao carregar favoritos:',
            erro
        )
    }
}

document.addEventListener(
    'DOMContentLoaded',
    carregarFavoritos
)


async function removerFavorito(id) {

    try {

        const resposta =
            await fetch(

                'http://127.0.0.1:5000/desfavoritar-missao',

                {
                    method: 'DELETE',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body: JSON.stringify(
                        {
                            missao_id: id
                        }
                    )
                }
            )

        const dados =
            await resposta.json()

        alert(
            dados.mensagem
        )

        carregarFavoritos()

    } catch (erro) {

        console.error(
            'Erro ao remover favorito:',
            erro
        )
    }
}

async function trocarFavorito(idAntigo) {

    try {

        const novoId =
            prompt(
                'Digite o ID da nova missão:'
            )

        if (!novoId) {

            return
        }

        const resposta =
            await fetch(

                'http://127.0.0.1:5000/atualizar-favorito',

                {
                    method: 'PUT',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body: JSON.stringify(
                        {
                            missao_antiga:
                                Number(idAntigo),

                            missao_nova:
                                Number(novoId)
                        }
                    )
                }
            )

        const dados =
            await resposta.json()

        alert(
            dados.mensagem
        )

        carregarFavoritos()

    } catch (erro) {

        console.error(
            'Erro ao atualizar favorito:',
            erro
        )
    }
}