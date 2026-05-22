let missaoSelecionada = null

async function carregarFavoritos() {

    try {

        const resposta =
            await fetch(
                `${API_BASE_URL}/favoritos`
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
                                    onclick="abrirModalTroca(${missao.id})"
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

                `${API_BASE_URL}/desfavoritar-missao`,

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

function abrirModalTroca(id) {

    missaoSelecionada = id

    const modal =
        document.getElementById(
            'modal-troca'
        )

    modal.classList.remove(
        'hidden'
    )

    modal.classList.add(
        'flex'
    )

    carregarMissoesModal()
}


function fecharModal() {

    const modal =
        document.getElementById(
            'modal-troca'
        )

    modal.classList.remove(
        'flex'
    )

    modal.classList.add(
        'hidden'
    )
}


async function carregarMissoesModal() {

    try {

        const resposta =
            await fetch(
                `${API_BASE_URL}/missoes`
            )

        const missoes =
            await resposta.json()

        const container =
            document.getElementById(
                'modal-missoes'
            )

        container.innerHTML = ''

        missoes.forEach(

            (missao) => {

                container.innerHTML += `

                    <div
                        onclick="
                            selecionarNovaMissao(
                                ${missao.id}
                            )
                        "

                        class="
                            bg-slate-50
                            hover:bg-emerald-50
                            border
                            border-slate-200
                            hover:border-emerald-400
                            rounded-2xl
                            p-4
                            cursor-pointer
                            transition
                            flex
                            flex-col
                            gap-3
                        "
                    >

                        <div>

                            <span class="
                                text-xs
                                font-semibold
                                text-emerald-600
                            ">
                                ${missao.trilha}
                            </span>

                            <h3 class="
                                text-lg
                                font-bold
                                text-slate-800
                                mt-1
                            ">
                                ${missao.titulo}
                            </h3>

                            <p class="
                                text-sm
                                text-slate-500
                                mt-2
                            ">
                                ${missao.descricao}
                            </p>

                        </div>

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

                    </div>
                `
            }
        )

    } catch (erro) {

        console.error(
            'Erro ao carregar missões:',
            erro
        )
    }
}


async function selecionarNovaMissao(idNova) {

    try {

        const resposta =
            await fetch(

                `${API_BASE_URL}/atualizar-favorito`,

                {
                    method: 'PUT',

                    headers: {
                        'Content-Type':
                            'application/json'
                    },

                    body: JSON.stringify(
                        {
                            missao_antiga:
                                Number(
                                    missaoSelecionada
                                ),

                            missao_nova:
                                Number(idNova)
                        }
                    )
                }
            )

        const dados =
            await resposta.json()

        if (dados.erro) {

            alert(
                dados.erro
            )

            return
        }

        alert(
            dados.mensagem
        )

        fecharModal()

        carregarFavoritos()

    } catch (erro) {

        console.error(
            'Erro ao atualizar favorito:',
            erro
        )
    }
}